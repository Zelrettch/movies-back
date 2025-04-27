import { makeTypedQueryFactory as $mkFactory } from "../runtime/edge.js"
export const getFilteredCelebs = /*#__PURE__*/ $mkFactory("SELECT *\nFROM  celeb\nWHERE\nCONCAT(firstName,\" \", lastname) LIKE CONCAT('%', ?, '%')\nLIMIT ? OFFSET ?;")
