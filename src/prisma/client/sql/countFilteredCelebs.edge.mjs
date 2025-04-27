import { makeTypedQueryFactory as $mkFactory } from "../runtime/edge.js"
export const countFilteredCelebs = /*#__PURE__*/ $mkFactory("SELECT COUNT(*) as amount\nFROM celeb\nWHERE\nCONCAT(firstName,\" \", lastname) LIKE CONCAT('%', ?, '%');")
