import * as $runtime from "../runtime/library"

/**
 * @param _0
 */
export const countFilteredCelebs: (_0: string) => $runtime.TypedSql<countFilteredCelebs.Parameters, countFilteredCelebs.Result>

export namespace countFilteredCelebs {
  export type Parameters = [_0: string]
  export type Result = {
    amount: bigint
  }
}
