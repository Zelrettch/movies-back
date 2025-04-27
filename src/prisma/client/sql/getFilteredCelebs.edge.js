"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("../runtime/edge.js")
exports.getFilteredCelebs = /*#__PURE__*/ $mkFactory("SELECT *\nFROM  celeb\nWHERE\nCONCAT(firstName,\" \", lastname) LIKE CONCAT('%', ?, '%')\nLIMIT ? OFFSET ?;")
