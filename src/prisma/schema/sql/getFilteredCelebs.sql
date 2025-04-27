SELECT *
FROM  celeb
WHERE
  CONCAT(firstName," ", lastname) LIKE CONCAT('%', ?, '%')
LIMIT ? OFFSET ?;