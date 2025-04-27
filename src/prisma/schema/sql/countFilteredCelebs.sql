SELECT COUNT(*) as amount
FROM celeb
WHERE 
  CONCAT(firstName," ", lastname) LIKE CONCAT('%', ?, '%');