import * as $runtime from "../runtime/library"

/**
 * @param _0
 * @param _1
 * @param _2
 */
export const selectSortedMoviesByRatings: (_0: string, _1: number | bigint, _2: number | bigint) => $runtime.TypedSql<selectSortedMoviesByRatings.Parameters, selectSortedMoviesByRatings.Result>

export namespace selectSortedMoviesByRatings {
  export type Parameters = [_0: string, _1: number | bigint, _2: number | bigint]
  export type Result = {
    id: number
  }
}
