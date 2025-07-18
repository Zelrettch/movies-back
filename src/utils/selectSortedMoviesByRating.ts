import { Prisma } from '../prisma/client';
import prisma from './prisma';

type sortOptions = 'title' | 'releaseDate' | 'rating';
type orderOptions = 'asc' | 'desc';

const sortingOptions = {
  title: Prisma.sql`d.title`,
  releaseDate: Prisma.sql`d.releaseDate`,
  rating: Prisma.sql`rating`,
};

const orderOptions = {
  asc: Prisma.sql`ASC`,
  desc: Prisma.sql`DESC`,
};

export async function selectMoviesSortedByRating(
  title: string,
  genres: number[],
  sort: sortOptions,
  order: orderOptions,
  limit: number,
  offset: number,
) {
  const filterMovies = genres.length
    ? Prisma.sql`
    AND m.id IN (
      SELECT DISTINCT gtm.B 
      FROM _genretomovie AS gtm
      WHERE gtm.A IN (${Prisma.join(genres)})
      GROUP BY gtm.B
      HAVING COUNT(DISTINCT gtm.A) >= ${genres.length}
    )
  `
    : Prisma.empty;

  const calculateAvgRating = Prisma.sql`
    SELECT AVG(value)
    FROM rating
    WHERE rating.movieId = m.id
  `;

  const selectFields = Prisma.sql`
    m.id AS id,
    m.createdAt,
    m.updatedAt,
    d.title,
    d.storyline,
    d.posterURL,
    d.releaseDate,
    d.length,
    d.countryOfOrigin,
    d.productionCompany,
    d.language
  `;

  return await prisma.$queryRaw(Prisma.sql`
    SELECT  
      ${selectFields},
      (${calculateAvgRating}) AS rating
    FROM movie AS m   
    INNER JOIN moviedata AS d ON m.moviedataId = d.id
    WHERE
      d.title LIKE ${'%' + title + '%'} 
      ${filterMovies}
    ORDER BY ${sortingOptions[sort]} ${orderOptions[order]}
    LIMIT ${limit} OFFSET ${offset}
  `);
}
