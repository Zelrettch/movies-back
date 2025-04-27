import * as $runtime from "../runtime/library"

/**
 * @param _0
 * @param _1
 * @param _2
 */
export const getFilteredCelebs: (_0: string, _1: number | bigint, _2: number | bigint) => $runtime.TypedSql<getFilteredCelebs.Parameters, getFilteredCelebs.Result>

export namespace getFilteredCelebs {
  export type Parameters = [_0: string, _1: number | bigint, _2: number | bigint]
  export type Result = {
    id: number
    firstName: string
    lastName: string
    imageURL: string
    biography: string
  }
}
