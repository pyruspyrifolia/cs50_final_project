
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Conference
 * 
 */
export type Conference = $Result.DefaultSelection<Prisma.$ConferencePayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model Presentation
 * 
 */
export type Presentation = $Result.DefaultSelection<Prisma.$PresentationPayload>
/**
 * Model Attendee
 * 
 */
export type Attendee = $Result.DefaultSelection<Prisma.$AttendeePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conference`: Exposes CRUD operations for the **Conference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conferences
    * const conferences = await prisma.conference.findMany()
    * ```
    */
  get conference(): Prisma.ConferenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.presentation`: Exposes CRUD operations for the **Presentation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Presentations
    * const presentations = await prisma.presentation.findMany()
    * ```
    */
  get presentation(): Prisma.PresentationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendee`: Exposes CRUD operations for the **Attendee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendees
    * const attendees = await prisma.attendee.findMany()
    * ```
    */
  get attendee(): Prisma.AttendeeDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    User: 'User',
    Conference: 'Conference',
    Location: 'Location',
    Presentation: 'Presentation',
    Attendee: 'Attendee'
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
      modelProps: "user" | "conference" | "location" | "presentation" | "attendee"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Conference: {
        payload: Prisma.$ConferencePayload<ExtArgs>
        fields: Prisma.ConferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferencePayload>
          }
          findFirst: {
            args: Prisma.ConferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferencePayload>
          }
          findMany: {
            args: Prisma.ConferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferencePayload>[]
          }
          create: {
            args: Prisma.ConferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferencePayload>
          }
          createMany: {
            args: Prisma.ConferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConferenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferencePayload>[]
          }
          delete: {
            args: Prisma.ConferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferencePayload>
          }
          update: {
            args: Prisma.ConferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferencePayload>
          }
          deleteMany: {
            args: Prisma.ConferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConferenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferencePayload>[]
          }
          upsert: {
            args: Prisma.ConferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConferencePayload>
          }
          aggregate: {
            args: Prisma.ConferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConference>
          }
          groupBy: {
            args: Prisma.ConferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConferenceCountArgs<ExtArgs>
            result: $Utils.Optional<ConferenceCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      Presentation: {
        payload: Prisma.$PresentationPayload<ExtArgs>
        fields: Prisma.PresentationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PresentationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PresentationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentationPayload>
          }
          findFirst: {
            args: Prisma.PresentationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PresentationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentationPayload>
          }
          findMany: {
            args: Prisma.PresentationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentationPayload>[]
          }
          create: {
            args: Prisma.PresentationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentationPayload>
          }
          createMany: {
            args: Prisma.PresentationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PresentationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentationPayload>[]
          }
          delete: {
            args: Prisma.PresentationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentationPayload>
          }
          update: {
            args: Prisma.PresentationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentationPayload>
          }
          deleteMany: {
            args: Prisma.PresentationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PresentationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PresentationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentationPayload>[]
          }
          upsert: {
            args: Prisma.PresentationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresentationPayload>
          }
          aggregate: {
            args: Prisma.PresentationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePresentation>
          }
          groupBy: {
            args: Prisma.PresentationGroupByArgs<ExtArgs>
            result: $Utils.Optional<PresentationGroupByOutputType>[]
          }
          count: {
            args: Prisma.PresentationCountArgs<ExtArgs>
            result: $Utils.Optional<PresentationCountAggregateOutputType> | number
          }
        }
      }
      Attendee: {
        payload: Prisma.$AttendeePayload<ExtArgs>
        fields: Prisma.AttendeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          findFirst: {
            args: Prisma.AttendeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          findMany: {
            args: Prisma.AttendeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>[]
          }
          create: {
            args: Prisma.AttendeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          createMany: {
            args: Prisma.AttendeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>[]
          }
          delete: {
            args: Prisma.AttendeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          update: {
            args: Prisma.AttendeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          deleteMany: {
            args: Prisma.AttendeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>[]
          }
          upsert: {
            args: Prisma.AttendeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          aggregate: {
            args: Prisma.AttendeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendee>
          }
          groupBy: {
            args: Prisma.AttendeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendeeCountArgs<ExtArgs>
            result: $Utils.Optional<AttendeeCountAggregateOutputType> | number
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
    user?: UserOmit
    conference?: ConferenceOmit
    location?: LocationOmit
    presentation?: PresentationOmit
    attendee?: AttendeeOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    conferences: number
    presentations: number
    attendees: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conferences?: boolean | UserCountOutputTypeCountConferencesArgs
    presentations?: boolean | UserCountOutputTypeCountPresentationsArgs
    attendees?: boolean | UserCountOutputTypeCountAttendeesArgs
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
  export type UserCountOutputTypeCountConferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConferenceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPresentationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresentationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAttendeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendeeWhereInput
  }


  /**
   * Count Type ConferenceCountOutputType
   */

  export type ConferenceCountOutputType = {
    presentations: number
    attendees: number
  }

  export type ConferenceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    presentations?: boolean | ConferenceCountOutputTypeCountPresentationsArgs
    attendees?: boolean | ConferenceCountOutputTypeCountAttendeesArgs
  }

  // Custom InputTypes
  /**
   * ConferenceCountOutputType without action
   */
  export type ConferenceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConferenceCountOutputType
     */
    select?: ConferenceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConferenceCountOutputType without action
   */
  export type ConferenceCountOutputTypeCountPresentationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresentationWhereInput
  }

  /**
   * ConferenceCountOutputType without action
   */
  export type ConferenceCountOutputTypeCountAttendeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendeeWhereInput
  }


  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    conferences: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conferences?: boolean | LocationCountOutputTypeCountConferencesArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountConferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConferenceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    image: string | null
    emailVerified: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    image: string | null
    emailVerified: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    image: number
    emailVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    image?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    image?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    image?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    password: string
    image: string | null
    emailVerified: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conferences?: boolean | User$conferencesArgs<ExtArgs>
    presentations?: boolean | User$presentationsArgs<ExtArgs>
    attendees?: boolean | User$attendeesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "image" | "emailVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conferences?: boolean | User$conferencesArgs<ExtArgs>
    presentations?: boolean | User$presentationsArgs<ExtArgs>
    attendees?: boolean | User$attendeesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      conferences: Prisma.$ConferencePayload<ExtArgs>[]
      presentations: Prisma.$PresentationPayload<ExtArgs>[]
      attendees: Prisma.$AttendeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      password: string
      image: string | null
      emailVerified: Date | null
      createdAt: Date
      updatedAt: Date
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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    conferences<T extends User$conferencesArgs<ExtArgs> = {}>(args?: Subset<T, User$conferencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    presentations<T extends User$presentationsArgs<ExtArgs> = {}>(args?: Subset<T, User$presentationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresentationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attendees<T extends User$attendeesArgs<ExtArgs> = {}>(args?: Subset<T, User$attendeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User.conferences
   */
  export type User$conferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conference
     */
    select?: ConferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conference
     */
    omit?: ConferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceInclude<ExtArgs> | null
    where?: ConferenceWhereInput
    orderBy?: ConferenceOrderByWithRelationInput | ConferenceOrderByWithRelationInput[]
    cursor?: ConferenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConferenceScalarFieldEnum | ConferenceScalarFieldEnum[]
  }

  /**
   * User.presentations
   */
  export type User$presentationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presentation
     */
    select?: PresentationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presentation
     */
    omit?: PresentationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentationInclude<ExtArgs> | null
    where?: PresentationWhereInput
    orderBy?: PresentationOrderByWithRelationInput | PresentationOrderByWithRelationInput[]
    cursor?: PresentationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PresentationScalarFieldEnum | PresentationScalarFieldEnum[]
  }

  /**
   * User.attendees
   */
  export type User$attendeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    where?: AttendeeWhereInput
    orderBy?: AttendeeOrderByWithRelationInput | AttendeeOrderByWithRelationInput[]
    cursor?: AttendeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendeeScalarFieldEnum | AttendeeScalarFieldEnum[]
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
   * Model Conference
   */

  export type AggregateConference = {
    _count: ConferenceCountAggregateOutputType | null
    _avg: ConferenceAvgAggregateOutputType | null
    _sum: ConferenceSumAggregateOutputType | null
    _min: ConferenceMinAggregateOutputType | null
    _max: ConferenceMaxAggregateOutputType | null
  }

  export type ConferenceAvgAggregateOutputType = {
    maxPresentations: number | null
    maxAttendees: number | null
  }

  export type ConferenceSumAggregateOutputType = {
    maxPresentations: number | null
    maxAttendees: number | null
  }

  export type ConferenceMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    starts: Date | null
    ends: Date | null
    maxPresentations: number | null
    maxAttendees: number | null
    createdAt: Date | null
    updatedAt: Date | null
    locationId: string | null
    userId: string | null
  }

  export type ConferenceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    starts: Date | null
    ends: Date | null
    maxPresentations: number | null
    maxAttendees: number | null
    createdAt: Date | null
    updatedAt: Date | null
    locationId: string | null
    userId: string | null
  }

  export type ConferenceCountAggregateOutputType = {
    id: number
    name: number
    description: number
    starts: number
    ends: number
    maxPresentations: number
    maxAttendees: number
    createdAt: number
    updatedAt: number
    locationId: number
    userId: number
    _all: number
  }


  export type ConferenceAvgAggregateInputType = {
    maxPresentations?: true
    maxAttendees?: true
  }

  export type ConferenceSumAggregateInputType = {
    maxPresentations?: true
    maxAttendees?: true
  }

  export type ConferenceMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    starts?: true
    ends?: true
    maxPresentations?: true
    maxAttendees?: true
    createdAt?: true
    updatedAt?: true
    locationId?: true
    userId?: true
  }

  export type ConferenceMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    starts?: true
    ends?: true
    maxPresentations?: true
    maxAttendees?: true
    createdAt?: true
    updatedAt?: true
    locationId?: true
    userId?: true
  }

  export type ConferenceCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    starts?: true
    ends?: true
    maxPresentations?: true
    maxAttendees?: true
    createdAt?: true
    updatedAt?: true
    locationId?: true
    userId?: true
    _all?: true
  }

  export type ConferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conference to aggregate.
     */
    where?: ConferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conferences to fetch.
     */
    orderBy?: ConferenceOrderByWithRelationInput | ConferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conferences
    **/
    _count?: true | ConferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConferenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConferenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConferenceMaxAggregateInputType
  }

  export type GetConferenceAggregateType<T extends ConferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateConference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConference[P]>
      : GetScalarType<T[P], AggregateConference[P]>
  }




  export type ConferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConferenceWhereInput
    orderBy?: ConferenceOrderByWithAggregationInput | ConferenceOrderByWithAggregationInput[]
    by: ConferenceScalarFieldEnum[] | ConferenceScalarFieldEnum
    having?: ConferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConferenceCountAggregateInputType | true
    _avg?: ConferenceAvgAggregateInputType
    _sum?: ConferenceSumAggregateInputType
    _min?: ConferenceMinAggregateInputType
    _max?: ConferenceMaxAggregateInputType
  }

  export type ConferenceGroupByOutputType = {
    id: string
    name: string
    description: string | null
    starts: Date
    ends: Date
    maxPresentations: number
    maxAttendees: number
    createdAt: Date
    updatedAt: Date
    locationId: string
    userId: string
    _count: ConferenceCountAggregateOutputType | null
    _avg: ConferenceAvgAggregateOutputType | null
    _sum: ConferenceSumAggregateOutputType | null
    _min: ConferenceMinAggregateOutputType | null
    _max: ConferenceMaxAggregateOutputType | null
  }

  type GetConferenceGroupByPayload<T extends ConferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConferenceGroupByOutputType[P]>
            : GetScalarType<T[P], ConferenceGroupByOutputType[P]>
        }
      >
    >


  export type ConferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    starts?: boolean
    ends?: boolean
    maxPresentations?: boolean
    maxAttendees?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    locationId?: boolean
    userId?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    presentations?: boolean | Conference$presentationsArgs<ExtArgs>
    attendees?: boolean | Conference$attendeesArgs<ExtArgs>
    _count?: boolean | ConferenceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conference"]>

  export type ConferenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    starts?: boolean
    ends?: boolean
    maxPresentations?: boolean
    maxAttendees?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    locationId?: boolean
    userId?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conference"]>

  export type ConferenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    starts?: boolean
    ends?: boolean
    maxPresentations?: boolean
    maxAttendees?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    locationId?: boolean
    userId?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conference"]>

  export type ConferenceSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    starts?: boolean
    ends?: boolean
    maxPresentations?: boolean
    maxAttendees?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    locationId?: boolean
    userId?: boolean
  }

  export type ConferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "starts" | "ends" | "maxPresentations" | "maxAttendees" | "createdAt" | "updatedAt" | "locationId" | "userId", ExtArgs["result"]["conference"]>
  export type ConferenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    presentations?: boolean | Conference$presentationsArgs<ExtArgs>
    attendees?: boolean | Conference$attendeesArgs<ExtArgs>
    _count?: boolean | ConferenceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConferenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ConferenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ConferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conference"
    objects: {
      location: Prisma.$LocationPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      presentations: Prisma.$PresentationPayload<ExtArgs>[]
      attendees: Prisma.$AttendeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      starts: Date
      ends: Date
      maxPresentations: number
      maxAttendees: number
      createdAt: Date
      updatedAt: Date
      locationId: string
      userId: string
    }, ExtArgs["result"]["conference"]>
    composites: {}
  }

  type ConferenceGetPayload<S extends boolean | null | undefined | ConferenceDefaultArgs> = $Result.GetResult<Prisma.$ConferencePayload, S>

  type ConferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConferenceCountAggregateInputType | true
    }

  export interface ConferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conference'], meta: { name: 'Conference' } }
    /**
     * Find zero or one Conference that matches the filter.
     * @param {ConferenceFindUniqueArgs} args - Arguments to find a Conference
     * @example
     * // Get one Conference
     * const conference = await prisma.conference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConferenceFindUniqueArgs>(args: SelectSubset<T, ConferenceFindUniqueArgs<ExtArgs>>): Prisma__ConferenceClient<$Result.GetResult<Prisma.$ConferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConferenceFindUniqueOrThrowArgs} args - Arguments to find a Conference
     * @example
     * // Get one Conference
     * const conference = await prisma.conference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, ConferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConferenceClient<$Result.GetResult<Prisma.$ConferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConferenceFindFirstArgs} args - Arguments to find a Conference
     * @example
     * // Get one Conference
     * const conference = await prisma.conference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConferenceFindFirstArgs>(args?: SelectSubset<T, ConferenceFindFirstArgs<ExtArgs>>): Prisma__ConferenceClient<$Result.GetResult<Prisma.$ConferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConferenceFindFirstOrThrowArgs} args - Arguments to find a Conference
     * @example
     * // Get one Conference
     * const conference = await prisma.conference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, ConferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConferenceClient<$Result.GetResult<Prisma.$ConferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conferences
     * const conferences = await prisma.conference.findMany()
     * 
     * // Get first 10 Conferences
     * const conferences = await prisma.conference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conferenceWithIdOnly = await prisma.conference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConferenceFindManyArgs>(args?: SelectSubset<T, ConferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conference.
     * @param {ConferenceCreateArgs} args - Arguments to create a Conference.
     * @example
     * // Create one Conference
     * const Conference = await prisma.conference.create({
     *   data: {
     *     // ... data to create a Conference
     *   }
     * })
     * 
     */
    create<T extends ConferenceCreateArgs>(args: SelectSubset<T, ConferenceCreateArgs<ExtArgs>>): Prisma__ConferenceClient<$Result.GetResult<Prisma.$ConferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conferences.
     * @param {ConferenceCreateManyArgs} args - Arguments to create many Conferences.
     * @example
     * // Create many Conferences
     * const conference = await prisma.conference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConferenceCreateManyArgs>(args?: SelectSubset<T, ConferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conferences and returns the data saved in the database.
     * @param {ConferenceCreateManyAndReturnArgs} args - Arguments to create many Conferences.
     * @example
     * // Create many Conferences
     * const conference = await prisma.conference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conferences and only return the `id`
     * const conferenceWithIdOnly = await prisma.conference.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConferenceCreateManyAndReturnArgs>(args?: SelectSubset<T, ConferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conference.
     * @param {ConferenceDeleteArgs} args - Arguments to delete one Conference.
     * @example
     * // Delete one Conference
     * const Conference = await prisma.conference.delete({
     *   where: {
     *     // ... filter to delete one Conference
     *   }
     * })
     * 
     */
    delete<T extends ConferenceDeleteArgs>(args: SelectSubset<T, ConferenceDeleteArgs<ExtArgs>>): Prisma__ConferenceClient<$Result.GetResult<Prisma.$ConferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conference.
     * @param {ConferenceUpdateArgs} args - Arguments to update one Conference.
     * @example
     * // Update one Conference
     * const conference = await prisma.conference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConferenceUpdateArgs>(args: SelectSubset<T, ConferenceUpdateArgs<ExtArgs>>): Prisma__ConferenceClient<$Result.GetResult<Prisma.$ConferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conferences.
     * @param {ConferenceDeleteManyArgs} args - Arguments to filter Conferences to delete.
     * @example
     * // Delete a few Conferences
     * const { count } = await prisma.conference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConferenceDeleteManyArgs>(args?: SelectSubset<T, ConferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conferences
     * const conference = await prisma.conference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConferenceUpdateManyArgs>(args: SelectSubset<T, ConferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conferences and returns the data updated in the database.
     * @param {ConferenceUpdateManyAndReturnArgs} args - Arguments to update many Conferences.
     * @example
     * // Update many Conferences
     * const conference = await prisma.conference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conferences and only return the `id`
     * const conferenceWithIdOnly = await prisma.conference.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConferenceUpdateManyAndReturnArgs>(args: SelectSubset<T, ConferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conference.
     * @param {ConferenceUpsertArgs} args - Arguments to update or create a Conference.
     * @example
     * // Update or create a Conference
     * const conference = await prisma.conference.upsert({
     *   create: {
     *     // ... data to create a Conference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conference we want to update
     *   }
     * })
     */
    upsert<T extends ConferenceUpsertArgs>(args: SelectSubset<T, ConferenceUpsertArgs<ExtArgs>>): Prisma__ConferenceClient<$Result.GetResult<Prisma.$ConferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConferenceCountArgs} args - Arguments to filter Conferences to count.
     * @example
     * // Count the number of Conferences
     * const count = await prisma.conference.count({
     *   where: {
     *     // ... the filter for the Conferences we want to count
     *   }
     * })
    **/
    count<T extends ConferenceCountArgs>(
      args?: Subset<T, ConferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConferenceAggregateArgs>(args: Subset<T, ConferenceAggregateArgs>): Prisma.PrismaPromise<GetConferenceAggregateType<T>>

    /**
     * Group by Conference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConferenceGroupByArgs} args - Group by arguments.
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
      T extends ConferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConferenceGroupByArgs['orderBy'] }
        : { orderBy?: ConferenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conference model
   */
  readonly fields: ConferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    presentations<T extends Conference$presentationsArgs<ExtArgs> = {}>(args?: Subset<T, Conference$presentationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresentationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attendees<T extends Conference$attendeesArgs<ExtArgs> = {}>(args?: Subset<T, Conference$attendeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Conference model
   */
  interface ConferenceFieldRefs {
    readonly id: FieldRef<"Conference", 'String'>
    readonly name: FieldRef<"Conference", 'String'>
    readonly description: FieldRef<"Conference", 'String'>
    readonly starts: FieldRef<"Conference", 'DateTime'>
    readonly ends: FieldRef<"Conference", 'DateTime'>
    readonly maxPresentations: FieldRef<"Conference", 'Int'>
    readonly maxAttendees: FieldRef<"Conference", 'Int'>
    readonly createdAt: FieldRef<"Conference", 'DateTime'>
    readonly updatedAt: FieldRef<"Conference", 'DateTime'>
    readonly locationId: FieldRef<"Conference", 'String'>
    readonly userId: FieldRef<"Conference", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Conference findUnique
   */
  export type ConferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conference
     */
    select?: ConferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conference
     */
    omit?: ConferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceInclude<ExtArgs> | null
    /**
     * Filter, which Conference to fetch.
     */
    where: ConferenceWhereUniqueInput
  }

  /**
   * Conference findUniqueOrThrow
   */
  export type ConferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conference
     */
    select?: ConferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conference
     */
    omit?: ConferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceInclude<ExtArgs> | null
    /**
     * Filter, which Conference to fetch.
     */
    where: ConferenceWhereUniqueInput
  }

  /**
   * Conference findFirst
   */
  export type ConferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conference
     */
    select?: ConferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conference
     */
    omit?: ConferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceInclude<ExtArgs> | null
    /**
     * Filter, which Conference to fetch.
     */
    where?: ConferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conferences to fetch.
     */
    orderBy?: ConferenceOrderByWithRelationInput | ConferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conferences.
     */
    cursor?: ConferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conferences.
     */
    distinct?: ConferenceScalarFieldEnum | ConferenceScalarFieldEnum[]
  }

  /**
   * Conference findFirstOrThrow
   */
  export type ConferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conference
     */
    select?: ConferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conference
     */
    omit?: ConferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceInclude<ExtArgs> | null
    /**
     * Filter, which Conference to fetch.
     */
    where?: ConferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conferences to fetch.
     */
    orderBy?: ConferenceOrderByWithRelationInput | ConferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conferences.
     */
    cursor?: ConferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conferences.
     */
    distinct?: ConferenceScalarFieldEnum | ConferenceScalarFieldEnum[]
  }

  /**
   * Conference findMany
   */
  export type ConferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conference
     */
    select?: ConferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conference
     */
    omit?: ConferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceInclude<ExtArgs> | null
    /**
     * Filter, which Conferences to fetch.
     */
    where?: ConferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conferences to fetch.
     */
    orderBy?: ConferenceOrderByWithRelationInput | ConferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conferences.
     */
    cursor?: ConferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conferences.
     */
    skip?: number
    distinct?: ConferenceScalarFieldEnum | ConferenceScalarFieldEnum[]
  }

  /**
   * Conference create
   */
  export type ConferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conference
     */
    select?: ConferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conference
     */
    omit?: ConferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceInclude<ExtArgs> | null
    /**
     * The data needed to create a Conference.
     */
    data: XOR<ConferenceCreateInput, ConferenceUncheckedCreateInput>
  }

  /**
   * Conference createMany
   */
  export type ConferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conferences.
     */
    data: ConferenceCreateManyInput | ConferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conference createManyAndReturn
   */
  export type ConferenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conference
     */
    select?: ConferenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conference
     */
    omit?: ConferenceOmit<ExtArgs> | null
    /**
     * The data used to create many Conferences.
     */
    data: ConferenceCreateManyInput | ConferenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conference update
   */
  export type ConferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conference
     */
    select?: ConferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conference
     */
    omit?: ConferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceInclude<ExtArgs> | null
    /**
     * The data needed to update a Conference.
     */
    data: XOR<ConferenceUpdateInput, ConferenceUncheckedUpdateInput>
    /**
     * Choose, which Conference to update.
     */
    where: ConferenceWhereUniqueInput
  }

  /**
   * Conference updateMany
   */
  export type ConferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conferences.
     */
    data: XOR<ConferenceUpdateManyMutationInput, ConferenceUncheckedUpdateManyInput>
    /**
     * Filter which Conferences to update
     */
    where?: ConferenceWhereInput
    /**
     * Limit how many Conferences to update.
     */
    limit?: number
  }

  /**
   * Conference updateManyAndReturn
   */
  export type ConferenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conference
     */
    select?: ConferenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conference
     */
    omit?: ConferenceOmit<ExtArgs> | null
    /**
     * The data used to update Conferences.
     */
    data: XOR<ConferenceUpdateManyMutationInput, ConferenceUncheckedUpdateManyInput>
    /**
     * Filter which Conferences to update
     */
    where?: ConferenceWhereInput
    /**
     * Limit how many Conferences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conference upsert
   */
  export type ConferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conference
     */
    select?: ConferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conference
     */
    omit?: ConferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceInclude<ExtArgs> | null
    /**
     * The filter to search for the Conference to update in case it exists.
     */
    where: ConferenceWhereUniqueInput
    /**
     * In case the Conference found by the `where` argument doesn't exist, create a new Conference with this data.
     */
    create: XOR<ConferenceCreateInput, ConferenceUncheckedCreateInput>
    /**
     * In case the Conference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConferenceUpdateInput, ConferenceUncheckedUpdateInput>
  }

  /**
   * Conference delete
   */
  export type ConferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conference
     */
    select?: ConferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conference
     */
    omit?: ConferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceInclude<ExtArgs> | null
    /**
     * Filter which Conference to delete.
     */
    where: ConferenceWhereUniqueInput
  }

  /**
   * Conference deleteMany
   */
  export type ConferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conferences to delete
     */
    where?: ConferenceWhereInput
    /**
     * Limit how many Conferences to delete.
     */
    limit?: number
  }

  /**
   * Conference.presentations
   */
  export type Conference$presentationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presentation
     */
    select?: PresentationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presentation
     */
    omit?: PresentationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentationInclude<ExtArgs> | null
    where?: PresentationWhereInput
    orderBy?: PresentationOrderByWithRelationInput | PresentationOrderByWithRelationInput[]
    cursor?: PresentationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PresentationScalarFieldEnum | PresentationScalarFieldEnum[]
  }

  /**
   * Conference.attendees
   */
  export type Conference$attendeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    where?: AttendeeWhereInput
    orderBy?: AttendeeOrderByWithRelationInput | AttendeeOrderByWithRelationInput[]
    cursor?: AttendeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendeeScalarFieldEnum | AttendeeScalarFieldEnum[]
  }

  /**
   * Conference without action
   */
  export type ConferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conference
     */
    select?: ConferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conference
     */
    omit?: ConferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    roomCount: number | null
  }

  export type LocationSumAggregateOutputType = {
    roomCount: number | null
  }

  export type LocationMinAggregateOutputType = {
    id: string | null
    name: string | null
    city: string | null
    state: string | null
    roomCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    city: string | null
    state: string | null
    roomCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    name: number
    city: number
    state: number
    roomCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    roomCount?: true
  }

  export type LocationSumAggregateInputType = {
    roomCount?: true
  }

  export type LocationMinAggregateInputType = {
    id?: true
    name?: true
    city?: true
    state?: true
    roomCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    name?: true
    city?: true
    state?: true
    roomCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    name?: true
    city?: true
    state?: true
    roomCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: string
    name: string
    city: string
    state: string
    roomCount: number
    createdAt: Date
    updatedAt: Date
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    state?: boolean
    roomCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conferences?: boolean | Location$conferencesArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    state?: boolean
    roomCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    state?: boolean
    roomCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    name?: boolean
    city?: boolean
    state?: boolean
    roomCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "city" | "state" | "roomCount" | "createdAt" | "updatedAt", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conferences?: boolean | Location$conferencesArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      conferences: Prisma.$ConferencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      city: string
      state: string
      roomCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
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
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conferences<T extends Location$conferencesArgs<ExtArgs> = {}>(args?: Subset<T, Location$conferencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'String'>
    readonly name: FieldRef<"Location", 'String'>
    readonly city: FieldRef<"Location", 'String'>
    readonly state: FieldRef<"Location", 'String'>
    readonly roomCount: FieldRef<"Location", 'Int'>
    readonly createdAt: FieldRef<"Location", 'DateTime'>
    readonly updatedAt: FieldRef<"Location", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location createManyAndReturn
   */
  export type LocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location.conferences
   */
  export type Location$conferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conference
     */
    select?: ConferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conference
     */
    omit?: ConferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConferenceInclude<ExtArgs> | null
    where?: ConferenceWhereInput
    orderBy?: ConferenceOrderByWithRelationInput | ConferenceOrderByWithRelationInput[]
    cursor?: ConferenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConferenceScalarFieldEnum | ConferenceScalarFieldEnum[]
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model Presentation
   */

  export type AggregatePresentation = {
    _count: PresentationCountAggregateOutputType | null
    _min: PresentationMinAggregateOutputType | null
    _max: PresentationMaxAggregateOutputType | null
  }

  export type PresentationMinAggregateOutputType = {
    id: string | null
    title: string | null
    synopsis: string | null
    presenter: string | null
    conferenceId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PresentationMaxAggregateOutputType = {
    id: string | null
    title: string | null
    synopsis: string | null
    presenter: string | null
    conferenceId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PresentationCountAggregateOutputType = {
    id: number
    title: number
    synopsis: number
    presenter: number
    conferenceId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PresentationMinAggregateInputType = {
    id?: true
    title?: true
    synopsis?: true
    presenter?: true
    conferenceId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PresentationMaxAggregateInputType = {
    id?: true
    title?: true
    synopsis?: true
    presenter?: true
    conferenceId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PresentationCountAggregateInputType = {
    id?: true
    title?: true
    synopsis?: true
    presenter?: true
    conferenceId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PresentationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Presentation to aggregate.
     */
    where?: PresentationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presentations to fetch.
     */
    orderBy?: PresentationOrderByWithRelationInput | PresentationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PresentationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presentations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presentations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Presentations
    **/
    _count?: true | PresentationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PresentationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PresentationMaxAggregateInputType
  }

  export type GetPresentationAggregateType<T extends PresentationAggregateArgs> = {
        [P in keyof T & keyof AggregatePresentation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePresentation[P]>
      : GetScalarType<T[P], AggregatePresentation[P]>
  }




  export type PresentationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresentationWhereInput
    orderBy?: PresentationOrderByWithAggregationInput | PresentationOrderByWithAggregationInput[]
    by: PresentationScalarFieldEnum[] | PresentationScalarFieldEnum
    having?: PresentationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PresentationCountAggregateInputType | true
    _min?: PresentationMinAggregateInputType
    _max?: PresentationMaxAggregateInputType
  }

  export type PresentationGroupByOutputType = {
    id: string
    title: string
    synopsis: string
    presenter: string
    conferenceId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: PresentationCountAggregateOutputType | null
    _min: PresentationMinAggregateOutputType | null
    _max: PresentationMaxAggregateOutputType | null
  }

  type GetPresentationGroupByPayload<T extends PresentationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PresentationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PresentationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PresentationGroupByOutputType[P]>
            : GetScalarType<T[P], PresentationGroupByOutputType[P]>
        }
      >
    >


  export type PresentationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    synopsis?: boolean
    presenter?: boolean
    conferenceId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conference?: boolean | ConferenceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["presentation"]>

  export type PresentationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    synopsis?: boolean
    presenter?: boolean
    conferenceId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conference?: boolean | ConferenceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["presentation"]>

  export type PresentationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    synopsis?: boolean
    presenter?: boolean
    conferenceId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conference?: boolean | ConferenceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["presentation"]>

  export type PresentationSelectScalar = {
    id?: boolean
    title?: boolean
    synopsis?: boolean
    presenter?: boolean
    conferenceId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PresentationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "synopsis" | "presenter" | "conferenceId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["presentation"]>
  export type PresentationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conference?: boolean | ConferenceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PresentationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conference?: boolean | ConferenceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PresentationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conference?: boolean | ConferenceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PresentationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Presentation"
    objects: {
      conference: Prisma.$ConferencePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      synopsis: string
      presenter: string
      conferenceId: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["presentation"]>
    composites: {}
  }

  type PresentationGetPayload<S extends boolean | null | undefined | PresentationDefaultArgs> = $Result.GetResult<Prisma.$PresentationPayload, S>

  type PresentationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PresentationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PresentationCountAggregateInputType | true
    }

  export interface PresentationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Presentation'], meta: { name: 'Presentation' } }
    /**
     * Find zero or one Presentation that matches the filter.
     * @param {PresentationFindUniqueArgs} args - Arguments to find a Presentation
     * @example
     * // Get one Presentation
     * const presentation = await prisma.presentation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PresentationFindUniqueArgs>(args: SelectSubset<T, PresentationFindUniqueArgs<ExtArgs>>): Prisma__PresentationClient<$Result.GetResult<Prisma.$PresentationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Presentation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PresentationFindUniqueOrThrowArgs} args - Arguments to find a Presentation
     * @example
     * // Get one Presentation
     * const presentation = await prisma.presentation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PresentationFindUniqueOrThrowArgs>(args: SelectSubset<T, PresentationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PresentationClient<$Result.GetResult<Prisma.$PresentationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Presentation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentationFindFirstArgs} args - Arguments to find a Presentation
     * @example
     * // Get one Presentation
     * const presentation = await prisma.presentation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PresentationFindFirstArgs>(args?: SelectSubset<T, PresentationFindFirstArgs<ExtArgs>>): Prisma__PresentationClient<$Result.GetResult<Prisma.$PresentationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Presentation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentationFindFirstOrThrowArgs} args - Arguments to find a Presentation
     * @example
     * // Get one Presentation
     * const presentation = await prisma.presentation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PresentationFindFirstOrThrowArgs>(args?: SelectSubset<T, PresentationFindFirstOrThrowArgs<ExtArgs>>): Prisma__PresentationClient<$Result.GetResult<Prisma.$PresentationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Presentations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Presentations
     * const presentations = await prisma.presentation.findMany()
     * 
     * // Get first 10 Presentations
     * const presentations = await prisma.presentation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const presentationWithIdOnly = await prisma.presentation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PresentationFindManyArgs>(args?: SelectSubset<T, PresentationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresentationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Presentation.
     * @param {PresentationCreateArgs} args - Arguments to create a Presentation.
     * @example
     * // Create one Presentation
     * const Presentation = await prisma.presentation.create({
     *   data: {
     *     // ... data to create a Presentation
     *   }
     * })
     * 
     */
    create<T extends PresentationCreateArgs>(args: SelectSubset<T, PresentationCreateArgs<ExtArgs>>): Prisma__PresentationClient<$Result.GetResult<Prisma.$PresentationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Presentations.
     * @param {PresentationCreateManyArgs} args - Arguments to create many Presentations.
     * @example
     * // Create many Presentations
     * const presentation = await prisma.presentation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PresentationCreateManyArgs>(args?: SelectSubset<T, PresentationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Presentations and returns the data saved in the database.
     * @param {PresentationCreateManyAndReturnArgs} args - Arguments to create many Presentations.
     * @example
     * // Create many Presentations
     * const presentation = await prisma.presentation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Presentations and only return the `id`
     * const presentationWithIdOnly = await prisma.presentation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PresentationCreateManyAndReturnArgs>(args?: SelectSubset<T, PresentationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresentationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Presentation.
     * @param {PresentationDeleteArgs} args - Arguments to delete one Presentation.
     * @example
     * // Delete one Presentation
     * const Presentation = await prisma.presentation.delete({
     *   where: {
     *     // ... filter to delete one Presentation
     *   }
     * })
     * 
     */
    delete<T extends PresentationDeleteArgs>(args: SelectSubset<T, PresentationDeleteArgs<ExtArgs>>): Prisma__PresentationClient<$Result.GetResult<Prisma.$PresentationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Presentation.
     * @param {PresentationUpdateArgs} args - Arguments to update one Presentation.
     * @example
     * // Update one Presentation
     * const presentation = await prisma.presentation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PresentationUpdateArgs>(args: SelectSubset<T, PresentationUpdateArgs<ExtArgs>>): Prisma__PresentationClient<$Result.GetResult<Prisma.$PresentationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Presentations.
     * @param {PresentationDeleteManyArgs} args - Arguments to filter Presentations to delete.
     * @example
     * // Delete a few Presentations
     * const { count } = await prisma.presentation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PresentationDeleteManyArgs>(args?: SelectSubset<T, PresentationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Presentations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Presentations
     * const presentation = await prisma.presentation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PresentationUpdateManyArgs>(args: SelectSubset<T, PresentationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Presentations and returns the data updated in the database.
     * @param {PresentationUpdateManyAndReturnArgs} args - Arguments to update many Presentations.
     * @example
     * // Update many Presentations
     * const presentation = await prisma.presentation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Presentations and only return the `id`
     * const presentationWithIdOnly = await prisma.presentation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PresentationUpdateManyAndReturnArgs>(args: SelectSubset<T, PresentationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresentationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Presentation.
     * @param {PresentationUpsertArgs} args - Arguments to update or create a Presentation.
     * @example
     * // Update or create a Presentation
     * const presentation = await prisma.presentation.upsert({
     *   create: {
     *     // ... data to create a Presentation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Presentation we want to update
     *   }
     * })
     */
    upsert<T extends PresentationUpsertArgs>(args: SelectSubset<T, PresentationUpsertArgs<ExtArgs>>): Prisma__PresentationClient<$Result.GetResult<Prisma.$PresentationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Presentations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentationCountArgs} args - Arguments to filter Presentations to count.
     * @example
     * // Count the number of Presentations
     * const count = await prisma.presentation.count({
     *   where: {
     *     // ... the filter for the Presentations we want to count
     *   }
     * })
    **/
    count<T extends PresentationCountArgs>(
      args?: Subset<T, PresentationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PresentationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Presentation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PresentationAggregateArgs>(args: Subset<T, PresentationAggregateArgs>): Prisma.PrismaPromise<GetPresentationAggregateType<T>>

    /**
     * Group by Presentation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresentationGroupByArgs} args - Group by arguments.
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
      T extends PresentationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PresentationGroupByArgs['orderBy'] }
        : { orderBy?: PresentationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PresentationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPresentationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Presentation model
   */
  readonly fields: PresentationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Presentation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PresentationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conference<T extends ConferenceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConferenceDefaultArgs<ExtArgs>>): Prisma__ConferenceClient<$Result.GetResult<Prisma.$ConferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Presentation model
   */
  interface PresentationFieldRefs {
    readonly id: FieldRef<"Presentation", 'String'>
    readonly title: FieldRef<"Presentation", 'String'>
    readonly synopsis: FieldRef<"Presentation", 'String'>
    readonly presenter: FieldRef<"Presentation", 'String'>
    readonly conferenceId: FieldRef<"Presentation", 'String'>
    readonly userId: FieldRef<"Presentation", 'String'>
    readonly createdAt: FieldRef<"Presentation", 'DateTime'>
    readonly updatedAt: FieldRef<"Presentation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Presentation findUnique
   */
  export type PresentationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presentation
     */
    select?: PresentationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presentation
     */
    omit?: PresentationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentationInclude<ExtArgs> | null
    /**
     * Filter, which Presentation to fetch.
     */
    where: PresentationWhereUniqueInput
  }

  /**
   * Presentation findUniqueOrThrow
   */
  export type PresentationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presentation
     */
    select?: PresentationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presentation
     */
    omit?: PresentationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentationInclude<ExtArgs> | null
    /**
     * Filter, which Presentation to fetch.
     */
    where: PresentationWhereUniqueInput
  }

  /**
   * Presentation findFirst
   */
  export type PresentationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presentation
     */
    select?: PresentationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presentation
     */
    omit?: PresentationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentationInclude<ExtArgs> | null
    /**
     * Filter, which Presentation to fetch.
     */
    where?: PresentationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presentations to fetch.
     */
    orderBy?: PresentationOrderByWithRelationInput | PresentationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Presentations.
     */
    cursor?: PresentationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presentations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presentations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Presentations.
     */
    distinct?: PresentationScalarFieldEnum | PresentationScalarFieldEnum[]
  }

  /**
   * Presentation findFirstOrThrow
   */
  export type PresentationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presentation
     */
    select?: PresentationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presentation
     */
    omit?: PresentationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentationInclude<ExtArgs> | null
    /**
     * Filter, which Presentation to fetch.
     */
    where?: PresentationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presentations to fetch.
     */
    orderBy?: PresentationOrderByWithRelationInput | PresentationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Presentations.
     */
    cursor?: PresentationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presentations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presentations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Presentations.
     */
    distinct?: PresentationScalarFieldEnum | PresentationScalarFieldEnum[]
  }

  /**
   * Presentation findMany
   */
  export type PresentationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presentation
     */
    select?: PresentationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presentation
     */
    omit?: PresentationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentationInclude<ExtArgs> | null
    /**
     * Filter, which Presentations to fetch.
     */
    where?: PresentationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presentations to fetch.
     */
    orderBy?: PresentationOrderByWithRelationInput | PresentationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Presentations.
     */
    cursor?: PresentationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presentations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presentations.
     */
    skip?: number
    distinct?: PresentationScalarFieldEnum | PresentationScalarFieldEnum[]
  }

  /**
   * Presentation create
   */
  export type PresentationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presentation
     */
    select?: PresentationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presentation
     */
    omit?: PresentationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentationInclude<ExtArgs> | null
    /**
     * The data needed to create a Presentation.
     */
    data: XOR<PresentationCreateInput, PresentationUncheckedCreateInput>
  }

  /**
   * Presentation createMany
   */
  export type PresentationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Presentations.
     */
    data: PresentationCreateManyInput | PresentationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Presentation createManyAndReturn
   */
  export type PresentationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presentation
     */
    select?: PresentationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Presentation
     */
    omit?: PresentationOmit<ExtArgs> | null
    /**
     * The data used to create many Presentations.
     */
    data: PresentationCreateManyInput | PresentationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Presentation update
   */
  export type PresentationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presentation
     */
    select?: PresentationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presentation
     */
    omit?: PresentationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentationInclude<ExtArgs> | null
    /**
     * The data needed to update a Presentation.
     */
    data: XOR<PresentationUpdateInput, PresentationUncheckedUpdateInput>
    /**
     * Choose, which Presentation to update.
     */
    where: PresentationWhereUniqueInput
  }

  /**
   * Presentation updateMany
   */
  export type PresentationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Presentations.
     */
    data: XOR<PresentationUpdateManyMutationInput, PresentationUncheckedUpdateManyInput>
    /**
     * Filter which Presentations to update
     */
    where?: PresentationWhereInput
    /**
     * Limit how many Presentations to update.
     */
    limit?: number
  }

  /**
   * Presentation updateManyAndReturn
   */
  export type PresentationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presentation
     */
    select?: PresentationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Presentation
     */
    omit?: PresentationOmit<ExtArgs> | null
    /**
     * The data used to update Presentations.
     */
    data: XOR<PresentationUpdateManyMutationInput, PresentationUncheckedUpdateManyInput>
    /**
     * Filter which Presentations to update
     */
    where?: PresentationWhereInput
    /**
     * Limit how many Presentations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Presentation upsert
   */
  export type PresentationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presentation
     */
    select?: PresentationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presentation
     */
    omit?: PresentationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentationInclude<ExtArgs> | null
    /**
     * The filter to search for the Presentation to update in case it exists.
     */
    where: PresentationWhereUniqueInput
    /**
     * In case the Presentation found by the `where` argument doesn't exist, create a new Presentation with this data.
     */
    create: XOR<PresentationCreateInput, PresentationUncheckedCreateInput>
    /**
     * In case the Presentation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PresentationUpdateInput, PresentationUncheckedUpdateInput>
  }

  /**
   * Presentation delete
   */
  export type PresentationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presentation
     */
    select?: PresentationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presentation
     */
    omit?: PresentationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentationInclude<ExtArgs> | null
    /**
     * Filter which Presentation to delete.
     */
    where: PresentationWhereUniqueInput
  }

  /**
   * Presentation deleteMany
   */
  export type PresentationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Presentations to delete
     */
    where?: PresentationWhereInput
    /**
     * Limit how many Presentations to delete.
     */
    limit?: number
  }

  /**
   * Presentation without action
   */
  export type PresentationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presentation
     */
    select?: PresentationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presentation
     */
    omit?: PresentationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresentationInclude<ExtArgs> | null
  }


  /**
   * Model Attendee
   */

  export type AggregateAttendee = {
    _count: AttendeeCountAggregateOutputType | null
    _min: AttendeeMinAggregateOutputType | null
    _max: AttendeeMaxAggregateOutputType | null
  }

  export type AttendeeMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    conferenceId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendeeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    conferenceId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendeeCountAggregateOutputType = {
    id: number
    name: number
    email: number
    conferenceId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AttendeeMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    conferenceId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendeeMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    conferenceId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendeeCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    conferenceId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AttendeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendee to aggregate.
     */
    where?: AttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendees to fetch.
     */
    orderBy?: AttendeeOrderByWithRelationInput | AttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendees
    **/
    _count?: true | AttendeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendeeMaxAggregateInputType
  }

  export type GetAttendeeAggregateType<T extends AttendeeAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendee[P]>
      : GetScalarType<T[P], AggregateAttendee[P]>
  }




  export type AttendeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendeeWhereInput
    orderBy?: AttendeeOrderByWithAggregationInput | AttendeeOrderByWithAggregationInput[]
    by: AttendeeScalarFieldEnum[] | AttendeeScalarFieldEnum
    having?: AttendeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendeeCountAggregateInputType | true
    _min?: AttendeeMinAggregateInputType
    _max?: AttendeeMaxAggregateInputType
  }

  export type AttendeeGroupByOutputType = {
    id: string
    name: string
    email: string
    conferenceId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: AttendeeCountAggregateOutputType | null
    _min: AttendeeMinAggregateOutputType | null
    _max: AttendeeMaxAggregateOutputType | null
  }

  type GetAttendeeGroupByPayload<T extends AttendeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendeeGroupByOutputType[P]>
            : GetScalarType<T[P], AttendeeGroupByOutputType[P]>
        }
      >
    >


  export type AttendeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    conferenceId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conference?: boolean | ConferenceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendee"]>

  export type AttendeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    conferenceId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conference?: boolean | ConferenceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendee"]>

  export type AttendeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    conferenceId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    conference?: boolean | ConferenceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendee"]>

  export type AttendeeSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    conferenceId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AttendeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "conferenceId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["attendee"]>
  export type AttendeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conference?: boolean | ConferenceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AttendeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conference?: boolean | ConferenceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AttendeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conference?: boolean | ConferenceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AttendeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendee"
    objects: {
      conference: Prisma.$ConferencePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      conferenceId: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["attendee"]>
    composites: {}
  }

  type AttendeeGetPayload<S extends boolean | null | undefined | AttendeeDefaultArgs> = $Result.GetResult<Prisma.$AttendeePayload, S>

  type AttendeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendeeCountAggregateInputType | true
    }

  export interface AttendeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendee'], meta: { name: 'Attendee' } }
    /**
     * Find zero or one Attendee that matches the filter.
     * @param {AttendeeFindUniqueArgs} args - Arguments to find a Attendee
     * @example
     * // Get one Attendee
     * const attendee = await prisma.attendee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendeeFindUniqueArgs>(args: SelectSubset<T, AttendeeFindUniqueArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendeeFindUniqueOrThrowArgs} args - Arguments to find a Attendee
     * @example
     * // Get one Attendee
     * const attendee = await prisma.attendee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendeeFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeFindFirstArgs} args - Arguments to find a Attendee
     * @example
     * // Get one Attendee
     * const attendee = await prisma.attendee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendeeFindFirstArgs>(args?: SelectSubset<T, AttendeeFindFirstArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeFindFirstOrThrowArgs} args - Arguments to find a Attendee
     * @example
     * // Get one Attendee
     * const attendee = await prisma.attendee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendeeFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendees
     * const attendees = await prisma.attendee.findMany()
     * 
     * // Get first 10 Attendees
     * const attendees = await prisma.attendee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendeeWithIdOnly = await prisma.attendee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendeeFindManyArgs>(args?: SelectSubset<T, AttendeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendee.
     * @param {AttendeeCreateArgs} args - Arguments to create a Attendee.
     * @example
     * // Create one Attendee
     * const Attendee = await prisma.attendee.create({
     *   data: {
     *     // ... data to create a Attendee
     *   }
     * })
     * 
     */
    create<T extends AttendeeCreateArgs>(args: SelectSubset<T, AttendeeCreateArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendees.
     * @param {AttendeeCreateManyArgs} args - Arguments to create many Attendees.
     * @example
     * // Create many Attendees
     * const attendee = await prisma.attendee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendeeCreateManyArgs>(args?: SelectSubset<T, AttendeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendees and returns the data saved in the database.
     * @param {AttendeeCreateManyAndReturnArgs} args - Arguments to create many Attendees.
     * @example
     * // Create many Attendees
     * const attendee = await prisma.attendee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendees and only return the `id`
     * const attendeeWithIdOnly = await prisma.attendee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendeeCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attendee.
     * @param {AttendeeDeleteArgs} args - Arguments to delete one Attendee.
     * @example
     * // Delete one Attendee
     * const Attendee = await prisma.attendee.delete({
     *   where: {
     *     // ... filter to delete one Attendee
     *   }
     * })
     * 
     */
    delete<T extends AttendeeDeleteArgs>(args: SelectSubset<T, AttendeeDeleteArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendee.
     * @param {AttendeeUpdateArgs} args - Arguments to update one Attendee.
     * @example
     * // Update one Attendee
     * const attendee = await prisma.attendee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendeeUpdateArgs>(args: SelectSubset<T, AttendeeUpdateArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendees.
     * @param {AttendeeDeleteManyArgs} args - Arguments to filter Attendees to delete.
     * @example
     * // Delete a few Attendees
     * const { count } = await prisma.attendee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendeeDeleteManyArgs>(args?: SelectSubset<T, AttendeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendees
     * const attendee = await prisma.attendee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendeeUpdateManyArgs>(args: SelectSubset<T, AttendeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendees and returns the data updated in the database.
     * @param {AttendeeUpdateManyAndReturnArgs} args - Arguments to update many Attendees.
     * @example
     * // Update many Attendees
     * const attendee = await prisma.attendee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendees and only return the `id`
     * const attendeeWithIdOnly = await prisma.attendee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttendeeUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attendee.
     * @param {AttendeeUpsertArgs} args - Arguments to update or create a Attendee.
     * @example
     * // Update or create a Attendee
     * const attendee = await prisma.attendee.upsert({
     *   create: {
     *     // ... data to create a Attendee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendee we want to update
     *   }
     * })
     */
    upsert<T extends AttendeeUpsertArgs>(args: SelectSubset<T, AttendeeUpsertArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeCountArgs} args - Arguments to filter Attendees to count.
     * @example
     * // Count the number of Attendees
     * const count = await prisma.attendee.count({
     *   where: {
     *     // ... the filter for the Attendees we want to count
     *   }
     * })
    **/
    count<T extends AttendeeCountArgs>(
      args?: Subset<T, AttendeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendeeAggregateArgs>(args: Subset<T, AttendeeAggregateArgs>): Prisma.PrismaPromise<GetAttendeeAggregateType<T>>

    /**
     * Group by Attendee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeGroupByArgs} args - Group by arguments.
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
      T extends AttendeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendeeGroupByArgs['orderBy'] }
        : { orderBy?: AttendeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendee model
   */
  readonly fields: AttendeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conference<T extends ConferenceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConferenceDefaultArgs<ExtArgs>>): Prisma__ConferenceClient<$Result.GetResult<Prisma.$ConferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Attendee model
   */
  interface AttendeeFieldRefs {
    readonly id: FieldRef<"Attendee", 'String'>
    readonly name: FieldRef<"Attendee", 'String'>
    readonly email: FieldRef<"Attendee", 'String'>
    readonly conferenceId: FieldRef<"Attendee", 'String'>
    readonly userId: FieldRef<"Attendee", 'String'>
    readonly createdAt: FieldRef<"Attendee", 'DateTime'>
    readonly updatedAt: FieldRef<"Attendee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attendee findUnique
   */
  export type AttendeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * Filter, which Attendee to fetch.
     */
    where: AttendeeWhereUniqueInput
  }

  /**
   * Attendee findUniqueOrThrow
   */
  export type AttendeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * Filter, which Attendee to fetch.
     */
    where: AttendeeWhereUniqueInput
  }

  /**
   * Attendee findFirst
   */
  export type AttendeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * Filter, which Attendee to fetch.
     */
    where?: AttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendees to fetch.
     */
    orderBy?: AttendeeOrderByWithRelationInput | AttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendees.
     */
    cursor?: AttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendees.
     */
    distinct?: AttendeeScalarFieldEnum | AttendeeScalarFieldEnum[]
  }

  /**
   * Attendee findFirstOrThrow
   */
  export type AttendeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * Filter, which Attendee to fetch.
     */
    where?: AttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendees to fetch.
     */
    orderBy?: AttendeeOrderByWithRelationInput | AttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendees.
     */
    cursor?: AttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendees.
     */
    distinct?: AttendeeScalarFieldEnum | AttendeeScalarFieldEnum[]
  }

  /**
   * Attendee findMany
   */
  export type AttendeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * Filter, which Attendees to fetch.
     */
    where?: AttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendees to fetch.
     */
    orderBy?: AttendeeOrderByWithRelationInput | AttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendees.
     */
    cursor?: AttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendees.
     */
    skip?: number
    distinct?: AttendeeScalarFieldEnum | AttendeeScalarFieldEnum[]
  }

  /**
   * Attendee create
   */
  export type AttendeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendee.
     */
    data: XOR<AttendeeCreateInput, AttendeeUncheckedCreateInput>
  }

  /**
   * Attendee createMany
   */
  export type AttendeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendees.
     */
    data: AttendeeCreateManyInput | AttendeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendee createManyAndReturn
   */
  export type AttendeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * The data used to create many Attendees.
     */
    data: AttendeeCreateManyInput | AttendeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendee update
   */
  export type AttendeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendee.
     */
    data: XOR<AttendeeUpdateInput, AttendeeUncheckedUpdateInput>
    /**
     * Choose, which Attendee to update.
     */
    where: AttendeeWhereUniqueInput
  }

  /**
   * Attendee updateMany
   */
  export type AttendeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendees.
     */
    data: XOR<AttendeeUpdateManyMutationInput, AttendeeUncheckedUpdateManyInput>
    /**
     * Filter which Attendees to update
     */
    where?: AttendeeWhereInput
    /**
     * Limit how many Attendees to update.
     */
    limit?: number
  }

  /**
   * Attendee updateManyAndReturn
   */
  export type AttendeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * The data used to update Attendees.
     */
    data: XOR<AttendeeUpdateManyMutationInput, AttendeeUncheckedUpdateManyInput>
    /**
     * Filter which Attendees to update
     */
    where?: AttendeeWhereInput
    /**
     * Limit how many Attendees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendee upsert
   */
  export type AttendeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendee to update in case it exists.
     */
    where: AttendeeWhereUniqueInput
    /**
     * In case the Attendee found by the `where` argument doesn't exist, create a new Attendee with this data.
     */
    create: XOR<AttendeeCreateInput, AttendeeUncheckedCreateInput>
    /**
     * In case the Attendee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendeeUpdateInput, AttendeeUncheckedUpdateInput>
  }

  /**
   * Attendee delete
   */
  export type AttendeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
    /**
     * Filter which Attendee to delete.
     */
    where: AttendeeWhereUniqueInput
  }

  /**
   * Attendee deleteMany
   */
  export type AttendeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendees to delete
     */
    where?: AttendeeWhereInput
    /**
     * Limit how many Attendees to delete.
     */
    limit?: number
  }

  /**
   * Attendee without action
   */
  export type AttendeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendee
     */
    omit?: AttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendeeInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    image: 'image',
    emailVerified: 'emailVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ConferenceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    starts: 'starts',
    ends: 'ends',
    maxPresentations: 'maxPresentations',
    maxAttendees: 'maxAttendees',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    locationId: 'locationId',
    userId: 'userId'
  };

  export type ConferenceScalarFieldEnum = (typeof ConferenceScalarFieldEnum)[keyof typeof ConferenceScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    city: 'city',
    state: 'state',
    roomCount: 'roomCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const PresentationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    synopsis: 'synopsis',
    presenter: 'presenter',
    conferenceId: 'conferenceId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PresentationScalarFieldEnum = (typeof PresentationScalarFieldEnum)[keyof typeof PresentationScalarFieldEnum]


  export const AttendeeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    conferenceId: 'conferenceId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AttendeeScalarFieldEnum = (typeof AttendeeScalarFieldEnum)[keyof typeof AttendeeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    conferences?: ConferenceListRelationFilter
    presentations?: PresentationListRelationFilter
    attendees?: AttendeeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    conferences?: ConferenceOrderByRelationAggregateInput
    presentations?: PresentationOrderByRelationAggregateInput
    attendees?: AttendeeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    conferences?: ConferenceListRelationFilter
    presentations?: PresentationListRelationFilter
    attendees?: AttendeeListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ConferenceWhereInput = {
    AND?: ConferenceWhereInput | ConferenceWhereInput[]
    OR?: ConferenceWhereInput[]
    NOT?: ConferenceWhereInput | ConferenceWhereInput[]
    id?: StringFilter<"Conference"> | string
    name?: StringFilter<"Conference"> | string
    description?: StringNullableFilter<"Conference"> | string | null
    starts?: DateTimeFilter<"Conference"> | Date | string
    ends?: DateTimeFilter<"Conference"> | Date | string
    maxPresentations?: IntFilter<"Conference"> | number
    maxAttendees?: IntFilter<"Conference"> | number
    createdAt?: DateTimeFilter<"Conference"> | Date | string
    updatedAt?: DateTimeFilter<"Conference"> | Date | string
    locationId?: StringFilter<"Conference"> | string
    userId?: StringFilter<"Conference"> | string
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    presentations?: PresentationListRelationFilter
    attendees?: AttendeeListRelationFilter
  }

  export type ConferenceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    starts?: SortOrder
    ends?: SortOrder
    maxPresentations?: SortOrder
    maxAttendees?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    locationId?: SortOrder
    userId?: SortOrder
    location?: LocationOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    presentations?: PresentationOrderByRelationAggregateInput
    attendees?: AttendeeOrderByRelationAggregateInput
  }

  export type ConferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConferenceWhereInput | ConferenceWhereInput[]
    OR?: ConferenceWhereInput[]
    NOT?: ConferenceWhereInput | ConferenceWhereInput[]
    name?: StringFilter<"Conference"> | string
    description?: StringNullableFilter<"Conference"> | string | null
    starts?: DateTimeFilter<"Conference"> | Date | string
    ends?: DateTimeFilter<"Conference"> | Date | string
    maxPresentations?: IntFilter<"Conference"> | number
    maxAttendees?: IntFilter<"Conference"> | number
    createdAt?: DateTimeFilter<"Conference"> | Date | string
    updatedAt?: DateTimeFilter<"Conference"> | Date | string
    locationId?: StringFilter<"Conference"> | string
    userId?: StringFilter<"Conference"> | string
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    presentations?: PresentationListRelationFilter
    attendees?: AttendeeListRelationFilter
  }, "id">

  export type ConferenceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    starts?: SortOrder
    ends?: SortOrder
    maxPresentations?: SortOrder
    maxAttendees?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    locationId?: SortOrder
    userId?: SortOrder
    _count?: ConferenceCountOrderByAggregateInput
    _avg?: ConferenceAvgOrderByAggregateInput
    _max?: ConferenceMaxOrderByAggregateInput
    _min?: ConferenceMinOrderByAggregateInput
    _sum?: ConferenceSumOrderByAggregateInput
  }

  export type ConferenceScalarWhereWithAggregatesInput = {
    AND?: ConferenceScalarWhereWithAggregatesInput | ConferenceScalarWhereWithAggregatesInput[]
    OR?: ConferenceScalarWhereWithAggregatesInput[]
    NOT?: ConferenceScalarWhereWithAggregatesInput | ConferenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Conference"> | string
    name?: StringWithAggregatesFilter<"Conference"> | string
    description?: StringNullableWithAggregatesFilter<"Conference"> | string | null
    starts?: DateTimeWithAggregatesFilter<"Conference"> | Date | string
    ends?: DateTimeWithAggregatesFilter<"Conference"> | Date | string
    maxPresentations?: IntWithAggregatesFilter<"Conference"> | number
    maxAttendees?: IntWithAggregatesFilter<"Conference"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Conference"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Conference"> | Date | string
    locationId?: StringWithAggregatesFilter<"Conference"> | string
    userId?: StringWithAggregatesFilter<"Conference"> | string
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: StringFilter<"Location"> | string
    name?: StringFilter<"Location"> | string
    city?: StringFilter<"Location"> | string
    state?: StringFilter<"Location"> | string
    roomCount?: IntFilter<"Location"> | number
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    conferences?: ConferenceListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    state?: SortOrder
    roomCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    conferences?: ConferenceOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    name?: StringFilter<"Location"> | string
    city?: StringFilter<"Location"> | string
    state?: StringFilter<"Location"> | string
    roomCount?: IntFilter<"Location"> | number
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    conferences?: ConferenceListRelationFilter
  }, "id">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    state?: SortOrder
    roomCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _avg?: LocationAvgOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
    _sum?: LocationSumOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Location"> | string
    name?: StringWithAggregatesFilter<"Location"> | string
    city?: StringWithAggregatesFilter<"Location"> | string
    state?: StringWithAggregatesFilter<"Location"> | string
    roomCount?: IntWithAggregatesFilter<"Location"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
  }

  export type PresentationWhereInput = {
    AND?: PresentationWhereInput | PresentationWhereInput[]
    OR?: PresentationWhereInput[]
    NOT?: PresentationWhereInput | PresentationWhereInput[]
    id?: StringFilter<"Presentation"> | string
    title?: StringFilter<"Presentation"> | string
    synopsis?: StringFilter<"Presentation"> | string
    presenter?: StringFilter<"Presentation"> | string
    conferenceId?: StringFilter<"Presentation"> | string
    userId?: StringFilter<"Presentation"> | string
    createdAt?: DateTimeFilter<"Presentation"> | Date | string
    updatedAt?: DateTimeFilter<"Presentation"> | Date | string
    conference?: XOR<ConferenceScalarRelationFilter, ConferenceWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PresentationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    synopsis?: SortOrder
    presenter?: SortOrder
    conferenceId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    conference?: ConferenceOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PresentationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PresentationWhereInput | PresentationWhereInput[]
    OR?: PresentationWhereInput[]
    NOT?: PresentationWhereInput | PresentationWhereInput[]
    title?: StringFilter<"Presentation"> | string
    synopsis?: StringFilter<"Presentation"> | string
    presenter?: StringFilter<"Presentation"> | string
    conferenceId?: StringFilter<"Presentation"> | string
    userId?: StringFilter<"Presentation"> | string
    createdAt?: DateTimeFilter<"Presentation"> | Date | string
    updatedAt?: DateTimeFilter<"Presentation"> | Date | string
    conference?: XOR<ConferenceScalarRelationFilter, ConferenceWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PresentationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    synopsis?: SortOrder
    presenter?: SortOrder
    conferenceId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PresentationCountOrderByAggregateInput
    _max?: PresentationMaxOrderByAggregateInput
    _min?: PresentationMinOrderByAggregateInput
  }

  export type PresentationScalarWhereWithAggregatesInput = {
    AND?: PresentationScalarWhereWithAggregatesInput | PresentationScalarWhereWithAggregatesInput[]
    OR?: PresentationScalarWhereWithAggregatesInput[]
    NOT?: PresentationScalarWhereWithAggregatesInput | PresentationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Presentation"> | string
    title?: StringWithAggregatesFilter<"Presentation"> | string
    synopsis?: StringWithAggregatesFilter<"Presentation"> | string
    presenter?: StringWithAggregatesFilter<"Presentation"> | string
    conferenceId?: StringWithAggregatesFilter<"Presentation"> | string
    userId?: StringWithAggregatesFilter<"Presentation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Presentation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Presentation"> | Date | string
  }

  export type AttendeeWhereInput = {
    AND?: AttendeeWhereInput | AttendeeWhereInput[]
    OR?: AttendeeWhereInput[]
    NOT?: AttendeeWhereInput | AttendeeWhereInput[]
    id?: StringFilter<"Attendee"> | string
    name?: StringFilter<"Attendee"> | string
    email?: StringFilter<"Attendee"> | string
    conferenceId?: StringFilter<"Attendee"> | string
    userId?: StringFilter<"Attendee"> | string
    createdAt?: DateTimeFilter<"Attendee"> | Date | string
    updatedAt?: DateTimeFilter<"Attendee"> | Date | string
    conference?: XOR<ConferenceScalarRelationFilter, ConferenceWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AttendeeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    conferenceId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    conference?: ConferenceOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type AttendeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttendeeWhereInput | AttendeeWhereInput[]
    OR?: AttendeeWhereInput[]
    NOT?: AttendeeWhereInput | AttendeeWhereInput[]
    name?: StringFilter<"Attendee"> | string
    email?: StringFilter<"Attendee"> | string
    conferenceId?: StringFilter<"Attendee"> | string
    userId?: StringFilter<"Attendee"> | string
    createdAt?: DateTimeFilter<"Attendee"> | Date | string
    updatedAt?: DateTimeFilter<"Attendee"> | Date | string
    conference?: XOR<ConferenceScalarRelationFilter, ConferenceWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AttendeeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    conferenceId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AttendeeCountOrderByAggregateInput
    _max?: AttendeeMaxOrderByAggregateInput
    _min?: AttendeeMinOrderByAggregateInput
  }

  export type AttendeeScalarWhereWithAggregatesInput = {
    AND?: AttendeeScalarWhereWithAggregatesInput | AttendeeScalarWhereWithAggregatesInput[]
    OR?: AttendeeScalarWhereWithAggregatesInput[]
    NOT?: AttendeeScalarWhereWithAggregatesInput | AttendeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attendee"> | string
    name?: StringWithAggregatesFilter<"Attendee"> | string
    email?: StringWithAggregatesFilter<"Attendee"> | string
    conferenceId?: StringWithAggregatesFilter<"Attendee"> | string
    userId?: StringWithAggregatesFilter<"Attendee"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Attendee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Attendee"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conferences?: ConferenceCreateNestedManyWithoutUserInput
    presentations?: PresentationCreateNestedManyWithoutUserInput
    attendees?: AttendeeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conferences?: ConferenceUncheckedCreateNestedManyWithoutUserInput
    presentations?: PresentationUncheckedCreateNestedManyWithoutUserInput
    attendees?: AttendeeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conferences?: ConferenceUpdateManyWithoutUserNestedInput
    presentations?: PresentationUpdateManyWithoutUserNestedInput
    attendees?: AttendeeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conferences?: ConferenceUncheckedUpdateManyWithoutUserNestedInput
    presentations?: PresentationUncheckedUpdateManyWithoutUserNestedInput
    attendees?: AttendeeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConferenceCreateInput = {
    id?: string
    name: string
    description?: string | null
    starts: Date | string
    ends: Date | string
    maxPresentations: number
    maxAttendees: number
    createdAt?: Date | string
    updatedAt?: Date | string
    location: LocationCreateNestedOneWithoutConferencesInput
    user: UserCreateNestedOneWithoutConferencesInput
    presentations?: PresentationCreateNestedManyWithoutConferenceInput
    attendees?: AttendeeCreateNestedManyWithoutConferenceInput
  }

  export type ConferenceUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    starts: Date | string
    ends: Date | string
    maxPresentations: number
    maxAttendees: number
    createdAt?: Date | string
    updatedAt?: Date | string
    locationId: string
    userId: string
    presentations?: PresentationUncheckedCreateNestedManyWithoutConferenceInput
    attendees?: AttendeeUncheckedCreateNestedManyWithoutConferenceInput
  }

  export type ConferenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    starts?: DateTimeFieldUpdateOperationsInput | Date | string
    ends?: DateTimeFieldUpdateOperationsInput | Date | string
    maxPresentations?: IntFieldUpdateOperationsInput | number
    maxAttendees?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutConferencesNestedInput
    user?: UserUpdateOneRequiredWithoutConferencesNestedInput
    presentations?: PresentationUpdateManyWithoutConferenceNestedInput
    attendees?: AttendeeUpdateManyWithoutConferenceNestedInput
  }

  export type ConferenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    starts?: DateTimeFieldUpdateOperationsInput | Date | string
    ends?: DateTimeFieldUpdateOperationsInput | Date | string
    maxPresentations?: IntFieldUpdateOperationsInput | number
    maxAttendees?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    presentations?: PresentationUncheckedUpdateManyWithoutConferenceNestedInput
    attendees?: AttendeeUncheckedUpdateManyWithoutConferenceNestedInput
  }

  export type ConferenceCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    starts: Date | string
    ends: Date | string
    maxPresentations: number
    maxAttendees: number
    createdAt?: Date | string
    updatedAt?: Date | string
    locationId: string
    userId: string
  }

  export type ConferenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    starts?: DateTimeFieldUpdateOperationsInput | Date | string
    ends?: DateTimeFieldUpdateOperationsInput | Date | string
    maxPresentations?: IntFieldUpdateOperationsInput | number
    maxAttendees?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConferenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    starts?: DateTimeFieldUpdateOperationsInput | Date | string
    ends?: DateTimeFieldUpdateOperationsInput | Date | string
    maxPresentations?: IntFieldUpdateOperationsInput | number
    maxAttendees?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type LocationCreateInput = {
    id?: string
    name: string
    city: string
    state: string
    roomCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    conferences?: ConferenceCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateInput = {
    id?: string
    name: string
    city: string
    state: string
    roomCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    conferences?: ConferenceUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    roomCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conferences?: ConferenceUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    roomCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conferences?: ConferenceUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationCreateManyInput = {
    id?: string
    name: string
    city: string
    state: string
    roomCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    roomCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    roomCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresentationCreateInput = {
    id?: string
    title: string
    synopsis: string
    presenter: string
    createdAt?: Date | string
    updatedAt?: Date | string
    conference: ConferenceCreateNestedOneWithoutPresentationsInput
    user: UserCreateNestedOneWithoutPresentationsInput
  }

  export type PresentationUncheckedCreateInput = {
    id?: string
    title: string
    synopsis: string
    presenter: string
    conferenceId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PresentationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    presenter?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conference?: ConferenceUpdateOneRequiredWithoutPresentationsNestedInput
    user?: UserUpdateOneRequiredWithoutPresentationsNestedInput
  }

  export type PresentationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    presenter?: StringFieldUpdateOperationsInput | string
    conferenceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresentationCreateManyInput = {
    id?: string
    title: string
    synopsis: string
    presenter: string
    conferenceId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PresentationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    presenter?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresentationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    presenter?: StringFieldUpdateOperationsInput | string
    conferenceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendeeCreateInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    conference: ConferenceCreateNestedOneWithoutAttendeesInput
    user: UserCreateNestedOneWithoutAttendeesInput
  }

  export type AttendeeUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    conferenceId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conference?: ConferenceUpdateOneRequiredWithoutAttendeesNestedInput
    user?: UserUpdateOneRequiredWithoutAttendeesNestedInput
  }

  export type AttendeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    conferenceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendeeCreateManyInput = {
    id?: string
    name: string
    email: string
    conferenceId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    conferenceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ConferenceListRelationFilter = {
    every?: ConferenceWhereInput
    some?: ConferenceWhereInput
    none?: ConferenceWhereInput
  }

  export type PresentationListRelationFilter = {
    every?: PresentationWhereInput
    some?: PresentationWhereInput
    none?: PresentationWhereInput
  }

  export type AttendeeListRelationFilter = {
    every?: AttendeeWhereInput
    some?: AttendeeWhereInput
    none?: AttendeeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ConferenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PresentationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttendeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type LocationScalarRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ConferenceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    starts?: SortOrder
    ends?: SortOrder
    maxPresentations?: SortOrder
    maxAttendees?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    locationId?: SortOrder
    userId?: SortOrder
  }

  export type ConferenceAvgOrderByAggregateInput = {
    maxPresentations?: SortOrder
    maxAttendees?: SortOrder
  }

  export type ConferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    starts?: SortOrder
    ends?: SortOrder
    maxPresentations?: SortOrder
    maxAttendees?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    locationId?: SortOrder
    userId?: SortOrder
  }

  export type ConferenceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    starts?: SortOrder
    ends?: SortOrder
    maxPresentations?: SortOrder
    maxAttendees?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    locationId?: SortOrder
    userId?: SortOrder
  }

  export type ConferenceSumOrderByAggregateInput = {
    maxPresentations?: SortOrder
    maxAttendees?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    state?: SortOrder
    roomCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationAvgOrderByAggregateInput = {
    roomCount?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    state?: SortOrder
    roomCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    state?: SortOrder
    roomCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationSumOrderByAggregateInput = {
    roomCount?: SortOrder
  }

  export type ConferenceScalarRelationFilter = {
    is?: ConferenceWhereInput
    isNot?: ConferenceWhereInput
  }

  export type PresentationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    synopsis?: SortOrder
    presenter?: SortOrder
    conferenceId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PresentationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    synopsis?: SortOrder
    presenter?: SortOrder
    conferenceId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PresentationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    synopsis?: SortOrder
    presenter?: SortOrder
    conferenceId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendeeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    conferenceId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendeeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    conferenceId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendeeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    conferenceId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConferenceCreateNestedManyWithoutUserInput = {
    create?: XOR<ConferenceCreateWithoutUserInput, ConferenceUncheckedCreateWithoutUserInput> | ConferenceCreateWithoutUserInput[] | ConferenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConferenceCreateOrConnectWithoutUserInput | ConferenceCreateOrConnectWithoutUserInput[]
    createMany?: ConferenceCreateManyUserInputEnvelope
    connect?: ConferenceWhereUniqueInput | ConferenceWhereUniqueInput[]
  }

  export type PresentationCreateNestedManyWithoutUserInput = {
    create?: XOR<PresentationCreateWithoutUserInput, PresentationUncheckedCreateWithoutUserInput> | PresentationCreateWithoutUserInput[] | PresentationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PresentationCreateOrConnectWithoutUserInput | PresentationCreateOrConnectWithoutUserInput[]
    createMany?: PresentationCreateManyUserInputEnvelope
    connect?: PresentationWhereUniqueInput | PresentationWhereUniqueInput[]
  }

  export type AttendeeCreateNestedManyWithoutUserInput = {
    create?: XOR<AttendeeCreateWithoutUserInput, AttendeeUncheckedCreateWithoutUserInput> | AttendeeCreateWithoutUserInput[] | AttendeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendeeCreateOrConnectWithoutUserInput | AttendeeCreateOrConnectWithoutUserInput[]
    createMany?: AttendeeCreateManyUserInputEnvelope
    connect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
  }

  export type ConferenceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConferenceCreateWithoutUserInput, ConferenceUncheckedCreateWithoutUserInput> | ConferenceCreateWithoutUserInput[] | ConferenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConferenceCreateOrConnectWithoutUserInput | ConferenceCreateOrConnectWithoutUserInput[]
    createMany?: ConferenceCreateManyUserInputEnvelope
    connect?: ConferenceWhereUniqueInput | ConferenceWhereUniqueInput[]
  }

  export type PresentationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PresentationCreateWithoutUserInput, PresentationUncheckedCreateWithoutUserInput> | PresentationCreateWithoutUserInput[] | PresentationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PresentationCreateOrConnectWithoutUserInput | PresentationCreateOrConnectWithoutUserInput[]
    createMany?: PresentationCreateManyUserInputEnvelope
    connect?: PresentationWhereUniqueInput | PresentationWhereUniqueInput[]
  }

  export type AttendeeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AttendeeCreateWithoutUserInput, AttendeeUncheckedCreateWithoutUserInput> | AttendeeCreateWithoutUserInput[] | AttendeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendeeCreateOrConnectWithoutUserInput | AttendeeCreateOrConnectWithoutUserInput[]
    createMany?: AttendeeCreateManyUserInputEnvelope
    connect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ConferenceUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConferenceCreateWithoutUserInput, ConferenceUncheckedCreateWithoutUserInput> | ConferenceCreateWithoutUserInput[] | ConferenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConferenceCreateOrConnectWithoutUserInput | ConferenceCreateOrConnectWithoutUserInput[]
    upsert?: ConferenceUpsertWithWhereUniqueWithoutUserInput | ConferenceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConferenceCreateManyUserInputEnvelope
    set?: ConferenceWhereUniqueInput | ConferenceWhereUniqueInput[]
    disconnect?: ConferenceWhereUniqueInput | ConferenceWhereUniqueInput[]
    delete?: ConferenceWhereUniqueInput | ConferenceWhereUniqueInput[]
    connect?: ConferenceWhereUniqueInput | ConferenceWhereUniqueInput[]
    update?: ConferenceUpdateWithWhereUniqueWithoutUserInput | ConferenceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConferenceUpdateManyWithWhereWithoutUserInput | ConferenceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConferenceScalarWhereInput | ConferenceScalarWhereInput[]
  }

  export type PresentationUpdateManyWithoutUserNestedInput = {
    create?: XOR<PresentationCreateWithoutUserInput, PresentationUncheckedCreateWithoutUserInput> | PresentationCreateWithoutUserInput[] | PresentationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PresentationCreateOrConnectWithoutUserInput | PresentationCreateOrConnectWithoutUserInput[]
    upsert?: PresentationUpsertWithWhereUniqueWithoutUserInput | PresentationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PresentationCreateManyUserInputEnvelope
    set?: PresentationWhereUniqueInput | PresentationWhereUniqueInput[]
    disconnect?: PresentationWhereUniqueInput | PresentationWhereUniqueInput[]
    delete?: PresentationWhereUniqueInput | PresentationWhereUniqueInput[]
    connect?: PresentationWhereUniqueInput | PresentationWhereUniqueInput[]
    update?: PresentationUpdateWithWhereUniqueWithoutUserInput | PresentationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PresentationUpdateManyWithWhereWithoutUserInput | PresentationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PresentationScalarWhereInput | PresentationScalarWhereInput[]
  }

  export type AttendeeUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttendeeCreateWithoutUserInput, AttendeeUncheckedCreateWithoutUserInput> | AttendeeCreateWithoutUserInput[] | AttendeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendeeCreateOrConnectWithoutUserInput | AttendeeCreateOrConnectWithoutUserInput[]
    upsert?: AttendeeUpsertWithWhereUniqueWithoutUserInput | AttendeeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttendeeCreateManyUserInputEnvelope
    set?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    disconnect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    delete?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    connect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    update?: AttendeeUpdateWithWhereUniqueWithoutUserInput | AttendeeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttendeeUpdateManyWithWhereWithoutUserInput | AttendeeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttendeeScalarWhereInput | AttendeeScalarWhereInput[]
  }

  export type ConferenceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConferenceCreateWithoutUserInput, ConferenceUncheckedCreateWithoutUserInput> | ConferenceCreateWithoutUserInput[] | ConferenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConferenceCreateOrConnectWithoutUserInput | ConferenceCreateOrConnectWithoutUserInput[]
    upsert?: ConferenceUpsertWithWhereUniqueWithoutUserInput | ConferenceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConferenceCreateManyUserInputEnvelope
    set?: ConferenceWhereUniqueInput | ConferenceWhereUniqueInput[]
    disconnect?: ConferenceWhereUniqueInput | ConferenceWhereUniqueInput[]
    delete?: ConferenceWhereUniqueInput | ConferenceWhereUniqueInput[]
    connect?: ConferenceWhereUniqueInput | ConferenceWhereUniqueInput[]
    update?: ConferenceUpdateWithWhereUniqueWithoutUserInput | ConferenceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConferenceUpdateManyWithWhereWithoutUserInput | ConferenceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConferenceScalarWhereInput | ConferenceScalarWhereInput[]
  }

  export type PresentationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PresentationCreateWithoutUserInput, PresentationUncheckedCreateWithoutUserInput> | PresentationCreateWithoutUserInput[] | PresentationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PresentationCreateOrConnectWithoutUserInput | PresentationCreateOrConnectWithoutUserInput[]
    upsert?: PresentationUpsertWithWhereUniqueWithoutUserInput | PresentationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PresentationCreateManyUserInputEnvelope
    set?: PresentationWhereUniqueInput | PresentationWhereUniqueInput[]
    disconnect?: PresentationWhereUniqueInput | PresentationWhereUniqueInput[]
    delete?: PresentationWhereUniqueInput | PresentationWhereUniqueInput[]
    connect?: PresentationWhereUniqueInput | PresentationWhereUniqueInput[]
    update?: PresentationUpdateWithWhereUniqueWithoutUserInput | PresentationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PresentationUpdateManyWithWhereWithoutUserInput | PresentationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PresentationScalarWhereInput | PresentationScalarWhereInput[]
  }

  export type AttendeeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttendeeCreateWithoutUserInput, AttendeeUncheckedCreateWithoutUserInput> | AttendeeCreateWithoutUserInput[] | AttendeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendeeCreateOrConnectWithoutUserInput | AttendeeCreateOrConnectWithoutUserInput[]
    upsert?: AttendeeUpsertWithWhereUniqueWithoutUserInput | AttendeeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttendeeCreateManyUserInputEnvelope
    set?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    disconnect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    delete?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    connect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    update?: AttendeeUpdateWithWhereUniqueWithoutUserInput | AttendeeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttendeeUpdateManyWithWhereWithoutUserInput | AttendeeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttendeeScalarWhereInput | AttendeeScalarWhereInput[]
  }

  export type LocationCreateNestedOneWithoutConferencesInput = {
    create?: XOR<LocationCreateWithoutConferencesInput, LocationUncheckedCreateWithoutConferencesInput>
    connectOrCreate?: LocationCreateOrConnectWithoutConferencesInput
    connect?: LocationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutConferencesInput = {
    create?: XOR<UserCreateWithoutConferencesInput, UserUncheckedCreateWithoutConferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutConferencesInput
    connect?: UserWhereUniqueInput
  }

  export type PresentationCreateNestedManyWithoutConferenceInput = {
    create?: XOR<PresentationCreateWithoutConferenceInput, PresentationUncheckedCreateWithoutConferenceInput> | PresentationCreateWithoutConferenceInput[] | PresentationUncheckedCreateWithoutConferenceInput[]
    connectOrCreate?: PresentationCreateOrConnectWithoutConferenceInput | PresentationCreateOrConnectWithoutConferenceInput[]
    createMany?: PresentationCreateManyConferenceInputEnvelope
    connect?: PresentationWhereUniqueInput | PresentationWhereUniqueInput[]
  }

  export type AttendeeCreateNestedManyWithoutConferenceInput = {
    create?: XOR<AttendeeCreateWithoutConferenceInput, AttendeeUncheckedCreateWithoutConferenceInput> | AttendeeCreateWithoutConferenceInput[] | AttendeeUncheckedCreateWithoutConferenceInput[]
    connectOrCreate?: AttendeeCreateOrConnectWithoutConferenceInput | AttendeeCreateOrConnectWithoutConferenceInput[]
    createMany?: AttendeeCreateManyConferenceInputEnvelope
    connect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
  }

  export type PresentationUncheckedCreateNestedManyWithoutConferenceInput = {
    create?: XOR<PresentationCreateWithoutConferenceInput, PresentationUncheckedCreateWithoutConferenceInput> | PresentationCreateWithoutConferenceInput[] | PresentationUncheckedCreateWithoutConferenceInput[]
    connectOrCreate?: PresentationCreateOrConnectWithoutConferenceInput | PresentationCreateOrConnectWithoutConferenceInput[]
    createMany?: PresentationCreateManyConferenceInputEnvelope
    connect?: PresentationWhereUniqueInput | PresentationWhereUniqueInput[]
  }

  export type AttendeeUncheckedCreateNestedManyWithoutConferenceInput = {
    create?: XOR<AttendeeCreateWithoutConferenceInput, AttendeeUncheckedCreateWithoutConferenceInput> | AttendeeCreateWithoutConferenceInput[] | AttendeeUncheckedCreateWithoutConferenceInput[]
    connectOrCreate?: AttendeeCreateOrConnectWithoutConferenceInput | AttendeeCreateOrConnectWithoutConferenceInput[]
    createMany?: AttendeeCreateManyConferenceInputEnvelope
    connect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LocationUpdateOneRequiredWithoutConferencesNestedInput = {
    create?: XOR<LocationCreateWithoutConferencesInput, LocationUncheckedCreateWithoutConferencesInput>
    connectOrCreate?: LocationCreateOrConnectWithoutConferencesInput
    upsert?: LocationUpsertWithoutConferencesInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutConferencesInput, LocationUpdateWithoutConferencesInput>, LocationUncheckedUpdateWithoutConferencesInput>
  }

  export type UserUpdateOneRequiredWithoutConferencesNestedInput = {
    create?: XOR<UserCreateWithoutConferencesInput, UserUncheckedCreateWithoutConferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutConferencesInput
    upsert?: UserUpsertWithoutConferencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConferencesInput, UserUpdateWithoutConferencesInput>, UserUncheckedUpdateWithoutConferencesInput>
  }

  export type PresentationUpdateManyWithoutConferenceNestedInput = {
    create?: XOR<PresentationCreateWithoutConferenceInput, PresentationUncheckedCreateWithoutConferenceInput> | PresentationCreateWithoutConferenceInput[] | PresentationUncheckedCreateWithoutConferenceInput[]
    connectOrCreate?: PresentationCreateOrConnectWithoutConferenceInput | PresentationCreateOrConnectWithoutConferenceInput[]
    upsert?: PresentationUpsertWithWhereUniqueWithoutConferenceInput | PresentationUpsertWithWhereUniqueWithoutConferenceInput[]
    createMany?: PresentationCreateManyConferenceInputEnvelope
    set?: PresentationWhereUniqueInput | PresentationWhereUniqueInput[]
    disconnect?: PresentationWhereUniqueInput | PresentationWhereUniqueInput[]
    delete?: PresentationWhereUniqueInput | PresentationWhereUniqueInput[]
    connect?: PresentationWhereUniqueInput | PresentationWhereUniqueInput[]
    update?: PresentationUpdateWithWhereUniqueWithoutConferenceInput | PresentationUpdateWithWhereUniqueWithoutConferenceInput[]
    updateMany?: PresentationUpdateManyWithWhereWithoutConferenceInput | PresentationUpdateManyWithWhereWithoutConferenceInput[]
    deleteMany?: PresentationScalarWhereInput | PresentationScalarWhereInput[]
  }

  export type AttendeeUpdateManyWithoutConferenceNestedInput = {
    create?: XOR<AttendeeCreateWithoutConferenceInput, AttendeeUncheckedCreateWithoutConferenceInput> | AttendeeCreateWithoutConferenceInput[] | AttendeeUncheckedCreateWithoutConferenceInput[]
    connectOrCreate?: AttendeeCreateOrConnectWithoutConferenceInput | AttendeeCreateOrConnectWithoutConferenceInput[]
    upsert?: AttendeeUpsertWithWhereUniqueWithoutConferenceInput | AttendeeUpsertWithWhereUniqueWithoutConferenceInput[]
    createMany?: AttendeeCreateManyConferenceInputEnvelope
    set?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    disconnect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    delete?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    connect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    update?: AttendeeUpdateWithWhereUniqueWithoutConferenceInput | AttendeeUpdateWithWhereUniqueWithoutConferenceInput[]
    updateMany?: AttendeeUpdateManyWithWhereWithoutConferenceInput | AttendeeUpdateManyWithWhereWithoutConferenceInput[]
    deleteMany?: AttendeeScalarWhereInput | AttendeeScalarWhereInput[]
  }

  export type PresentationUncheckedUpdateManyWithoutConferenceNestedInput = {
    create?: XOR<PresentationCreateWithoutConferenceInput, PresentationUncheckedCreateWithoutConferenceInput> | PresentationCreateWithoutConferenceInput[] | PresentationUncheckedCreateWithoutConferenceInput[]
    connectOrCreate?: PresentationCreateOrConnectWithoutConferenceInput | PresentationCreateOrConnectWithoutConferenceInput[]
    upsert?: PresentationUpsertWithWhereUniqueWithoutConferenceInput | PresentationUpsertWithWhereUniqueWithoutConferenceInput[]
    createMany?: PresentationCreateManyConferenceInputEnvelope
    set?: PresentationWhereUniqueInput | PresentationWhereUniqueInput[]
    disconnect?: PresentationWhereUniqueInput | PresentationWhereUniqueInput[]
    delete?: PresentationWhereUniqueInput | PresentationWhereUniqueInput[]
    connect?: PresentationWhereUniqueInput | PresentationWhereUniqueInput[]
    update?: PresentationUpdateWithWhereUniqueWithoutConferenceInput | PresentationUpdateWithWhereUniqueWithoutConferenceInput[]
    updateMany?: PresentationUpdateManyWithWhereWithoutConferenceInput | PresentationUpdateManyWithWhereWithoutConferenceInput[]
    deleteMany?: PresentationScalarWhereInput | PresentationScalarWhereInput[]
  }

  export type AttendeeUncheckedUpdateManyWithoutConferenceNestedInput = {
    create?: XOR<AttendeeCreateWithoutConferenceInput, AttendeeUncheckedCreateWithoutConferenceInput> | AttendeeCreateWithoutConferenceInput[] | AttendeeUncheckedCreateWithoutConferenceInput[]
    connectOrCreate?: AttendeeCreateOrConnectWithoutConferenceInput | AttendeeCreateOrConnectWithoutConferenceInput[]
    upsert?: AttendeeUpsertWithWhereUniqueWithoutConferenceInput | AttendeeUpsertWithWhereUniqueWithoutConferenceInput[]
    createMany?: AttendeeCreateManyConferenceInputEnvelope
    set?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    disconnect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    delete?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    connect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    update?: AttendeeUpdateWithWhereUniqueWithoutConferenceInput | AttendeeUpdateWithWhereUniqueWithoutConferenceInput[]
    updateMany?: AttendeeUpdateManyWithWhereWithoutConferenceInput | AttendeeUpdateManyWithWhereWithoutConferenceInput[]
    deleteMany?: AttendeeScalarWhereInput | AttendeeScalarWhereInput[]
  }

  export type ConferenceCreateNestedManyWithoutLocationInput = {
    create?: XOR<ConferenceCreateWithoutLocationInput, ConferenceUncheckedCreateWithoutLocationInput> | ConferenceCreateWithoutLocationInput[] | ConferenceUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ConferenceCreateOrConnectWithoutLocationInput | ConferenceCreateOrConnectWithoutLocationInput[]
    createMany?: ConferenceCreateManyLocationInputEnvelope
    connect?: ConferenceWhereUniqueInput | ConferenceWhereUniqueInput[]
  }

  export type ConferenceUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<ConferenceCreateWithoutLocationInput, ConferenceUncheckedCreateWithoutLocationInput> | ConferenceCreateWithoutLocationInput[] | ConferenceUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ConferenceCreateOrConnectWithoutLocationInput | ConferenceCreateOrConnectWithoutLocationInput[]
    createMany?: ConferenceCreateManyLocationInputEnvelope
    connect?: ConferenceWhereUniqueInput | ConferenceWhereUniqueInput[]
  }

  export type ConferenceUpdateManyWithoutLocationNestedInput = {
    create?: XOR<ConferenceCreateWithoutLocationInput, ConferenceUncheckedCreateWithoutLocationInput> | ConferenceCreateWithoutLocationInput[] | ConferenceUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ConferenceCreateOrConnectWithoutLocationInput | ConferenceCreateOrConnectWithoutLocationInput[]
    upsert?: ConferenceUpsertWithWhereUniqueWithoutLocationInput | ConferenceUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: ConferenceCreateManyLocationInputEnvelope
    set?: ConferenceWhereUniqueInput | ConferenceWhereUniqueInput[]
    disconnect?: ConferenceWhereUniqueInput | ConferenceWhereUniqueInput[]
    delete?: ConferenceWhereUniqueInput | ConferenceWhereUniqueInput[]
    connect?: ConferenceWhereUniqueInput | ConferenceWhereUniqueInput[]
    update?: ConferenceUpdateWithWhereUniqueWithoutLocationInput | ConferenceUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: ConferenceUpdateManyWithWhereWithoutLocationInput | ConferenceUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: ConferenceScalarWhereInput | ConferenceScalarWhereInput[]
  }

  export type ConferenceUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<ConferenceCreateWithoutLocationInput, ConferenceUncheckedCreateWithoutLocationInput> | ConferenceCreateWithoutLocationInput[] | ConferenceUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: ConferenceCreateOrConnectWithoutLocationInput | ConferenceCreateOrConnectWithoutLocationInput[]
    upsert?: ConferenceUpsertWithWhereUniqueWithoutLocationInput | ConferenceUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: ConferenceCreateManyLocationInputEnvelope
    set?: ConferenceWhereUniqueInput | ConferenceWhereUniqueInput[]
    disconnect?: ConferenceWhereUniqueInput | ConferenceWhereUniqueInput[]
    delete?: ConferenceWhereUniqueInput | ConferenceWhereUniqueInput[]
    connect?: ConferenceWhereUniqueInput | ConferenceWhereUniqueInput[]
    update?: ConferenceUpdateWithWhereUniqueWithoutLocationInput | ConferenceUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: ConferenceUpdateManyWithWhereWithoutLocationInput | ConferenceUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: ConferenceScalarWhereInput | ConferenceScalarWhereInput[]
  }

  export type ConferenceCreateNestedOneWithoutPresentationsInput = {
    create?: XOR<ConferenceCreateWithoutPresentationsInput, ConferenceUncheckedCreateWithoutPresentationsInput>
    connectOrCreate?: ConferenceCreateOrConnectWithoutPresentationsInput
    connect?: ConferenceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPresentationsInput = {
    create?: XOR<UserCreateWithoutPresentationsInput, UserUncheckedCreateWithoutPresentationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPresentationsInput
    connect?: UserWhereUniqueInput
  }

  export type ConferenceUpdateOneRequiredWithoutPresentationsNestedInput = {
    create?: XOR<ConferenceCreateWithoutPresentationsInput, ConferenceUncheckedCreateWithoutPresentationsInput>
    connectOrCreate?: ConferenceCreateOrConnectWithoutPresentationsInput
    upsert?: ConferenceUpsertWithoutPresentationsInput
    connect?: ConferenceWhereUniqueInput
    update?: XOR<XOR<ConferenceUpdateToOneWithWhereWithoutPresentationsInput, ConferenceUpdateWithoutPresentationsInput>, ConferenceUncheckedUpdateWithoutPresentationsInput>
  }

  export type UserUpdateOneRequiredWithoutPresentationsNestedInput = {
    create?: XOR<UserCreateWithoutPresentationsInput, UserUncheckedCreateWithoutPresentationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPresentationsInput
    upsert?: UserUpsertWithoutPresentationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPresentationsInput, UserUpdateWithoutPresentationsInput>, UserUncheckedUpdateWithoutPresentationsInput>
  }

  export type ConferenceCreateNestedOneWithoutAttendeesInput = {
    create?: XOR<ConferenceCreateWithoutAttendeesInput, ConferenceUncheckedCreateWithoutAttendeesInput>
    connectOrCreate?: ConferenceCreateOrConnectWithoutAttendeesInput
    connect?: ConferenceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAttendeesInput = {
    create?: XOR<UserCreateWithoutAttendeesInput, UserUncheckedCreateWithoutAttendeesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendeesInput
    connect?: UserWhereUniqueInput
  }

  export type ConferenceUpdateOneRequiredWithoutAttendeesNestedInput = {
    create?: XOR<ConferenceCreateWithoutAttendeesInput, ConferenceUncheckedCreateWithoutAttendeesInput>
    connectOrCreate?: ConferenceCreateOrConnectWithoutAttendeesInput
    upsert?: ConferenceUpsertWithoutAttendeesInput
    connect?: ConferenceWhereUniqueInput
    update?: XOR<XOR<ConferenceUpdateToOneWithWhereWithoutAttendeesInput, ConferenceUpdateWithoutAttendeesInput>, ConferenceUncheckedUpdateWithoutAttendeesInput>
  }

  export type UserUpdateOneRequiredWithoutAttendeesNestedInput = {
    create?: XOR<UserCreateWithoutAttendeesInput, UserUncheckedCreateWithoutAttendeesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendeesInput
    upsert?: UserUpsertWithoutAttendeesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAttendeesInput, UserUpdateWithoutAttendeesInput>, UserUncheckedUpdateWithoutAttendeesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ConferenceCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    starts: Date | string
    ends: Date | string
    maxPresentations: number
    maxAttendees: number
    createdAt?: Date | string
    updatedAt?: Date | string
    location: LocationCreateNestedOneWithoutConferencesInput
    presentations?: PresentationCreateNestedManyWithoutConferenceInput
    attendees?: AttendeeCreateNestedManyWithoutConferenceInput
  }

  export type ConferenceUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    starts: Date | string
    ends: Date | string
    maxPresentations: number
    maxAttendees: number
    createdAt?: Date | string
    updatedAt?: Date | string
    locationId: string
    presentations?: PresentationUncheckedCreateNestedManyWithoutConferenceInput
    attendees?: AttendeeUncheckedCreateNestedManyWithoutConferenceInput
  }

  export type ConferenceCreateOrConnectWithoutUserInput = {
    where: ConferenceWhereUniqueInput
    create: XOR<ConferenceCreateWithoutUserInput, ConferenceUncheckedCreateWithoutUserInput>
  }

  export type ConferenceCreateManyUserInputEnvelope = {
    data: ConferenceCreateManyUserInput | ConferenceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PresentationCreateWithoutUserInput = {
    id?: string
    title: string
    synopsis: string
    presenter: string
    createdAt?: Date | string
    updatedAt?: Date | string
    conference: ConferenceCreateNestedOneWithoutPresentationsInput
  }

  export type PresentationUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    synopsis: string
    presenter: string
    conferenceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PresentationCreateOrConnectWithoutUserInput = {
    where: PresentationWhereUniqueInput
    create: XOR<PresentationCreateWithoutUserInput, PresentationUncheckedCreateWithoutUserInput>
  }

  export type PresentationCreateManyUserInputEnvelope = {
    data: PresentationCreateManyUserInput | PresentationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AttendeeCreateWithoutUserInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    conference: ConferenceCreateNestedOneWithoutAttendeesInput
  }

  export type AttendeeUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    email: string
    conferenceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendeeCreateOrConnectWithoutUserInput = {
    where: AttendeeWhereUniqueInput
    create: XOR<AttendeeCreateWithoutUserInput, AttendeeUncheckedCreateWithoutUserInput>
  }

  export type AttendeeCreateManyUserInputEnvelope = {
    data: AttendeeCreateManyUserInput | AttendeeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ConferenceUpsertWithWhereUniqueWithoutUserInput = {
    where: ConferenceWhereUniqueInput
    update: XOR<ConferenceUpdateWithoutUserInput, ConferenceUncheckedUpdateWithoutUserInput>
    create: XOR<ConferenceCreateWithoutUserInput, ConferenceUncheckedCreateWithoutUserInput>
  }

  export type ConferenceUpdateWithWhereUniqueWithoutUserInput = {
    where: ConferenceWhereUniqueInput
    data: XOR<ConferenceUpdateWithoutUserInput, ConferenceUncheckedUpdateWithoutUserInput>
  }

  export type ConferenceUpdateManyWithWhereWithoutUserInput = {
    where: ConferenceScalarWhereInput
    data: XOR<ConferenceUpdateManyMutationInput, ConferenceUncheckedUpdateManyWithoutUserInput>
  }

  export type ConferenceScalarWhereInput = {
    AND?: ConferenceScalarWhereInput | ConferenceScalarWhereInput[]
    OR?: ConferenceScalarWhereInput[]
    NOT?: ConferenceScalarWhereInput | ConferenceScalarWhereInput[]
    id?: StringFilter<"Conference"> | string
    name?: StringFilter<"Conference"> | string
    description?: StringNullableFilter<"Conference"> | string | null
    starts?: DateTimeFilter<"Conference"> | Date | string
    ends?: DateTimeFilter<"Conference"> | Date | string
    maxPresentations?: IntFilter<"Conference"> | number
    maxAttendees?: IntFilter<"Conference"> | number
    createdAt?: DateTimeFilter<"Conference"> | Date | string
    updatedAt?: DateTimeFilter<"Conference"> | Date | string
    locationId?: StringFilter<"Conference"> | string
    userId?: StringFilter<"Conference"> | string
  }

  export type PresentationUpsertWithWhereUniqueWithoutUserInput = {
    where: PresentationWhereUniqueInput
    update: XOR<PresentationUpdateWithoutUserInput, PresentationUncheckedUpdateWithoutUserInput>
    create: XOR<PresentationCreateWithoutUserInput, PresentationUncheckedCreateWithoutUserInput>
  }

  export type PresentationUpdateWithWhereUniqueWithoutUserInput = {
    where: PresentationWhereUniqueInput
    data: XOR<PresentationUpdateWithoutUserInput, PresentationUncheckedUpdateWithoutUserInput>
  }

  export type PresentationUpdateManyWithWhereWithoutUserInput = {
    where: PresentationScalarWhereInput
    data: XOR<PresentationUpdateManyMutationInput, PresentationUncheckedUpdateManyWithoutUserInput>
  }

  export type PresentationScalarWhereInput = {
    AND?: PresentationScalarWhereInput | PresentationScalarWhereInput[]
    OR?: PresentationScalarWhereInput[]
    NOT?: PresentationScalarWhereInput | PresentationScalarWhereInput[]
    id?: StringFilter<"Presentation"> | string
    title?: StringFilter<"Presentation"> | string
    synopsis?: StringFilter<"Presentation"> | string
    presenter?: StringFilter<"Presentation"> | string
    conferenceId?: StringFilter<"Presentation"> | string
    userId?: StringFilter<"Presentation"> | string
    createdAt?: DateTimeFilter<"Presentation"> | Date | string
    updatedAt?: DateTimeFilter<"Presentation"> | Date | string
  }

  export type AttendeeUpsertWithWhereUniqueWithoutUserInput = {
    where: AttendeeWhereUniqueInput
    update: XOR<AttendeeUpdateWithoutUserInput, AttendeeUncheckedUpdateWithoutUserInput>
    create: XOR<AttendeeCreateWithoutUserInput, AttendeeUncheckedCreateWithoutUserInput>
  }

  export type AttendeeUpdateWithWhereUniqueWithoutUserInput = {
    where: AttendeeWhereUniqueInput
    data: XOR<AttendeeUpdateWithoutUserInput, AttendeeUncheckedUpdateWithoutUserInput>
  }

  export type AttendeeUpdateManyWithWhereWithoutUserInput = {
    where: AttendeeScalarWhereInput
    data: XOR<AttendeeUpdateManyMutationInput, AttendeeUncheckedUpdateManyWithoutUserInput>
  }

  export type AttendeeScalarWhereInput = {
    AND?: AttendeeScalarWhereInput | AttendeeScalarWhereInput[]
    OR?: AttendeeScalarWhereInput[]
    NOT?: AttendeeScalarWhereInput | AttendeeScalarWhereInput[]
    id?: StringFilter<"Attendee"> | string
    name?: StringFilter<"Attendee"> | string
    email?: StringFilter<"Attendee"> | string
    conferenceId?: StringFilter<"Attendee"> | string
    userId?: StringFilter<"Attendee"> | string
    createdAt?: DateTimeFilter<"Attendee"> | Date | string
    updatedAt?: DateTimeFilter<"Attendee"> | Date | string
  }

  export type LocationCreateWithoutConferencesInput = {
    id?: string
    name: string
    city: string
    state: string
    roomCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationUncheckedCreateWithoutConferencesInput = {
    id?: string
    name: string
    city: string
    state: string
    roomCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationCreateOrConnectWithoutConferencesInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutConferencesInput, LocationUncheckedCreateWithoutConferencesInput>
  }

  export type UserCreateWithoutConferencesInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    presentations?: PresentationCreateNestedManyWithoutUserInput
    attendees?: AttendeeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutConferencesInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    presentations?: PresentationUncheckedCreateNestedManyWithoutUserInput
    attendees?: AttendeeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConferencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConferencesInput, UserUncheckedCreateWithoutConferencesInput>
  }

  export type PresentationCreateWithoutConferenceInput = {
    id?: string
    title: string
    synopsis: string
    presenter: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPresentationsInput
  }

  export type PresentationUncheckedCreateWithoutConferenceInput = {
    id?: string
    title: string
    synopsis: string
    presenter: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PresentationCreateOrConnectWithoutConferenceInput = {
    where: PresentationWhereUniqueInput
    create: XOR<PresentationCreateWithoutConferenceInput, PresentationUncheckedCreateWithoutConferenceInput>
  }

  export type PresentationCreateManyConferenceInputEnvelope = {
    data: PresentationCreateManyConferenceInput | PresentationCreateManyConferenceInput[]
    skipDuplicates?: boolean
  }

  export type AttendeeCreateWithoutConferenceInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAttendeesInput
  }

  export type AttendeeUncheckedCreateWithoutConferenceInput = {
    id?: string
    name: string
    email: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendeeCreateOrConnectWithoutConferenceInput = {
    where: AttendeeWhereUniqueInput
    create: XOR<AttendeeCreateWithoutConferenceInput, AttendeeUncheckedCreateWithoutConferenceInput>
  }

  export type AttendeeCreateManyConferenceInputEnvelope = {
    data: AttendeeCreateManyConferenceInput | AttendeeCreateManyConferenceInput[]
    skipDuplicates?: boolean
  }

  export type LocationUpsertWithoutConferencesInput = {
    update: XOR<LocationUpdateWithoutConferencesInput, LocationUncheckedUpdateWithoutConferencesInput>
    create: XOR<LocationCreateWithoutConferencesInput, LocationUncheckedCreateWithoutConferencesInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutConferencesInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutConferencesInput, LocationUncheckedUpdateWithoutConferencesInput>
  }

  export type LocationUpdateWithoutConferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    roomCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateWithoutConferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    roomCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutConferencesInput = {
    update: XOR<UserUpdateWithoutConferencesInput, UserUncheckedUpdateWithoutConferencesInput>
    create: XOR<UserCreateWithoutConferencesInput, UserUncheckedCreateWithoutConferencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConferencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConferencesInput, UserUncheckedUpdateWithoutConferencesInput>
  }

  export type UserUpdateWithoutConferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    presentations?: PresentationUpdateManyWithoutUserNestedInput
    attendees?: AttendeeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutConferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    presentations?: PresentationUncheckedUpdateManyWithoutUserNestedInput
    attendees?: AttendeeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PresentationUpsertWithWhereUniqueWithoutConferenceInput = {
    where: PresentationWhereUniqueInput
    update: XOR<PresentationUpdateWithoutConferenceInput, PresentationUncheckedUpdateWithoutConferenceInput>
    create: XOR<PresentationCreateWithoutConferenceInput, PresentationUncheckedCreateWithoutConferenceInput>
  }

  export type PresentationUpdateWithWhereUniqueWithoutConferenceInput = {
    where: PresentationWhereUniqueInput
    data: XOR<PresentationUpdateWithoutConferenceInput, PresentationUncheckedUpdateWithoutConferenceInput>
  }

  export type PresentationUpdateManyWithWhereWithoutConferenceInput = {
    where: PresentationScalarWhereInput
    data: XOR<PresentationUpdateManyMutationInput, PresentationUncheckedUpdateManyWithoutConferenceInput>
  }

  export type AttendeeUpsertWithWhereUniqueWithoutConferenceInput = {
    where: AttendeeWhereUniqueInput
    update: XOR<AttendeeUpdateWithoutConferenceInput, AttendeeUncheckedUpdateWithoutConferenceInput>
    create: XOR<AttendeeCreateWithoutConferenceInput, AttendeeUncheckedCreateWithoutConferenceInput>
  }

  export type AttendeeUpdateWithWhereUniqueWithoutConferenceInput = {
    where: AttendeeWhereUniqueInput
    data: XOR<AttendeeUpdateWithoutConferenceInput, AttendeeUncheckedUpdateWithoutConferenceInput>
  }

  export type AttendeeUpdateManyWithWhereWithoutConferenceInput = {
    where: AttendeeScalarWhereInput
    data: XOR<AttendeeUpdateManyMutationInput, AttendeeUncheckedUpdateManyWithoutConferenceInput>
  }

  export type ConferenceCreateWithoutLocationInput = {
    id?: string
    name: string
    description?: string | null
    starts: Date | string
    ends: Date | string
    maxPresentations: number
    maxAttendees: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutConferencesInput
    presentations?: PresentationCreateNestedManyWithoutConferenceInput
    attendees?: AttendeeCreateNestedManyWithoutConferenceInput
  }

  export type ConferenceUncheckedCreateWithoutLocationInput = {
    id?: string
    name: string
    description?: string | null
    starts: Date | string
    ends: Date | string
    maxPresentations: number
    maxAttendees: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    presentations?: PresentationUncheckedCreateNestedManyWithoutConferenceInput
    attendees?: AttendeeUncheckedCreateNestedManyWithoutConferenceInput
  }

  export type ConferenceCreateOrConnectWithoutLocationInput = {
    where: ConferenceWhereUniqueInput
    create: XOR<ConferenceCreateWithoutLocationInput, ConferenceUncheckedCreateWithoutLocationInput>
  }

  export type ConferenceCreateManyLocationInputEnvelope = {
    data: ConferenceCreateManyLocationInput | ConferenceCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type ConferenceUpsertWithWhereUniqueWithoutLocationInput = {
    where: ConferenceWhereUniqueInput
    update: XOR<ConferenceUpdateWithoutLocationInput, ConferenceUncheckedUpdateWithoutLocationInput>
    create: XOR<ConferenceCreateWithoutLocationInput, ConferenceUncheckedCreateWithoutLocationInput>
  }

  export type ConferenceUpdateWithWhereUniqueWithoutLocationInput = {
    where: ConferenceWhereUniqueInput
    data: XOR<ConferenceUpdateWithoutLocationInput, ConferenceUncheckedUpdateWithoutLocationInput>
  }

  export type ConferenceUpdateManyWithWhereWithoutLocationInput = {
    where: ConferenceScalarWhereInput
    data: XOR<ConferenceUpdateManyMutationInput, ConferenceUncheckedUpdateManyWithoutLocationInput>
  }

  export type ConferenceCreateWithoutPresentationsInput = {
    id?: string
    name: string
    description?: string | null
    starts: Date | string
    ends: Date | string
    maxPresentations: number
    maxAttendees: number
    createdAt?: Date | string
    updatedAt?: Date | string
    location: LocationCreateNestedOneWithoutConferencesInput
    user: UserCreateNestedOneWithoutConferencesInput
    attendees?: AttendeeCreateNestedManyWithoutConferenceInput
  }

  export type ConferenceUncheckedCreateWithoutPresentationsInput = {
    id?: string
    name: string
    description?: string | null
    starts: Date | string
    ends: Date | string
    maxPresentations: number
    maxAttendees: number
    createdAt?: Date | string
    updatedAt?: Date | string
    locationId: string
    userId: string
    attendees?: AttendeeUncheckedCreateNestedManyWithoutConferenceInput
  }

  export type ConferenceCreateOrConnectWithoutPresentationsInput = {
    where: ConferenceWhereUniqueInput
    create: XOR<ConferenceCreateWithoutPresentationsInput, ConferenceUncheckedCreateWithoutPresentationsInput>
  }

  export type UserCreateWithoutPresentationsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conferences?: ConferenceCreateNestedManyWithoutUserInput
    attendees?: AttendeeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPresentationsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conferences?: ConferenceUncheckedCreateNestedManyWithoutUserInput
    attendees?: AttendeeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPresentationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPresentationsInput, UserUncheckedCreateWithoutPresentationsInput>
  }

  export type ConferenceUpsertWithoutPresentationsInput = {
    update: XOR<ConferenceUpdateWithoutPresentationsInput, ConferenceUncheckedUpdateWithoutPresentationsInput>
    create: XOR<ConferenceCreateWithoutPresentationsInput, ConferenceUncheckedCreateWithoutPresentationsInput>
    where?: ConferenceWhereInput
  }

  export type ConferenceUpdateToOneWithWhereWithoutPresentationsInput = {
    where?: ConferenceWhereInput
    data: XOR<ConferenceUpdateWithoutPresentationsInput, ConferenceUncheckedUpdateWithoutPresentationsInput>
  }

  export type ConferenceUpdateWithoutPresentationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    starts?: DateTimeFieldUpdateOperationsInput | Date | string
    ends?: DateTimeFieldUpdateOperationsInput | Date | string
    maxPresentations?: IntFieldUpdateOperationsInput | number
    maxAttendees?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutConferencesNestedInput
    user?: UserUpdateOneRequiredWithoutConferencesNestedInput
    attendees?: AttendeeUpdateManyWithoutConferenceNestedInput
  }

  export type ConferenceUncheckedUpdateWithoutPresentationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    starts?: DateTimeFieldUpdateOperationsInput | Date | string
    ends?: DateTimeFieldUpdateOperationsInput | Date | string
    maxPresentations?: IntFieldUpdateOperationsInput | number
    maxAttendees?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    attendees?: AttendeeUncheckedUpdateManyWithoutConferenceNestedInput
  }

  export type UserUpsertWithoutPresentationsInput = {
    update: XOR<UserUpdateWithoutPresentationsInput, UserUncheckedUpdateWithoutPresentationsInput>
    create: XOR<UserCreateWithoutPresentationsInput, UserUncheckedCreateWithoutPresentationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPresentationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPresentationsInput, UserUncheckedUpdateWithoutPresentationsInput>
  }

  export type UserUpdateWithoutPresentationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conferences?: ConferenceUpdateManyWithoutUserNestedInput
    attendees?: AttendeeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPresentationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conferences?: ConferenceUncheckedUpdateManyWithoutUserNestedInput
    attendees?: AttendeeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ConferenceCreateWithoutAttendeesInput = {
    id?: string
    name: string
    description?: string | null
    starts: Date | string
    ends: Date | string
    maxPresentations: number
    maxAttendees: number
    createdAt?: Date | string
    updatedAt?: Date | string
    location: LocationCreateNestedOneWithoutConferencesInput
    user: UserCreateNestedOneWithoutConferencesInput
    presentations?: PresentationCreateNestedManyWithoutConferenceInput
  }

  export type ConferenceUncheckedCreateWithoutAttendeesInput = {
    id?: string
    name: string
    description?: string | null
    starts: Date | string
    ends: Date | string
    maxPresentations: number
    maxAttendees: number
    createdAt?: Date | string
    updatedAt?: Date | string
    locationId: string
    userId: string
    presentations?: PresentationUncheckedCreateNestedManyWithoutConferenceInput
  }

  export type ConferenceCreateOrConnectWithoutAttendeesInput = {
    where: ConferenceWhereUniqueInput
    create: XOR<ConferenceCreateWithoutAttendeesInput, ConferenceUncheckedCreateWithoutAttendeesInput>
  }

  export type UserCreateWithoutAttendeesInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conferences?: ConferenceCreateNestedManyWithoutUserInput
    presentations?: PresentationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAttendeesInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conferences?: ConferenceUncheckedCreateNestedManyWithoutUserInput
    presentations?: PresentationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAttendeesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAttendeesInput, UserUncheckedCreateWithoutAttendeesInput>
  }

  export type ConferenceUpsertWithoutAttendeesInput = {
    update: XOR<ConferenceUpdateWithoutAttendeesInput, ConferenceUncheckedUpdateWithoutAttendeesInput>
    create: XOR<ConferenceCreateWithoutAttendeesInput, ConferenceUncheckedCreateWithoutAttendeesInput>
    where?: ConferenceWhereInput
  }

  export type ConferenceUpdateToOneWithWhereWithoutAttendeesInput = {
    where?: ConferenceWhereInput
    data: XOR<ConferenceUpdateWithoutAttendeesInput, ConferenceUncheckedUpdateWithoutAttendeesInput>
  }

  export type ConferenceUpdateWithoutAttendeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    starts?: DateTimeFieldUpdateOperationsInput | Date | string
    ends?: DateTimeFieldUpdateOperationsInput | Date | string
    maxPresentations?: IntFieldUpdateOperationsInput | number
    maxAttendees?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutConferencesNestedInput
    user?: UserUpdateOneRequiredWithoutConferencesNestedInput
    presentations?: PresentationUpdateManyWithoutConferenceNestedInput
  }

  export type ConferenceUncheckedUpdateWithoutAttendeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    starts?: DateTimeFieldUpdateOperationsInput | Date | string
    ends?: DateTimeFieldUpdateOperationsInput | Date | string
    maxPresentations?: IntFieldUpdateOperationsInput | number
    maxAttendees?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    presentations?: PresentationUncheckedUpdateManyWithoutConferenceNestedInput
  }

  export type UserUpsertWithoutAttendeesInput = {
    update: XOR<UserUpdateWithoutAttendeesInput, UserUncheckedUpdateWithoutAttendeesInput>
    create: XOR<UserCreateWithoutAttendeesInput, UserUncheckedCreateWithoutAttendeesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAttendeesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAttendeesInput, UserUncheckedUpdateWithoutAttendeesInput>
  }

  export type UserUpdateWithoutAttendeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conferences?: ConferenceUpdateManyWithoutUserNestedInput
    presentations?: PresentationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAttendeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conferences?: ConferenceUncheckedUpdateManyWithoutUserNestedInput
    presentations?: PresentationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ConferenceCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    starts: Date | string
    ends: Date | string
    maxPresentations: number
    maxAttendees: number
    createdAt?: Date | string
    updatedAt?: Date | string
    locationId: string
  }

  export type PresentationCreateManyUserInput = {
    id?: string
    title: string
    synopsis: string
    presenter: string
    conferenceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendeeCreateManyUserInput = {
    id?: string
    name: string
    email: string
    conferenceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConferenceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    starts?: DateTimeFieldUpdateOperationsInput | Date | string
    ends?: DateTimeFieldUpdateOperationsInput | Date | string
    maxPresentations?: IntFieldUpdateOperationsInput | number
    maxAttendees?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutConferencesNestedInput
    presentations?: PresentationUpdateManyWithoutConferenceNestedInput
    attendees?: AttendeeUpdateManyWithoutConferenceNestedInput
  }

  export type ConferenceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    starts?: DateTimeFieldUpdateOperationsInput | Date | string
    ends?: DateTimeFieldUpdateOperationsInput | Date | string
    maxPresentations?: IntFieldUpdateOperationsInput | number
    maxAttendees?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationId?: StringFieldUpdateOperationsInput | string
    presentations?: PresentationUncheckedUpdateManyWithoutConferenceNestedInput
    attendees?: AttendeeUncheckedUpdateManyWithoutConferenceNestedInput
  }

  export type ConferenceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    starts?: DateTimeFieldUpdateOperationsInput | Date | string
    ends?: DateTimeFieldUpdateOperationsInput | Date | string
    maxPresentations?: IntFieldUpdateOperationsInput | number
    maxAttendees?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationId?: StringFieldUpdateOperationsInput | string
  }

  export type PresentationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    presenter?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conference?: ConferenceUpdateOneRequiredWithoutPresentationsNestedInput
  }

  export type PresentationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    presenter?: StringFieldUpdateOperationsInput | string
    conferenceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresentationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    presenter?: StringFieldUpdateOperationsInput | string
    conferenceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendeeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conference?: ConferenceUpdateOneRequiredWithoutAttendeesNestedInput
  }

  export type AttendeeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    conferenceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendeeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    conferenceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresentationCreateManyConferenceInput = {
    id?: string
    title: string
    synopsis: string
    presenter: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendeeCreateManyConferenceInput = {
    id?: string
    name: string
    email: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PresentationUpdateWithoutConferenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    presenter?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPresentationsNestedInput
  }

  export type PresentationUncheckedUpdateWithoutConferenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    presenter?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresentationUncheckedUpdateManyWithoutConferenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    presenter?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendeeUpdateWithoutConferenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAttendeesNestedInput
  }

  export type AttendeeUncheckedUpdateWithoutConferenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendeeUncheckedUpdateManyWithoutConferenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConferenceCreateManyLocationInput = {
    id?: string
    name: string
    description?: string | null
    starts: Date | string
    ends: Date | string
    maxPresentations: number
    maxAttendees: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ConferenceUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    starts?: DateTimeFieldUpdateOperationsInput | Date | string
    ends?: DateTimeFieldUpdateOperationsInput | Date | string
    maxPresentations?: IntFieldUpdateOperationsInput | number
    maxAttendees?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConferencesNestedInput
    presentations?: PresentationUpdateManyWithoutConferenceNestedInput
    attendees?: AttendeeUpdateManyWithoutConferenceNestedInput
  }

  export type ConferenceUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    starts?: DateTimeFieldUpdateOperationsInput | Date | string
    ends?: DateTimeFieldUpdateOperationsInput | Date | string
    maxPresentations?: IntFieldUpdateOperationsInput | number
    maxAttendees?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    presentations?: PresentationUncheckedUpdateManyWithoutConferenceNestedInput
    attendees?: AttendeeUncheckedUpdateManyWithoutConferenceNestedInput
  }

  export type ConferenceUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    starts?: DateTimeFieldUpdateOperationsInput | Date | string
    ends?: DateTimeFieldUpdateOperationsInput | Date | string
    maxPresentations?: IntFieldUpdateOperationsInput | number
    maxAttendees?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
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