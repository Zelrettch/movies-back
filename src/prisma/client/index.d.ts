
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Celeb
 * 
 */
export type Celeb = $Result.DefaultSelection<Prisma.$CelebPayload>
/**
 * Model Movie
 * 
 */
export type Movie = $Result.DefaultSelection<Prisma.$MoviePayload>
/**
 * Model MovieData
 * 
 */
export type MovieData = $Result.DefaultSelection<Prisma.$MovieDataPayload>
/**
 * Model Rating
 * 
 */
export type Rating = $Result.DefaultSelection<Prisma.$RatingPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Genre
 * 
 */
export type Genre = $Result.DefaultSelection<Prisma.$GenrePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Celebs
 * const celebs = await prisma.celeb.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Celebs
   * const celebs = await prisma.celeb.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Executes a typed SQL query and returns a typed result
   * @example
   * ```
   * import { myQuery } from '@prisma/client/sql'
   * 
   * const result = await prisma.$queryRawTyped(myQuery())
   * ```
   */
  $queryRawTyped<T>(typedSql: runtime.TypedSql<unknown[], T>): Prisma.PrismaPromise<T[]>

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.celeb`: Exposes CRUD operations for the **Celeb** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Celebs
    * const celebs = await prisma.celeb.findMany()
    * ```
    */
  get celeb(): Prisma.CelebDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movie`: Exposes CRUD operations for the **Movie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movie.findMany()
    * ```
    */
  get movie(): Prisma.MovieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movieData`: Exposes CRUD operations for the **MovieData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovieData
    * const movieData = await prisma.movieData.findMany()
    * ```
    */
  get movieData(): Prisma.MovieDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rating`: Exposes CRUD operations for the **Rating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ratings
    * const ratings = await prisma.rating.findMany()
    * ```
    */
  get rating(): Prisma.RatingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genre`: Exposes CRUD operations for the **Genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.GenreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Celeb: 'Celeb',
    Movie: 'Movie',
    MovieData: 'MovieData',
    Rating: 'Rating',
    Review: 'Review',
    Genre: 'Genre',
    User: 'User',
    Session: 'Session'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "celeb" | "movie" | "movieData" | "rating" | "review" | "genre" | "user" | "session"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Celeb: {
        payload: Prisma.$CelebPayload<ExtArgs>
        fields: Prisma.CelebFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CelebFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CelebPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CelebFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CelebPayload>
          }
          findFirst: {
            args: Prisma.CelebFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CelebPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CelebFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CelebPayload>
          }
          findMany: {
            args: Prisma.CelebFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CelebPayload>[]
          }
          create: {
            args: Prisma.CelebCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CelebPayload>
          }
          createMany: {
            args: Prisma.CelebCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CelebDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CelebPayload>
          }
          update: {
            args: Prisma.CelebUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CelebPayload>
          }
          deleteMany: {
            args: Prisma.CelebDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CelebUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CelebUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CelebPayload>
          }
          aggregate: {
            args: Prisma.CelebAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCeleb>
          }
          groupBy: {
            args: Prisma.CelebGroupByArgs<ExtArgs>
            result: $Utils.Optional<CelebGroupByOutputType>[]
          }
          count: {
            args: Prisma.CelebCountArgs<ExtArgs>
            result: $Utils.Optional<CelebCountAggregateOutputType> | number
          }
        }
      }
      Movie: {
        payload: Prisma.$MoviePayload<ExtArgs>
        fields: Prisma.MovieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findFirst: {
            args: Prisma.MovieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findMany: {
            args: Prisma.MovieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[]
          }
          create: {
            args: Prisma.MovieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          createMany: {
            args: Prisma.MovieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MovieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          update: {
            args: Prisma.MovieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          deleteMany: {
            args: Prisma.MovieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MovieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          aggregate: {
            args: Prisma.MovieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovie>
          }
          groupBy: {
            args: Prisma.MovieGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovieGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovieCountArgs<ExtArgs>
            result: $Utils.Optional<MovieCountAggregateOutputType> | number
          }
        }
      }
      MovieData: {
        payload: Prisma.$MovieDataPayload<ExtArgs>
        fields: Prisma.MovieDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovieDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovieDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieDataPayload>
          }
          findFirst: {
            args: Prisma.MovieDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovieDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieDataPayload>
          }
          findMany: {
            args: Prisma.MovieDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieDataPayload>[]
          }
          create: {
            args: Prisma.MovieDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieDataPayload>
          }
          createMany: {
            args: Prisma.MovieDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MovieDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieDataPayload>
          }
          update: {
            args: Prisma.MovieDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieDataPayload>
          }
          deleteMany: {
            args: Prisma.MovieDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovieDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MovieDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieDataPayload>
          }
          aggregate: {
            args: Prisma.MovieDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovieData>
          }
          groupBy: {
            args: Prisma.MovieDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovieDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovieDataCountArgs<ExtArgs>
            result: $Utils.Optional<MovieDataCountAggregateOutputType> | number
          }
        }
      }
      Rating: {
        payload: Prisma.$RatingPayload<ExtArgs>
        fields: Prisma.RatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findFirst: {
            args: Prisma.RatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findMany: {
            args: Prisma.RatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          create: {
            args: Prisma.RatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          createMany: {
            args: Prisma.RatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          update: {
            args: Prisma.RatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          deleteMany: {
            args: Prisma.RatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          aggregate: {
            args: Prisma.RatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRating>
          }
          groupBy: {
            args: Prisma.RatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.RatingCountArgs<ExtArgs>
            result: $Utils.Optional<RatingCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Genre: {
        payload: Prisma.$GenrePayload<ExtArgs>
        fields: Prisma.GenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findFirst: {
            args: Prisma.GenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findMany: {
            args: Prisma.GenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          create: {
            args: Prisma.GenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          createMany: {
            args: Prisma.GenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          update: {
            args: Prisma.GenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          deleteMany: {
            args: Prisma.GenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          aggregate: {
            args: Prisma.GenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenre>
          }
          groupBy: {
            args: Prisma.GenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenreCountArgs<ExtArgs>
            result: $Utils.Optional<GenreCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRawTyped: {
          args: runtime.UnknownTypedSql,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    celeb?: CelebOmit
    movie?: MovieOmit
    movieData?: MovieDataOmit
    rating?: RatingOmit
    review?: ReviewOmit
    genre?: GenreOmit
    user?: UserOmit
    session?: SessionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CelebCountOutputType
   */

  export type CelebCountOutputType = {
    director: number
    writer: number
    cast: number
  }

  export type CelebCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    director?: boolean | CelebCountOutputTypeCountDirectorArgs
    writer?: boolean | CelebCountOutputTypeCountWriterArgs
    cast?: boolean | CelebCountOutputTypeCountCastArgs
  }

  // Custom InputTypes
  /**
   * CelebCountOutputType without action
   */
  export type CelebCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CelebCountOutputType
     */
    select?: CelebCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CelebCountOutputType without action
   */
  export type CelebCountOutputTypeCountDirectorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
  }

  /**
   * CelebCountOutputType without action
   */
  export type CelebCountOutputTypeCountWriterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
  }

  /**
   * CelebCountOutputType without action
   */
  export type CelebCountOutputTypeCountCastArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
  }


  /**
   * Count Type MovieCountOutputType
   */

  export type MovieCountOutputType = {
    addedToFavBy: number
    ratings: number
    reviews: number
    genres: number
    writers: number
    cast: number
  }

  export type MovieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addedToFavBy?: boolean | MovieCountOutputTypeCountAddedToFavByArgs
    ratings?: boolean | MovieCountOutputTypeCountRatingsArgs
    reviews?: boolean | MovieCountOutputTypeCountReviewsArgs
    genres?: boolean | MovieCountOutputTypeCountGenresArgs
    writers?: boolean | MovieCountOutputTypeCountWritersArgs
    cast?: boolean | MovieCountOutputTypeCountCastArgs
  }

  // Custom InputTypes
  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCountOutputType
     */
    select?: MovieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountAddedToFavByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountWritersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CelebWhereInput
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountCastArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CelebWhereInput
  }


  /**
   * Count Type GenreCountOutputType
   */

  export type GenreCountOutputType = {
    movies: number
  }

  export type GenreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | GenreCountOutputTypeCountMoviesArgs
  }

  // Custom InputTypes
  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreCountOutputType
     */
    select?: GenreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    favouriteMovies: number
    ratings: number
    reviews: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favouriteMovies?: boolean | UserCountOutputTypeCountFavouriteMoviesArgs
    ratings?: boolean | UserCountOutputTypeCountRatingsArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavouriteMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Celeb
   */

  export type AggregateCeleb = {
    _count: CelebCountAggregateOutputType | null
    _avg: CelebAvgAggregateOutputType | null
    _sum: CelebSumAggregateOutputType | null
    _min: CelebMinAggregateOutputType | null
    _max: CelebMaxAggregateOutputType | null
  }

  export type CelebAvgAggregateOutputType = {
    id: number | null
  }

  export type CelebSumAggregateOutputType = {
    id: number | null
  }

  export type CelebMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    biography: string | null
    imageURL: string | null
  }

  export type CelebMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    biography: string | null
    imageURL: string | null
  }

  export type CelebCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    biography: number
    imageURL: number
    _all: number
  }


  export type CelebAvgAggregateInputType = {
    id?: true
  }

  export type CelebSumAggregateInputType = {
    id?: true
  }

  export type CelebMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    biography?: true
    imageURL?: true
  }

  export type CelebMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    biography?: true
    imageURL?: true
  }

  export type CelebCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    biography?: true
    imageURL?: true
    _all?: true
  }

  export type CelebAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Celeb to aggregate.
     */
    where?: CelebWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Celebs to fetch.
     */
    orderBy?: CelebOrderByWithRelationInput | CelebOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CelebWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Celebs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Celebs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Celebs
    **/
    _count?: true | CelebCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CelebAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CelebSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CelebMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CelebMaxAggregateInputType
  }

  export type GetCelebAggregateType<T extends CelebAggregateArgs> = {
        [P in keyof T & keyof AggregateCeleb]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCeleb[P]>
      : GetScalarType<T[P], AggregateCeleb[P]>
  }




  export type CelebGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CelebWhereInput
    orderBy?: CelebOrderByWithAggregationInput | CelebOrderByWithAggregationInput[]
    by: CelebScalarFieldEnum[] | CelebScalarFieldEnum
    having?: CelebScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CelebCountAggregateInputType | true
    _avg?: CelebAvgAggregateInputType
    _sum?: CelebSumAggregateInputType
    _min?: CelebMinAggregateInputType
    _max?: CelebMaxAggregateInputType
  }

  export type CelebGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    biography: string
    imageURL: string
    _count: CelebCountAggregateOutputType | null
    _avg: CelebAvgAggregateOutputType | null
    _sum: CelebSumAggregateOutputType | null
    _min: CelebMinAggregateOutputType | null
    _max: CelebMaxAggregateOutputType | null
  }

  type GetCelebGroupByPayload<T extends CelebGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CelebGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CelebGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CelebGroupByOutputType[P]>
            : GetScalarType<T[P], CelebGroupByOutputType[P]>
        }
      >
    >


  export type CelebSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    biography?: boolean
    imageURL?: boolean
    director?: boolean | Celeb$directorArgs<ExtArgs>
    writer?: boolean | Celeb$writerArgs<ExtArgs>
    cast?: boolean | Celeb$castArgs<ExtArgs>
    _count?: boolean | CelebCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["celeb"]>



  export type CelebSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    biography?: boolean
    imageURL?: boolean
  }

  export type CelebOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "biography" | "imageURL", ExtArgs["result"]["celeb"]>
  export type CelebInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    director?: boolean | Celeb$directorArgs<ExtArgs>
    writer?: boolean | Celeb$writerArgs<ExtArgs>
    cast?: boolean | Celeb$castArgs<ExtArgs>
    _count?: boolean | CelebCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CelebPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Celeb"
    objects: {
      director: Prisma.$MoviePayload<ExtArgs>[]
      writer: Prisma.$MoviePayload<ExtArgs>[]
      cast: Prisma.$MoviePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      biography: string
      imageURL: string
    }, ExtArgs["result"]["celeb"]>
    composites: {}
  }

  type CelebGetPayload<S extends boolean | null | undefined | CelebDefaultArgs> = $Result.GetResult<Prisma.$CelebPayload, S>

  type CelebCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CelebFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CelebCountAggregateInputType | true
    }

  export interface CelebDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Celeb'], meta: { name: 'Celeb' } }
    /**
     * Find zero or one Celeb that matches the filter.
     * @param {CelebFindUniqueArgs} args - Arguments to find a Celeb
     * @example
     * // Get one Celeb
     * const celeb = await prisma.celeb.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CelebFindUniqueArgs>(args: SelectSubset<T, CelebFindUniqueArgs<ExtArgs>>): Prisma__CelebClient<$Result.GetResult<Prisma.$CelebPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Celeb that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CelebFindUniqueOrThrowArgs} args - Arguments to find a Celeb
     * @example
     * // Get one Celeb
     * const celeb = await prisma.celeb.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CelebFindUniqueOrThrowArgs>(args: SelectSubset<T, CelebFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CelebClient<$Result.GetResult<Prisma.$CelebPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Celeb that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelebFindFirstArgs} args - Arguments to find a Celeb
     * @example
     * // Get one Celeb
     * const celeb = await prisma.celeb.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CelebFindFirstArgs>(args?: SelectSubset<T, CelebFindFirstArgs<ExtArgs>>): Prisma__CelebClient<$Result.GetResult<Prisma.$CelebPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Celeb that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelebFindFirstOrThrowArgs} args - Arguments to find a Celeb
     * @example
     * // Get one Celeb
     * const celeb = await prisma.celeb.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CelebFindFirstOrThrowArgs>(args?: SelectSubset<T, CelebFindFirstOrThrowArgs<ExtArgs>>): Prisma__CelebClient<$Result.GetResult<Prisma.$CelebPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Celebs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelebFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Celebs
     * const celebs = await prisma.celeb.findMany()
     * 
     * // Get first 10 Celebs
     * const celebs = await prisma.celeb.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const celebWithIdOnly = await prisma.celeb.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CelebFindManyArgs>(args?: SelectSubset<T, CelebFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CelebPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Celeb.
     * @param {CelebCreateArgs} args - Arguments to create a Celeb.
     * @example
     * // Create one Celeb
     * const Celeb = await prisma.celeb.create({
     *   data: {
     *     // ... data to create a Celeb
     *   }
     * })
     * 
     */
    create<T extends CelebCreateArgs>(args: SelectSubset<T, CelebCreateArgs<ExtArgs>>): Prisma__CelebClient<$Result.GetResult<Prisma.$CelebPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Celebs.
     * @param {CelebCreateManyArgs} args - Arguments to create many Celebs.
     * @example
     * // Create many Celebs
     * const celeb = await prisma.celeb.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CelebCreateManyArgs>(args?: SelectSubset<T, CelebCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Celeb.
     * @param {CelebDeleteArgs} args - Arguments to delete one Celeb.
     * @example
     * // Delete one Celeb
     * const Celeb = await prisma.celeb.delete({
     *   where: {
     *     // ... filter to delete one Celeb
     *   }
     * })
     * 
     */
    delete<T extends CelebDeleteArgs>(args: SelectSubset<T, CelebDeleteArgs<ExtArgs>>): Prisma__CelebClient<$Result.GetResult<Prisma.$CelebPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Celeb.
     * @param {CelebUpdateArgs} args - Arguments to update one Celeb.
     * @example
     * // Update one Celeb
     * const celeb = await prisma.celeb.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CelebUpdateArgs>(args: SelectSubset<T, CelebUpdateArgs<ExtArgs>>): Prisma__CelebClient<$Result.GetResult<Prisma.$CelebPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Celebs.
     * @param {CelebDeleteManyArgs} args - Arguments to filter Celebs to delete.
     * @example
     * // Delete a few Celebs
     * const { count } = await prisma.celeb.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CelebDeleteManyArgs>(args?: SelectSubset<T, CelebDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Celebs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelebUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Celebs
     * const celeb = await prisma.celeb.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CelebUpdateManyArgs>(args: SelectSubset<T, CelebUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Celeb.
     * @param {CelebUpsertArgs} args - Arguments to update or create a Celeb.
     * @example
     * // Update or create a Celeb
     * const celeb = await prisma.celeb.upsert({
     *   create: {
     *     // ... data to create a Celeb
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Celeb we want to update
     *   }
     * })
     */
    upsert<T extends CelebUpsertArgs>(args: SelectSubset<T, CelebUpsertArgs<ExtArgs>>): Prisma__CelebClient<$Result.GetResult<Prisma.$CelebPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Celebs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelebCountArgs} args - Arguments to filter Celebs to count.
     * @example
     * // Count the number of Celebs
     * const count = await prisma.celeb.count({
     *   where: {
     *     // ... the filter for the Celebs we want to count
     *   }
     * })
    **/
    count<T extends CelebCountArgs>(
      args?: Subset<T, CelebCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CelebCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Celeb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelebAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CelebAggregateArgs>(args: Subset<T, CelebAggregateArgs>): Prisma.PrismaPromise<GetCelebAggregateType<T>>

    /**
     * Group by Celeb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelebGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CelebGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CelebGroupByArgs['orderBy'] }
        : { orderBy?: CelebGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CelebGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCelebGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Celeb model
   */
  readonly fields: CelebFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Celeb.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CelebClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    director<T extends Celeb$directorArgs<ExtArgs> = {}>(args?: Subset<T, Celeb$directorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    writer<T extends Celeb$writerArgs<ExtArgs> = {}>(args?: Subset<T, Celeb$writerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cast<T extends Celeb$castArgs<ExtArgs> = {}>(args?: Subset<T, Celeb$castArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Celeb model
   */
  interface CelebFieldRefs {
    readonly id: FieldRef<"Celeb", 'Int'>
    readonly firstName: FieldRef<"Celeb", 'String'>
    readonly lastName: FieldRef<"Celeb", 'String'>
    readonly biography: FieldRef<"Celeb", 'String'>
    readonly imageURL: FieldRef<"Celeb", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Celeb findUnique
   */
  export type CelebFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celeb
     */
    select?: CelebSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Celeb
     */
    omit?: CelebOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelebInclude<ExtArgs> | null
    /**
     * Filter, which Celeb to fetch.
     */
    where: CelebWhereUniqueInput
  }

  /**
   * Celeb findUniqueOrThrow
   */
  export type CelebFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celeb
     */
    select?: CelebSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Celeb
     */
    omit?: CelebOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelebInclude<ExtArgs> | null
    /**
     * Filter, which Celeb to fetch.
     */
    where: CelebWhereUniqueInput
  }

  /**
   * Celeb findFirst
   */
  export type CelebFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celeb
     */
    select?: CelebSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Celeb
     */
    omit?: CelebOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelebInclude<ExtArgs> | null
    /**
     * Filter, which Celeb to fetch.
     */
    where?: CelebWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Celebs to fetch.
     */
    orderBy?: CelebOrderByWithRelationInput | CelebOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Celebs.
     */
    cursor?: CelebWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Celebs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Celebs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Celebs.
     */
    distinct?: CelebScalarFieldEnum | CelebScalarFieldEnum[]
  }

  /**
   * Celeb findFirstOrThrow
   */
  export type CelebFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celeb
     */
    select?: CelebSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Celeb
     */
    omit?: CelebOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelebInclude<ExtArgs> | null
    /**
     * Filter, which Celeb to fetch.
     */
    where?: CelebWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Celebs to fetch.
     */
    orderBy?: CelebOrderByWithRelationInput | CelebOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Celebs.
     */
    cursor?: CelebWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Celebs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Celebs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Celebs.
     */
    distinct?: CelebScalarFieldEnum | CelebScalarFieldEnum[]
  }

  /**
   * Celeb findMany
   */
  export type CelebFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celeb
     */
    select?: CelebSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Celeb
     */
    omit?: CelebOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelebInclude<ExtArgs> | null
    /**
     * Filter, which Celebs to fetch.
     */
    where?: CelebWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Celebs to fetch.
     */
    orderBy?: CelebOrderByWithRelationInput | CelebOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Celebs.
     */
    cursor?: CelebWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Celebs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Celebs.
     */
    skip?: number
    distinct?: CelebScalarFieldEnum | CelebScalarFieldEnum[]
  }

  /**
   * Celeb create
   */
  export type CelebCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celeb
     */
    select?: CelebSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Celeb
     */
    omit?: CelebOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelebInclude<ExtArgs> | null
    /**
     * The data needed to create a Celeb.
     */
    data: XOR<CelebCreateInput, CelebUncheckedCreateInput>
  }

  /**
   * Celeb createMany
   */
  export type CelebCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Celebs.
     */
    data: CelebCreateManyInput | CelebCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Celeb update
   */
  export type CelebUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celeb
     */
    select?: CelebSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Celeb
     */
    omit?: CelebOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelebInclude<ExtArgs> | null
    /**
     * The data needed to update a Celeb.
     */
    data: XOR<CelebUpdateInput, CelebUncheckedUpdateInput>
    /**
     * Choose, which Celeb to update.
     */
    where: CelebWhereUniqueInput
  }

  /**
   * Celeb updateMany
   */
  export type CelebUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Celebs.
     */
    data: XOR<CelebUpdateManyMutationInput, CelebUncheckedUpdateManyInput>
    /**
     * Filter which Celebs to update
     */
    where?: CelebWhereInput
    /**
     * Limit how many Celebs to update.
     */
    limit?: number
  }

  /**
   * Celeb upsert
   */
  export type CelebUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celeb
     */
    select?: CelebSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Celeb
     */
    omit?: CelebOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelebInclude<ExtArgs> | null
    /**
     * The filter to search for the Celeb to update in case it exists.
     */
    where: CelebWhereUniqueInput
    /**
     * In case the Celeb found by the `where` argument doesn't exist, create a new Celeb with this data.
     */
    create: XOR<CelebCreateInput, CelebUncheckedCreateInput>
    /**
     * In case the Celeb was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CelebUpdateInput, CelebUncheckedUpdateInput>
  }

  /**
   * Celeb delete
   */
  export type CelebDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celeb
     */
    select?: CelebSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Celeb
     */
    omit?: CelebOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelebInclude<ExtArgs> | null
    /**
     * Filter which Celeb to delete.
     */
    where: CelebWhereUniqueInput
  }

  /**
   * Celeb deleteMany
   */
  export type CelebDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Celebs to delete
     */
    where?: CelebWhereInput
    /**
     * Limit how many Celebs to delete.
     */
    limit?: number
  }

  /**
   * Celeb.director
   */
  export type Celeb$directorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    cursor?: MovieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Celeb.writer
   */
  export type Celeb$writerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    cursor?: MovieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Celeb.cast
   */
  export type Celeb$castArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    cursor?: MovieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Celeb without action
   */
  export type CelebDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celeb
     */
    select?: CelebSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Celeb
     */
    omit?: CelebOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelebInclude<ExtArgs> | null
  }


  /**
   * Model Movie
   */

  export type AggregateMovie = {
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  export type MovieAvgAggregateOutputType = {
    id: number | null
    movieDataId: number | null
    directorId: number | null
  }

  export type MovieSumAggregateOutputType = {
    id: number | null
    movieDataId: number | null
    directorId: number | null
  }

  export type MovieMinAggregateOutputType = {
    id: number | null
    movieDataId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    directorId: number | null
  }

  export type MovieMaxAggregateOutputType = {
    id: number | null
    movieDataId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    directorId: number | null
  }

  export type MovieCountAggregateOutputType = {
    id: number
    movieDataId: number
    createdAt: number
    updatedAt: number
    directorId: number
    _all: number
  }


  export type MovieAvgAggregateInputType = {
    id?: true
    movieDataId?: true
    directorId?: true
  }

  export type MovieSumAggregateInputType = {
    id?: true
    movieDataId?: true
    directorId?: true
  }

  export type MovieMinAggregateInputType = {
    id?: true
    movieDataId?: true
    createdAt?: true
    updatedAt?: true
    directorId?: true
  }

  export type MovieMaxAggregateInputType = {
    id?: true
    movieDataId?: true
    createdAt?: true
    updatedAt?: true
    directorId?: true
  }

  export type MovieCountAggregateInputType = {
    id?: true
    movieDataId?: true
    createdAt?: true
    updatedAt?: true
    directorId?: true
    _all?: true
  }

  export type MovieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movie to aggregate.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movies
    **/
    _count?: true | MovieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieMaxAggregateInputType
  }

  export type GetMovieAggregateType<T extends MovieAggregateArgs> = {
        [P in keyof T & keyof AggregateMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie[P]>
      : GetScalarType<T[P], AggregateMovie[P]>
  }




  export type MovieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithAggregationInput | MovieOrderByWithAggregationInput[]
    by: MovieScalarFieldEnum[] | MovieScalarFieldEnum
    having?: MovieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieCountAggregateInputType | true
    _avg?: MovieAvgAggregateInputType
    _sum?: MovieSumAggregateInputType
    _min?: MovieMinAggregateInputType
    _max?: MovieMaxAggregateInputType
  }

  export type MovieGroupByOutputType = {
    id: number
    movieDataId: number
    createdAt: Date
    updatedAt: Date
    directorId: number | null
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  type GetMovieGroupByPayload<T extends MovieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieGroupByOutputType[P]>
            : GetScalarType<T[P], MovieGroupByOutputType[P]>
        }
      >
    >


  export type MovieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    movieDataId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    directorId?: boolean
    movieData?: boolean | MovieDataDefaultArgs<ExtArgs>
    addedToFavBy?: boolean | Movie$addedToFavByArgs<ExtArgs>
    ratings?: boolean | Movie$ratingsArgs<ExtArgs>
    reviews?: boolean | Movie$reviewsArgs<ExtArgs>
    genres?: boolean | Movie$genresArgs<ExtArgs>
    director?: boolean | Movie$directorArgs<ExtArgs>
    writers?: boolean | Movie$writersArgs<ExtArgs>
    cast?: boolean | Movie$castArgs<ExtArgs>
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movie"]>



  export type MovieSelectScalar = {
    id?: boolean
    movieDataId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    directorId?: boolean
  }

  export type MovieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "movieDataId" | "createdAt" | "updatedAt" | "directorId", ExtArgs["result"]["movie"]>
  export type MovieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movieData?: boolean | MovieDataDefaultArgs<ExtArgs>
    addedToFavBy?: boolean | Movie$addedToFavByArgs<ExtArgs>
    ratings?: boolean | Movie$ratingsArgs<ExtArgs>
    reviews?: boolean | Movie$reviewsArgs<ExtArgs>
    genres?: boolean | Movie$genresArgs<ExtArgs>
    director?: boolean | Movie$directorArgs<ExtArgs>
    writers?: boolean | Movie$writersArgs<ExtArgs>
    cast?: boolean | Movie$castArgs<ExtArgs>
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MoviePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movie"
    objects: {
      movieData: Prisma.$MovieDataPayload<ExtArgs>
      addedToFavBy: Prisma.$UserPayload<ExtArgs>[]
      ratings: Prisma.$RatingPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      genres: Prisma.$GenrePayload<ExtArgs>[]
      director: Prisma.$CelebPayload<ExtArgs> | null
      writers: Prisma.$CelebPayload<ExtArgs>[]
      cast: Prisma.$CelebPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      movieDataId: number
      createdAt: Date
      updatedAt: Date
      directorId: number | null
    }, ExtArgs["result"]["movie"]>
    composites: {}
  }

  type MovieGetPayload<S extends boolean | null | undefined | MovieDefaultArgs> = $Result.GetResult<Prisma.$MoviePayload, S>

  type MovieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovieCountAggregateInputType | true
    }

  export interface MovieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movie'], meta: { name: 'Movie' } }
    /**
     * Find zero or one Movie that matches the filter.
     * @param {MovieFindUniqueArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovieFindUniqueArgs>(args: SelectSubset<T, MovieFindUniqueArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovieFindUniqueOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovieFindUniqueOrThrowArgs>(args: SelectSubset<T, MovieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovieFindFirstArgs>(args?: SelectSubset<T, MovieFindFirstArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovieFindFirstOrThrowArgs>(args?: SelectSubset<T, MovieFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movie.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movieWithIdOnly = await prisma.movie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovieFindManyArgs>(args?: SelectSubset<T, MovieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movie.
     * @param {MovieCreateArgs} args - Arguments to create a Movie.
     * @example
     * // Create one Movie
     * const Movie = await prisma.movie.create({
     *   data: {
     *     // ... data to create a Movie
     *   }
     * })
     * 
     */
    create<T extends MovieCreateArgs>(args: SelectSubset<T, MovieCreateArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movies.
     * @param {MovieCreateManyArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movie = await prisma.movie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovieCreateManyArgs>(args?: SelectSubset<T, MovieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Movie.
     * @param {MovieDeleteArgs} args - Arguments to delete one Movie.
     * @example
     * // Delete one Movie
     * const Movie = await prisma.movie.delete({
     *   where: {
     *     // ... filter to delete one Movie
     *   }
     * })
     * 
     */
    delete<T extends MovieDeleteArgs>(args: SelectSubset<T, MovieDeleteArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movie.
     * @param {MovieUpdateArgs} args - Arguments to update one Movie.
     * @example
     * // Update one Movie
     * const movie = await prisma.movie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovieUpdateArgs>(args: SelectSubset<T, MovieUpdateArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movies.
     * @param {MovieDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovieDeleteManyArgs>(args?: SelectSubset<T, MovieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovieUpdateManyArgs>(args: SelectSubset<T, MovieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Movie.
     * @param {MovieUpsertArgs} args - Arguments to update or create a Movie.
     * @example
     * // Update or create a Movie
     * const movie = await prisma.movie.upsert({
     *   create: {
     *     // ... data to create a Movie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie we want to update
     *   }
     * })
     */
    upsert<T extends MovieUpsertArgs>(args: SelectSubset<T, MovieUpsertArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movie.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends MovieCountArgs>(
      args?: Subset<T, MovieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovieAggregateArgs>(args: Subset<T, MovieAggregateArgs>): Prisma.PrismaPromise<GetMovieAggregateType<T>>

    /**
     * Group by Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieGroupByArgs['orderBy'] }
        : { orderBy?: MovieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movie model
   */
  readonly fields: MovieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movieData<T extends MovieDataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieDataDefaultArgs<ExtArgs>>): Prisma__MovieDataClient<$Result.GetResult<Prisma.$MovieDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    addedToFavBy<T extends Movie$addedToFavByArgs<ExtArgs> = {}>(args?: Subset<T, Movie$addedToFavByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratings<T extends Movie$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, Movie$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Movie$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Movie$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    genres<T extends Movie$genresArgs<ExtArgs> = {}>(args?: Subset<T, Movie$genresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    director<T extends Movie$directorArgs<ExtArgs> = {}>(args?: Subset<T, Movie$directorArgs<ExtArgs>>): Prisma__CelebClient<$Result.GetResult<Prisma.$CelebPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    writers<T extends Movie$writersArgs<ExtArgs> = {}>(args?: Subset<T, Movie$writersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CelebPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cast<T extends Movie$castArgs<ExtArgs> = {}>(args?: Subset<T, Movie$castArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CelebPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Movie model
   */
  interface MovieFieldRefs {
    readonly id: FieldRef<"Movie", 'Int'>
    readonly movieDataId: FieldRef<"Movie", 'Int'>
    readonly createdAt: FieldRef<"Movie", 'DateTime'>
    readonly updatedAt: FieldRef<"Movie", 'DateTime'>
    readonly directorId: FieldRef<"Movie", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Movie findUnique
   */
  export type MovieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie findUniqueOrThrow
   */
  export type MovieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie findFirst
   */
  export type MovieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie findFirstOrThrow
   */
  export type MovieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie findMany
   */
  export type MovieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie create
   */
  export type MovieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to create a Movie.
     */
    data: XOR<MovieCreateInput, MovieUncheckedCreateInput>
  }

  /**
   * Movie createMany
   */
  export type MovieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movies.
     */
    data: MovieCreateManyInput | MovieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movie update
   */
  export type MovieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to update a Movie.
     */
    data: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
    /**
     * Choose, which Movie to update.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie updateMany
   */
  export type MovieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movies.
     */
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     */
    where?: MovieWhereInput
    /**
     * Limit how many Movies to update.
     */
    limit?: number
  }

  /**
   * Movie upsert
   */
  export type MovieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The filter to search for the Movie to update in case it exists.
     */
    where: MovieWhereUniqueInput
    /**
     * In case the Movie found by the `where` argument doesn't exist, create a new Movie with this data.
     */
    create: XOR<MovieCreateInput, MovieUncheckedCreateInput>
    /**
     * In case the Movie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
  }

  /**
   * Movie delete
   */
  export type MovieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter which Movie to delete.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie deleteMany
   */
  export type MovieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movies to delete
     */
    where?: MovieWhereInput
    /**
     * Limit how many Movies to delete.
     */
    limit?: number
  }

  /**
   * Movie.addedToFavBy
   */
  export type Movie$addedToFavByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Movie.ratings
   */
  export type Movie$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Movie.reviews
   */
  export type Movie$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Movie.genres
   */
  export type Movie$genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    cursor?: GenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Movie.director
   */
  export type Movie$directorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celeb
     */
    select?: CelebSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Celeb
     */
    omit?: CelebOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelebInclude<ExtArgs> | null
    where?: CelebWhereInput
  }

  /**
   * Movie.writers
   */
  export type Movie$writersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celeb
     */
    select?: CelebSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Celeb
     */
    omit?: CelebOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelebInclude<ExtArgs> | null
    where?: CelebWhereInput
    orderBy?: CelebOrderByWithRelationInput | CelebOrderByWithRelationInput[]
    cursor?: CelebWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CelebScalarFieldEnum | CelebScalarFieldEnum[]
  }

  /**
   * Movie.cast
   */
  export type Movie$castArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celeb
     */
    select?: CelebSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Celeb
     */
    omit?: CelebOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CelebInclude<ExtArgs> | null
    where?: CelebWhereInput
    orderBy?: CelebOrderByWithRelationInput | CelebOrderByWithRelationInput[]
    cursor?: CelebWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CelebScalarFieldEnum | CelebScalarFieldEnum[]
  }

  /**
   * Movie without action
   */
  export type MovieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
  }


  /**
   * Model MovieData
   */

  export type AggregateMovieData = {
    _count: MovieDataCountAggregateOutputType | null
    _avg: MovieDataAvgAggregateOutputType | null
    _sum: MovieDataSumAggregateOutputType | null
    _min: MovieDataMinAggregateOutputType | null
    _max: MovieDataMaxAggregateOutputType | null
  }

  export type MovieDataAvgAggregateOutputType = {
    id: number | null
  }

  export type MovieDataSumAggregateOutputType = {
    id: number | null
  }

  export type MovieDataMinAggregateOutputType = {
    id: number | null
    title: string | null
    storyline: string | null
    posterURL: string | null
    releaseDate: Date | null
    length: string | null
    countryOfOrigin: string | null
    productionCompany: string | null
    language: string | null
  }

  export type MovieDataMaxAggregateOutputType = {
    id: number | null
    title: string | null
    storyline: string | null
    posterURL: string | null
    releaseDate: Date | null
    length: string | null
    countryOfOrigin: string | null
    productionCompany: string | null
    language: string | null
  }

  export type MovieDataCountAggregateOutputType = {
    id: number
    title: number
    storyline: number
    posterURL: number
    releaseDate: number
    length: number
    countryOfOrigin: number
    productionCompany: number
    language: number
    _all: number
  }


  export type MovieDataAvgAggregateInputType = {
    id?: true
  }

  export type MovieDataSumAggregateInputType = {
    id?: true
  }

  export type MovieDataMinAggregateInputType = {
    id?: true
    title?: true
    storyline?: true
    posterURL?: true
    releaseDate?: true
    length?: true
    countryOfOrigin?: true
    productionCompany?: true
    language?: true
  }

  export type MovieDataMaxAggregateInputType = {
    id?: true
    title?: true
    storyline?: true
    posterURL?: true
    releaseDate?: true
    length?: true
    countryOfOrigin?: true
    productionCompany?: true
    language?: true
  }

  export type MovieDataCountAggregateInputType = {
    id?: true
    title?: true
    storyline?: true
    posterURL?: true
    releaseDate?: true
    length?: true
    countryOfOrigin?: true
    productionCompany?: true
    language?: true
    _all?: true
  }

  export type MovieDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovieData to aggregate.
     */
    where?: MovieDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieData to fetch.
     */
    orderBy?: MovieDataOrderByWithRelationInput | MovieDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovieDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MovieData
    **/
    _count?: true | MovieDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieDataMaxAggregateInputType
  }

  export type GetMovieDataAggregateType<T extends MovieDataAggregateArgs> = {
        [P in keyof T & keyof AggregateMovieData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovieData[P]>
      : GetScalarType<T[P], AggregateMovieData[P]>
  }




  export type MovieDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieDataWhereInput
    orderBy?: MovieDataOrderByWithAggregationInput | MovieDataOrderByWithAggregationInput[]
    by: MovieDataScalarFieldEnum[] | MovieDataScalarFieldEnum
    having?: MovieDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieDataCountAggregateInputType | true
    _avg?: MovieDataAvgAggregateInputType
    _sum?: MovieDataSumAggregateInputType
    _min?: MovieDataMinAggregateInputType
    _max?: MovieDataMaxAggregateInputType
  }

  export type MovieDataGroupByOutputType = {
    id: number
    title: string
    storyline: string
    posterURL: string
    releaseDate: Date
    length: string
    countryOfOrigin: string
    productionCompany: string
    language: string
    _count: MovieDataCountAggregateOutputType | null
    _avg: MovieDataAvgAggregateOutputType | null
    _sum: MovieDataSumAggregateOutputType | null
    _min: MovieDataMinAggregateOutputType | null
    _max: MovieDataMaxAggregateOutputType | null
  }

  type GetMovieDataGroupByPayload<T extends MovieDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieDataGroupByOutputType[P]>
            : GetScalarType<T[P], MovieDataGroupByOutputType[P]>
        }
      >
    >


  export type MovieDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    storyline?: boolean
    posterURL?: boolean
    releaseDate?: boolean
    length?: boolean
    countryOfOrigin?: boolean
    productionCompany?: boolean
    language?: boolean
    Movie?: boolean | MovieData$MovieArgs<ExtArgs>
  }, ExtArgs["result"]["movieData"]>



  export type MovieDataSelectScalar = {
    id?: boolean
    title?: boolean
    storyline?: boolean
    posterURL?: boolean
    releaseDate?: boolean
    length?: boolean
    countryOfOrigin?: boolean
    productionCompany?: boolean
    language?: boolean
  }

  export type MovieDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "storyline" | "posterURL" | "releaseDate" | "length" | "countryOfOrigin" | "productionCompany" | "language", ExtArgs["result"]["movieData"]>
  export type MovieDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Movie?: boolean | MovieData$MovieArgs<ExtArgs>
  }

  export type $MovieDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MovieData"
    objects: {
      Movie: Prisma.$MoviePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      storyline: string
      posterURL: string
      releaseDate: Date
      length: string
      countryOfOrigin: string
      productionCompany: string
      language: string
    }, ExtArgs["result"]["movieData"]>
    composites: {}
  }

  type MovieDataGetPayload<S extends boolean | null | undefined | MovieDataDefaultArgs> = $Result.GetResult<Prisma.$MovieDataPayload, S>

  type MovieDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovieDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovieDataCountAggregateInputType | true
    }

  export interface MovieDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MovieData'], meta: { name: 'MovieData' } }
    /**
     * Find zero or one MovieData that matches the filter.
     * @param {MovieDataFindUniqueArgs} args - Arguments to find a MovieData
     * @example
     * // Get one MovieData
     * const movieData = await prisma.movieData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovieDataFindUniqueArgs>(args: SelectSubset<T, MovieDataFindUniqueArgs<ExtArgs>>): Prisma__MovieDataClient<$Result.GetResult<Prisma.$MovieDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MovieData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovieDataFindUniqueOrThrowArgs} args - Arguments to find a MovieData
     * @example
     * // Get one MovieData
     * const movieData = await prisma.movieData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovieDataFindUniqueOrThrowArgs>(args: SelectSubset<T, MovieDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovieDataClient<$Result.GetResult<Prisma.$MovieDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovieData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieDataFindFirstArgs} args - Arguments to find a MovieData
     * @example
     * // Get one MovieData
     * const movieData = await prisma.movieData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovieDataFindFirstArgs>(args?: SelectSubset<T, MovieDataFindFirstArgs<ExtArgs>>): Prisma__MovieDataClient<$Result.GetResult<Prisma.$MovieDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovieData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieDataFindFirstOrThrowArgs} args - Arguments to find a MovieData
     * @example
     * // Get one MovieData
     * const movieData = await prisma.movieData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovieDataFindFirstOrThrowArgs>(args?: SelectSubset<T, MovieDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovieDataClient<$Result.GetResult<Prisma.$MovieDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MovieData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovieData
     * const movieData = await prisma.movieData.findMany()
     * 
     * // Get first 10 MovieData
     * const movieData = await prisma.movieData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movieDataWithIdOnly = await prisma.movieData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovieDataFindManyArgs>(args?: SelectSubset<T, MovieDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MovieData.
     * @param {MovieDataCreateArgs} args - Arguments to create a MovieData.
     * @example
     * // Create one MovieData
     * const MovieData = await prisma.movieData.create({
     *   data: {
     *     // ... data to create a MovieData
     *   }
     * })
     * 
     */
    create<T extends MovieDataCreateArgs>(args: SelectSubset<T, MovieDataCreateArgs<ExtArgs>>): Prisma__MovieDataClient<$Result.GetResult<Prisma.$MovieDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MovieData.
     * @param {MovieDataCreateManyArgs} args - Arguments to create many MovieData.
     * @example
     * // Create many MovieData
     * const movieData = await prisma.movieData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovieDataCreateManyArgs>(args?: SelectSubset<T, MovieDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MovieData.
     * @param {MovieDataDeleteArgs} args - Arguments to delete one MovieData.
     * @example
     * // Delete one MovieData
     * const MovieData = await prisma.movieData.delete({
     *   where: {
     *     // ... filter to delete one MovieData
     *   }
     * })
     * 
     */
    delete<T extends MovieDataDeleteArgs>(args: SelectSubset<T, MovieDataDeleteArgs<ExtArgs>>): Prisma__MovieDataClient<$Result.GetResult<Prisma.$MovieDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MovieData.
     * @param {MovieDataUpdateArgs} args - Arguments to update one MovieData.
     * @example
     * // Update one MovieData
     * const movieData = await prisma.movieData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovieDataUpdateArgs>(args: SelectSubset<T, MovieDataUpdateArgs<ExtArgs>>): Prisma__MovieDataClient<$Result.GetResult<Prisma.$MovieDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MovieData.
     * @param {MovieDataDeleteManyArgs} args - Arguments to filter MovieData to delete.
     * @example
     * // Delete a few MovieData
     * const { count } = await prisma.movieData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovieDataDeleteManyArgs>(args?: SelectSubset<T, MovieDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovieData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovieData
     * const movieData = await prisma.movieData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovieDataUpdateManyArgs>(args: SelectSubset<T, MovieDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MovieData.
     * @param {MovieDataUpsertArgs} args - Arguments to update or create a MovieData.
     * @example
     * // Update or create a MovieData
     * const movieData = await prisma.movieData.upsert({
     *   create: {
     *     // ... data to create a MovieData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovieData we want to update
     *   }
     * })
     */
    upsert<T extends MovieDataUpsertArgs>(args: SelectSubset<T, MovieDataUpsertArgs<ExtArgs>>): Prisma__MovieDataClient<$Result.GetResult<Prisma.$MovieDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MovieData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieDataCountArgs} args - Arguments to filter MovieData to count.
     * @example
     * // Count the number of MovieData
     * const count = await prisma.movieData.count({
     *   where: {
     *     // ... the filter for the MovieData we want to count
     *   }
     * })
    **/
    count<T extends MovieDataCountArgs>(
      args?: Subset<T, MovieDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovieData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovieDataAggregateArgs>(args: Subset<T, MovieDataAggregateArgs>): Prisma.PrismaPromise<GetMovieDataAggregateType<T>>

    /**
     * Group by MovieData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovieDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieDataGroupByArgs['orderBy'] }
        : { orderBy?: MovieDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovieDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MovieData model
   */
  readonly fields: MovieDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MovieData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Movie<T extends MovieData$MovieArgs<ExtArgs> = {}>(args?: Subset<T, MovieData$MovieArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MovieData model
   */
  interface MovieDataFieldRefs {
    readonly id: FieldRef<"MovieData", 'Int'>
    readonly title: FieldRef<"MovieData", 'String'>
    readonly storyline: FieldRef<"MovieData", 'String'>
    readonly posterURL: FieldRef<"MovieData", 'String'>
    readonly releaseDate: FieldRef<"MovieData", 'DateTime'>
    readonly length: FieldRef<"MovieData", 'String'>
    readonly countryOfOrigin: FieldRef<"MovieData", 'String'>
    readonly productionCompany: FieldRef<"MovieData", 'String'>
    readonly language: FieldRef<"MovieData", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MovieData findUnique
   */
  export type MovieDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieData
     */
    select?: MovieDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieData
     */
    omit?: MovieDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieDataInclude<ExtArgs> | null
    /**
     * Filter, which MovieData to fetch.
     */
    where: MovieDataWhereUniqueInput
  }

  /**
   * MovieData findUniqueOrThrow
   */
  export type MovieDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieData
     */
    select?: MovieDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieData
     */
    omit?: MovieDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieDataInclude<ExtArgs> | null
    /**
     * Filter, which MovieData to fetch.
     */
    where: MovieDataWhereUniqueInput
  }

  /**
   * MovieData findFirst
   */
  export type MovieDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieData
     */
    select?: MovieDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieData
     */
    omit?: MovieDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieDataInclude<ExtArgs> | null
    /**
     * Filter, which MovieData to fetch.
     */
    where?: MovieDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieData to fetch.
     */
    orderBy?: MovieDataOrderByWithRelationInput | MovieDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovieData.
     */
    cursor?: MovieDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovieData.
     */
    distinct?: MovieDataScalarFieldEnum | MovieDataScalarFieldEnum[]
  }

  /**
   * MovieData findFirstOrThrow
   */
  export type MovieDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieData
     */
    select?: MovieDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieData
     */
    omit?: MovieDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieDataInclude<ExtArgs> | null
    /**
     * Filter, which MovieData to fetch.
     */
    where?: MovieDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieData to fetch.
     */
    orderBy?: MovieDataOrderByWithRelationInput | MovieDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovieData.
     */
    cursor?: MovieDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovieData.
     */
    distinct?: MovieDataScalarFieldEnum | MovieDataScalarFieldEnum[]
  }

  /**
   * MovieData findMany
   */
  export type MovieDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieData
     */
    select?: MovieDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieData
     */
    omit?: MovieDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieDataInclude<ExtArgs> | null
    /**
     * Filter, which MovieData to fetch.
     */
    where?: MovieDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieData to fetch.
     */
    orderBy?: MovieDataOrderByWithRelationInput | MovieDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MovieData.
     */
    cursor?: MovieDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieData.
     */
    skip?: number
    distinct?: MovieDataScalarFieldEnum | MovieDataScalarFieldEnum[]
  }

  /**
   * MovieData create
   */
  export type MovieDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieData
     */
    select?: MovieDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieData
     */
    omit?: MovieDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieDataInclude<ExtArgs> | null
    /**
     * The data needed to create a MovieData.
     */
    data: XOR<MovieDataCreateInput, MovieDataUncheckedCreateInput>
  }

  /**
   * MovieData createMany
   */
  export type MovieDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MovieData.
     */
    data: MovieDataCreateManyInput | MovieDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MovieData update
   */
  export type MovieDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieData
     */
    select?: MovieDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieData
     */
    omit?: MovieDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieDataInclude<ExtArgs> | null
    /**
     * The data needed to update a MovieData.
     */
    data: XOR<MovieDataUpdateInput, MovieDataUncheckedUpdateInput>
    /**
     * Choose, which MovieData to update.
     */
    where: MovieDataWhereUniqueInput
  }

  /**
   * MovieData updateMany
   */
  export type MovieDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MovieData.
     */
    data: XOR<MovieDataUpdateManyMutationInput, MovieDataUncheckedUpdateManyInput>
    /**
     * Filter which MovieData to update
     */
    where?: MovieDataWhereInput
    /**
     * Limit how many MovieData to update.
     */
    limit?: number
  }

  /**
   * MovieData upsert
   */
  export type MovieDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieData
     */
    select?: MovieDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieData
     */
    omit?: MovieDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieDataInclude<ExtArgs> | null
    /**
     * The filter to search for the MovieData to update in case it exists.
     */
    where: MovieDataWhereUniqueInput
    /**
     * In case the MovieData found by the `where` argument doesn't exist, create a new MovieData with this data.
     */
    create: XOR<MovieDataCreateInput, MovieDataUncheckedCreateInput>
    /**
     * In case the MovieData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieDataUpdateInput, MovieDataUncheckedUpdateInput>
  }

  /**
   * MovieData delete
   */
  export type MovieDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieData
     */
    select?: MovieDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieData
     */
    omit?: MovieDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieDataInclude<ExtArgs> | null
    /**
     * Filter which MovieData to delete.
     */
    where: MovieDataWhereUniqueInput
  }

  /**
   * MovieData deleteMany
   */
  export type MovieDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovieData to delete
     */
    where?: MovieDataWhereInput
    /**
     * Limit how many MovieData to delete.
     */
    limit?: number
  }

  /**
   * MovieData.Movie
   */
  export type MovieData$MovieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    where?: MovieWhereInput
  }

  /**
   * MovieData without action
   */
  export type MovieDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieData
     */
    select?: MovieDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieData
     */
    omit?: MovieDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieDataInclude<ExtArgs> | null
  }


  /**
   * Model Rating
   */

  export type AggregateRating = {
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  export type RatingAvgAggregateOutputType = {
    value: number | null
    movieId: number | null
    userId: number | null
  }

  export type RatingSumAggregateOutputType = {
    value: number | null
    movieId: number | null
    userId: number | null
  }

  export type RatingMinAggregateOutputType = {
    value: number | null
    movieId: number | null
    userId: number | null
  }

  export type RatingMaxAggregateOutputType = {
    value: number | null
    movieId: number | null
    userId: number | null
  }

  export type RatingCountAggregateOutputType = {
    value: number
    movieId: number
    userId: number
    _all: number
  }


  export type RatingAvgAggregateInputType = {
    value?: true
    movieId?: true
    userId?: true
  }

  export type RatingSumAggregateInputType = {
    value?: true
    movieId?: true
    userId?: true
  }

  export type RatingMinAggregateInputType = {
    value?: true
    movieId?: true
    userId?: true
  }

  export type RatingMaxAggregateInputType = {
    value?: true
    movieId?: true
    userId?: true
  }

  export type RatingCountAggregateInputType = {
    value?: true
    movieId?: true
    userId?: true
    _all?: true
  }

  export type RatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rating to aggregate.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ratings
    **/
    _count?: true | RatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingMaxAggregateInputType
  }

  export type GetRatingAggregateType<T extends RatingAggregateArgs> = {
        [P in keyof T & keyof AggregateRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRating[P]>
      : GetScalarType<T[P], AggregateRating[P]>
  }




  export type RatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithAggregationInput | RatingOrderByWithAggregationInput[]
    by: RatingScalarFieldEnum[] | RatingScalarFieldEnum
    having?: RatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingCountAggregateInputType | true
    _avg?: RatingAvgAggregateInputType
    _sum?: RatingSumAggregateInputType
    _min?: RatingMinAggregateInputType
    _max?: RatingMaxAggregateInputType
  }

  export type RatingGroupByOutputType = {
    value: number
    movieId: number
    userId: number
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  type GetRatingGroupByPayload<T extends RatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingGroupByOutputType[P]>
            : GetScalarType<T[P], RatingGroupByOutputType[P]>
        }
      >
    >


  export type RatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    value?: boolean
    movieId?: boolean
    userId?: boolean
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>



  export type RatingSelectScalar = {
    value?: boolean
    movieId?: boolean
    userId?: boolean
  }

  export type RatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"value" | "movieId" | "userId", ExtArgs["result"]["rating"]>
  export type RatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rating"
    objects: {
      movie: Prisma.$MoviePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      value: number
      movieId: number
      userId: number
    }, ExtArgs["result"]["rating"]>
    composites: {}
  }

  type RatingGetPayload<S extends boolean | null | undefined | RatingDefaultArgs> = $Result.GetResult<Prisma.$RatingPayload, S>

  type RatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RatingCountAggregateInputType | true
    }

  export interface RatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rating'], meta: { name: 'Rating' } }
    /**
     * Find zero or one Rating that matches the filter.
     * @param {RatingFindUniqueArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RatingFindUniqueArgs>(args: SelectSubset<T, RatingFindUniqueArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RatingFindUniqueOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RatingFindUniqueOrThrowArgs>(args: SelectSubset<T, RatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RatingFindFirstArgs>(args?: SelectSubset<T, RatingFindFirstArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RatingFindFirstOrThrowArgs>(args?: SelectSubset<T, RatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ratings
     * const ratings = await prisma.rating.findMany()
     * 
     * // Get first 10 Ratings
     * const ratings = await prisma.rating.findMany({ take: 10 })
     * 
     * // Only select the `value`
     * const ratingWithValueOnly = await prisma.rating.findMany({ select: { value: true } })
     * 
     */
    findMany<T extends RatingFindManyArgs>(args?: SelectSubset<T, RatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rating.
     * @param {RatingCreateArgs} args - Arguments to create a Rating.
     * @example
     * // Create one Rating
     * const Rating = await prisma.rating.create({
     *   data: {
     *     // ... data to create a Rating
     *   }
     * })
     * 
     */
    create<T extends RatingCreateArgs>(args: SelectSubset<T, RatingCreateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ratings.
     * @param {RatingCreateManyArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RatingCreateManyArgs>(args?: SelectSubset<T, RatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rating.
     * @param {RatingDeleteArgs} args - Arguments to delete one Rating.
     * @example
     * // Delete one Rating
     * const Rating = await prisma.rating.delete({
     *   where: {
     *     // ... filter to delete one Rating
     *   }
     * })
     * 
     */
    delete<T extends RatingDeleteArgs>(args: SelectSubset<T, RatingDeleteArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rating.
     * @param {RatingUpdateArgs} args - Arguments to update one Rating.
     * @example
     * // Update one Rating
     * const rating = await prisma.rating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RatingUpdateArgs>(args: SelectSubset<T, RatingUpdateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ratings.
     * @param {RatingDeleteManyArgs} args - Arguments to filter Ratings to delete.
     * @example
     * // Delete a few Ratings
     * const { count } = await prisma.rating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RatingDeleteManyArgs>(args?: SelectSubset<T, RatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RatingUpdateManyArgs>(args: SelectSubset<T, RatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rating.
     * @param {RatingUpsertArgs} args - Arguments to update or create a Rating.
     * @example
     * // Update or create a Rating
     * const rating = await prisma.rating.upsert({
     *   create: {
     *     // ... data to create a Rating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rating we want to update
     *   }
     * })
     */
    upsert<T extends RatingUpsertArgs>(args: SelectSubset<T, RatingUpsertArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingCountArgs} args - Arguments to filter Ratings to count.
     * @example
     * // Count the number of Ratings
     * const count = await prisma.rating.count({
     *   where: {
     *     // ... the filter for the Ratings we want to count
     *   }
     * })
    **/
    count<T extends RatingCountArgs>(
      args?: Subset<T, RatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RatingAggregateArgs>(args: Subset<T, RatingAggregateArgs>): Prisma.PrismaPromise<GetRatingAggregateType<T>>

    /**
     * Group by Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatingGroupByArgs['orderBy'] }
        : { orderBy?: RatingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rating model
   */
  readonly fields: RatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movie<T extends MovieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieDefaultArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rating model
   */
  interface RatingFieldRefs {
    readonly value: FieldRef<"Rating", 'Int'>
    readonly movieId: FieldRef<"Rating", 'Int'>
    readonly userId: FieldRef<"Rating", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Rating findUnique
   */
  export type RatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findUniqueOrThrow
   */
  export type RatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findFirst
   */
  export type RatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findFirstOrThrow
   */
  export type RatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findMany
   */
  export type RatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Ratings to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating create
   */
  export type RatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to create a Rating.
     */
    data: XOR<RatingCreateInput, RatingUncheckedCreateInput>
  }

  /**
   * Rating createMany
   */
  export type RatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rating update
   */
  export type RatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to update a Rating.
     */
    data: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
    /**
     * Choose, which Rating to update.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating updateMany
   */
  export type RatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
  }

  /**
   * Rating upsert
   */
  export type RatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The filter to search for the Rating to update in case it exists.
     */
    where: RatingWhereUniqueInput
    /**
     * In case the Rating found by the `where` argument doesn't exist, create a new Rating with this data.
     */
    create: XOR<RatingCreateInput, RatingUncheckedCreateInput>
    /**
     * In case the Rating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
  }

  /**
   * Rating delete
   */
  export type RatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter which Rating to delete.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating deleteMany
   */
  export type RatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ratings to delete
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to delete.
     */
    limit?: number
  }

  /**
   * Rating without action
   */
  export type RatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    movieId: number | null
    userId: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    movieId: number | null
    userId: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    title: string | null
    text: string | null
    createdAt: Date | null
    updatedAt: Date | null
    movieId: number | null
    userId: number | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    title: string | null
    text: string | null
    createdAt: Date | null
    updatedAt: Date | null
    movieId: number | null
    userId: number | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    title: number
    text: number
    createdAt: number
    updatedAt: number
    movieId: number
    userId: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    movieId?: true
    userId?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    movieId?: true
    userId?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    title?: true
    text?: true
    createdAt?: true
    updatedAt?: true
    movieId?: true
    userId?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    title?: true
    text?: true
    createdAt?: true
    updatedAt?: true
    movieId?: true
    userId?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    title?: true
    text?: true
    createdAt?: true
    updatedAt?: true
    movieId?: true
    userId?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    title: string
    text: string
    createdAt: Date
    updatedAt: Date
    movieId: number
    userId: number
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    movieId?: boolean
    userId?: boolean
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>



  export type ReviewSelectScalar = {
    id?: boolean
    title?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    movieId?: boolean
    userId?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "text" | "createdAt" | "updatedAt" | "movieId" | "userId", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      movie: Prisma.$MoviePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      text: string
      createdAt: Date
      updatedAt: Date
      movieId: number
      userId: number
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movie<T extends MovieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieDefaultArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly title: FieldRef<"Review", 'String'>
    readonly text: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
    readonly movieId: FieldRef<"Review", 'Int'>
    readonly userId: FieldRef<"Review", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Genre
   */

  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreAvgAggregateOutputType = {
    id: number | null
  }

  export type GenreSumAggregateOutputType = {
    id: number | null
  }

  export type GenreMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GenreMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GenreCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type GenreAvgAggregateInputType = {
    id?: true
  }

  export type GenreSumAggregateInputType = {
    id?: true
  }

  export type GenreMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenreMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenreCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type GenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genre to aggregate.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type GenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithAggregationInput | GenreOrderByWithAggregationInput[]
    by: GenreScalarFieldEnum[] | GenreScalarFieldEnum
    having?: GenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _avg?: GenreAvgAggregateInputType
    _sum?: GenreSumAggregateInputType
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }

  export type GenreGroupByOutputType = {
    id: number
    name: string
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends GenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type GenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    movies?: boolean | Genre$moviesArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genre"]>



  export type GenreSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type GenreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["genre"]>
  export type GenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | Genre$moviesArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genre"
    objects: {
      movies: Prisma.$MoviePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["genre"]>
    composites: {}
  }

  type GenreGetPayload<S extends boolean | null | undefined | GenreDefaultArgs> = $Result.GetResult<Prisma.$GenrePayload, S>

  type GenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenreCountAggregateInputType | true
    }

  export interface GenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genre'], meta: { name: 'Genre' } }
    /**
     * Find zero or one Genre that matches the filter.
     * @param {GenreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenreFindUniqueArgs>(args: SelectSubset<T, GenreFindUniqueArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenreFindUniqueOrThrowArgs>(args: SelectSubset<T, GenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenreFindFirstArgs>(args?: SelectSubset<T, GenreFindFirstArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenreFindFirstOrThrowArgs>(args?: SelectSubset<T, GenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genreWithIdOnly = await prisma.genre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GenreFindManyArgs>(args?: SelectSubset<T, GenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genre.
     * @param {GenreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
     */
    create<T extends GenreCreateArgs>(args: SelectSubset<T, GenreCreateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genres.
     * @param {GenreCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenreCreateManyArgs>(args?: SelectSubset<T, GenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Genre.
     * @param {GenreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
     */
    delete<T extends GenreDeleteArgs>(args: SelectSubset<T, GenreDeleteArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genre.
     * @param {GenreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenreUpdateArgs>(args: SelectSubset<T, GenreUpdateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genres.
     * @param {GenreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenreDeleteManyArgs>(args?: SelectSubset<T, GenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenreUpdateManyArgs>(args: SelectSubset<T, GenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Genre.
     * @param {GenreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
     */
    upsert<T extends GenreUpsertArgs>(args: SelectSubset<T, GenreUpsertArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenreCountArgs>(
      args?: Subset<T, GenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): Prisma.PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreGroupByArgs['orderBy'] }
        : { orderBy?: GenreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genre model
   */
  readonly fields: GenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movies<T extends Genre$moviesArgs<ExtArgs> = {}>(args?: Subset<T, Genre$moviesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Genre model
   */
  interface GenreFieldRefs {
    readonly id: FieldRef<"Genre", 'Int'>
    readonly name: FieldRef<"Genre", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Genre findUnique
   */
  export type GenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findUniqueOrThrow
   */
  export type GenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findFirst
   */
  export type GenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findFirstOrThrow
   */
  export type GenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findMany
   */
  export type GenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre create
   */
  export type GenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to create a Genre.
     */
    data: XOR<GenreCreateInput, GenreUncheckedCreateInput>
  }

  /**
   * Genre createMany
   */
  export type GenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genre update
   */
  export type GenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to update a Genre.
     */
    data: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
    /**
     * Choose, which Genre to update.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre updateMany
   */
  export type GenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genre upsert
   */
  export type GenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The filter to search for the Genre to update in case it exists.
     */
    where: GenreWhereUniqueInput
    /**
     * In case the Genre found by the `where` argument doesn't exist, create a new Genre with this data.
     */
    create: XOR<GenreCreateInput, GenreUncheckedCreateInput>
    /**
     * In case the Genre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
  }

  /**
   * Genre delete
   */
  export type GenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter which Genre to delete.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre deleteMany
   */
  export type GenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to delete
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to delete.
     */
    limit?: number
  }

  /**
   * Genre.movies
   */
  export type Genre$moviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    cursor?: MovieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Genre without action
   */
  export type GenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string
    password: string
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    favouriteMovies?: boolean | User$favouriteMoviesArgs<ExtArgs>
    ratings?: boolean | User$ratingsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    session?: boolean | User$sessionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favouriteMovies?: boolean | User$favouriteMoviesArgs<ExtArgs>
    ratings?: boolean | User$ratingsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    session?: boolean | User$sessionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      favouriteMovies: Prisma.$MoviePayload<ExtArgs>[]
      ratings: Prisma.$RatingPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      session: Prisma.$SessionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string
      password: string
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    favouriteMovies<T extends User$favouriteMoviesArgs<ExtArgs> = {}>(args?: Subset<T, User$favouriteMoviesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratings<T extends User$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, User$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    session<T extends User$sessionArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.favouriteMovies
   */
  export type User$favouriteMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    cursor?: MovieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * User.ratings
   */
  export type User$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.session
   */
  export type User$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    userId: number | null
  }

  export type SessionSumAggregateOutputType = {
    userId: number | null
  }

  export type SessionMinAggregateOutputType = {
    userId: number | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    userId: number | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    userId: number
    token: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    userId?: true
  }

  export type SessionSumAggregateInputType = {
    userId?: true
  }

  export type SessionMinAggregateInputType = {
    userId?: true
    token?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    userId?: true
    token?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    userId?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    userId: number
    token: string
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>



  export type SessionSelectScalar = {
    userId?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "token" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      token: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const sessionWithUserIdOnly = await prisma.session.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly userId: FieldRef<"Session", 'Int'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CelebScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    biography: 'biography',
    imageURL: 'imageURL'
  };

  export type CelebScalarFieldEnum = (typeof CelebScalarFieldEnum)[keyof typeof CelebScalarFieldEnum]


  export const MovieScalarFieldEnum: {
    id: 'id',
    movieDataId: 'movieDataId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    directorId: 'directorId'
  };

  export type MovieScalarFieldEnum = (typeof MovieScalarFieldEnum)[keyof typeof MovieScalarFieldEnum]


  export const MovieDataScalarFieldEnum: {
    id: 'id',
    title: 'title',
    storyline: 'storyline',
    posterURL: 'posterURL',
    releaseDate: 'releaseDate',
    length: 'length',
    countryOfOrigin: 'countryOfOrigin',
    productionCompany: 'productionCompany',
    language: 'language'
  };

  export type MovieDataScalarFieldEnum = (typeof MovieDataScalarFieldEnum)[keyof typeof MovieDataScalarFieldEnum]


  export const RatingScalarFieldEnum: {
    value: 'value',
    movieId: 'movieId',
    userId: 'userId'
  };

  export type RatingScalarFieldEnum = (typeof RatingScalarFieldEnum)[keyof typeof RatingScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    title: 'title',
    text: 'text',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    movieId: 'movieId',
    userId: 'userId'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    userId: 'userId',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const CelebOrderByRelevanceFieldEnum: {
    firstName: 'firstName',
    lastName: 'lastName',
    biography: 'biography',
    imageURL: 'imageURL'
  };

  export type CelebOrderByRelevanceFieldEnum = (typeof CelebOrderByRelevanceFieldEnum)[keyof typeof CelebOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const MovieDataOrderByRelevanceFieldEnum: {
    title: 'title',
    storyline: 'storyline',
    posterURL: 'posterURL',
    length: 'length',
    countryOfOrigin: 'countryOfOrigin',
    productionCompany: 'productionCompany',
    language: 'language'
  };

  export type MovieDataOrderByRelevanceFieldEnum = (typeof MovieDataOrderByRelevanceFieldEnum)[keyof typeof MovieDataOrderByRelevanceFieldEnum]


  export const ReviewOrderByRelevanceFieldEnum: {
    title: 'title',
    text: 'text'
  };

  export type ReviewOrderByRelevanceFieldEnum = (typeof ReviewOrderByRelevanceFieldEnum)[keyof typeof ReviewOrderByRelevanceFieldEnum]


  export const GenreOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type GenreOrderByRelevanceFieldEnum = (typeof GenreOrderByRelevanceFieldEnum)[keyof typeof GenreOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    name: 'name',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const SessionOrderByRelevanceFieldEnum: {
    token: 'token'
  };

  export type SessionOrderByRelevanceFieldEnum = (typeof SessionOrderByRelevanceFieldEnum)[keyof typeof SessionOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CelebWhereInput = {
    AND?: CelebWhereInput | CelebWhereInput[]
    OR?: CelebWhereInput[]
    NOT?: CelebWhereInput | CelebWhereInput[]
    id?: IntFilter<"Celeb"> | number
    firstName?: StringFilter<"Celeb"> | string
    lastName?: StringFilter<"Celeb"> | string
    biography?: StringFilter<"Celeb"> | string
    imageURL?: StringFilter<"Celeb"> | string
    director?: MovieListRelationFilter
    writer?: MovieListRelationFilter
    cast?: MovieListRelationFilter
  }

  export type CelebOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    biography?: SortOrder
    imageURL?: SortOrder
    director?: MovieOrderByRelationAggregateInput
    writer?: MovieOrderByRelationAggregateInput
    cast?: MovieOrderByRelationAggregateInput
    _relevance?: CelebOrderByRelevanceInput
  }

  export type CelebWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CelebWhereInput | CelebWhereInput[]
    OR?: CelebWhereInput[]
    NOT?: CelebWhereInput | CelebWhereInput[]
    firstName?: StringFilter<"Celeb"> | string
    lastName?: StringFilter<"Celeb"> | string
    biography?: StringFilter<"Celeb"> | string
    imageURL?: StringFilter<"Celeb"> | string
    director?: MovieListRelationFilter
    writer?: MovieListRelationFilter
    cast?: MovieListRelationFilter
  }, "id">

  export type CelebOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    biography?: SortOrder
    imageURL?: SortOrder
    _count?: CelebCountOrderByAggregateInput
    _avg?: CelebAvgOrderByAggregateInput
    _max?: CelebMaxOrderByAggregateInput
    _min?: CelebMinOrderByAggregateInput
    _sum?: CelebSumOrderByAggregateInput
  }

  export type CelebScalarWhereWithAggregatesInput = {
    AND?: CelebScalarWhereWithAggregatesInput | CelebScalarWhereWithAggregatesInput[]
    OR?: CelebScalarWhereWithAggregatesInput[]
    NOT?: CelebScalarWhereWithAggregatesInput | CelebScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Celeb"> | number
    firstName?: StringWithAggregatesFilter<"Celeb"> | string
    lastName?: StringWithAggregatesFilter<"Celeb"> | string
    biography?: StringWithAggregatesFilter<"Celeb"> | string
    imageURL?: StringWithAggregatesFilter<"Celeb"> | string
  }

  export type MovieWhereInput = {
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    id?: IntFilter<"Movie"> | number
    movieDataId?: IntFilter<"Movie"> | number
    createdAt?: DateTimeFilter<"Movie"> | Date | string
    updatedAt?: DateTimeFilter<"Movie"> | Date | string
    directorId?: IntNullableFilter<"Movie"> | number | null
    movieData?: XOR<MovieDataScalarRelationFilter, MovieDataWhereInput>
    addedToFavBy?: UserListRelationFilter
    ratings?: RatingListRelationFilter
    reviews?: ReviewListRelationFilter
    genres?: GenreListRelationFilter
    director?: XOR<CelebNullableScalarRelationFilter, CelebWhereInput> | null
    writers?: CelebListRelationFilter
    cast?: CelebListRelationFilter
  }

  export type MovieOrderByWithRelationInput = {
    id?: SortOrder
    movieDataId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    directorId?: SortOrderInput | SortOrder
    movieData?: MovieDataOrderByWithRelationInput
    addedToFavBy?: UserOrderByRelationAggregateInput
    ratings?: RatingOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    genres?: GenreOrderByRelationAggregateInput
    director?: CelebOrderByWithRelationInput
    writers?: CelebOrderByRelationAggregateInput
    cast?: CelebOrderByRelationAggregateInput
  }

  export type MovieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    movieDataId?: number
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    createdAt?: DateTimeFilter<"Movie"> | Date | string
    updatedAt?: DateTimeFilter<"Movie"> | Date | string
    directorId?: IntNullableFilter<"Movie"> | number | null
    movieData?: XOR<MovieDataScalarRelationFilter, MovieDataWhereInput>
    addedToFavBy?: UserListRelationFilter
    ratings?: RatingListRelationFilter
    reviews?: ReviewListRelationFilter
    genres?: GenreListRelationFilter
    director?: XOR<CelebNullableScalarRelationFilter, CelebWhereInput> | null
    writers?: CelebListRelationFilter
    cast?: CelebListRelationFilter
  }, "id" | "movieDataId">

  export type MovieOrderByWithAggregationInput = {
    id?: SortOrder
    movieDataId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    directorId?: SortOrderInput | SortOrder
    _count?: MovieCountOrderByAggregateInput
    _avg?: MovieAvgOrderByAggregateInput
    _max?: MovieMaxOrderByAggregateInput
    _min?: MovieMinOrderByAggregateInput
    _sum?: MovieSumOrderByAggregateInput
  }

  export type MovieScalarWhereWithAggregatesInput = {
    AND?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    OR?: MovieScalarWhereWithAggregatesInput[]
    NOT?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Movie"> | number
    movieDataId?: IntWithAggregatesFilter<"Movie"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Movie"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Movie"> | Date | string
    directorId?: IntNullableWithAggregatesFilter<"Movie"> | number | null
  }

  export type MovieDataWhereInput = {
    AND?: MovieDataWhereInput | MovieDataWhereInput[]
    OR?: MovieDataWhereInput[]
    NOT?: MovieDataWhereInput | MovieDataWhereInput[]
    id?: IntFilter<"MovieData"> | number
    title?: StringFilter<"MovieData"> | string
    storyline?: StringFilter<"MovieData"> | string
    posterURL?: StringFilter<"MovieData"> | string
    releaseDate?: DateTimeFilter<"MovieData"> | Date | string
    length?: StringFilter<"MovieData"> | string
    countryOfOrigin?: StringFilter<"MovieData"> | string
    productionCompany?: StringFilter<"MovieData"> | string
    language?: StringFilter<"MovieData"> | string
    Movie?: XOR<MovieNullableScalarRelationFilter, MovieWhereInput> | null
  }

  export type MovieDataOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    storyline?: SortOrder
    posterURL?: SortOrder
    releaseDate?: SortOrder
    length?: SortOrder
    countryOfOrigin?: SortOrder
    productionCompany?: SortOrder
    language?: SortOrder
    Movie?: MovieOrderByWithRelationInput
    _relevance?: MovieDataOrderByRelevanceInput
  }

  export type MovieDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MovieDataWhereInput | MovieDataWhereInput[]
    OR?: MovieDataWhereInput[]
    NOT?: MovieDataWhereInput | MovieDataWhereInput[]
    title?: StringFilter<"MovieData"> | string
    storyline?: StringFilter<"MovieData"> | string
    posterURL?: StringFilter<"MovieData"> | string
    releaseDate?: DateTimeFilter<"MovieData"> | Date | string
    length?: StringFilter<"MovieData"> | string
    countryOfOrigin?: StringFilter<"MovieData"> | string
    productionCompany?: StringFilter<"MovieData"> | string
    language?: StringFilter<"MovieData"> | string
    Movie?: XOR<MovieNullableScalarRelationFilter, MovieWhereInput> | null
  }, "id">

  export type MovieDataOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    storyline?: SortOrder
    posterURL?: SortOrder
    releaseDate?: SortOrder
    length?: SortOrder
    countryOfOrigin?: SortOrder
    productionCompany?: SortOrder
    language?: SortOrder
    _count?: MovieDataCountOrderByAggregateInput
    _avg?: MovieDataAvgOrderByAggregateInput
    _max?: MovieDataMaxOrderByAggregateInput
    _min?: MovieDataMinOrderByAggregateInput
    _sum?: MovieDataSumOrderByAggregateInput
  }

  export type MovieDataScalarWhereWithAggregatesInput = {
    AND?: MovieDataScalarWhereWithAggregatesInput | MovieDataScalarWhereWithAggregatesInput[]
    OR?: MovieDataScalarWhereWithAggregatesInput[]
    NOT?: MovieDataScalarWhereWithAggregatesInput | MovieDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MovieData"> | number
    title?: StringWithAggregatesFilter<"MovieData"> | string
    storyline?: StringWithAggregatesFilter<"MovieData"> | string
    posterURL?: StringWithAggregatesFilter<"MovieData"> | string
    releaseDate?: DateTimeWithAggregatesFilter<"MovieData"> | Date | string
    length?: StringWithAggregatesFilter<"MovieData"> | string
    countryOfOrigin?: StringWithAggregatesFilter<"MovieData"> | string
    productionCompany?: StringWithAggregatesFilter<"MovieData"> | string
    language?: StringWithAggregatesFilter<"MovieData"> | string
  }

  export type RatingWhereInput = {
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    value?: IntFilter<"Rating"> | number
    movieId?: IntFilter<"Rating"> | number
    userId?: IntFilter<"Rating"> | number
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RatingOrderByWithRelationInput = {
    value?: SortOrder
    movieId?: SortOrder
    userId?: SortOrder
    movie?: MovieOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type RatingWhereUniqueInput = Prisma.AtLeast<{
    movieId_userId?: RatingMovieIdUserIdCompoundUniqueInput
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    value?: IntFilter<"Rating"> | number
    movieId?: IntFilter<"Rating"> | number
    userId?: IntFilter<"Rating"> | number
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "movieId_userId">

  export type RatingOrderByWithAggregationInput = {
    value?: SortOrder
    movieId?: SortOrder
    userId?: SortOrder
    _count?: RatingCountOrderByAggregateInput
    _avg?: RatingAvgOrderByAggregateInput
    _max?: RatingMaxOrderByAggregateInput
    _min?: RatingMinOrderByAggregateInput
    _sum?: RatingSumOrderByAggregateInput
  }

  export type RatingScalarWhereWithAggregatesInput = {
    AND?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    OR?: RatingScalarWhereWithAggregatesInput[]
    NOT?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    value?: IntWithAggregatesFilter<"Rating"> | number
    movieId?: IntWithAggregatesFilter<"Rating"> | number
    userId?: IntWithAggregatesFilter<"Rating"> | number
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    title?: StringFilter<"Review"> | string
    text?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    movieId?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movieId?: SortOrder
    userId?: SortOrder
    movie?: MovieOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: ReviewOrderByRelevanceInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    title?: StringFilter<"Review"> | string
    text?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    movieId?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movieId?: SortOrder
    userId?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    title?: StringWithAggregatesFilter<"Review"> | string
    text?: StringWithAggregatesFilter<"Review"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    movieId?: IntWithAggregatesFilter<"Review"> | number
    userId?: IntWithAggregatesFilter<"Review"> | number
  }

  export type GenreWhereInput = {
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    id?: IntFilter<"Genre"> | number
    name?: StringFilter<"Genre"> | string
    movies?: MovieListRelationFilter
  }

  export type GenreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    movies?: MovieOrderByRelationAggregateInput
    _relevance?: GenreOrderByRelevanceInput
  }

  export type GenreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    name?: StringFilter<"Genre"> | string
    movies?: MovieListRelationFilter
  }, "id">

  export type GenreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: GenreCountOrderByAggregateInput
    _avg?: GenreAvgOrderByAggregateInput
    _max?: GenreMaxOrderByAggregateInput
    _min?: GenreMinOrderByAggregateInput
    _sum?: GenreSumOrderByAggregateInput
  }

  export type GenreScalarWhereWithAggregatesInput = {
    AND?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    OR?: GenreScalarWhereWithAggregatesInput[]
    NOT?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Genre"> | number
    name?: StringWithAggregatesFilter<"Genre"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    favouriteMovies?: MovieListRelationFilter
    ratings?: RatingListRelationFilter
    reviews?: ReviewListRelationFilter
    session?: XOR<SessionNullableScalarRelationFilter, SessionWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    favouriteMovies?: MovieOrderByRelationAggregateInput
    ratings?: RatingOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    session?: SessionOrderByWithRelationInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    favouriteMovies?: MovieListRelationFilter
    ratings?: RatingListRelationFilter
    reviews?: ReviewListRelationFilter
    session?: XOR<SessionNullableScalarRelationFilter, SessionWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: IntFilter<"Session"> | number
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: SessionOrderByRelevanceInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId" | "token">

  export type SessionOrderByWithAggregationInput = {
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"Session"> | number
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type CelebCreateInput = {
    firstName: string
    lastName: string
    biography: string
    imageURL: string
    director?: MovieCreateNestedManyWithoutDirectorInput
    writer?: MovieCreateNestedManyWithoutWritersInput
    cast?: MovieCreateNestedManyWithoutCastInput
  }

  export type CelebUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    biography: string
    imageURL: string
    director?: MovieUncheckedCreateNestedManyWithoutDirectorInput
    writer?: MovieUncheckedCreateNestedManyWithoutWritersInput
    cast?: MovieUncheckedCreateNestedManyWithoutCastInput
  }

  export type CelebUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    biography?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    director?: MovieUpdateManyWithoutDirectorNestedInput
    writer?: MovieUpdateManyWithoutWritersNestedInput
    cast?: MovieUpdateManyWithoutCastNestedInput
  }

  export type CelebUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    biography?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    director?: MovieUncheckedUpdateManyWithoutDirectorNestedInput
    writer?: MovieUncheckedUpdateManyWithoutWritersNestedInput
    cast?: MovieUncheckedUpdateManyWithoutCastNestedInput
  }

  export type CelebCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    biography: string
    imageURL: string
  }

  export type CelebUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    biography?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
  }

  export type CelebUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    biography?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
  }

  export type MovieCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    movieData: MovieDataCreateNestedOneWithoutMovieInput
    addedToFavBy?: UserCreateNestedManyWithoutFavouriteMoviesInput
    ratings?: RatingCreateNestedManyWithoutMovieInput
    reviews?: ReviewCreateNestedManyWithoutMovieInput
    genres?: GenreCreateNestedManyWithoutMoviesInput
    director?: CelebCreateNestedOneWithoutDirectorInput
    writers?: CelebCreateNestedManyWithoutWriterInput
    cast?: CelebCreateNestedManyWithoutCastInput
  }

  export type MovieUncheckedCreateInput = {
    id?: number
    movieDataId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    directorId?: number | null
    addedToFavBy?: UserUncheckedCreateNestedManyWithoutFavouriteMoviesInput
    ratings?: RatingUncheckedCreateNestedManyWithoutMovieInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutMovieInput
    genres?: GenreUncheckedCreateNestedManyWithoutMoviesInput
    writers?: CelebUncheckedCreateNestedManyWithoutWriterInput
    cast?: CelebUncheckedCreateNestedManyWithoutCastInput
  }

  export type MovieUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieData?: MovieDataUpdateOneRequiredWithoutMovieNestedInput
    addedToFavBy?: UserUpdateManyWithoutFavouriteMoviesNestedInput
    ratings?: RatingUpdateManyWithoutMovieNestedInput
    reviews?: ReviewUpdateManyWithoutMovieNestedInput
    genres?: GenreUpdateManyWithoutMoviesNestedInput
    director?: CelebUpdateOneWithoutDirectorNestedInput
    writers?: CelebUpdateManyWithoutWriterNestedInput
    cast?: CelebUpdateManyWithoutCastNestedInput
  }

  export type MovieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieDataId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    directorId?: NullableIntFieldUpdateOperationsInput | number | null
    addedToFavBy?: UserUncheckedUpdateManyWithoutFavouriteMoviesNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutMovieNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutMovieNestedInput
    genres?: GenreUncheckedUpdateManyWithoutMoviesNestedInput
    writers?: CelebUncheckedUpdateManyWithoutWriterNestedInput
    cast?: CelebUncheckedUpdateManyWithoutCastNestedInput
  }

  export type MovieCreateManyInput = {
    id?: number
    movieDataId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    directorId?: number | null
  }

  export type MovieUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieDataId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    directorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MovieDataCreateInput = {
    title: string
    storyline: string
    posterURL: string
    releaseDate: Date | string
    length: string
    countryOfOrigin: string
    productionCompany: string
    language: string
    Movie?: MovieCreateNestedOneWithoutMovieDataInput
  }

  export type MovieDataUncheckedCreateInput = {
    id?: number
    title: string
    storyline: string
    posterURL: string
    releaseDate: Date | string
    length: string
    countryOfOrigin: string
    productionCompany: string
    language: string
    Movie?: MovieUncheckedCreateNestedOneWithoutMovieDataInput
  }

  export type MovieDataUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    storyline?: StringFieldUpdateOperationsInput | string
    posterURL?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    length?: StringFieldUpdateOperationsInput | string
    countryOfOrigin?: StringFieldUpdateOperationsInput | string
    productionCompany?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    Movie?: MovieUpdateOneWithoutMovieDataNestedInput
  }

  export type MovieDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    storyline?: StringFieldUpdateOperationsInput | string
    posterURL?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    length?: StringFieldUpdateOperationsInput | string
    countryOfOrigin?: StringFieldUpdateOperationsInput | string
    productionCompany?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    Movie?: MovieUncheckedUpdateOneWithoutMovieDataNestedInput
  }

  export type MovieDataCreateManyInput = {
    id?: number
    title: string
    storyline: string
    posterURL: string
    releaseDate: Date | string
    length: string
    countryOfOrigin: string
    productionCompany: string
    language: string
  }

  export type MovieDataUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    storyline?: StringFieldUpdateOperationsInput | string
    posterURL?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    length?: StringFieldUpdateOperationsInput | string
    countryOfOrigin?: StringFieldUpdateOperationsInput | string
    productionCompany?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
  }

  export type MovieDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    storyline?: StringFieldUpdateOperationsInput | string
    posterURL?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    length?: StringFieldUpdateOperationsInput | string
    countryOfOrigin?: StringFieldUpdateOperationsInput | string
    productionCompany?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
  }

  export type RatingCreateInput = {
    value: number
    movie: MovieCreateNestedOneWithoutRatingsInput
    user: UserCreateNestedOneWithoutRatingsInput
  }

  export type RatingUncheckedCreateInput = {
    value: number
    movieId: number
    userId: number
  }

  export type RatingUpdateInput = {
    value?: IntFieldUpdateOperationsInput | number
    movie?: MovieUpdateOneRequiredWithoutRatingsNestedInput
    user?: UserUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingUncheckedUpdateInput = {
    value?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type RatingCreateManyInput = {
    value: number
    movieId: number
    userId: number
  }

  export type RatingUpdateManyMutationInput = {
    value?: IntFieldUpdateOperationsInput | number
  }

  export type RatingUncheckedUpdateManyInput = {
    value?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewCreateInput = {
    title: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    movie: MovieCreateNestedOneWithoutReviewsInput
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    title: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    movieId: number
    userId: number
  }

  export type ReviewUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneRequiredWithoutReviewsNestedInput
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewCreateManyInput = {
    id?: number
    title: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    movieId: number
    userId: number
  }

  export type ReviewUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type GenreCreateInput = {
    name: string
    movies?: MovieCreateNestedManyWithoutGenresInput
  }

  export type GenreUncheckedCreateInput = {
    id?: number
    name: string
    movies?: MovieUncheckedCreateNestedManyWithoutGenresInput
  }

  export type GenreUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    movies?: MovieUpdateManyWithoutGenresNestedInput
  }

  export type GenreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    movies?: MovieUncheckedUpdateManyWithoutGenresNestedInput
  }

  export type GenreCreateManyInput = {
    id?: number
    name: string
  }

  export type GenreUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    email: string
    name: string
    password: string
    role?: $Enums.Role
    favouriteMovies?: MovieCreateNestedManyWithoutAddedToFavByInput
    ratings?: RatingCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    session?: SessionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    password: string
    role?: $Enums.Role
    favouriteMovies?: MovieUncheckedCreateNestedManyWithoutAddedToFavByInput
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    session?: SessionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    favouriteMovies?: MovieUpdateManyWithoutAddedToFavByNestedInput
    ratings?: RatingUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    session?: SessionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    favouriteMovies?: MovieUncheckedUpdateManyWithoutAddedToFavByNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    session?: SessionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name: string
    password: string
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type SessionCreateInput = {
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    userId: number
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    userId: number
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type MovieListRelationFilter = {
    every?: MovieWhereInput
    some?: MovieWhereInput
    none?: MovieWhereInput
  }

  export type MovieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CelebOrderByRelevanceInput = {
    fields: CelebOrderByRelevanceFieldEnum | CelebOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CelebCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    biography?: SortOrder
    imageURL?: SortOrder
  }

  export type CelebAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CelebMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    biography?: SortOrder
    imageURL?: SortOrder
  }

  export type CelebMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    biography?: SortOrder
    imageURL?: SortOrder
  }

  export type CelebSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MovieDataScalarRelationFilter = {
    is?: MovieDataWhereInput
    isNot?: MovieDataWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type RatingListRelationFilter = {
    every?: RatingWhereInput
    some?: RatingWhereInput
    none?: RatingWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type GenreListRelationFilter = {
    every?: GenreWhereInput
    some?: GenreWhereInput
    none?: GenreWhereInput
  }

  export type CelebNullableScalarRelationFilter = {
    is?: CelebWhereInput | null
    isNot?: CelebWhereInput | null
  }

  export type CelebListRelationFilter = {
    every?: CelebWhereInput
    some?: CelebWhereInput
    none?: CelebWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GenreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CelebOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovieCountOrderByAggregateInput = {
    id?: SortOrder
    movieDataId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    directorId?: SortOrder
  }

  export type MovieAvgOrderByAggregateInput = {
    id?: SortOrder
    movieDataId?: SortOrder
    directorId?: SortOrder
  }

  export type MovieMaxOrderByAggregateInput = {
    id?: SortOrder
    movieDataId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    directorId?: SortOrder
  }

  export type MovieMinOrderByAggregateInput = {
    id?: SortOrder
    movieDataId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    directorId?: SortOrder
  }

  export type MovieSumOrderByAggregateInput = {
    id?: SortOrder
    movieDataId?: SortOrder
    directorId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type MovieNullableScalarRelationFilter = {
    is?: MovieWhereInput | null
    isNot?: MovieWhereInput | null
  }

  export type MovieDataOrderByRelevanceInput = {
    fields: MovieDataOrderByRelevanceFieldEnum | MovieDataOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MovieDataCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    storyline?: SortOrder
    posterURL?: SortOrder
    releaseDate?: SortOrder
    length?: SortOrder
    countryOfOrigin?: SortOrder
    productionCompany?: SortOrder
    language?: SortOrder
  }

  export type MovieDataAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MovieDataMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    storyline?: SortOrder
    posterURL?: SortOrder
    releaseDate?: SortOrder
    length?: SortOrder
    countryOfOrigin?: SortOrder
    productionCompany?: SortOrder
    language?: SortOrder
  }

  export type MovieDataMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    storyline?: SortOrder
    posterURL?: SortOrder
    releaseDate?: SortOrder
    length?: SortOrder
    countryOfOrigin?: SortOrder
    productionCompany?: SortOrder
    language?: SortOrder
  }

  export type MovieDataSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MovieScalarRelationFilter = {
    is?: MovieWhereInput
    isNot?: MovieWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RatingMovieIdUserIdCompoundUniqueInput = {
    movieId: number
    userId: number
  }

  export type RatingCountOrderByAggregateInput = {
    value?: SortOrder
    movieId?: SortOrder
    userId?: SortOrder
  }

  export type RatingAvgOrderByAggregateInput = {
    value?: SortOrder
    movieId?: SortOrder
    userId?: SortOrder
  }

  export type RatingMaxOrderByAggregateInput = {
    value?: SortOrder
    movieId?: SortOrder
    userId?: SortOrder
  }

  export type RatingMinOrderByAggregateInput = {
    value?: SortOrder
    movieId?: SortOrder
    userId?: SortOrder
  }

  export type RatingSumOrderByAggregateInput = {
    value?: SortOrder
    movieId?: SortOrder
    userId?: SortOrder
  }

  export type ReviewOrderByRelevanceInput = {
    fields: ReviewOrderByRelevanceFieldEnum | ReviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movieId?: SortOrder
    userId?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    userId?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movieId?: SortOrder
    userId?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movieId?: SortOrder
    userId?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    movieId?: SortOrder
    userId?: SortOrder
  }

  export type GenreOrderByRelevanceInput = {
    fields: GenreOrderByRelevanceFieldEnum | GenreOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GenreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenreAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenreSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type SessionNullableScalarRelationFilter = {
    is?: SessionWhereInput | null
    isNot?: SessionWhereInput | null
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type SessionOrderByRelevanceInput = {
    fields: SessionOrderByRelevanceFieldEnum | SessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SessionCountOrderByAggregateInput = {
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type MovieCreateNestedManyWithoutDirectorInput = {
    create?: XOR<MovieCreateWithoutDirectorInput, MovieUncheckedCreateWithoutDirectorInput> | MovieCreateWithoutDirectorInput[] | MovieUncheckedCreateWithoutDirectorInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutDirectorInput | MovieCreateOrConnectWithoutDirectorInput[]
    createMany?: MovieCreateManyDirectorInputEnvelope
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
  }

  export type MovieCreateNestedManyWithoutWritersInput = {
    create?: XOR<MovieCreateWithoutWritersInput, MovieUncheckedCreateWithoutWritersInput> | MovieCreateWithoutWritersInput[] | MovieUncheckedCreateWithoutWritersInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutWritersInput | MovieCreateOrConnectWithoutWritersInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
  }

  export type MovieCreateNestedManyWithoutCastInput = {
    create?: XOR<MovieCreateWithoutCastInput, MovieUncheckedCreateWithoutCastInput> | MovieCreateWithoutCastInput[] | MovieUncheckedCreateWithoutCastInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutCastInput | MovieCreateOrConnectWithoutCastInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
  }

  export type MovieUncheckedCreateNestedManyWithoutDirectorInput = {
    create?: XOR<MovieCreateWithoutDirectorInput, MovieUncheckedCreateWithoutDirectorInput> | MovieCreateWithoutDirectorInput[] | MovieUncheckedCreateWithoutDirectorInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutDirectorInput | MovieCreateOrConnectWithoutDirectorInput[]
    createMany?: MovieCreateManyDirectorInputEnvelope
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
  }

  export type MovieUncheckedCreateNestedManyWithoutWritersInput = {
    create?: XOR<MovieCreateWithoutWritersInput, MovieUncheckedCreateWithoutWritersInput> | MovieCreateWithoutWritersInput[] | MovieUncheckedCreateWithoutWritersInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutWritersInput | MovieCreateOrConnectWithoutWritersInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
  }

  export type MovieUncheckedCreateNestedManyWithoutCastInput = {
    create?: XOR<MovieCreateWithoutCastInput, MovieUncheckedCreateWithoutCastInput> | MovieCreateWithoutCastInput[] | MovieUncheckedCreateWithoutCastInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutCastInput | MovieCreateOrConnectWithoutCastInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type MovieUpdateManyWithoutDirectorNestedInput = {
    create?: XOR<MovieCreateWithoutDirectorInput, MovieUncheckedCreateWithoutDirectorInput> | MovieCreateWithoutDirectorInput[] | MovieUncheckedCreateWithoutDirectorInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutDirectorInput | MovieCreateOrConnectWithoutDirectorInput[]
    upsert?: MovieUpsertWithWhereUniqueWithoutDirectorInput | MovieUpsertWithWhereUniqueWithoutDirectorInput[]
    createMany?: MovieCreateManyDirectorInputEnvelope
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    update?: MovieUpdateWithWhereUniqueWithoutDirectorInput | MovieUpdateWithWhereUniqueWithoutDirectorInput[]
    updateMany?: MovieUpdateManyWithWhereWithoutDirectorInput | MovieUpdateManyWithWhereWithoutDirectorInput[]
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[]
  }

  export type MovieUpdateManyWithoutWritersNestedInput = {
    create?: XOR<MovieCreateWithoutWritersInput, MovieUncheckedCreateWithoutWritersInput> | MovieCreateWithoutWritersInput[] | MovieUncheckedCreateWithoutWritersInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutWritersInput | MovieCreateOrConnectWithoutWritersInput[]
    upsert?: MovieUpsertWithWhereUniqueWithoutWritersInput | MovieUpsertWithWhereUniqueWithoutWritersInput[]
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    update?: MovieUpdateWithWhereUniqueWithoutWritersInput | MovieUpdateWithWhereUniqueWithoutWritersInput[]
    updateMany?: MovieUpdateManyWithWhereWithoutWritersInput | MovieUpdateManyWithWhereWithoutWritersInput[]
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[]
  }

  export type MovieUpdateManyWithoutCastNestedInput = {
    create?: XOR<MovieCreateWithoutCastInput, MovieUncheckedCreateWithoutCastInput> | MovieCreateWithoutCastInput[] | MovieUncheckedCreateWithoutCastInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutCastInput | MovieCreateOrConnectWithoutCastInput[]
    upsert?: MovieUpsertWithWhereUniqueWithoutCastInput | MovieUpsertWithWhereUniqueWithoutCastInput[]
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    update?: MovieUpdateWithWhereUniqueWithoutCastInput | MovieUpdateWithWhereUniqueWithoutCastInput[]
    updateMany?: MovieUpdateManyWithWhereWithoutCastInput | MovieUpdateManyWithWhereWithoutCastInput[]
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MovieUncheckedUpdateManyWithoutDirectorNestedInput = {
    create?: XOR<MovieCreateWithoutDirectorInput, MovieUncheckedCreateWithoutDirectorInput> | MovieCreateWithoutDirectorInput[] | MovieUncheckedCreateWithoutDirectorInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutDirectorInput | MovieCreateOrConnectWithoutDirectorInput[]
    upsert?: MovieUpsertWithWhereUniqueWithoutDirectorInput | MovieUpsertWithWhereUniqueWithoutDirectorInput[]
    createMany?: MovieCreateManyDirectorInputEnvelope
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    update?: MovieUpdateWithWhereUniqueWithoutDirectorInput | MovieUpdateWithWhereUniqueWithoutDirectorInput[]
    updateMany?: MovieUpdateManyWithWhereWithoutDirectorInput | MovieUpdateManyWithWhereWithoutDirectorInput[]
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[]
  }

  export type MovieUncheckedUpdateManyWithoutWritersNestedInput = {
    create?: XOR<MovieCreateWithoutWritersInput, MovieUncheckedCreateWithoutWritersInput> | MovieCreateWithoutWritersInput[] | MovieUncheckedCreateWithoutWritersInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutWritersInput | MovieCreateOrConnectWithoutWritersInput[]
    upsert?: MovieUpsertWithWhereUniqueWithoutWritersInput | MovieUpsertWithWhereUniqueWithoutWritersInput[]
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    update?: MovieUpdateWithWhereUniqueWithoutWritersInput | MovieUpdateWithWhereUniqueWithoutWritersInput[]
    updateMany?: MovieUpdateManyWithWhereWithoutWritersInput | MovieUpdateManyWithWhereWithoutWritersInput[]
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[]
  }

  export type MovieUncheckedUpdateManyWithoutCastNestedInput = {
    create?: XOR<MovieCreateWithoutCastInput, MovieUncheckedCreateWithoutCastInput> | MovieCreateWithoutCastInput[] | MovieUncheckedCreateWithoutCastInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutCastInput | MovieCreateOrConnectWithoutCastInput[]
    upsert?: MovieUpsertWithWhereUniqueWithoutCastInput | MovieUpsertWithWhereUniqueWithoutCastInput[]
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    update?: MovieUpdateWithWhereUniqueWithoutCastInput | MovieUpdateWithWhereUniqueWithoutCastInput[]
    updateMany?: MovieUpdateManyWithWhereWithoutCastInput | MovieUpdateManyWithWhereWithoutCastInput[]
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[]
  }

  export type MovieDataCreateNestedOneWithoutMovieInput = {
    create?: XOR<MovieDataCreateWithoutMovieInput, MovieDataUncheckedCreateWithoutMovieInput>
    connectOrCreate?: MovieDataCreateOrConnectWithoutMovieInput
    connect?: MovieDataWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutFavouriteMoviesInput = {
    create?: XOR<UserCreateWithoutFavouriteMoviesInput, UserUncheckedCreateWithoutFavouriteMoviesInput> | UserCreateWithoutFavouriteMoviesInput[] | UserUncheckedCreateWithoutFavouriteMoviesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavouriteMoviesInput | UserCreateOrConnectWithoutFavouriteMoviesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RatingCreateNestedManyWithoutMovieInput = {
    create?: XOR<RatingCreateWithoutMovieInput, RatingUncheckedCreateWithoutMovieInput> | RatingCreateWithoutMovieInput[] | RatingUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutMovieInput | RatingCreateOrConnectWithoutMovieInput[]
    createMany?: RatingCreateManyMovieInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutMovieInput = {
    create?: XOR<ReviewCreateWithoutMovieInput, ReviewUncheckedCreateWithoutMovieInput> | ReviewCreateWithoutMovieInput[] | ReviewUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutMovieInput | ReviewCreateOrConnectWithoutMovieInput[]
    createMany?: ReviewCreateManyMovieInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type GenreCreateNestedManyWithoutMoviesInput = {
    create?: XOR<GenreCreateWithoutMoviesInput, GenreUncheckedCreateWithoutMoviesInput> | GenreCreateWithoutMoviesInput[] | GenreUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutMoviesInput | GenreCreateOrConnectWithoutMoviesInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
  }

  export type CelebCreateNestedOneWithoutDirectorInput = {
    create?: XOR<CelebCreateWithoutDirectorInput, CelebUncheckedCreateWithoutDirectorInput>
    connectOrCreate?: CelebCreateOrConnectWithoutDirectorInput
    connect?: CelebWhereUniqueInput
  }

  export type CelebCreateNestedManyWithoutWriterInput = {
    create?: XOR<CelebCreateWithoutWriterInput, CelebUncheckedCreateWithoutWriterInput> | CelebCreateWithoutWriterInput[] | CelebUncheckedCreateWithoutWriterInput[]
    connectOrCreate?: CelebCreateOrConnectWithoutWriterInput | CelebCreateOrConnectWithoutWriterInput[]
    connect?: CelebWhereUniqueInput | CelebWhereUniqueInput[]
  }

  export type CelebCreateNestedManyWithoutCastInput = {
    create?: XOR<CelebCreateWithoutCastInput, CelebUncheckedCreateWithoutCastInput> | CelebCreateWithoutCastInput[] | CelebUncheckedCreateWithoutCastInput[]
    connectOrCreate?: CelebCreateOrConnectWithoutCastInput | CelebCreateOrConnectWithoutCastInput[]
    connect?: CelebWhereUniqueInput | CelebWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutFavouriteMoviesInput = {
    create?: XOR<UserCreateWithoutFavouriteMoviesInput, UserUncheckedCreateWithoutFavouriteMoviesInput> | UserCreateWithoutFavouriteMoviesInput[] | UserUncheckedCreateWithoutFavouriteMoviesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavouriteMoviesInput | UserCreateOrConnectWithoutFavouriteMoviesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<RatingCreateWithoutMovieInput, RatingUncheckedCreateWithoutMovieInput> | RatingCreateWithoutMovieInput[] | RatingUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutMovieInput | RatingCreateOrConnectWithoutMovieInput[]
    createMany?: RatingCreateManyMovieInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<ReviewCreateWithoutMovieInput, ReviewUncheckedCreateWithoutMovieInput> | ReviewCreateWithoutMovieInput[] | ReviewUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutMovieInput | ReviewCreateOrConnectWithoutMovieInput[]
    createMany?: ReviewCreateManyMovieInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type GenreUncheckedCreateNestedManyWithoutMoviesInput = {
    create?: XOR<GenreCreateWithoutMoviesInput, GenreUncheckedCreateWithoutMoviesInput> | GenreCreateWithoutMoviesInput[] | GenreUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutMoviesInput | GenreCreateOrConnectWithoutMoviesInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
  }

  export type CelebUncheckedCreateNestedManyWithoutWriterInput = {
    create?: XOR<CelebCreateWithoutWriterInput, CelebUncheckedCreateWithoutWriterInput> | CelebCreateWithoutWriterInput[] | CelebUncheckedCreateWithoutWriterInput[]
    connectOrCreate?: CelebCreateOrConnectWithoutWriterInput | CelebCreateOrConnectWithoutWriterInput[]
    connect?: CelebWhereUniqueInput | CelebWhereUniqueInput[]
  }

  export type CelebUncheckedCreateNestedManyWithoutCastInput = {
    create?: XOR<CelebCreateWithoutCastInput, CelebUncheckedCreateWithoutCastInput> | CelebCreateWithoutCastInput[] | CelebUncheckedCreateWithoutCastInput[]
    connectOrCreate?: CelebCreateOrConnectWithoutCastInput | CelebCreateOrConnectWithoutCastInput[]
    connect?: CelebWhereUniqueInput | CelebWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MovieDataUpdateOneRequiredWithoutMovieNestedInput = {
    create?: XOR<MovieDataCreateWithoutMovieInput, MovieDataUncheckedCreateWithoutMovieInput>
    connectOrCreate?: MovieDataCreateOrConnectWithoutMovieInput
    upsert?: MovieDataUpsertWithoutMovieInput
    connect?: MovieDataWhereUniqueInput
    update?: XOR<XOR<MovieDataUpdateToOneWithWhereWithoutMovieInput, MovieDataUpdateWithoutMovieInput>, MovieDataUncheckedUpdateWithoutMovieInput>
  }

  export type UserUpdateManyWithoutFavouriteMoviesNestedInput = {
    create?: XOR<UserCreateWithoutFavouriteMoviesInput, UserUncheckedCreateWithoutFavouriteMoviesInput> | UserCreateWithoutFavouriteMoviesInput[] | UserUncheckedCreateWithoutFavouriteMoviesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavouriteMoviesInput | UserCreateOrConnectWithoutFavouriteMoviesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFavouriteMoviesInput | UserUpsertWithWhereUniqueWithoutFavouriteMoviesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFavouriteMoviesInput | UserUpdateWithWhereUniqueWithoutFavouriteMoviesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFavouriteMoviesInput | UserUpdateManyWithWhereWithoutFavouriteMoviesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RatingUpdateManyWithoutMovieNestedInput = {
    create?: XOR<RatingCreateWithoutMovieInput, RatingUncheckedCreateWithoutMovieInput> | RatingCreateWithoutMovieInput[] | RatingUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutMovieInput | RatingCreateOrConnectWithoutMovieInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutMovieInput | RatingUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: RatingCreateManyMovieInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutMovieInput | RatingUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutMovieInput | RatingUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutMovieNestedInput = {
    create?: XOR<ReviewCreateWithoutMovieInput, ReviewUncheckedCreateWithoutMovieInput> | ReviewCreateWithoutMovieInput[] | ReviewUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutMovieInput | ReviewCreateOrConnectWithoutMovieInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutMovieInput | ReviewUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: ReviewCreateManyMovieInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutMovieInput | ReviewUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutMovieInput | ReviewUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type GenreUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<GenreCreateWithoutMoviesInput, GenreUncheckedCreateWithoutMoviesInput> | GenreCreateWithoutMoviesInput[] | GenreUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutMoviesInput | GenreCreateOrConnectWithoutMoviesInput[]
    upsert?: GenreUpsertWithWhereUniqueWithoutMoviesInput | GenreUpsertWithWhereUniqueWithoutMoviesInput[]
    set?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    disconnect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    delete?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    update?: GenreUpdateWithWhereUniqueWithoutMoviesInput | GenreUpdateWithWhereUniqueWithoutMoviesInput[]
    updateMany?: GenreUpdateManyWithWhereWithoutMoviesInput | GenreUpdateManyWithWhereWithoutMoviesInput[]
    deleteMany?: GenreScalarWhereInput | GenreScalarWhereInput[]
  }

  export type CelebUpdateOneWithoutDirectorNestedInput = {
    create?: XOR<CelebCreateWithoutDirectorInput, CelebUncheckedCreateWithoutDirectorInput>
    connectOrCreate?: CelebCreateOrConnectWithoutDirectorInput
    upsert?: CelebUpsertWithoutDirectorInput
    disconnect?: CelebWhereInput | boolean
    delete?: CelebWhereInput | boolean
    connect?: CelebWhereUniqueInput
    update?: XOR<XOR<CelebUpdateToOneWithWhereWithoutDirectorInput, CelebUpdateWithoutDirectorInput>, CelebUncheckedUpdateWithoutDirectorInput>
  }

  export type CelebUpdateManyWithoutWriterNestedInput = {
    create?: XOR<CelebCreateWithoutWriterInput, CelebUncheckedCreateWithoutWriterInput> | CelebCreateWithoutWriterInput[] | CelebUncheckedCreateWithoutWriterInput[]
    connectOrCreate?: CelebCreateOrConnectWithoutWriterInput | CelebCreateOrConnectWithoutWriterInput[]
    upsert?: CelebUpsertWithWhereUniqueWithoutWriterInput | CelebUpsertWithWhereUniqueWithoutWriterInput[]
    set?: CelebWhereUniqueInput | CelebWhereUniqueInput[]
    disconnect?: CelebWhereUniqueInput | CelebWhereUniqueInput[]
    delete?: CelebWhereUniqueInput | CelebWhereUniqueInput[]
    connect?: CelebWhereUniqueInput | CelebWhereUniqueInput[]
    update?: CelebUpdateWithWhereUniqueWithoutWriterInput | CelebUpdateWithWhereUniqueWithoutWriterInput[]
    updateMany?: CelebUpdateManyWithWhereWithoutWriterInput | CelebUpdateManyWithWhereWithoutWriterInput[]
    deleteMany?: CelebScalarWhereInput | CelebScalarWhereInput[]
  }

  export type CelebUpdateManyWithoutCastNestedInput = {
    create?: XOR<CelebCreateWithoutCastInput, CelebUncheckedCreateWithoutCastInput> | CelebCreateWithoutCastInput[] | CelebUncheckedCreateWithoutCastInput[]
    connectOrCreate?: CelebCreateOrConnectWithoutCastInput | CelebCreateOrConnectWithoutCastInput[]
    upsert?: CelebUpsertWithWhereUniqueWithoutCastInput | CelebUpsertWithWhereUniqueWithoutCastInput[]
    set?: CelebWhereUniqueInput | CelebWhereUniqueInput[]
    disconnect?: CelebWhereUniqueInput | CelebWhereUniqueInput[]
    delete?: CelebWhereUniqueInput | CelebWhereUniqueInput[]
    connect?: CelebWhereUniqueInput | CelebWhereUniqueInput[]
    update?: CelebUpdateWithWhereUniqueWithoutCastInput | CelebUpdateWithWhereUniqueWithoutCastInput[]
    updateMany?: CelebUpdateManyWithWhereWithoutCastInput | CelebUpdateManyWithWhereWithoutCastInput[]
    deleteMany?: CelebScalarWhereInput | CelebScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutFavouriteMoviesNestedInput = {
    create?: XOR<UserCreateWithoutFavouriteMoviesInput, UserUncheckedCreateWithoutFavouriteMoviesInput> | UserCreateWithoutFavouriteMoviesInput[] | UserUncheckedCreateWithoutFavouriteMoviesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFavouriteMoviesInput | UserCreateOrConnectWithoutFavouriteMoviesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFavouriteMoviesInput | UserUpsertWithWhereUniqueWithoutFavouriteMoviesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFavouriteMoviesInput | UserUpdateWithWhereUniqueWithoutFavouriteMoviesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFavouriteMoviesInput | UserUpdateManyWithWhereWithoutFavouriteMoviesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<RatingCreateWithoutMovieInput, RatingUncheckedCreateWithoutMovieInput> | RatingCreateWithoutMovieInput[] | RatingUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutMovieInput | RatingCreateOrConnectWithoutMovieInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutMovieInput | RatingUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: RatingCreateManyMovieInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutMovieInput | RatingUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutMovieInput | RatingUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<ReviewCreateWithoutMovieInput, ReviewUncheckedCreateWithoutMovieInput> | ReviewCreateWithoutMovieInput[] | ReviewUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutMovieInput | ReviewCreateOrConnectWithoutMovieInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutMovieInput | ReviewUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: ReviewCreateManyMovieInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutMovieInput | ReviewUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutMovieInput | ReviewUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type GenreUncheckedUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<GenreCreateWithoutMoviesInput, GenreUncheckedCreateWithoutMoviesInput> | GenreCreateWithoutMoviesInput[] | GenreUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutMoviesInput | GenreCreateOrConnectWithoutMoviesInput[]
    upsert?: GenreUpsertWithWhereUniqueWithoutMoviesInput | GenreUpsertWithWhereUniqueWithoutMoviesInput[]
    set?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    disconnect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    delete?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    update?: GenreUpdateWithWhereUniqueWithoutMoviesInput | GenreUpdateWithWhereUniqueWithoutMoviesInput[]
    updateMany?: GenreUpdateManyWithWhereWithoutMoviesInput | GenreUpdateManyWithWhereWithoutMoviesInput[]
    deleteMany?: GenreScalarWhereInput | GenreScalarWhereInput[]
  }

  export type CelebUncheckedUpdateManyWithoutWriterNestedInput = {
    create?: XOR<CelebCreateWithoutWriterInput, CelebUncheckedCreateWithoutWriterInput> | CelebCreateWithoutWriterInput[] | CelebUncheckedCreateWithoutWriterInput[]
    connectOrCreate?: CelebCreateOrConnectWithoutWriterInput | CelebCreateOrConnectWithoutWriterInput[]
    upsert?: CelebUpsertWithWhereUniqueWithoutWriterInput | CelebUpsertWithWhereUniqueWithoutWriterInput[]
    set?: CelebWhereUniqueInput | CelebWhereUniqueInput[]
    disconnect?: CelebWhereUniqueInput | CelebWhereUniqueInput[]
    delete?: CelebWhereUniqueInput | CelebWhereUniqueInput[]
    connect?: CelebWhereUniqueInput | CelebWhereUniqueInput[]
    update?: CelebUpdateWithWhereUniqueWithoutWriterInput | CelebUpdateWithWhereUniqueWithoutWriterInput[]
    updateMany?: CelebUpdateManyWithWhereWithoutWriterInput | CelebUpdateManyWithWhereWithoutWriterInput[]
    deleteMany?: CelebScalarWhereInput | CelebScalarWhereInput[]
  }

  export type CelebUncheckedUpdateManyWithoutCastNestedInput = {
    create?: XOR<CelebCreateWithoutCastInput, CelebUncheckedCreateWithoutCastInput> | CelebCreateWithoutCastInput[] | CelebUncheckedCreateWithoutCastInput[]
    connectOrCreate?: CelebCreateOrConnectWithoutCastInput | CelebCreateOrConnectWithoutCastInput[]
    upsert?: CelebUpsertWithWhereUniqueWithoutCastInput | CelebUpsertWithWhereUniqueWithoutCastInput[]
    set?: CelebWhereUniqueInput | CelebWhereUniqueInput[]
    disconnect?: CelebWhereUniqueInput | CelebWhereUniqueInput[]
    delete?: CelebWhereUniqueInput | CelebWhereUniqueInput[]
    connect?: CelebWhereUniqueInput | CelebWhereUniqueInput[]
    update?: CelebUpdateWithWhereUniqueWithoutCastInput | CelebUpdateWithWhereUniqueWithoutCastInput[]
    updateMany?: CelebUpdateManyWithWhereWithoutCastInput | CelebUpdateManyWithWhereWithoutCastInput[]
    deleteMany?: CelebScalarWhereInput | CelebScalarWhereInput[]
  }

  export type MovieCreateNestedOneWithoutMovieDataInput = {
    create?: XOR<MovieCreateWithoutMovieDataInput, MovieUncheckedCreateWithoutMovieDataInput>
    connectOrCreate?: MovieCreateOrConnectWithoutMovieDataInput
    connect?: MovieWhereUniqueInput
  }

  export type MovieUncheckedCreateNestedOneWithoutMovieDataInput = {
    create?: XOR<MovieCreateWithoutMovieDataInput, MovieUncheckedCreateWithoutMovieDataInput>
    connectOrCreate?: MovieCreateOrConnectWithoutMovieDataInput
    connect?: MovieWhereUniqueInput
  }

  export type MovieUpdateOneWithoutMovieDataNestedInput = {
    create?: XOR<MovieCreateWithoutMovieDataInput, MovieUncheckedCreateWithoutMovieDataInput>
    connectOrCreate?: MovieCreateOrConnectWithoutMovieDataInput
    upsert?: MovieUpsertWithoutMovieDataInput
    disconnect?: MovieWhereInput | boolean
    delete?: MovieWhereInput | boolean
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutMovieDataInput, MovieUpdateWithoutMovieDataInput>, MovieUncheckedUpdateWithoutMovieDataInput>
  }

  export type MovieUncheckedUpdateOneWithoutMovieDataNestedInput = {
    create?: XOR<MovieCreateWithoutMovieDataInput, MovieUncheckedCreateWithoutMovieDataInput>
    connectOrCreate?: MovieCreateOrConnectWithoutMovieDataInput
    upsert?: MovieUpsertWithoutMovieDataInput
    disconnect?: MovieWhereInput | boolean
    delete?: MovieWhereInput | boolean
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutMovieDataInput, MovieUpdateWithoutMovieDataInput>, MovieUncheckedUpdateWithoutMovieDataInput>
  }

  export type MovieCreateNestedOneWithoutRatingsInput = {
    create?: XOR<MovieCreateWithoutRatingsInput, MovieUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutRatingsInput
    connect?: MovieWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRatingsInput = {
    create?: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsInput
    connect?: UserWhereUniqueInput
  }

  export type MovieUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<MovieCreateWithoutRatingsInput, MovieUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutRatingsInput
    upsert?: MovieUpsertWithoutRatingsInput
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutRatingsInput, MovieUpdateWithoutRatingsInput>, MovieUncheckedUpdateWithoutRatingsInput>
  }

  export type UserUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsInput
    upsert?: UserUpsertWithoutRatingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRatingsInput, UserUpdateWithoutRatingsInput>, UserUncheckedUpdateWithoutRatingsInput>
  }

  export type MovieCreateNestedOneWithoutReviewsInput = {
    create?: XOR<MovieCreateWithoutReviewsInput, MovieUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutReviewsInput
    connect?: MovieWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type MovieUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<MovieCreateWithoutReviewsInput, MovieUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutReviewsInput
    upsert?: MovieUpsertWithoutReviewsInput
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutReviewsInput, MovieUpdateWithoutReviewsInput>, MovieUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type MovieCreateNestedManyWithoutGenresInput = {
    create?: XOR<MovieCreateWithoutGenresInput, MovieUncheckedCreateWithoutGenresInput> | MovieCreateWithoutGenresInput[] | MovieUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutGenresInput | MovieCreateOrConnectWithoutGenresInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
  }

  export type MovieUncheckedCreateNestedManyWithoutGenresInput = {
    create?: XOR<MovieCreateWithoutGenresInput, MovieUncheckedCreateWithoutGenresInput> | MovieCreateWithoutGenresInput[] | MovieUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutGenresInput | MovieCreateOrConnectWithoutGenresInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
  }

  export type MovieUpdateManyWithoutGenresNestedInput = {
    create?: XOR<MovieCreateWithoutGenresInput, MovieUncheckedCreateWithoutGenresInput> | MovieCreateWithoutGenresInput[] | MovieUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutGenresInput | MovieCreateOrConnectWithoutGenresInput[]
    upsert?: MovieUpsertWithWhereUniqueWithoutGenresInput | MovieUpsertWithWhereUniqueWithoutGenresInput[]
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    update?: MovieUpdateWithWhereUniqueWithoutGenresInput | MovieUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: MovieUpdateManyWithWhereWithoutGenresInput | MovieUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[]
  }

  export type MovieUncheckedUpdateManyWithoutGenresNestedInput = {
    create?: XOR<MovieCreateWithoutGenresInput, MovieUncheckedCreateWithoutGenresInput> | MovieCreateWithoutGenresInput[] | MovieUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutGenresInput | MovieCreateOrConnectWithoutGenresInput[]
    upsert?: MovieUpsertWithWhereUniqueWithoutGenresInput | MovieUpsertWithWhereUniqueWithoutGenresInput[]
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    update?: MovieUpdateWithWhereUniqueWithoutGenresInput | MovieUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: MovieUpdateManyWithWhereWithoutGenresInput | MovieUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[]
  }

  export type MovieCreateNestedManyWithoutAddedToFavByInput = {
    create?: XOR<MovieCreateWithoutAddedToFavByInput, MovieUncheckedCreateWithoutAddedToFavByInput> | MovieCreateWithoutAddedToFavByInput[] | MovieUncheckedCreateWithoutAddedToFavByInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutAddedToFavByInput | MovieCreateOrConnectWithoutAddedToFavByInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
  }

  export type RatingCreateNestedManyWithoutUserInput = {
    create?: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput> | RatingCreateWithoutUserInput[] | RatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutUserInput | RatingCreateOrConnectWithoutUserInput[]
    createMany?: RatingCreateManyUserInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type SessionCreateNestedOneWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput
    connect?: SessionWhereUniqueInput
  }

  export type MovieUncheckedCreateNestedManyWithoutAddedToFavByInput = {
    create?: XOR<MovieCreateWithoutAddedToFavByInput, MovieUncheckedCreateWithoutAddedToFavByInput> | MovieCreateWithoutAddedToFavByInput[] | MovieUncheckedCreateWithoutAddedToFavByInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutAddedToFavByInput | MovieCreateOrConnectWithoutAddedToFavByInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput> | RatingCreateWithoutUserInput[] | RatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutUserInput | RatingCreateOrConnectWithoutUserInput[]
    createMany?: RatingCreateManyUserInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput
    connect?: SessionWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type MovieUpdateManyWithoutAddedToFavByNestedInput = {
    create?: XOR<MovieCreateWithoutAddedToFavByInput, MovieUncheckedCreateWithoutAddedToFavByInput> | MovieCreateWithoutAddedToFavByInput[] | MovieUncheckedCreateWithoutAddedToFavByInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutAddedToFavByInput | MovieCreateOrConnectWithoutAddedToFavByInput[]
    upsert?: MovieUpsertWithWhereUniqueWithoutAddedToFavByInput | MovieUpsertWithWhereUniqueWithoutAddedToFavByInput[]
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    update?: MovieUpdateWithWhereUniqueWithoutAddedToFavByInput | MovieUpdateWithWhereUniqueWithoutAddedToFavByInput[]
    updateMany?: MovieUpdateManyWithWhereWithoutAddedToFavByInput | MovieUpdateManyWithWhereWithoutAddedToFavByInput[]
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[]
  }

  export type RatingUpdateManyWithoutUserNestedInput = {
    create?: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput> | RatingCreateWithoutUserInput[] | RatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutUserInput | RatingCreateOrConnectWithoutUserInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutUserInput | RatingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RatingCreateManyUserInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutUserInput | RatingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutUserInput | RatingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type SessionUpdateOneWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput
    upsert?: SessionUpsertWithoutUserInput
    disconnect?: SessionWhereInput | boolean
    delete?: SessionWhereInput | boolean
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutUserInput, SessionUpdateWithoutUserInput>, SessionUncheckedUpdateWithoutUserInput>
  }

  export type MovieUncheckedUpdateManyWithoutAddedToFavByNestedInput = {
    create?: XOR<MovieCreateWithoutAddedToFavByInput, MovieUncheckedCreateWithoutAddedToFavByInput> | MovieCreateWithoutAddedToFavByInput[] | MovieUncheckedCreateWithoutAddedToFavByInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutAddedToFavByInput | MovieCreateOrConnectWithoutAddedToFavByInput[]
    upsert?: MovieUpsertWithWhereUniqueWithoutAddedToFavByInput | MovieUpsertWithWhereUniqueWithoutAddedToFavByInput[]
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    update?: MovieUpdateWithWhereUniqueWithoutAddedToFavByInput | MovieUpdateWithWhereUniqueWithoutAddedToFavByInput[]
    updateMany?: MovieUpdateManyWithWhereWithoutAddedToFavByInput | MovieUpdateManyWithWhereWithoutAddedToFavByInput[]
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput> | RatingCreateWithoutUserInput[] | RatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutUserInput | RatingCreateOrConnectWithoutUserInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutUserInput | RatingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RatingCreateManyUserInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutUserInput | RatingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutUserInput | RatingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type SessionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput
    upsert?: SessionUpsertWithoutUserInput
    disconnect?: SessionWhereInput | boolean
    delete?: SessionWhereInput | boolean
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutUserInput, SessionUpdateWithoutUserInput>, SessionUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutSessionInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionNestedInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    upsert?: UserUpsertWithoutSessionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionInput, UserUpdateWithoutSessionInput>, UserUncheckedUpdateWithoutSessionInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type MovieCreateWithoutDirectorInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    movieData: MovieDataCreateNestedOneWithoutMovieInput
    addedToFavBy?: UserCreateNestedManyWithoutFavouriteMoviesInput
    ratings?: RatingCreateNestedManyWithoutMovieInput
    reviews?: ReviewCreateNestedManyWithoutMovieInput
    genres?: GenreCreateNestedManyWithoutMoviesInput
    writers?: CelebCreateNestedManyWithoutWriterInput
    cast?: CelebCreateNestedManyWithoutCastInput
  }

  export type MovieUncheckedCreateWithoutDirectorInput = {
    id?: number
    movieDataId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    addedToFavBy?: UserUncheckedCreateNestedManyWithoutFavouriteMoviesInput
    ratings?: RatingUncheckedCreateNestedManyWithoutMovieInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutMovieInput
    genres?: GenreUncheckedCreateNestedManyWithoutMoviesInput
    writers?: CelebUncheckedCreateNestedManyWithoutWriterInput
    cast?: CelebUncheckedCreateNestedManyWithoutCastInput
  }

  export type MovieCreateOrConnectWithoutDirectorInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutDirectorInput, MovieUncheckedCreateWithoutDirectorInput>
  }

  export type MovieCreateManyDirectorInputEnvelope = {
    data: MovieCreateManyDirectorInput | MovieCreateManyDirectorInput[]
    skipDuplicates?: boolean
  }

  export type MovieCreateWithoutWritersInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    movieData: MovieDataCreateNestedOneWithoutMovieInput
    addedToFavBy?: UserCreateNestedManyWithoutFavouriteMoviesInput
    ratings?: RatingCreateNestedManyWithoutMovieInput
    reviews?: ReviewCreateNestedManyWithoutMovieInput
    genres?: GenreCreateNestedManyWithoutMoviesInput
    director?: CelebCreateNestedOneWithoutDirectorInput
    cast?: CelebCreateNestedManyWithoutCastInput
  }

  export type MovieUncheckedCreateWithoutWritersInput = {
    id?: number
    movieDataId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    directorId?: number | null
    addedToFavBy?: UserUncheckedCreateNestedManyWithoutFavouriteMoviesInput
    ratings?: RatingUncheckedCreateNestedManyWithoutMovieInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutMovieInput
    genres?: GenreUncheckedCreateNestedManyWithoutMoviesInput
    cast?: CelebUncheckedCreateNestedManyWithoutCastInput
  }

  export type MovieCreateOrConnectWithoutWritersInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutWritersInput, MovieUncheckedCreateWithoutWritersInput>
  }

  export type MovieCreateWithoutCastInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    movieData: MovieDataCreateNestedOneWithoutMovieInput
    addedToFavBy?: UserCreateNestedManyWithoutFavouriteMoviesInput
    ratings?: RatingCreateNestedManyWithoutMovieInput
    reviews?: ReviewCreateNestedManyWithoutMovieInput
    genres?: GenreCreateNestedManyWithoutMoviesInput
    director?: CelebCreateNestedOneWithoutDirectorInput
    writers?: CelebCreateNestedManyWithoutWriterInput
  }

  export type MovieUncheckedCreateWithoutCastInput = {
    id?: number
    movieDataId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    directorId?: number | null
    addedToFavBy?: UserUncheckedCreateNestedManyWithoutFavouriteMoviesInput
    ratings?: RatingUncheckedCreateNestedManyWithoutMovieInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutMovieInput
    genres?: GenreUncheckedCreateNestedManyWithoutMoviesInput
    writers?: CelebUncheckedCreateNestedManyWithoutWriterInput
  }

  export type MovieCreateOrConnectWithoutCastInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutCastInput, MovieUncheckedCreateWithoutCastInput>
  }

  export type MovieUpsertWithWhereUniqueWithoutDirectorInput = {
    where: MovieWhereUniqueInput
    update: XOR<MovieUpdateWithoutDirectorInput, MovieUncheckedUpdateWithoutDirectorInput>
    create: XOR<MovieCreateWithoutDirectorInput, MovieUncheckedCreateWithoutDirectorInput>
  }

  export type MovieUpdateWithWhereUniqueWithoutDirectorInput = {
    where: MovieWhereUniqueInput
    data: XOR<MovieUpdateWithoutDirectorInput, MovieUncheckedUpdateWithoutDirectorInput>
  }

  export type MovieUpdateManyWithWhereWithoutDirectorInput = {
    where: MovieScalarWhereInput
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyWithoutDirectorInput>
  }

  export type MovieScalarWhereInput = {
    AND?: MovieScalarWhereInput | MovieScalarWhereInput[]
    OR?: MovieScalarWhereInput[]
    NOT?: MovieScalarWhereInput | MovieScalarWhereInput[]
    id?: IntFilter<"Movie"> | number
    movieDataId?: IntFilter<"Movie"> | number
    createdAt?: DateTimeFilter<"Movie"> | Date | string
    updatedAt?: DateTimeFilter<"Movie"> | Date | string
    directorId?: IntNullableFilter<"Movie"> | number | null
  }

  export type MovieUpsertWithWhereUniqueWithoutWritersInput = {
    where: MovieWhereUniqueInput
    update: XOR<MovieUpdateWithoutWritersInput, MovieUncheckedUpdateWithoutWritersInput>
    create: XOR<MovieCreateWithoutWritersInput, MovieUncheckedCreateWithoutWritersInput>
  }

  export type MovieUpdateWithWhereUniqueWithoutWritersInput = {
    where: MovieWhereUniqueInput
    data: XOR<MovieUpdateWithoutWritersInput, MovieUncheckedUpdateWithoutWritersInput>
  }

  export type MovieUpdateManyWithWhereWithoutWritersInput = {
    where: MovieScalarWhereInput
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyWithoutWritersInput>
  }

  export type MovieUpsertWithWhereUniqueWithoutCastInput = {
    where: MovieWhereUniqueInput
    update: XOR<MovieUpdateWithoutCastInput, MovieUncheckedUpdateWithoutCastInput>
    create: XOR<MovieCreateWithoutCastInput, MovieUncheckedCreateWithoutCastInput>
  }

  export type MovieUpdateWithWhereUniqueWithoutCastInput = {
    where: MovieWhereUniqueInput
    data: XOR<MovieUpdateWithoutCastInput, MovieUncheckedUpdateWithoutCastInput>
  }

  export type MovieUpdateManyWithWhereWithoutCastInput = {
    where: MovieScalarWhereInput
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyWithoutCastInput>
  }

  export type MovieDataCreateWithoutMovieInput = {
    title: string
    storyline: string
    posterURL: string
    releaseDate: Date | string
    length: string
    countryOfOrigin: string
    productionCompany: string
    language: string
  }

  export type MovieDataUncheckedCreateWithoutMovieInput = {
    id?: number
    title: string
    storyline: string
    posterURL: string
    releaseDate: Date | string
    length: string
    countryOfOrigin: string
    productionCompany: string
    language: string
  }

  export type MovieDataCreateOrConnectWithoutMovieInput = {
    where: MovieDataWhereUniqueInput
    create: XOR<MovieDataCreateWithoutMovieInput, MovieDataUncheckedCreateWithoutMovieInput>
  }

  export type UserCreateWithoutFavouriteMoviesInput = {
    email: string
    name: string
    password: string
    role?: $Enums.Role
    ratings?: RatingCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    session?: SessionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavouriteMoviesInput = {
    id?: number
    email: string
    name: string
    password: string
    role?: $Enums.Role
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    session?: SessionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavouriteMoviesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavouriteMoviesInput, UserUncheckedCreateWithoutFavouriteMoviesInput>
  }

  export type RatingCreateWithoutMovieInput = {
    value: number
    user: UserCreateNestedOneWithoutRatingsInput
  }

  export type RatingUncheckedCreateWithoutMovieInput = {
    value: number
    userId: number
  }

  export type RatingCreateOrConnectWithoutMovieInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutMovieInput, RatingUncheckedCreateWithoutMovieInput>
  }

  export type RatingCreateManyMovieInputEnvelope = {
    data: RatingCreateManyMovieInput | RatingCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutMovieInput = {
    title: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutMovieInput = {
    id?: number
    title: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type ReviewCreateOrConnectWithoutMovieInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutMovieInput, ReviewUncheckedCreateWithoutMovieInput>
  }

  export type ReviewCreateManyMovieInputEnvelope = {
    data: ReviewCreateManyMovieInput | ReviewCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type GenreCreateWithoutMoviesInput = {
    name: string
  }

  export type GenreUncheckedCreateWithoutMoviesInput = {
    id?: number
    name: string
  }

  export type GenreCreateOrConnectWithoutMoviesInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutMoviesInput, GenreUncheckedCreateWithoutMoviesInput>
  }

  export type CelebCreateWithoutDirectorInput = {
    firstName: string
    lastName: string
    biography: string
    imageURL: string
    writer?: MovieCreateNestedManyWithoutWritersInput
    cast?: MovieCreateNestedManyWithoutCastInput
  }

  export type CelebUncheckedCreateWithoutDirectorInput = {
    id?: number
    firstName: string
    lastName: string
    biography: string
    imageURL: string
    writer?: MovieUncheckedCreateNestedManyWithoutWritersInput
    cast?: MovieUncheckedCreateNestedManyWithoutCastInput
  }

  export type CelebCreateOrConnectWithoutDirectorInput = {
    where: CelebWhereUniqueInput
    create: XOR<CelebCreateWithoutDirectorInput, CelebUncheckedCreateWithoutDirectorInput>
  }

  export type CelebCreateWithoutWriterInput = {
    firstName: string
    lastName: string
    biography: string
    imageURL: string
    director?: MovieCreateNestedManyWithoutDirectorInput
    cast?: MovieCreateNestedManyWithoutCastInput
  }

  export type CelebUncheckedCreateWithoutWriterInput = {
    id?: number
    firstName: string
    lastName: string
    biography: string
    imageURL: string
    director?: MovieUncheckedCreateNestedManyWithoutDirectorInput
    cast?: MovieUncheckedCreateNestedManyWithoutCastInput
  }

  export type CelebCreateOrConnectWithoutWriterInput = {
    where: CelebWhereUniqueInput
    create: XOR<CelebCreateWithoutWriterInput, CelebUncheckedCreateWithoutWriterInput>
  }

  export type CelebCreateWithoutCastInput = {
    firstName: string
    lastName: string
    biography: string
    imageURL: string
    director?: MovieCreateNestedManyWithoutDirectorInput
    writer?: MovieCreateNestedManyWithoutWritersInput
  }

  export type CelebUncheckedCreateWithoutCastInput = {
    id?: number
    firstName: string
    lastName: string
    biography: string
    imageURL: string
    director?: MovieUncheckedCreateNestedManyWithoutDirectorInput
    writer?: MovieUncheckedCreateNestedManyWithoutWritersInput
  }

  export type CelebCreateOrConnectWithoutCastInput = {
    where: CelebWhereUniqueInput
    create: XOR<CelebCreateWithoutCastInput, CelebUncheckedCreateWithoutCastInput>
  }

  export type MovieDataUpsertWithoutMovieInput = {
    update: XOR<MovieDataUpdateWithoutMovieInput, MovieDataUncheckedUpdateWithoutMovieInput>
    create: XOR<MovieDataCreateWithoutMovieInput, MovieDataUncheckedCreateWithoutMovieInput>
    where?: MovieDataWhereInput
  }

  export type MovieDataUpdateToOneWithWhereWithoutMovieInput = {
    where?: MovieDataWhereInput
    data: XOR<MovieDataUpdateWithoutMovieInput, MovieDataUncheckedUpdateWithoutMovieInput>
  }

  export type MovieDataUpdateWithoutMovieInput = {
    title?: StringFieldUpdateOperationsInput | string
    storyline?: StringFieldUpdateOperationsInput | string
    posterURL?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    length?: StringFieldUpdateOperationsInput | string
    countryOfOrigin?: StringFieldUpdateOperationsInput | string
    productionCompany?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
  }

  export type MovieDataUncheckedUpdateWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    storyline?: StringFieldUpdateOperationsInput | string
    posterURL?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    length?: StringFieldUpdateOperationsInput | string
    countryOfOrigin?: StringFieldUpdateOperationsInput | string
    productionCompany?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithWhereUniqueWithoutFavouriteMoviesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutFavouriteMoviesInput, UserUncheckedUpdateWithoutFavouriteMoviesInput>
    create: XOR<UserCreateWithoutFavouriteMoviesInput, UserUncheckedCreateWithoutFavouriteMoviesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutFavouriteMoviesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutFavouriteMoviesInput, UserUncheckedUpdateWithoutFavouriteMoviesInput>
  }

  export type UserUpdateManyWithWhereWithoutFavouriteMoviesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutFavouriteMoviesInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
  }

  export type RatingUpsertWithWhereUniqueWithoutMovieInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutMovieInput, RatingUncheckedUpdateWithoutMovieInput>
    create: XOR<RatingCreateWithoutMovieInput, RatingUncheckedCreateWithoutMovieInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutMovieInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutMovieInput, RatingUncheckedUpdateWithoutMovieInput>
  }

  export type RatingUpdateManyWithWhereWithoutMovieInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutMovieInput>
  }

  export type RatingScalarWhereInput = {
    AND?: RatingScalarWhereInput | RatingScalarWhereInput[]
    OR?: RatingScalarWhereInput[]
    NOT?: RatingScalarWhereInput | RatingScalarWhereInput[]
    value?: IntFilter<"Rating"> | number
    movieId?: IntFilter<"Rating"> | number
    userId?: IntFilter<"Rating"> | number
  }

  export type ReviewUpsertWithWhereUniqueWithoutMovieInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutMovieInput, ReviewUncheckedUpdateWithoutMovieInput>
    create: XOR<ReviewCreateWithoutMovieInput, ReviewUncheckedCreateWithoutMovieInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutMovieInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutMovieInput, ReviewUncheckedUpdateWithoutMovieInput>
  }

  export type ReviewUpdateManyWithWhereWithoutMovieInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutMovieInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    title?: StringFilter<"Review"> | string
    text?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    movieId?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
  }

  export type GenreUpsertWithWhereUniqueWithoutMoviesInput = {
    where: GenreWhereUniqueInput
    update: XOR<GenreUpdateWithoutMoviesInput, GenreUncheckedUpdateWithoutMoviesInput>
    create: XOR<GenreCreateWithoutMoviesInput, GenreUncheckedCreateWithoutMoviesInput>
  }

  export type GenreUpdateWithWhereUniqueWithoutMoviesInput = {
    where: GenreWhereUniqueInput
    data: XOR<GenreUpdateWithoutMoviesInput, GenreUncheckedUpdateWithoutMoviesInput>
  }

  export type GenreUpdateManyWithWhereWithoutMoviesInput = {
    where: GenreScalarWhereInput
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyWithoutMoviesInput>
  }

  export type GenreScalarWhereInput = {
    AND?: GenreScalarWhereInput | GenreScalarWhereInput[]
    OR?: GenreScalarWhereInput[]
    NOT?: GenreScalarWhereInput | GenreScalarWhereInput[]
    id?: IntFilter<"Genre"> | number
    name?: StringFilter<"Genre"> | string
  }

  export type CelebUpsertWithoutDirectorInput = {
    update: XOR<CelebUpdateWithoutDirectorInput, CelebUncheckedUpdateWithoutDirectorInput>
    create: XOR<CelebCreateWithoutDirectorInput, CelebUncheckedCreateWithoutDirectorInput>
    where?: CelebWhereInput
  }

  export type CelebUpdateToOneWithWhereWithoutDirectorInput = {
    where?: CelebWhereInput
    data: XOR<CelebUpdateWithoutDirectorInput, CelebUncheckedUpdateWithoutDirectorInput>
  }

  export type CelebUpdateWithoutDirectorInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    biography?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    writer?: MovieUpdateManyWithoutWritersNestedInput
    cast?: MovieUpdateManyWithoutCastNestedInput
  }

  export type CelebUncheckedUpdateWithoutDirectorInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    biography?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    writer?: MovieUncheckedUpdateManyWithoutWritersNestedInput
    cast?: MovieUncheckedUpdateManyWithoutCastNestedInput
  }

  export type CelebUpsertWithWhereUniqueWithoutWriterInput = {
    where: CelebWhereUniqueInput
    update: XOR<CelebUpdateWithoutWriterInput, CelebUncheckedUpdateWithoutWriterInput>
    create: XOR<CelebCreateWithoutWriterInput, CelebUncheckedCreateWithoutWriterInput>
  }

  export type CelebUpdateWithWhereUniqueWithoutWriterInput = {
    where: CelebWhereUniqueInput
    data: XOR<CelebUpdateWithoutWriterInput, CelebUncheckedUpdateWithoutWriterInput>
  }

  export type CelebUpdateManyWithWhereWithoutWriterInput = {
    where: CelebScalarWhereInput
    data: XOR<CelebUpdateManyMutationInput, CelebUncheckedUpdateManyWithoutWriterInput>
  }

  export type CelebScalarWhereInput = {
    AND?: CelebScalarWhereInput | CelebScalarWhereInput[]
    OR?: CelebScalarWhereInput[]
    NOT?: CelebScalarWhereInput | CelebScalarWhereInput[]
    id?: IntFilter<"Celeb"> | number
    firstName?: StringFilter<"Celeb"> | string
    lastName?: StringFilter<"Celeb"> | string
    biography?: StringFilter<"Celeb"> | string
    imageURL?: StringFilter<"Celeb"> | string
  }

  export type CelebUpsertWithWhereUniqueWithoutCastInput = {
    where: CelebWhereUniqueInput
    update: XOR<CelebUpdateWithoutCastInput, CelebUncheckedUpdateWithoutCastInput>
    create: XOR<CelebCreateWithoutCastInput, CelebUncheckedCreateWithoutCastInput>
  }

  export type CelebUpdateWithWhereUniqueWithoutCastInput = {
    where: CelebWhereUniqueInput
    data: XOR<CelebUpdateWithoutCastInput, CelebUncheckedUpdateWithoutCastInput>
  }

  export type CelebUpdateManyWithWhereWithoutCastInput = {
    where: CelebScalarWhereInput
    data: XOR<CelebUpdateManyMutationInput, CelebUncheckedUpdateManyWithoutCastInput>
  }

  export type MovieCreateWithoutMovieDataInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    addedToFavBy?: UserCreateNestedManyWithoutFavouriteMoviesInput
    ratings?: RatingCreateNestedManyWithoutMovieInput
    reviews?: ReviewCreateNestedManyWithoutMovieInput
    genres?: GenreCreateNestedManyWithoutMoviesInput
    director?: CelebCreateNestedOneWithoutDirectorInput
    writers?: CelebCreateNestedManyWithoutWriterInput
    cast?: CelebCreateNestedManyWithoutCastInput
  }

  export type MovieUncheckedCreateWithoutMovieDataInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    directorId?: number | null
    addedToFavBy?: UserUncheckedCreateNestedManyWithoutFavouriteMoviesInput
    ratings?: RatingUncheckedCreateNestedManyWithoutMovieInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutMovieInput
    genres?: GenreUncheckedCreateNestedManyWithoutMoviesInput
    writers?: CelebUncheckedCreateNestedManyWithoutWriterInput
    cast?: CelebUncheckedCreateNestedManyWithoutCastInput
  }

  export type MovieCreateOrConnectWithoutMovieDataInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutMovieDataInput, MovieUncheckedCreateWithoutMovieDataInput>
  }

  export type MovieUpsertWithoutMovieDataInput = {
    update: XOR<MovieUpdateWithoutMovieDataInput, MovieUncheckedUpdateWithoutMovieDataInput>
    create: XOR<MovieCreateWithoutMovieDataInput, MovieUncheckedCreateWithoutMovieDataInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutMovieDataInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutMovieDataInput, MovieUncheckedUpdateWithoutMovieDataInput>
  }

  export type MovieUpdateWithoutMovieDataInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedToFavBy?: UserUpdateManyWithoutFavouriteMoviesNestedInput
    ratings?: RatingUpdateManyWithoutMovieNestedInput
    reviews?: ReviewUpdateManyWithoutMovieNestedInput
    genres?: GenreUpdateManyWithoutMoviesNestedInput
    director?: CelebUpdateOneWithoutDirectorNestedInput
    writers?: CelebUpdateManyWithoutWriterNestedInput
    cast?: CelebUpdateManyWithoutCastNestedInput
  }

  export type MovieUncheckedUpdateWithoutMovieDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    directorId?: NullableIntFieldUpdateOperationsInput | number | null
    addedToFavBy?: UserUncheckedUpdateManyWithoutFavouriteMoviesNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutMovieNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutMovieNestedInput
    genres?: GenreUncheckedUpdateManyWithoutMoviesNestedInput
    writers?: CelebUncheckedUpdateManyWithoutWriterNestedInput
    cast?: CelebUncheckedUpdateManyWithoutCastNestedInput
  }

  export type MovieCreateWithoutRatingsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    movieData: MovieDataCreateNestedOneWithoutMovieInput
    addedToFavBy?: UserCreateNestedManyWithoutFavouriteMoviesInput
    reviews?: ReviewCreateNestedManyWithoutMovieInput
    genres?: GenreCreateNestedManyWithoutMoviesInput
    director?: CelebCreateNestedOneWithoutDirectorInput
    writers?: CelebCreateNestedManyWithoutWriterInput
    cast?: CelebCreateNestedManyWithoutCastInput
  }

  export type MovieUncheckedCreateWithoutRatingsInput = {
    id?: number
    movieDataId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    directorId?: number | null
    addedToFavBy?: UserUncheckedCreateNestedManyWithoutFavouriteMoviesInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutMovieInput
    genres?: GenreUncheckedCreateNestedManyWithoutMoviesInput
    writers?: CelebUncheckedCreateNestedManyWithoutWriterInput
    cast?: CelebUncheckedCreateNestedManyWithoutCastInput
  }

  export type MovieCreateOrConnectWithoutRatingsInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutRatingsInput, MovieUncheckedCreateWithoutRatingsInput>
  }

  export type UserCreateWithoutRatingsInput = {
    email: string
    name: string
    password: string
    role?: $Enums.Role
    favouriteMovies?: MovieCreateNestedManyWithoutAddedToFavByInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    session?: SessionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRatingsInput = {
    id?: number
    email: string
    name: string
    password: string
    role?: $Enums.Role
    favouriteMovies?: MovieUncheckedCreateNestedManyWithoutAddedToFavByInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    session?: SessionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRatingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
  }

  export type MovieUpsertWithoutRatingsInput = {
    update: XOR<MovieUpdateWithoutRatingsInput, MovieUncheckedUpdateWithoutRatingsInput>
    create: XOR<MovieCreateWithoutRatingsInput, MovieUncheckedCreateWithoutRatingsInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutRatingsInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutRatingsInput, MovieUncheckedUpdateWithoutRatingsInput>
  }

  export type MovieUpdateWithoutRatingsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieData?: MovieDataUpdateOneRequiredWithoutMovieNestedInput
    addedToFavBy?: UserUpdateManyWithoutFavouriteMoviesNestedInput
    reviews?: ReviewUpdateManyWithoutMovieNestedInput
    genres?: GenreUpdateManyWithoutMoviesNestedInput
    director?: CelebUpdateOneWithoutDirectorNestedInput
    writers?: CelebUpdateManyWithoutWriterNestedInput
    cast?: CelebUpdateManyWithoutCastNestedInput
  }

  export type MovieUncheckedUpdateWithoutRatingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieDataId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    directorId?: NullableIntFieldUpdateOperationsInput | number | null
    addedToFavBy?: UserUncheckedUpdateManyWithoutFavouriteMoviesNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutMovieNestedInput
    genres?: GenreUncheckedUpdateManyWithoutMoviesNestedInput
    writers?: CelebUncheckedUpdateManyWithoutWriterNestedInput
    cast?: CelebUncheckedUpdateManyWithoutCastNestedInput
  }

  export type UserUpsertWithoutRatingsInput = {
    update: XOR<UserUpdateWithoutRatingsInput, UserUncheckedUpdateWithoutRatingsInput>
    create: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRatingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRatingsInput, UserUncheckedUpdateWithoutRatingsInput>
  }

  export type UserUpdateWithoutRatingsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    favouriteMovies?: MovieUpdateManyWithoutAddedToFavByNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    session?: SessionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRatingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    favouriteMovies?: MovieUncheckedUpdateManyWithoutAddedToFavByNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    session?: SessionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type MovieCreateWithoutReviewsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    movieData: MovieDataCreateNestedOneWithoutMovieInput
    addedToFavBy?: UserCreateNestedManyWithoutFavouriteMoviesInput
    ratings?: RatingCreateNestedManyWithoutMovieInput
    genres?: GenreCreateNestedManyWithoutMoviesInput
    director?: CelebCreateNestedOneWithoutDirectorInput
    writers?: CelebCreateNestedManyWithoutWriterInput
    cast?: CelebCreateNestedManyWithoutCastInput
  }

  export type MovieUncheckedCreateWithoutReviewsInput = {
    id?: number
    movieDataId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    directorId?: number | null
    addedToFavBy?: UserUncheckedCreateNestedManyWithoutFavouriteMoviesInput
    ratings?: RatingUncheckedCreateNestedManyWithoutMovieInput
    genres?: GenreUncheckedCreateNestedManyWithoutMoviesInput
    writers?: CelebUncheckedCreateNestedManyWithoutWriterInput
    cast?: CelebUncheckedCreateNestedManyWithoutCastInput
  }

  export type MovieCreateOrConnectWithoutReviewsInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutReviewsInput, MovieUncheckedCreateWithoutReviewsInput>
  }

  export type UserCreateWithoutReviewsInput = {
    email: string
    name: string
    password: string
    role?: $Enums.Role
    favouriteMovies?: MovieCreateNestedManyWithoutAddedToFavByInput
    ratings?: RatingCreateNestedManyWithoutUserInput
    session?: SessionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: number
    email: string
    name: string
    password: string
    role?: $Enums.Role
    favouriteMovies?: MovieUncheckedCreateNestedManyWithoutAddedToFavByInput
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
    session?: SessionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type MovieUpsertWithoutReviewsInput = {
    update: XOR<MovieUpdateWithoutReviewsInput, MovieUncheckedUpdateWithoutReviewsInput>
    create: XOR<MovieCreateWithoutReviewsInput, MovieUncheckedCreateWithoutReviewsInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutReviewsInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutReviewsInput, MovieUncheckedUpdateWithoutReviewsInput>
  }

  export type MovieUpdateWithoutReviewsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieData?: MovieDataUpdateOneRequiredWithoutMovieNestedInput
    addedToFavBy?: UserUpdateManyWithoutFavouriteMoviesNestedInput
    ratings?: RatingUpdateManyWithoutMovieNestedInput
    genres?: GenreUpdateManyWithoutMoviesNestedInput
    director?: CelebUpdateOneWithoutDirectorNestedInput
    writers?: CelebUpdateManyWithoutWriterNestedInput
    cast?: CelebUpdateManyWithoutCastNestedInput
  }

  export type MovieUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieDataId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    directorId?: NullableIntFieldUpdateOperationsInput | number | null
    addedToFavBy?: UserUncheckedUpdateManyWithoutFavouriteMoviesNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutMovieNestedInput
    genres?: GenreUncheckedUpdateManyWithoutMoviesNestedInput
    writers?: CelebUncheckedUpdateManyWithoutWriterNestedInput
    cast?: CelebUncheckedUpdateManyWithoutCastNestedInput
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    favouriteMovies?: MovieUpdateManyWithoutAddedToFavByNestedInput
    ratings?: RatingUpdateManyWithoutUserNestedInput
    session?: SessionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    favouriteMovies?: MovieUncheckedUpdateManyWithoutAddedToFavByNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
    session?: SessionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type MovieCreateWithoutGenresInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    movieData: MovieDataCreateNestedOneWithoutMovieInput
    addedToFavBy?: UserCreateNestedManyWithoutFavouriteMoviesInput
    ratings?: RatingCreateNestedManyWithoutMovieInput
    reviews?: ReviewCreateNestedManyWithoutMovieInput
    director?: CelebCreateNestedOneWithoutDirectorInput
    writers?: CelebCreateNestedManyWithoutWriterInput
    cast?: CelebCreateNestedManyWithoutCastInput
  }

  export type MovieUncheckedCreateWithoutGenresInput = {
    id?: number
    movieDataId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    directorId?: number | null
    addedToFavBy?: UserUncheckedCreateNestedManyWithoutFavouriteMoviesInput
    ratings?: RatingUncheckedCreateNestedManyWithoutMovieInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutMovieInput
    writers?: CelebUncheckedCreateNestedManyWithoutWriterInput
    cast?: CelebUncheckedCreateNestedManyWithoutCastInput
  }

  export type MovieCreateOrConnectWithoutGenresInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutGenresInput, MovieUncheckedCreateWithoutGenresInput>
  }

  export type MovieUpsertWithWhereUniqueWithoutGenresInput = {
    where: MovieWhereUniqueInput
    update: XOR<MovieUpdateWithoutGenresInput, MovieUncheckedUpdateWithoutGenresInput>
    create: XOR<MovieCreateWithoutGenresInput, MovieUncheckedCreateWithoutGenresInput>
  }

  export type MovieUpdateWithWhereUniqueWithoutGenresInput = {
    where: MovieWhereUniqueInput
    data: XOR<MovieUpdateWithoutGenresInput, MovieUncheckedUpdateWithoutGenresInput>
  }

  export type MovieUpdateManyWithWhereWithoutGenresInput = {
    where: MovieScalarWhereInput
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyWithoutGenresInput>
  }

  export type MovieCreateWithoutAddedToFavByInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    movieData: MovieDataCreateNestedOneWithoutMovieInput
    ratings?: RatingCreateNestedManyWithoutMovieInput
    reviews?: ReviewCreateNestedManyWithoutMovieInput
    genres?: GenreCreateNestedManyWithoutMoviesInput
    director?: CelebCreateNestedOneWithoutDirectorInput
    writers?: CelebCreateNestedManyWithoutWriterInput
    cast?: CelebCreateNestedManyWithoutCastInput
  }

  export type MovieUncheckedCreateWithoutAddedToFavByInput = {
    id?: number
    movieDataId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    directorId?: number | null
    ratings?: RatingUncheckedCreateNestedManyWithoutMovieInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutMovieInput
    genres?: GenreUncheckedCreateNestedManyWithoutMoviesInput
    writers?: CelebUncheckedCreateNestedManyWithoutWriterInput
    cast?: CelebUncheckedCreateNestedManyWithoutCastInput
  }

  export type MovieCreateOrConnectWithoutAddedToFavByInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutAddedToFavByInput, MovieUncheckedCreateWithoutAddedToFavByInput>
  }

  export type RatingCreateWithoutUserInput = {
    value: number
    movie: MovieCreateNestedOneWithoutRatingsInput
  }

  export type RatingUncheckedCreateWithoutUserInput = {
    value: number
    movieId: number
  }

  export type RatingCreateOrConnectWithoutUserInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput>
  }

  export type RatingCreateManyUserInputEnvelope = {
    data: RatingCreateManyUserInput | RatingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserInput = {
    title: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    movie: MovieCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    movieId: number
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type MovieUpsertWithWhereUniqueWithoutAddedToFavByInput = {
    where: MovieWhereUniqueInput
    update: XOR<MovieUpdateWithoutAddedToFavByInput, MovieUncheckedUpdateWithoutAddedToFavByInput>
    create: XOR<MovieCreateWithoutAddedToFavByInput, MovieUncheckedCreateWithoutAddedToFavByInput>
  }

  export type MovieUpdateWithWhereUniqueWithoutAddedToFavByInput = {
    where: MovieWhereUniqueInput
    data: XOR<MovieUpdateWithoutAddedToFavByInput, MovieUncheckedUpdateWithoutAddedToFavByInput>
  }

  export type MovieUpdateManyWithWhereWithoutAddedToFavByInput = {
    where: MovieScalarWhereInput
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyWithoutAddedToFavByInput>
  }

  export type RatingUpsertWithWhereUniqueWithoutUserInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutUserInput, RatingUncheckedUpdateWithoutUserInput>
    create: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutUserInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutUserInput, RatingUncheckedUpdateWithoutUserInput>
  }

  export type RatingUpdateManyWithWhereWithoutUserInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionUpsertWithoutUserInput = {
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutUserInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutSessionInput = {
    email: string
    name: string
    password: string
    role?: $Enums.Role
    favouriteMovies?: MovieCreateNestedManyWithoutAddedToFavByInput
    ratings?: RatingCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionInput = {
    id?: number
    email: string
    name: string
    password: string
    role?: $Enums.Role
    favouriteMovies?: MovieUncheckedCreateNestedManyWithoutAddedToFavByInput
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
  }

  export type UserUpsertWithoutSessionInput = {
    update: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
  }

  export type UserUpdateWithoutSessionInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    favouriteMovies?: MovieUpdateManyWithoutAddedToFavByNestedInput
    ratings?: RatingUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    favouriteMovies?: MovieUncheckedUpdateManyWithoutAddedToFavByNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MovieCreateManyDirectorInput = {
    id?: number
    movieDataId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovieUpdateWithoutDirectorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieData?: MovieDataUpdateOneRequiredWithoutMovieNestedInput
    addedToFavBy?: UserUpdateManyWithoutFavouriteMoviesNestedInput
    ratings?: RatingUpdateManyWithoutMovieNestedInput
    reviews?: ReviewUpdateManyWithoutMovieNestedInput
    genres?: GenreUpdateManyWithoutMoviesNestedInput
    writers?: CelebUpdateManyWithoutWriterNestedInput
    cast?: CelebUpdateManyWithoutCastNestedInput
  }

  export type MovieUncheckedUpdateWithoutDirectorInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieDataId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedToFavBy?: UserUncheckedUpdateManyWithoutFavouriteMoviesNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutMovieNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutMovieNestedInput
    genres?: GenreUncheckedUpdateManyWithoutMoviesNestedInput
    writers?: CelebUncheckedUpdateManyWithoutWriterNestedInput
    cast?: CelebUncheckedUpdateManyWithoutCastNestedInput
  }

  export type MovieUncheckedUpdateManyWithoutDirectorInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieDataId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieUpdateWithoutWritersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieData?: MovieDataUpdateOneRequiredWithoutMovieNestedInput
    addedToFavBy?: UserUpdateManyWithoutFavouriteMoviesNestedInput
    ratings?: RatingUpdateManyWithoutMovieNestedInput
    reviews?: ReviewUpdateManyWithoutMovieNestedInput
    genres?: GenreUpdateManyWithoutMoviesNestedInput
    director?: CelebUpdateOneWithoutDirectorNestedInput
    cast?: CelebUpdateManyWithoutCastNestedInput
  }

  export type MovieUncheckedUpdateWithoutWritersInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieDataId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    directorId?: NullableIntFieldUpdateOperationsInput | number | null
    addedToFavBy?: UserUncheckedUpdateManyWithoutFavouriteMoviesNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutMovieNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutMovieNestedInput
    genres?: GenreUncheckedUpdateManyWithoutMoviesNestedInput
    cast?: CelebUncheckedUpdateManyWithoutCastNestedInput
  }

  export type MovieUncheckedUpdateManyWithoutWritersInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieDataId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    directorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MovieUpdateWithoutCastInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieData?: MovieDataUpdateOneRequiredWithoutMovieNestedInput
    addedToFavBy?: UserUpdateManyWithoutFavouriteMoviesNestedInput
    ratings?: RatingUpdateManyWithoutMovieNestedInput
    reviews?: ReviewUpdateManyWithoutMovieNestedInput
    genres?: GenreUpdateManyWithoutMoviesNestedInput
    director?: CelebUpdateOneWithoutDirectorNestedInput
    writers?: CelebUpdateManyWithoutWriterNestedInput
  }

  export type MovieUncheckedUpdateWithoutCastInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieDataId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    directorId?: NullableIntFieldUpdateOperationsInput | number | null
    addedToFavBy?: UserUncheckedUpdateManyWithoutFavouriteMoviesNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutMovieNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutMovieNestedInput
    genres?: GenreUncheckedUpdateManyWithoutMoviesNestedInput
    writers?: CelebUncheckedUpdateManyWithoutWriterNestedInput
  }

  export type MovieUncheckedUpdateManyWithoutCastInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieDataId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    directorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RatingCreateManyMovieInput = {
    value: number
    userId: number
  }

  export type ReviewCreateManyMovieInput = {
    id?: number
    title: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type UserUpdateWithoutFavouriteMoviesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ratings?: RatingUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    session?: SessionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavouriteMoviesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    session?: SessionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutFavouriteMoviesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type RatingUpdateWithoutMovieInput = {
    value?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingUncheckedUpdateWithoutMovieInput = {
    value?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type RatingUncheckedUpdateManyWithoutMovieInput = {
    value?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewUpdateWithoutMovieInput = {
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewUncheckedUpdateManyWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type GenreUpdateWithoutMoviesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateWithoutMoviesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateManyWithoutMoviesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CelebUpdateWithoutWriterInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    biography?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    director?: MovieUpdateManyWithoutDirectorNestedInput
    cast?: MovieUpdateManyWithoutCastNestedInput
  }

  export type CelebUncheckedUpdateWithoutWriterInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    biography?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    director?: MovieUncheckedUpdateManyWithoutDirectorNestedInput
    cast?: MovieUncheckedUpdateManyWithoutCastNestedInput
  }

  export type CelebUncheckedUpdateManyWithoutWriterInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    biography?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
  }

  export type CelebUpdateWithoutCastInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    biography?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    director?: MovieUpdateManyWithoutDirectorNestedInput
    writer?: MovieUpdateManyWithoutWritersNestedInput
  }

  export type CelebUncheckedUpdateWithoutCastInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    biography?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    director?: MovieUncheckedUpdateManyWithoutDirectorNestedInput
    writer?: MovieUncheckedUpdateManyWithoutWritersNestedInput
  }

  export type CelebUncheckedUpdateManyWithoutCastInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    biography?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
  }

  export type MovieUpdateWithoutGenresInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieData?: MovieDataUpdateOneRequiredWithoutMovieNestedInput
    addedToFavBy?: UserUpdateManyWithoutFavouriteMoviesNestedInput
    ratings?: RatingUpdateManyWithoutMovieNestedInput
    reviews?: ReviewUpdateManyWithoutMovieNestedInput
    director?: CelebUpdateOneWithoutDirectorNestedInput
    writers?: CelebUpdateManyWithoutWriterNestedInput
    cast?: CelebUpdateManyWithoutCastNestedInput
  }

  export type MovieUncheckedUpdateWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieDataId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    directorId?: NullableIntFieldUpdateOperationsInput | number | null
    addedToFavBy?: UserUncheckedUpdateManyWithoutFavouriteMoviesNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutMovieNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutMovieNestedInput
    writers?: CelebUncheckedUpdateManyWithoutWriterNestedInput
    cast?: CelebUncheckedUpdateManyWithoutCastNestedInput
  }

  export type MovieUncheckedUpdateManyWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieDataId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    directorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RatingCreateManyUserInput = {
    value: number
    movieId: number
  }

  export type ReviewCreateManyUserInput = {
    id?: number
    title: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    movieId: number
  }

  export type MovieUpdateWithoutAddedToFavByInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieData?: MovieDataUpdateOneRequiredWithoutMovieNestedInput
    ratings?: RatingUpdateManyWithoutMovieNestedInput
    reviews?: ReviewUpdateManyWithoutMovieNestedInput
    genres?: GenreUpdateManyWithoutMoviesNestedInput
    director?: CelebUpdateOneWithoutDirectorNestedInput
    writers?: CelebUpdateManyWithoutWriterNestedInput
    cast?: CelebUpdateManyWithoutCastNestedInput
  }

  export type MovieUncheckedUpdateWithoutAddedToFavByInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieDataId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    directorId?: NullableIntFieldUpdateOperationsInput | number | null
    ratings?: RatingUncheckedUpdateManyWithoutMovieNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutMovieNestedInput
    genres?: GenreUncheckedUpdateManyWithoutMoviesNestedInput
    writers?: CelebUncheckedUpdateManyWithoutWriterNestedInput
    cast?: CelebUncheckedUpdateManyWithoutCastNestedInput
  }

  export type MovieUncheckedUpdateManyWithoutAddedToFavByInput = {
    id?: IntFieldUpdateOperationsInput | number
    movieDataId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    directorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RatingUpdateWithoutUserInput = {
    value?: IntFieldUpdateOperationsInput | number
    movie?: MovieUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingUncheckedUpdateWithoutUserInput = {
    value?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
  }

  export type RatingUncheckedUpdateManyWithoutUserInput = {
    value?: IntFieldUpdateOperationsInput | number
    movieId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}