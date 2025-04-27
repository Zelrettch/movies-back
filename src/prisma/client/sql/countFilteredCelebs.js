"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("../runtime/library")
exports.countFilteredCelebs = /*#__PURE__*/ $mkFactory("SELECT COUNT(*) as amount\nFROM celeb\nWHERE\nCONCAT(firstName,\" \", lastname) LIKE CONCAT('%', ?, '%');")
