
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Language
 * 
 */
export type Language = $Result.DefaultSelection<Prisma.$LanguagePayload>
/**
 * Model location
 * 
 */
export type location = $Result.DefaultSelection<Prisma.$locationPayload>
/**
 * Model Collaborator
 * 
 */
export type Collaborator = $Result.DefaultSelection<Prisma.$CollaboratorPayload>
/**
 * Model Name
 * 
 */
export type Name = $Result.DefaultSelection<Prisma.$NamePayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Attendee
 * 
 */
export type Attendee = $Result.DefaultSelection<Prisma.$AttendeePayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model HearAboutUs
 * 
 */
export type HearAboutUs = $Result.DefaultSelection<Prisma.$HearAboutUsPayload>
/**
 * Model Member
 * 
 */
export type Member = $Result.DefaultSelection<Prisma.$MemberPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Events
 * const events = await prisma.event.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Events
   * const events = await prisma.event.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs>;

  /**
   * `prisma.attendee`: Exposes CRUD operations for the **Attendee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendees
    * const attendees = await prisma.attendee.findMany()
    * ```
    */
  get attendee(): Prisma.AttendeeDelegate<ExtArgs>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs>;

  /**
   * `prisma.hearAboutUs`: Exposes CRUD operations for the **HearAboutUs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HearAboutuses
    * const hearAboutuses = await prisma.hearAboutUs.findMany()
    * ```
    */
  get hearAboutUs(): Prisma.HearAboutUsDelegate<ExtArgs>;

  /**
   * `prisma.member`: Exposes CRUD operations for the **Member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.MemberDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.1.1
   * Query Engine version: 6a3747c37ff169c90047725a05a6ef02e32ac97e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Event: 'Event',
    Attendee: 'Attendee',
    Team: 'Team',
    HearAboutUs: 'HearAboutUs',
    Member: 'Member'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'event' | 'attendee' | 'team' | 'hearAboutUs' | 'member'
      txIsolationLevel: never
    },
    model: {
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EventFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.EventAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>,
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Attendee: {
        payload: Prisma.$AttendeePayload<ExtArgs>
        fields: Prisma.AttendeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendeeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendeeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          findFirst: {
            args: Prisma.AttendeeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendeeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          findMany: {
            args: Prisma.AttendeeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>[]
          }
          create: {
            args: Prisma.AttendeeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          createMany: {
            args: Prisma.AttendeeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AttendeeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          update: {
            args: Prisma.AttendeeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          deleteMany: {
            args: Prisma.AttendeeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AttendeeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AttendeeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendeePayload>
          }
          aggregate: {
            args: Prisma.AttendeeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAttendee>
          }
          groupBy: {
            args: Prisma.AttendeeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AttendeeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AttendeeFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.AttendeeAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.AttendeeCountArgs<ExtArgs>,
            result: $Utils.Optional<AttendeeCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TeamFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.TeamAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>,
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      HearAboutUs: {
        payload: Prisma.$HearAboutUsPayload<ExtArgs>
        fields: Prisma.HearAboutUsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HearAboutUsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HearAboutUsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HearAboutUsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HearAboutUsPayload>
          }
          findFirst: {
            args: Prisma.HearAboutUsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HearAboutUsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HearAboutUsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HearAboutUsPayload>
          }
          findMany: {
            args: Prisma.HearAboutUsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HearAboutUsPayload>[]
          }
          create: {
            args: Prisma.HearAboutUsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HearAboutUsPayload>
          }
          createMany: {
            args: Prisma.HearAboutUsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.HearAboutUsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HearAboutUsPayload>
          }
          update: {
            args: Prisma.HearAboutUsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HearAboutUsPayload>
          }
          deleteMany: {
            args: Prisma.HearAboutUsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.HearAboutUsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.HearAboutUsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HearAboutUsPayload>
          }
          aggregate: {
            args: Prisma.HearAboutUsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHearAboutUs>
          }
          groupBy: {
            args: Prisma.HearAboutUsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HearAboutUsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.HearAboutUsFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.HearAboutUsAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.HearAboutUsCountArgs<ExtArgs>,
            result: $Utils.Optional<HearAboutUsCountAggregateOutputType> | number
          }
        }
      }
      Member: {
        payload: Prisma.$MemberPayload<ExtArgs>
        fields: Prisma.MemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findFirst: {
            args: Prisma.MemberFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findMany: {
            args: Prisma.MemberFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          create: {
            args: Prisma.MemberCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          createMany: {
            args: Prisma.MemberCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MemberDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          update: {
            args: Prisma.MemberUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          deleteMany: {
            args: Prisma.MemberDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MemberUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MemberUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.MemberGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MemberFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.MemberAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.MemberCountArgs<ExtArgs>,
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'update'
    | 'updateMany'
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
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    attendees: number
    teams: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    attendees?: boolean | EventCountOutputTypeCountAttendeesArgs
    teams?: boolean | EventCountOutputTypeCountTeamsArgs
  }

  // Custom InputTypes

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountAttendeesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AttendeeWhereInput
  }


  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
  }



  /**
   * Count Type AttendeeCountOutputType
   */

  export type AttendeeCountOutputType = {
    events: number
    Team: number
  }

  export type AttendeeCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    events?: boolean | AttendeeCountOutputTypeCountEventsArgs
    Team?: boolean | AttendeeCountOutputTypeCountTeamArgs
  }

  // Custom InputTypes

  /**
   * AttendeeCountOutputType without action
   */
  export type AttendeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendeeCountOutputType
     */
    select?: AttendeeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AttendeeCountOutputType without action
   */
  export type AttendeeCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * AttendeeCountOutputType without action
   */
  export type AttendeeCountOutputTypeCountTeamArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
  }



  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    attendee: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    attendee?: boolean | TeamCountOutputTypeCountAttendeeArgs
  }

  // Custom InputTypes

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountAttendeeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AttendeeWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Language
   */





  export type LanguageSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    arabic?: boolean
    english?: boolean
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectScalar = {
    arabic?: boolean
    english?: boolean
  }


  export type $LanguagePayload = {
    name: "Language"
    objects: {}
    scalars: {
      arabic: string
      english: string
    }
    composites: {}
  }


  type LanguageGetPayload<S extends boolean | null | undefined | LanguageDefaultArgs> = $Result.GetResult<Prisma.$LanguagePayload, S>





  /**
   * Fields of the Language model
   */ 
  interface LanguageFieldRefs {
    readonly arabic: FieldRef<"Language", 'String'>
    readonly english: FieldRef<"Language", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Language without action
   */
  export type LanguageDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
  }



  /**
   * Model location
   */





  export type locationSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    lat?: boolean
    lng?: boolean
  }, ExtArgs["result"]["location"]>

  export type locationSelectScalar = {
    lat?: boolean
    lng?: boolean
  }


  export type $locationPayload = {
    name: "location"
    objects: {}
    scalars: {
      lat: number
      lng: number
    }
    composites: {}
  }


  type locationGetPayload<S extends boolean | null | undefined | locationDefaultArgs> = $Result.GetResult<Prisma.$locationPayload, S>





  /**
   * Fields of the location model
   */ 
  interface locationFieldRefs {
    readonly lat: FieldRef<"location", 'Float'>
    readonly lng: FieldRef<"location", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * location without action
   */
  export type locationDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
  }



  /**
   * Model Collaborator
   */





  export type CollaboratorSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    type?: boolean | LanguageDefaultArgs<ExtArgs>
    name?: boolean | LanguageDefaultArgs<ExtArgs>
    bio?: boolean | LanguageDefaultArgs<ExtArgs>
    image?: boolean
    linkedin?: boolean
  }, ExtArgs["result"]["collaborator"]>

  export type CollaboratorSelectScalar = {
    image?: boolean
    linkedin?: boolean
  }

  export type CollaboratorInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {}


  export type $CollaboratorPayload = {
    name: "Collaborator"
    objects: {}
    scalars: {
      image: string
      linkedin: string
    }
    composites: {
      type: Prisma.$LanguagePayload
      name: Prisma.$LanguagePayload | null
      bio: Prisma.$LanguagePayload | null
    }
  }


  type CollaboratorGetPayload<S extends boolean | null | undefined | CollaboratorDefaultArgs> = $Result.GetResult<Prisma.$CollaboratorPayload, S>





  /**
   * Fields of the Collaborator model
   */ 
  interface CollaboratorFieldRefs {
    readonly image: FieldRef<"Collaborator", 'String'>
    readonly linkedin: FieldRef<"Collaborator", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Collaborator without action
   */
  export type CollaboratorDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaborator
     */
    select?: CollaboratorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CollaboratorInclude<ExtArgs> | null
  }



  /**
   * Model Name
   */





  export type NameSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    frist?: boolean
    last?: boolean
  }, ExtArgs["result"]["name"]>

  export type NameSelectScalar = {
    frist?: boolean
    last?: boolean
  }


  export type $NamePayload = {
    name: "Name"
    objects: {}
    scalars: {
      frist: string
      last: string
    }
    composites: {}
  }


  type NameGetPayload<S extends boolean | null | undefined | NameDefaultArgs> = $Result.GetResult<Prisma.$NamePayload, S>





  /**
   * Fields of the Name model
   */ 
  interface NameFieldRefs {
    readonly frist: FieldRef<"Name", 'String'>
    readonly last: FieldRef<"Name", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Name without action
   */
  export type NameDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Name
     */
    select?: NameSelect<ExtArgs> | null
  }



  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    withTeams: boolean | null
    date: Date | null
    upcoming: boolean | null
    locationImage: string | null
    timeline: string | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    withTeams: boolean | null
    date: Date | null
    upcoming: boolean | null
    locationImage: string | null
    timeline: string | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    withTeams: number
    date: number
    upcoming: number
    images: number
    locationImage: number
    timeline: number
    attendeeIDs: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    withTeams?: true
    date?: true
    upcoming?: true
    locationImage?: true
    timeline?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    withTeams?: true
    date?: true
    upcoming?: true
    locationImage?: true
    timeline?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    withTeams?: true
    date?: true
    upcoming?: true
    images?: true
    locationImage?: true
    timeline?: true
    attendeeIDs?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    withTeams: boolean
    date: Date
    upcoming: boolean
    images: string[]
    locationImage: string
    timeline: string
    attendeeIDs: string[]
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean | LanguageDefaultArgs<ExtArgs>
    description?: boolean | LanguageDefaultArgs<ExtArgs>
    withTeams?: boolean
    date?: boolean
    location?: boolean | locationDefaultArgs<ExtArgs>
    address?: boolean | LanguageDefaultArgs<ExtArgs>
    upcoming?: boolean
    images?: boolean
    locationImage?: boolean
    timeline?: boolean
    collaborators?: boolean | CollaboratorDefaultArgs<ExtArgs>
    attendeeIDs?: boolean
    attendees?: boolean | Event$attendeesArgs<ExtArgs>
    teams?: boolean | Event$teamsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    withTeams?: boolean
    date?: boolean
    upcoming?: boolean
    images?: boolean
    locationImage?: boolean
    timeline?: boolean
    attendeeIDs?: boolean
  }

  export type EventInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    attendees?: boolean | Event$attendeesArgs<ExtArgs>
    teams?: boolean | Event$teamsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $EventPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      attendees: Prisma.$AttendeePayload<ExtArgs>[]
      teams: Prisma.$TeamPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      withTeams: boolean
      date: Date
      upcoming: boolean
      images: string[]
      locationImage: string
      timeline: string
      attendeeIDs: string[]
    }, ExtArgs["result"]["event"]>
    composites: {
      name: Prisma.$LanguagePayload
      description: Prisma.$LanguagePayload
      location: Prisma.$locationPayload
      address: Prisma.$LanguagePayload
      collaborators: Prisma.$CollaboratorPayload[]
    }
  }


  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<EventFindManyArgs, 'select' | 'include'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EventFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>
    ): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Event that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EventFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>
    ): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EventFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
    **/
    create<T extends EventCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EventCreateArgs<ExtArgs>>
    ): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Events.
     *     @param {EventCreateManyArgs} args - Arguments to create many Events.
     *     @example
     *     // Create many Events
     *     const event = await prisma.event.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EventCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
    **/
    delete<T extends EventDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EventDeleteArgs<ExtArgs>>
    ): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EventUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EventUpdateArgs<ExtArgs>>
    ): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EventDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EventUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
    **/
    upsert<T extends EventUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EventUpsertArgs<ExtArgs>>
    ): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Events that matches the filter.
     * @param {EventFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const event = await prisma.event.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: EventFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Event.
     * @param {EventAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const event = await prisma.event.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: EventAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    attendees<T extends Event$attendeesArgs<ExtArgs> = {}>(args?: Subset<T, Event$attendeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, 'findMany'> | Null>;

    teams<T extends Event$teamsArgs<ExtArgs> = {}>(args?: Subset<T, Event$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Event model
   */ 
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly withTeams: FieldRef<"Event", 'Boolean'>
    readonly date: FieldRef<"Event", 'DateTime'>
    readonly upcoming: FieldRef<"Event", 'Boolean'>
    readonly images: FieldRef<"Event", 'String[]'>
    readonly locationImage: FieldRef<"Event", 'String'>
    readonly timeline: FieldRef<"Event", 'String'>
    readonly attendeeIDs: FieldRef<"Event", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }


  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }


  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }


  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }


  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }


  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }


  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
  }


  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }


  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
  }


  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }


  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }


  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
  }


  /**
   * Event findRaw
   */
  export type EventFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Event aggregateRaw
   */
  export type EventAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Event.attendees
   */
  export type Event$attendeesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
   * Event.teams
   */
  export type Event$teamsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    cursor?: TeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }


  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
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
    email: string | null
    password: string | null
    phone: string | null
    education: string | null
    gender: string | null
    image: string | null
    governorate: string | null
    birthday: Date | null
    activation: boolean | null
  }

  export type AttendeeMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    phone: string | null
    education: string | null
    gender: string | null
    image: string | null
    governorate: string | null
    birthday: Date | null
    activation: boolean | null
  }

  export type AttendeeCountAggregateOutputType = {
    id: number
    email: number
    password: number
    phone: number
    education: number
    gender: number
    image: number
    governorate: number
    birthday: number
    activation: number
    eventIDs: number
    teamIDs: number
    _all: number
  }


  export type AttendeeMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    phone?: true
    education?: true
    gender?: true
    image?: true
    governorate?: true
    birthday?: true
    activation?: true
  }

  export type AttendeeMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    phone?: true
    education?: true
    gender?: true
    image?: true
    governorate?: true
    birthday?: true
    activation?: true
  }

  export type AttendeeCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    phone?: true
    education?: true
    gender?: true
    image?: true
    governorate?: true
    birthday?: true
    activation?: true
    eventIDs?: true
    teamIDs?: true
    _all?: true
  }

  export type AttendeeAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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




  export type AttendeeGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    email: string
    password: string
    phone: string
    education: string
    gender: string
    image: string
    governorate: string
    birthday: Date
    activation: boolean
    eventIDs: string[]
    teamIDs: string[]
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


  export type AttendeeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean | NameDefaultArgs<ExtArgs>
    email?: boolean
    password?: boolean
    phone?: boolean
    education?: boolean
    gender?: boolean
    image?: boolean
    governorate?: boolean
    birthday?: boolean
    activation?: boolean
    eventIDs?: boolean
    teamIDs?: boolean
    events?: boolean | Attendee$eventsArgs<ExtArgs>
    Team?: boolean | Attendee$TeamArgs<ExtArgs>
    member?: boolean | Attendee$memberArgs<ExtArgs>
    _count?: boolean | AttendeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendee"]>

  export type AttendeeSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    education?: boolean
    gender?: boolean
    image?: boolean
    governorate?: boolean
    birthday?: boolean
    activation?: boolean
    eventIDs?: boolean
    teamIDs?: boolean
  }

  export type AttendeeInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    events?: boolean | Attendee$eventsArgs<ExtArgs>
    Team?: boolean | Attendee$TeamArgs<ExtArgs>
    member?: boolean | Attendee$memberArgs<ExtArgs>
    _count?: boolean | AttendeeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AttendeePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Attendee"
    objects: {
      events: Prisma.$EventPayload<ExtArgs>[]
      Team: Prisma.$TeamPayload<ExtArgs>[]
      member: Prisma.$MemberPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: string
      email: string
      password: string
      phone: string
      education: string
      gender: string
      image: string
      governorate: string
      birthday: Date
      activation: boolean
      eventIDs: string[]
      teamIDs: string[]
    }, ExtArgs["result"]["attendee"]>
    composites: {
      name: Prisma.$NamePayload
    }
  }


  type AttendeeGetPayload<S extends boolean | null | undefined | AttendeeDefaultArgs> = $Result.GetResult<Prisma.$AttendeePayload, S>

  type AttendeeCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AttendeeFindManyArgs, 'select' | 'include'> & {
      select?: AttendeeCountAggregateInputType | true
    }

  export interface AttendeeDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends AttendeeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AttendeeFindUniqueArgs<ExtArgs>>
    ): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Attendee that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AttendeeFindUniqueOrThrowArgs} args - Arguments to find a Attendee
     * @example
     * // Get one Attendee
     * const attendee = await prisma.attendee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AttendeeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AttendeeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends AttendeeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AttendeeFindFirstArgs<ExtArgs>>
    ): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends AttendeeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AttendeeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Attendees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendeeFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends AttendeeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttendeeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends AttendeeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AttendeeCreateArgs<ExtArgs>>
    ): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Attendees.
     *     @param {AttendeeCreateManyArgs} args - Arguments to create many Attendees.
     *     @example
     *     // Create many Attendees
     *     const attendee = await prisma.attendee.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AttendeeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttendeeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends AttendeeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AttendeeDeleteArgs<ExtArgs>>
    ): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends AttendeeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AttendeeUpdateArgs<ExtArgs>>
    ): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends AttendeeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttendeeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends AttendeeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AttendeeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends AttendeeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AttendeeUpsertArgs<ExtArgs>>
    ): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Attendees that matches the filter.
     * @param {AttendeeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const attendee = await prisma.attendee.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: AttendeeFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Attendee.
     * @param {AttendeeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const attendee = await prisma.attendee.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: AttendeeAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

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
  export interface Prisma__AttendeeClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    events<T extends Attendee$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Attendee$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'findMany'> | Null>;

    Team<T extends Attendee$TeamArgs<ExtArgs> = {}>(args?: Subset<T, Attendee$TeamArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findMany'> | Null>;

    member<T extends Attendee$memberArgs<ExtArgs> = {}>(args?: Subset<T, Attendee$memberArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Attendee model
   */ 
  interface AttendeeFieldRefs {
    readonly id: FieldRef<"Attendee", 'String'>
    readonly email: FieldRef<"Attendee", 'String'>
    readonly password: FieldRef<"Attendee", 'String'>
    readonly phone: FieldRef<"Attendee", 'String'>
    readonly education: FieldRef<"Attendee", 'String'>
    readonly gender: FieldRef<"Attendee", 'String'>
    readonly image: FieldRef<"Attendee", 'String'>
    readonly governorate: FieldRef<"Attendee", 'String'>
    readonly birthday: FieldRef<"Attendee", 'DateTime'>
    readonly activation: FieldRef<"Attendee", 'Boolean'>
    readonly eventIDs: FieldRef<"Attendee", 'String[]'>
    readonly teamIDs: FieldRef<"Attendee", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * Attendee findUnique
   */
  export type AttendeeFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type AttendeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type AttendeeFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type AttendeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type AttendeeFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type AttendeeCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type AttendeeCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendees.
     */
    data: AttendeeCreateManyInput | AttendeeCreateManyInput[]
  }


  /**
   * Attendee update
   */
  export type AttendeeUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type AttendeeUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendees.
     */
    data: XOR<AttendeeUpdateManyMutationInput, AttendeeUncheckedUpdateManyInput>
    /**
     * Filter which Attendees to update
     */
    where?: AttendeeWhereInput
  }


  /**
   * Attendee upsert
   */
  export type AttendeeUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type AttendeeDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type AttendeeDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendees to delete
     */
    where?: AttendeeWhereInput
  }


  /**
   * Attendee findRaw
   */
  export type AttendeeFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Attendee aggregateRaw
   */
  export type AttendeeAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Attendee.events
   */
  export type Attendee$eventsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }


  /**
   * Attendee.Team
   */
  export type Attendee$TeamArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    cursor?: TeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }


  /**
   * Attendee.member
   */
  export type Attendee$memberArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
  }


  /**
   * Attendee without action
   */
  export type AttendeeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendeeInclude<ExtArgs> | null
  }



  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamMinAggregateOutputType = {
    id: string | null
    name: string | null
    eventId: string | null
    proposal: string | null
  }

  export type TeamMaxAggregateOutputType = {
    id: string | null
    name: string | null
    eventId: string | null
    proposal: string | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    eventId: number
    members: number
    proposal: number
    _all: number
  }


  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
    eventId?: true
    proposal?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
    eventId?: true
    proposal?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    eventId?: true
    members?: true
    proposal?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: string
    name: string
    eventId: string
    members: string[]
    proposal: string
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    eventId?: boolean
    members?: boolean
    proposal?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    attendee?: boolean | Team$attendeeArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    name?: boolean
    eventId?: boolean
    members?: boolean
    proposal?: boolean
  }

  export type TeamInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    attendee?: boolean | Team$attendeeArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TeamPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      attendee: Prisma.$AttendeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      name: string
      eventId: string
      members: string[]
      proposal: string
    }, ExtArgs["result"]["team"]>
    composites: {}
  }


  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TeamFindManyArgs, 'select' | 'include'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TeamFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Team that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TeamFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TeamFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
    **/
    create<T extends TeamCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TeamCreateArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Teams.
     *     @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     *     @example
     *     // Create many Teams
     *     const team = await prisma.team.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TeamCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
    **/
    delete<T extends TeamDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TeamUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TeamDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TeamUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
    **/
    upsert<T extends TeamUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Teams that matches the filter.
     * @param {TeamFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const team = await prisma.team.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: TeamFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Team.
     * @param {TeamAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const team = await prisma.team.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: TeamAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
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
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    attendee<T extends Team$attendeeArgs<ExtArgs> = {}>(args?: Subset<T, Team$attendeeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Team model
   */ 
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'String'>
    readonly name: FieldRef<"Team", 'String'>
    readonly eventId: FieldRef<"Team", 'String'>
    readonly members: FieldRef<"Team", 'String[]'>
    readonly proposal: FieldRef<"Team", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }


  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }


  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }


  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }


  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }


  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }


  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
  }


  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }


  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
  }


  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }


  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }


  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
  }


  /**
   * Team findRaw
   */
  export type TeamFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Team aggregateRaw
   */
  export type TeamAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Team.attendee
   */
  export type Team$attendeeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendee
     */
    select?: AttendeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
  }



  /**
   * Model HearAboutUs
   */

  export type AggregateHearAboutUs = {
    _count: HearAboutUsCountAggregateOutputType | null
    _min: HearAboutUsMinAggregateOutputType | null
    _max: HearAboutUsMaxAggregateOutputType | null
  }

  export type HearAboutUsMinAggregateOutputType = {
    id: string | null
    attendeeId: string | null
    evevntId: string | null
    answer: string | null
  }

  export type HearAboutUsMaxAggregateOutputType = {
    id: string | null
    attendeeId: string | null
    evevntId: string | null
    answer: string | null
  }

  export type HearAboutUsCountAggregateOutputType = {
    id: number
    attendeeId: number
    evevntId: number
    answer: number
    _all: number
  }


  export type HearAboutUsMinAggregateInputType = {
    id?: true
    attendeeId?: true
    evevntId?: true
    answer?: true
  }

  export type HearAboutUsMaxAggregateInputType = {
    id?: true
    attendeeId?: true
    evevntId?: true
    answer?: true
  }

  export type HearAboutUsCountAggregateInputType = {
    id?: true
    attendeeId?: true
    evevntId?: true
    answer?: true
    _all?: true
  }

  export type HearAboutUsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which HearAboutUs to aggregate.
     */
    where?: HearAboutUsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HearAboutuses to fetch.
     */
    orderBy?: HearAboutUsOrderByWithRelationInput | HearAboutUsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HearAboutUsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HearAboutuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HearAboutuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HearAboutuses
    **/
    _count?: true | HearAboutUsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HearAboutUsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HearAboutUsMaxAggregateInputType
  }

  export type GetHearAboutUsAggregateType<T extends HearAboutUsAggregateArgs> = {
        [P in keyof T & keyof AggregateHearAboutUs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHearAboutUs[P]>
      : GetScalarType<T[P], AggregateHearAboutUs[P]>
  }




  export type HearAboutUsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: HearAboutUsWhereInput
    orderBy?: HearAboutUsOrderByWithAggregationInput | HearAboutUsOrderByWithAggregationInput[]
    by: HearAboutUsScalarFieldEnum[] | HearAboutUsScalarFieldEnum
    having?: HearAboutUsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HearAboutUsCountAggregateInputType | true
    _min?: HearAboutUsMinAggregateInputType
    _max?: HearAboutUsMaxAggregateInputType
  }

  export type HearAboutUsGroupByOutputType = {
    id: string
    attendeeId: string
    evevntId: string
    answer: string
    _count: HearAboutUsCountAggregateOutputType | null
    _min: HearAboutUsMinAggregateOutputType | null
    _max: HearAboutUsMaxAggregateOutputType | null
  }

  type GetHearAboutUsGroupByPayload<T extends HearAboutUsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HearAboutUsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HearAboutUsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HearAboutUsGroupByOutputType[P]>
            : GetScalarType<T[P], HearAboutUsGroupByOutputType[P]>
        }
      >
    >


  export type HearAboutUsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attendeeId?: boolean
    evevntId?: boolean
    answer?: boolean
  }, ExtArgs["result"]["hearAboutUs"]>

  export type HearAboutUsSelectScalar = {
    id?: boolean
    attendeeId?: boolean
    evevntId?: boolean
    answer?: boolean
  }


  export type $HearAboutUsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "HearAboutUs"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: string
      attendeeId: string
      evevntId: string
      answer: string
    }, ExtArgs["result"]["hearAboutUs"]>
    composites: {}
  }


  type HearAboutUsGetPayload<S extends boolean | null | undefined | HearAboutUsDefaultArgs> = $Result.GetResult<Prisma.$HearAboutUsPayload, S>

  type HearAboutUsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<HearAboutUsFindManyArgs, 'select' | 'include'> & {
      select?: HearAboutUsCountAggregateInputType | true
    }

  export interface HearAboutUsDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HearAboutUs'], meta: { name: 'HearAboutUs' } }
    /**
     * Find zero or one HearAboutUs that matches the filter.
     * @param {HearAboutUsFindUniqueArgs} args - Arguments to find a HearAboutUs
     * @example
     * // Get one HearAboutUs
     * const hearAboutUs = await prisma.hearAboutUs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HearAboutUsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, HearAboutUsFindUniqueArgs<ExtArgs>>
    ): Prisma__HearAboutUsClient<$Result.GetResult<Prisma.$HearAboutUsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one HearAboutUs that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HearAboutUsFindUniqueOrThrowArgs} args - Arguments to find a HearAboutUs
     * @example
     * // Get one HearAboutUs
     * const hearAboutUs = await prisma.hearAboutUs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HearAboutUsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HearAboutUsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__HearAboutUsClient<$Result.GetResult<Prisma.$HearAboutUsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first HearAboutUs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HearAboutUsFindFirstArgs} args - Arguments to find a HearAboutUs
     * @example
     * // Get one HearAboutUs
     * const hearAboutUs = await prisma.hearAboutUs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HearAboutUsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, HearAboutUsFindFirstArgs<ExtArgs>>
    ): Prisma__HearAboutUsClient<$Result.GetResult<Prisma.$HearAboutUsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first HearAboutUs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HearAboutUsFindFirstOrThrowArgs} args - Arguments to find a HearAboutUs
     * @example
     * // Get one HearAboutUs
     * const hearAboutUs = await prisma.hearAboutUs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HearAboutUsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HearAboutUsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__HearAboutUsClient<$Result.GetResult<Prisma.$HearAboutUsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more HearAboutuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HearAboutUsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HearAboutuses
     * const hearAboutuses = await prisma.hearAboutUs.findMany()
     * 
     * // Get first 10 HearAboutuses
     * const hearAboutuses = await prisma.hearAboutUs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hearAboutUsWithIdOnly = await prisma.hearAboutUs.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HearAboutUsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HearAboutUsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HearAboutUsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a HearAboutUs.
     * @param {HearAboutUsCreateArgs} args - Arguments to create a HearAboutUs.
     * @example
     * // Create one HearAboutUs
     * const HearAboutUs = await prisma.hearAboutUs.create({
     *   data: {
     *     // ... data to create a HearAboutUs
     *   }
     * })
     * 
    **/
    create<T extends HearAboutUsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, HearAboutUsCreateArgs<ExtArgs>>
    ): Prisma__HearAboutUsClient<$Result.GetResult<Prisma.$HearAboutUsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many HearAboutuses.
     *     @param {HearAboutUsCreateManyArgs} args - Arguments to create many HearAboutuses.
     *     @example
     *     // Create many HearAboutuses
     *     const hearAboutUs = await prisma.hearAboutUs.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HearAboutUsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HearAboutUsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HearAboutUs.
     * @param {HearAboutUsDeleteArgs} args - Arguments to delete one HearAboutUs.
     * @example
     * // Delete one HearAboutUs
     * const HearAboutUs = await prisma.hearAboutUs.delete({
     *   where: {
     *     // ... filter to delete one HearAboutUs
     *   }
     * })
     * 
    **/
    delete<T extends HearAboutUsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, HearAboutUsDeleteArgs<ExtArgs>>
    ): Prisma__HearAboutUsClient<$Result.GetResult<Prisma.$HearAboutUsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one HearAboutUs.
     * @param {HearAboutUsUpdateArgs} args - Arguments to update one HearAboutUs.
     * @example
     * // Update one HearAboutUs
     * const hearAboutUs = await prisma.hearAboutUs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HearAboutUsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, HearAboutUsUpdateArgs<ExtArgs>>
    ): Prisma__HearAboutUsClient<$Result.GetResult<Prisma.$HearAboutUsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more HearAboutuses.
     * @param {HearAboutUsDeleteManyArgs} args - Arguments to filter HearAboutuses to delete.
     * @example
     * // Delete a few HearAboutuses
     * const { count } = await prisma.hearAboutUs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HearAboutUsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HearAboutUsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HearAboutuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HearAboutUsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HearAboutuses
     * const hearAboutUs = await prisma.hearAboutUs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HearAboutUsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, HearAboutUsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HearAboutUs.
     * @param {HearAboutUsUpsertArgs} args - Arguments to update or create a HearAboutUs.
     * @example
     * // Update or create a HearAboutUs
     * const hearAboutUs = await prisma.hearAboutUs.upsert({
     *   create: {
     *     // ... data to create a HearAboutUs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HearAboutUs we want to update
     *   }
     * })
    **/
    upsert<T extends HearAboutUsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, HearAboutUsUpsertArgs<ExtArgs>>
    ): Prisma__HearAboutUsClient<$Result.GetResult<Prisma.$HearAboutUsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more HearAboutuses that matches the filter.
     * @param {HearAboutUsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const hearAboutUs = await prisma.hearAboutUs.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: HearAboutUsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a HearAboutUs.
     * @param {HearAboutUsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const hearAboutUs = await prisma.hearAboutUs.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: HearAboutUsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of HearAboutuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HearAboutUsCountArgs} args - Arguments to filter HearAboutuses to count.
     * @example
     * // Count the number of HearAboutuses
     * const count = await prisma.hearAboutUs.count({
     *   where: {
     *     // ... the filter for the HearAboutuses we want to count
     *   }
     * })
    **/
    count<T extends HearAboutUsCountArgs>(
      args?: Subset<T, HearAboutUsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HearAboutUsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HearAboutUs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HearAboutUsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HearAboutUsAggregateArgs>(args: Subset<T, HearAboutUsAggregateArgs>): Prisma.PrismaPromise<GetHearAboutUsAggregateType<T>>

    /**
     * Group by HearAboutUs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HearAboutUsGroupByArgs} args - Group by arguments.
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
      T extends HearAboutUsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HearAboutUsGroupByArgs['orderBy'] }
        : { orderBy?: HearAboutUsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HearAboutUsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHearAboutUsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HearAboutUs model
   */
  readonly fields: HearAboutUsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HearAboutUs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HearAboutUsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the HearAboutUs model
   */ 
  interface HearAboutUsFieldRefs {
    readonly id: FieldRef<"HearAboutUs", 'String'>
    readonly attendeeId: FieldRef<"HearAboutUs", 'String'>
    readonly evevntId: FieldRef<"HearAboutUs", 'String'>
    readonly answer: FieldRef<"HearAboutUs", 'String'>
  }
    

  // Custom InputTypes

  /**
   * HearAboutUs findUnique
   */
  export type HearAboutUsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HearAboutUs
     */
    select?: HearAboutUsSelect<ExtArgs> | null
    /**
     * Filter, which HearAboutUs to fetch.
     */
    where: HearAboutUsWhereUniqueInput
  }


  /**
   * HearAboutUs findUniqueOrThrow
   */
  export type HearAboutUsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HearAboutUs
     */
    select?: HearAboutUsSelect<ExtArgs> | null
    /**
     * Filter, which HearAboutUs to fetch.
     */
    where: HearAboutUsWhereUniqueInput
  }


  /**
   * HearAboutUs findFirst
   */
  export type HearAboutUsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HearAboutUs
     */
    select?: HearAboutUsSelect<ExtArgs> | null
    /**
     * Filter, which HearAboutUs to fetch.
     */
    where?: HearAboutUsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HearAboutuses to fetch.
     */
    orderBy?: HearAboutUsOrderByWithRelationInput | HearAboutUsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HearAboutuses.
     */
    cursor?: HearAboutUsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HearAboutuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HearAboutuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HearAboutuses.
     */
    distinct?: HearAboutUsScalarFieldEnum | HearAboutUsScalarFieldEnum[]
  }


  /**
   * HearAboutUs findFirstOrThrow
   */
  export type HearAboutUsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HearAboutUs
     */
    select?: HearAboutUsSelect<ExtArgs> | null
    /**
     * Filter, which HearAboutUs to fetch.
     */
    where?: HearAboutUsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HearAboutuses to fetch.
     */
    orderBy?: HearAboutUsOrderByWithRelationInput | HearAboutUsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HearAboutuses.
     */
    cursor?: HearAboutUsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HearAboutuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HearAboutuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HearAboutuses.
     */
    distinct?: HearAboutUsScalarFieldEnum | HearAboutUsScalarFieldEnum[]
  }


  /**
   * HearAboutUs findMany
   */
  export type HearAboutUsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HearAboutUs
     */
    select?: HearAboutUsSelect<ExtArgs> | null
    /**
     * Filter, which HearAboutuses to fetch.
     */
    where?: HearAboutUsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HearAboutuses to fetch.
     */
    orderBy?: HearAboutUsOrderByWithRelationInput | HearAboutUsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HearAboutuses.
     */
    cursor?: HearAboutUsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HearAboutuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HearAboutuses.
     */
    skip?: number
    distinct?: HearAboutUsScalarFieldEnum | HearAboutUsScalarFieldEnum[]
  }


  /**
   * HearAboutUs create
   */
  export type HearAboutUsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HearAboutUs
     */
    select?: HearAboutUsSelect<ExtArgs> | null
    /**
     * The data needed to create a HearAboutUs.
     */
    data: XOR<HearAboutUsCreateInput, HearAboutUsUncheckedCreateInput>
  }


  /**
   * HearAboutUs createMany
   */
  export type HearAboutUsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HearAboutuses.
     */
    data: HearAboutUsCreateManyInput | HearAboutUsCreateManyInput[]
  }


  /**
   * HearAboutUs update
   */
  export type HearAboutUsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HearAboutUs
     */
    select?: HearAboutUsSelect<ExtArgs> | null
    /**
     * The data needed to update a HearAboutUs.
     */
    data: XOR<HearAboutUsUpdateInput, HearAboutUsUncheckedUpdateInput>
    /**
     * Choose, which HearAboutUs to update.
     */
    where: HearAboutUsWhereUniqueInput
  }


  /**
   * HearAboutUs updateMany
   */
  export type HearAboutUsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HearAboutuses.
     */
    data: XOR<HearAboutUsUpdateManyMutationInput, HearAboutUsUncheckedUpdateManyInput>
    /**
     * Filter which HearAboutuses to update
     */
    where?: HearAboutUsWhereInput
  }


  /**
   * HearAboutUs upsert
   */
  export type HearAboutUsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HearAboutUs
     */
    select?: HearAboutUsSelect<ExtArgs> | null
    /**
     * The filter to search for the HearAboutUs to update in case it exists.
     */
    where: HearAboutUsWhereUniqueInput
    /**
     * In case the HearAboutUs found by the `where` argument doesn't exist, create a new HearAboutUs with this data.
     */
    create: XOR<HearAboutUsCreateInput, HearAboutUsUncheckedCreateInput>
    /**
     * In case the HearAboutUs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HearAboutUsUpdateInput, HearAboutUsUncheckedUpdateInput>
  }


  /**
   * HearAboutUs delete
   */
  export type HearAboutUsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HearAboutUs
     */
    select?: HearAboutUsSelect<ExtArgs> | null
    /**
     * Filter which HearAboutUs to delete.
     */
    where: HearAboutUsWhereUniqueInput
  }


  /**
   * HearAboutUs deleteMany
   */
  export type HearAboutUsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which HearAboutuses to delete
     */
    where?: HearAboutUsWhereInput
  }


  /**
   * HearAboutUs findRaw
   */
  export type HearAboutUsFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * HearAboutUs aggregateRaw
   */
  export type HearAboutUsAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * HearAboutUs without action
   */
  export type HearAboutUsDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HearAboutUs
     */
    select?: HearAboutUsSelect<ExtArgs> | null
  }



  /**
   * Model Member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberMinAggregateOutputType = {
    id: string | null
    attendeeEmail: string | null
    community: string | null
  }

  export type MemberMaxAggregateOutputType = {
    id: string | null
    attendeeEmail: string | null
    community: string | null
  }

  export type MemberCountAggregateOutputType = {
    id: number
    attendeeEmail: number
    community: number
    _all: number
  }


  export type MemberMinAggregateInputType = {
    id?: true
    attendeeEmail?: true
    community?: true
  }

  export type MemberMaxAggregateInputType = {
    id?: true
    attendeeEmail?: true
    community?: true
  }

  export type MemberCountAggregateInputType = {
    id?: true
    attendeeEmail?: true
    community?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member to aggregate.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type MemberGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithAggregationInput | MemberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: MemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    id: string
    attendeeEmail: string
    community: string
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type MemberSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attendeeEmail?: boolean
    position?: boolean | LanguageDefaultArgs<ExtArgs>
    community?: boolean
    attendee?: boolean | AttendeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectScalar = {
    id?: boolean
    attendeeEmail?: boolean
    community?: boolean
  }

  export type MemberInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    attendee?: boolean | AttendeeDefaultArgs<ExtArgs>
  }


  export type $MemberPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Member"
    objects: {
      attendee: Prisma.$AttendeePayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      attendeeEmail: string
      community: string
    }, ExtArgs["result"]["member"]>
    composites: {
      position: Prisma.$LanguagePayload
    }
  }


  type MemberGetPayload<S extends boolean | null | undefined | MemberDefaultArgs> = $Result.GetResult<Prisma.$MemberPayload, S>

  type MemberCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<MemberFindManyArgs, 'select' | 'include'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface MemberDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member'], meta: { name: 'Member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {MemberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MemberFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>
    ): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Member that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MemberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MemberFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MemberFindFirstArgs<ExtArgs>>
    ): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberWithIdOnly = await prisma.member.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MemberFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MemberFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Member.
     * @param {MemberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
    **/
    create<T extends MemberCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MemberCreateArgs<ExtArgs>>
    ): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Members.
     *     @param {MemberCreateManyArgs} args - Arguments to create many Members.
     *     @example
     *     // Create many Members
     *     const member = await prisma.member.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MemberCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MemberCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Member.
     * @param {MemberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
    **/
    delete<T extends MemberDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MemberDeleteArgs<ExtArgs>>
    ): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Member.
     * @param {MemberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MemberUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MemberUpdateArgs<ExtArgs>>
    ): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Members.
     * @param {MemberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MemberDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MemberUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Member.
     * @param {MemberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
    **/
    upsert<T extends MemberUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MemberUpsertArgs<ExtArgs>>
    ): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Members that matches the filter.
     * @param {MemberFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const member = await prisma.member.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: MemberFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Member.
     * @param {MemberAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const member = await prisma.member.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: MemberAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MemberCountArgs>(
      args?: Subset<T, MemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberGroupByArgs} args - Group by arguments.
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
      T extends MemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberGroupByArgs['orderBy'] }
        : { orderBy?: MemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Member model
   */
  readonly fields: MemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    attendee<T extends AttendeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttendeeDefaultArgs<ExtArgs>>): Prisma__AttendeeClient<$Result.GetResult<Prisma.$AttendeePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Member model
   */ 
  interface MemberFieldRefs {
    readonly id: FieldRef<"Member", 'String'>
    readonly attendeeEmail: FieldRef<"Member", 'String'>
    readonly community: FieldRef<"Member", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Member findUnique
   */
  export type MemberFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }


  /**
   * Member findUniqueOrThrow
   */
  export type MemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }


  /**
   * Member findFirst
   */
  export type MemberFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }


  /**
   * Member findFirstOrThrow
   */
  export type MemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }


  /**
   * Member findMany
   */
  export type MemberFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }


  /**
   * Member create
   */
  export type MemberCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to create a Member.
     */
    data: XOR<MemberCreateInput, MemberUncheckedCreateInput>
  }


  /**
   * Member createMany
   */
  export type MemberCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
  }


  /**
   * Member update
   */
  export type MemberUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to update a Member.
     */
    data: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
    /**
     * Choose, which Member to update.
     */
    where: MemberWhereUniqueInput
  }


  /**
   * Member updateMany
   */
  export type MemberUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
  }


  /**
   * Member upsert
   */
  export type MemberUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The filter to search for the Member to update in case it exists.
     */
    where: MemberWhereUniqueInput
    /**
     * In case the Member found by the `where` argument doesn't exist, create a new Member with this data.
     */
    create: XOR<MemberCreateInput, MemberUncheckedCreateInput>
    /**
     * In case the Member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
  }


  /**
   * Member delete
   */
  export type MemberDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter which Member to delete.
     */
    where: MemberWhereUniqueInput
  }


  /**
   * Member deleteMany
   */
  export type MemberDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MemberWhereInput
  }


  /**
   * Member findRaw
   */
  export type MemberFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Member aggregateRaw
   */
  export type MemberAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Member without action
   */
  export type MemberDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const EventScalarFieldEnum: {
    id: 'id',
    withTeams: 'withTeams',
    date: 'date',
    upcoming: 'upcoming',
    images: 'images',
    locationImage: 'locationImage',
    timeline: 'timeline',
    attendeeIDs: 'attendeeIDs'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const AttendeeScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    phone: 'phone',
    education: 'education',
    gender: 'gender',
    image: 'image',
    governorate: 'governorate',
    birthday: 'birthday',
    activation: 'activation',
    eventIDs: 'eventIDs',
    teamIDs: 'teamIDs'
  };

  export type AttendeeScalarFieldEnum = (typeof AttendeeScalarFieldEnum)[keyof typeof AttendeeScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    eventId: 'eventId',
    members: 'members',
    proposal: 'proposal'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const HearAboutUsScalarFieldEnum: {
    id: 'id',
    attendeeId: 'attendeeId',
    evevntId: 'evevntId',
    answer: 'answer'
  };

  export type HearAboutUsScalarFieldEnum = (typeof HearAboutUsScalarFieldEnum)[keyof typeof HearAboutUsScalarFieldEnum]


  export const MemberScalarFieldEnum: {
    id: 'id',
    attendeeEmail: 'attendeeEmail',
    community: 'community'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    name?: XOR<LanguageCompositeFilter, LanguageObjectEqualityInput>
    description?: XOR<LanguageCompositeFilter, LanguageObjectEqualityInput>
    withTeams?: BoolFilter<"Event"> | boolean
    date?: DateTimeFilter<"Event"> | Date | string
    location?: XOR<LocationCompositeFilter, locationObjectEqualityInput>
    address?: XOR<LanguageCompositeFilter, LanguageObjectEqualityInput>
    upcoming?: BoolFilter<"Event"> | boolean
    images?: StringNullableListFilter<"Event">
    locationImage?: StringFilter<"Event"> | string
    timeline?: StringFilter<"Event"> | string
    collaborators?: CollaboratorCompositeListFilter | CollaboratorObjectEqualityInput[]
    attendeeIDs?: StringNullableListFilter<"Event">
    attendees?: AttendeeListRelationFilter
    teams?: TeamListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    name?: LanguageOrderByInput
    description?: LanguageOrderByInput
    withTeams?: SortOrder
    date?: SortOrder
    location?: locationOrderByInput
    address?: LanguageOrderByInput
    upcoming?: SortOrder
    images?: SortOrder
    locationImage?: SortOrder
    timeline?: SortOrder
    collaborators?: CollaboratorOrderByCompositeAggregateInput
    attendeeIDs?: SortOrder
    attendees?: AttendeeOrderByRelationAggregateInput
    teams?: TeamOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    name?: XOR<LanguageCompositeFilter, LanguageObjectEqualityInput>
    description?: XOR<LanguageCompositeFilter, LanguageObjectEqualityInput>
    withTeams?: BoolFilter<"Event"> | boolean
    date?: DateTimeFilter<"Event"> | Date | string
    location?: XOR<LocationCompositeFilter, locationObjectEqualityInput>
    address?: XOR<LanguageCompositeFilter, LanguageObjectEqualityInput>
    upcoming?: BoolFilter<"Event"> | boolean
    images?: StringNullableListFilter<"Event">
    locationImage?: StringFilter<"Event"> | string
    timeline?: StringFilter<"Event"> | string
    collaborators?: CollaboratorCompositeListFilter | CollaboratorObjectEqualityInput[]
    attendeeIDs?: StringNullableListFilter<"Event">
    attendees?: AttendeeListRelationFilter
    teams?: TeamListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    withTeams?: SortOrder
    date?: SortOrder
    upcoming?: SortOrder
    images?: SortOrder
    locationImage?: SortOrder
    timeline?: SortOrder
    attendeeIDs?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    withTeams?: BoolWithAggregatesFilter<"Event"> | boolean
    date?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    upcoming?: BoolWithAggregatesFilter<"Event"> | boolean
    images?: StringNullableListFilter<"Event">
    locationImage?: StringWithAggregatesFilter<"Event"> | string
    timeline?: StringWithAggregatesFilter<"Event"> | string
    attendeeIDs?: StringNullableListFilter<"Event">
  }

  export type AttendeeWhereInput = {
    AND?: AttendeeWhereInput | AttendeeWhereInput[]
    OR?: AttendeeWhereInput[]
    NOT?: AttendeeWhereInput | AttendeeWhereInput[]
    id?: StringFilter<"Attendee"> | string
    name?: XOR<NameCompositeFilter, NameObjectEqualityInput>
    email?: StringFilter<"Attendee"> | string
    password?: StringFilter<"Attendee"> | string
    phone?: StringFilter<"Attendee"> | string
    education?: StringFilter<"Attendee"> | string
    gender?: StringFilter<"Attendee"> | string
    image?: StringFilter<"Attendee"> | string
    governorate?: StringFilter<"Attendee"> | string
    birthday?: DateTimeFilter<"Attendee"> | Date | string
    activation?: BoolFilter<"Attendee"> | boolean
    eventIDs?: StringNullableListFilter<"Attendee">
    teamIDs?: StringNullableListFilter<"Attendee">
    events?: EventListRelationFilter
    Team?: TeamListRelationFilter
    member?: XOR<MemberNullableRelationFilter, MemberWhereInput> | null
  }

  export type AttendeeOrderByWithRelationInput = {
    id?: SortOrder
    name?: NameOrderByInput
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    education?: SortOrder
    gender?: SortOrder
    image?: SortOrder
    governorate?: SortOrder
    birthday?: SortOrder
    activation?: SortOrder
    eventIDs?: SortOrder
    teamIDs?: SortOrder
    events?: EventOrderByRelationAggregateInput
    Team?: TeamOrderByRelationAggregateInput
    member?: MemberOrderByWithRelationInput
  }

  export type AttendeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: AttendeeWhereInput | AttendeeWhereInput[]
    OR?: AttendeeWhereInput[]
    NOT?: AttendeeWhereInput | AttendeeWhereInput[]
    name?: XOR<NameCompositeFilter, NameObjectEqualityInput>
    password?: StringFilter<"Attendee"> | string
    education?: StringFilter<"Attendee"> | string
    gender?: StringFilter<"Attendee"> | string
    image?: StringFilter<"Attendee"> | string
    governorate?: StringFilter<"Attendee"> | string
    birthday?: DateTimeFilter<"Attendee"> | Date | string
    activation?: BoolFilter<"Attendee"> | boolean
    eventIDs?: StringNullableListFilter<"Attendee">
    teamIDs?: StringNullableListFilter<"Attendee">
    events?: EventListRelationFilter
    Team?: TeamListRelationFilter
    member?: XOR<MemberNullableRelationFilter, MemberWhereInput> | null
  }, "id" | "email" | "phone">

  export type AttendeeOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    education?: SortOrder
    gender?: SortOrder
    image?: SortOrder
    governorate?: SortOrder
    birthday?: SortOrder
    activation?: SortOrder
    eventIDs?: SortOrder
    teamIDs?: SortOrder
    _count?: AttendeeCountOrderByAggregateInput
    _max?: AttendeeMaxOrderByAggregateInput
    _min?: AttendeeMinOrderByAggregateInput
  }

  export type AttendeeScalarWhereWithAggregatesInput = {
    AND?: AttendeeScalarWhereWithAggregatesInput | AttendeeScalarWhereWithAggregatesInput[]
    OR?: AttendeeScalarWhereWithAggregatesInput[]
    NOT?: AttendeeScalarWhereWithAggregatesInput | AttendeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attendee"> | string
    email?: StringWithAggregatesFilter<"Attendee"> | string
    password?: StringWithAggregatesFilter<"Attendee"> | string
    phone?: StringWithAggregatesFilter<"Attendee"> | string
    education?: StringWithAggregatesFilter<"Attendee"> | string
    gender?: StringWithAggregatesFilter<"Attendee"> | string
    image?: StringWithAggregatesFilter<"Attendee"> | string
    governorate?: StringWithAggregatesFilter<"Attendee"> | string
    birthday?: DateTimeWithAggregatesFilter<"Attendee"> | Date | string
    activation?: BoolWithAggregatesFilter<"Attendee"> | boolean
    eventIDs?: StringNullableListFilter<"Attendee">
    teamIDs?: StringNullableListFilter<"Attendee">
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    eventId?: StringFilter<"Team"> | string
    members?: StringNullableListFilter<"Team">
    proposal?: StringFilter<"Team"> | string
    event?: XOR<EventRelationFilter, EventWhereInput>
    attendee?: AttendeeListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    eventId?: SortOrder
    members?: SortOrder
    proposal?: SortOrder
    event?: EventOrderByWithRelationInput
    attendee?: AttendeeOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    name?: StringFilter<"Team"> | string
    eventId?: StringFilter<"Team"> | string
    members?: StringNullableListFilter<"Team">
    proposal?: StringFilter<"Team"> | string
    event?: XOR<EventRelationFilter, EventWhereInput>
    attendee?: AttendeeListRelationFilter
  }, "id">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    eventId?: SortOrder
    members?: SortOrder
    proposal?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Team"> | string
    name?: StringWithAggregatesFilter<"Team"> | string
    eventId?: StringWithAggregatesFilter<"Team"> | string
    members?: StringNullableListFilter<"Team">
    proposal?: StringWithAggregatesFilter<"Team"> | string
  }

  export type HearAboutUsWhereInput = {
    AND?: HearAboutUsWhereInput | HearAboutUsWhereInput[]
    OR?: HearAboutUsWhereInput[]
    NOT?: HearAboutUsWhereInput | HearAboutUsWhereInput[]
    id?: StringFilter<"HearAboutUs"> | string
    attendeeId?: StringFilter<"HearAboutUs"> | string
    evevntId?: StringFilter<"HearAboutUs"> | string
    answer?: StringFilter<"HearAboutUs"> | string
  }

  export type HearAboutUsOrderByWithRelationInput = {
    id?: SortOrder
    attendeeId?: SortOrder
    evevntId?: SortOrder
    answer?: SortOrder
  }

  export type HearAboutUsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HearAboutUsWhereInput | HearAboutUsWhereInput[]
    OR?: HearAboutUsWhereInput[]
    NOT?: HearAboutUsWhereInput | HearAboutUsWhereInput[]
    attendeeId?: StringFilter<"HearAboutUs"> | string
    evevntId?: StringFilter<"HearAboutUs"> | string
    answer?: StringFilter<"HearAboutUs"> | string
  }, "id">

  export type HearAboutUsOrderByWithAggregationInput = {
    id?: SortOrder
    attendeeId?: SortOrder
    evevntId?: SortOrder
    answer?: SortOrder
    _count?: HearAboutUsCountOrderByAggregateInput
    _max?: HearAboutUsMaxOrderByAggregateInput
    _min?: HearAboutUsMinOrderByAggregateInput
  }

  export type HearAboutUsScalarWhereWithAggregatesInput = {
    AND?: HearAboutUsScalarWhereWithAggregatesInput | HearAboutUsScalarWhereWithAggregatesInput[]
    OR?: HearAboutUsScalarWhereWithAggregatesInput[]
    NOT?: HearAboutUsScalarWhereWithAggregatesInput | HearAboutUsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HearAboutUs"> | string
    attendeeId?: StringWithAggregatesFilter<"HearAboutUs"> | string
    evevntId?: StringWithAggregatesFilter<"HearAboutUs"> | string
    answer?: StringWithAggregatesFilter<"HearAboutUs"> | string
  }

  export type MemberWhereInput = {
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    id?: StringFilter<"Member"> | string
    attendeeEmail?: StringFilter<"Member"> | string
    position?: XOR<LanguageCompositeFilter, LanguageObjectEqualityInput>
    community?: StringFilter<"Member"> | string
    attendee?: XOR<AttendeeRelationFilter, AttendeeWhereInput>
  }

  export type MemberOrderByWithRelationInput = {
    id?: SortOrder
    attendeeEmail?: SortOrder
    position?: LanguageOrderByInput
    community?: SortOrder
    attendee?: AttendeeOrderByWithRelationInput
  }

  export type MemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    attendeeEmail?: string
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    position?: XOR<LanguageCompositeFilter, LanguageObjectEqualityInput>
    community?: StringFilter<"Member"> | string
    attendee?: XOR<AttendeeRelationFilter, AttendeeWhereInput>
  }, "id" | "attendeeEmail">

  export type MemberOrderByWithAggregationInput = {
    id?: SortOrder
    attendeeEmail?: SortOrder
    community?: SortOrder
    _count?: MemberCountOrderByAggregateInput
    _max?: MemberMaxOrderByAggregateInput
    _min?: MemberMinOrderByAggregateInput
  }

  export type MemberScalarWhereWithAggregatesInput = {
    AND?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    OR?: MemberScalarWhereWithAggregatesInput[]
    NOT?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Member"> | string
    attendeeEmail?: StringWithAggregatesFilter<"Member"> | string
    community?: StringWithAggregatesFilter<"Member"> | string
  }

  export type EventCreateInput = {
    id?: string
    name: XOR<LanguageCreateEnvelopeInput, LanguageCreateInput>
    description: XOR<LanguageCreateEnvelopeInput, LanguageCreateInput>
    withTeams?: boolean
    date: Date | string
    location: XOR<locationCreateEnvelopeInput, locationCreateInput>
    address: XOR<LanguageCreateEnvelopeInput, LanguageCreateInput>
    upcoming: boolean
    images?: EventCreateimagesInput | string[]
    locationImage: string
    timeline: string
    collaborators?: XOR<CollaboratorListCreateEnvelopeInput, CollaboratorCreateInput> | CollaboratorCreateInput[]
    attendees?: AttendeeCreateNestedManyWithoutEventsInput
    teams?: TeamCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    name: XOR<LanguageCreateEnvelopeInput, LanguageCreateInput>
    description: XOR<LanguageCreateEnvelopeInput, LanguageCreateInput>
    withTeams?: boolean
    date: Date | string
    location: XOR<locationCreateEnvelopeInput, locationCreateInput>
    address: XOR<LanguageCreateEnvelopeInput, LanguageCreateInput>
    upcoming: boolean
    images?: EventCreateimagesInput | string[]
    locationImage: string
    timeline: string
    collaborators?: XOR<CollaboratorListCreateEnvelopeInput, CollaboratorCreateInput> | CollaboratorCreateInput[]
    attendeeIDs?: EventCreateattendeeIDsInput | string[]
    attendees?: AttendeeUncheckedCreateNestedManyWithoutEventsInput
    teams?: TeamUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    name?: XOR<LanguageUpdateEnvelopeInput, LanguageCreateInput>
    description?: XOR<LanguageUpdateEnvelopeInput, LanguageCreateInput>
    withTeams?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: XOR<locationUpdateEnvelopeInput, locationCreateInput>
    address?: XOR<LanguageUpdateEnvelopeInput, LanguageCreateInput>
    upcoming?: BoolFieldUpdateOperationsInput | boolean
    images?: EventUpdateimagesInput | string[]
    locationImage?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    collaborators?: XOR<CollaboratorListUpdateEnvelopeInput, CollaboratorCreateInput> | CollaboratorCreateInput[]
    attendees?: AttendeeUpdateManyWithoutEventsNestedInput
    teams?: TeamUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    name?: XOR<LanguageUpdateEnvelopeInput, LanguageCreateInput>
    description?: XOR<LanguageUpdateEnvelopeInput, LanguageCreateInput>
    withTeams?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: XOR<locationUpdateEnvelopeInput, locationCreateInput>
    address?: XOR<LanguageUpdateEnvelopeInput, LanguageCreateInput>
    upcoming?: BoolFieldUpdateOperationsInput | boolean
    images?: EventUpdateimagesInput | string[]
    locationImage?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    collaborators?: XOR<CollaboratorListUpdateEnvelopeInput, CollaboratorCreateInput> | CollaboratorCreateInput[]
    attendeeIDs?: EventUpdateattendeeIDsInput | string[]
    attendees?: AttendeeUncheckedUpdateManyWithoutEventsNestedInput
    teams?: TeamUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    name: XOR<LanguageCreateEnvelopeInput, LanguageCreateInput>
    description: XOR<LanguageCreateEnvelopeInput, LanguageCreateInput>
    withTeams?: boolean
    date: Date | string
    location: XOR<locationCreateEnvelopeInput, locationCreateInput>
    address: XOR<LanguageCreateEnvelopeInput, LanguageCreateInput>
    upcoming: boolean
    images?: EventCreateimagesInput | string[]
    locationImage: string
    timeline: string
    collaborators?: XOR<CollaboratorListCreateEnvelopeInput, CollaboratorCreateInput> | CollaboratorCreateInput[]
    attendeeIDs?: EventCreateattendeeIDsInput | string[]
  }

  export type EventUpdateManyMutationInput = {
    name?: XOR<LanguageUpdateEnvelopeInput, LanguageCreateInput>
    description?: XOR<LanguageUpdateEnvelopeInput, LanguageCreateInput>
    withTeams?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: XOR<locationUpdateEnvelopeInput, locationCreateInput>
    address?: XOR<LanguageUpdateEnvelopeInput, LanguageCreateInput>
    upcoming?: BoolFieldUpdateOperationsInput | boolean
    images?: EventUpdateimagesInput | string[]
    locationImage?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    collaborators?: XOR<CollaboratorListUpdateEnvelopeInput, CollaboratorCreateInput> | CollaboratorCreateInput[]
  }

  export type EventUncheckedUpdateManyInput = {
    name?: XOR<LanguageUpdateEnvelopeInput, LanguageCreateInput>
    description?: XOR<LanguageUpdateEnvelopeInput, LanguageCreateInput>
    withTeams?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: XOR<locationUpdateEnvelopeInput, locationCreateInput>
    address?: XOR<LanguageUpdateEnvelopeInput, LanguageCreateInput>
    upcoming?: BoolFieldUpdateOperationsInput | boolean
    images?: EventUpdateimagesInput | string[]
    locationImage?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    collaborators?: XOR<CollaboratorListUpdateEnvelopeInput, CollaboratorCreateInput> | CollaboratorCreateInput[]
    attendeeIDs?: EventUpdateattendeeIDsInput | string[]
  }

  export type AttendeeCreateInput = {
    id?: string
    name: XOR<NameCreateEnvelopeInput, NameCreateInput>
    email: string
    password: string
    phone: string
    education: string
    gender: string
    image: string
    governorate: string
    birthday: Date | string
    activation?: boolean
    events?: EventCreateNestedManyWithoutAttendeesInput
    Team?: TeamCreateNestedManyWithoutAttendeeInput
    member?: MemberCreateNestedOneWithoutAttendeeInput
  }

  export type AttendeeUncheckedCreateInput = {
    id?: string
    name: XOR<NameCreateEnvelopeInput, NameCreateInput>
    email: string
    password: string
    phone: string
    education: string
    gender: string
    image: string
    governorate: string
    birthday: Date | string
    activation?: boolean
    eventIDs?: AttendeeCreateeventIDsInput | string[]
    teamIDs?: AttendeeCreateteamIDsInput | string[]
    events?: EventUncheckedCreateNestedManyWithoutAttendeesInput
    Team?: TeamUncheckedCreateNestedManyWithoutAttendeeInput
    member?: MemberUncheckedCreateNestedOneWithoutAttendeeInput
  }

  export type AttendeeUpdateInput = {
    name?: XOR<NameUpdateEnvelopeInput, NameCreateInput>
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    activation?: BoolFieldUpdateOperationsInput | boolean
    events?: EventUpdateManyWithoutAttendeesNestedInput
    Team?: TeamUpdateManyWithoutAttendeeNestedInput
    member?: MemberUpdateOneWithoutAttendeeNestedInput
  }

  export type AttendeeUncheckedUpdateInput = {
    name?: XOR<NameUpdateEnvelopeInput, NameCreateInput>
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    activation?: BoolFieldUpdateOperationsInput | boolean
    eventIDs?: AttendeeUpdateeventIDsInput | string[]
    teamIDs?: AttendeeUpdateteamIDsInput | string[]
    events?: EventUncheckedUpdateManyWithoutAttendeesNestedInput
    Team?: TeamUncheckedUpdateManyWithoutAttendeeNestedInput
    member?: MemberUncheckedUpdateOneWithoutAttendeeNestedInput
  }

  export type AttendeeCreateManyInput = {
    id?: string
    name: XOR<NameCreateEnvelopeInput, NameCreateInput>
    email: string
    password: string
    phone: string
    education: string
    gender: string
    image: string
    governorate: string
    birthday: Date | string
    activation?: boolean
    eventIDs?: AttendeeCreateeventIDsInput | string[]
    teamIDs?: AttendeeCreateteamIDsInput | string[]
  }

  export type AttendeeUpdateManyMutationInput = {
    name?: XOR<NameUpdateEnvelopeInput, NameCreateInput>
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    activation?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AttendeeUncheckedUpdateManyInput = {
    name?: XOR<NameUpdateEnvelopeInput, NameCreateInput>
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    activation?: BoolFieldUpdateOperationsInput | boolean
    eventIDs?: AttendeeUpdateeventIDsInput | string[]
    teamIDs?: AttendeeUpdateteamIDsInput | string[]
  }

  export type TeamCreateInput = {
    id?: string
    name: string
    proposal: string
    event: EventCreateNestedOneWithoutTeamsInput
    attendee?: AttendeeCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: string
    name: string
    eventId: string
    members?: TeamCreatemembersInput | string[]
    proposal: string
    attendee?: AttendeeUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    proposal?: StringFieldUpdateOperationsInput | string
    event?: EventUpdateOneRequiredWithoutTeamsNestedInput
    attendee?: AttendeeUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    members?: TeamUpdatemembersInput | string[]
    proposal?: StringFieldUpdateOperationsInput | string
    attendee?: AttendeeUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: string
    name: string
    eventId: string
    members?: TeamCreatemembersInput | string[]
    proposal: string
  }

  export type TeamUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    proposal?: StringFieldUpdateOperationsInput | string
  }

  export type TeamUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    members?: TeamUpdatemembersInput | string[]
    proposal?: StringFieldUpdateOperationsInput | string
  }

  export type HearAboutUsCreateInput = {
    id?: string
    attendeeId: string
    evevntId: string
    answer: string
  }

  export type HearAboutUsUncheckedCreateInput = {
    id?: string
    attendeeId: string
    evevntId: string
    answer: string
  }

  export type HearAboutUsUpdateInput = {
    attendeeId?: StringFieldUpdateOperationsInput | string
    evevntId?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type HearAboutUsUncheckedUpdateInput = {
    attendeeId?: StringFieldUpdateOperationsInput | string
    evevntId?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type HearAboutUsCreateManyInput = {
    id?: string
    attendeeId: string
    evevntId: string
    answer: string
  }

  export type HearAboutUsUpdateManyMutationInput = {
    attendeeId?: StringFieldUpdateOperationsInput | string
    evevntId?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type HearAboutUsUncheckedUpdateManyInput = {
    attendeeId?: StringFieldUpdateOperationsInput | string
    evevntId?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type MemberCreateInput = {
    id?: string
    position: XOR<LanguageCreateEnvelopeInput, LanguageCreateInput>
    community: string
    attendee: AttendeeCreateNestedOneWithoutMemberInput
  }

  export type MemberUncheckedCreateInput = {
    id?: string
    attendeeEmail: string
    position: XOR<LanguageCreateEnvelopeInput, LanguageCreateInput>
    community: string
  }

  export type MemberUpdateInput = {
    position?: XOR<LanguageUpdateEnvelopeInput, LanguageCreateInput>
    community?: StringFieldUpdateOperationsInput | string
    attendee?: AttendeeUpdateOneRequiredWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateInput = {
    attendeeEmail?: StringFieldUpdateOperationsInput | string
    position?: XOR<LanguageUpdateEnvelopeInput, LanguageCreateInput>
    community?: StringFieldUpdateOperationsInput | string
  }

  export type MemberCreateManyInput = {
    id?: string
    attendeeEmail: string
    position: XOR<LanguageCreateEnvelopeInput, LanguageCreateInput>
    community: string
  }

  export type MemberUpdateManyMutationInput = {
    position?: XOR<LanguageUpdateEnvelopeInput, LanguageCreateInput>
    community?: StringFieldUpdateOperationsInput | string
  }

  export type MemberUncheckedUpdateManyInput = {
    attendeeEmail?: StringFieldUpdateOperationsInput | string
    position?: XOR<LanguageUpdateEnvelopeInput, LanguageCreateInput>
    community?: StringFieldUpdateOperationsInput | string
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

  export type LanguageCompositeFilter = {
    equals?: LanguageObjectEqualityInput
    is?: LanguageWhereInput
    isNot?: LanguageWhereInput
  }

  export type LanguageObjectEqualityInput = {
    arabic: string
    english: string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type LocationCompositeFilter = {
    equals?: locationObjectEqualityInput
    is?: locationWhereInput
    isNot?: locationWhereInput
  }

  export type locationObjectEqualityInput = {
    lat: number
    lng: number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type CollaboratorCompositeListFilter = {
    equals?: CollaboratorObjectEqualityInput[]
    every?: CollaboratorWhereInput
    some?: CollaboratorWhereInput
    none?: CollaboratorWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type CollaboratorObjectEqualityInput = {
    type: LanguageObjectEqualityInput
    name?: LanguageObjectEqualityInput | null
    bio?: LanguageObjectEqualityInput | null
    image: string
    linkedin: string
  }

  export type AttendeeListRelationFilter = {
    every?: AttendeeWhereInput
    some?: AttendeeWhereInput
    none?: AttendeeWhereInput
  }

  export type TeamListRelationFilter = {
    every?: TeamWhereInput
    some?: TeamWhereInput
    none?: TeamWhereInput
  }

  export type LanguageOrderByInput = {
    arabic?: SortOrder
    english?: SortOrder
  }

  export type locationOrderByInput = {
    lat?: SortOrder
    lng?: SortOrder
  }

  export type CollaboratorOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type AttendeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    withTeams?: SortOrder
    date?: SortOrder
    upcoming?: SortOrder
    images?: SortOrder
    locationImage?: SortOrder
    timeline?: SortOrder
    attendeeIDs?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    withTeams?: SortOrder
    date?: SortOrder
    upcoming?: SortOrder
    locationImage?: SortOrder
    timeline?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    withTeams?: SortOrder
    date?: SortOrder
    upcoming?: SortOrder
    locationImage?: SortOrder
    timeline?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NameCompositeFilter = {
    equals?: NameObjectEqualityInput
    is?: NameWhereInput
    isNot?: NameWhereInput
  }

  export type NameObjectEqualityInput = {
    frist: string
    last: string
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type MemberNullableRelationFilter = {
    is?: MemberWhereInput | null
    isNot?: MemberWhereInput | null
  }

  export type NameOrderByInput = {
    frist?: SortOrder
    last?: SortOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttendeeCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    education?: SortOrder
    gender?: SortOrder
    image?: SortOrder
    governorate?: SortOrder
    birthday?: SortOrder
    activation?: SortOrder
    eventIDs?: SortOrder
    teamIDs?: SortOrder
  }

  export type AttendeeMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    education?: SortOrder
    gender?: SortOrder
    image?: SortOrder
    governorate?: SortOrder
    birthday?: SortOrder
    activation?: SortOrder
  }

  export type AttendeeMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    education?: SortOrder
    gender?: SortOrder
    image?: SortOrder
    governorate?: SortOrder
    birthday?: SortOrder
    activation?: SortOrder
  }

  export type EventRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    eventId?: SortOrder
    members?: SortOrder
    proposal?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    eventId?: SortOrder
    proposal?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    eventId?: SortOrder
    proposal?: SortOrder
  }

  export type HearAboutUsCountOrderByAggregateInput = {
    id?: SortOrder
    attendeeId?: SortOrder
    evevntId?: SortOrder
    answer?: SortOrder
  }

  export type HearAboutUsMaxOrderByAggregateInput = {
    id?: SortOrder
    attendeeId?: SortOrder
    evevntId?: SortOrder
    answer?: SortOrder
  }

  export type HearAboutUsMinOrderByAggregateInput = {
    id?: SortOrder
    attendeeId?: SortOrder
    evevntId?: SortOrder
    answer?: SortOrder
  }

  export type AttendeeRelationFilter = {
    is?: AttendeeWhereInput
    isNot?: AttendeeWhereInput
  }

  export type MemberCountOrderByAggregateInput = {
    id?: SortOrder
    attendeeEmail?: SortOrder
    community?: SortOrder
  }

  export type MemberMaxOrderByAggregateInput = {
    id?: SortOrder
    attendeeEmail?: SortOrder
    community?: SortOrder
  }

  export type MemberMinOrderByAggregateInput = {
    id?: SortOrder
    attendeeEmail?: SortOrder
    community?: SortOrder
  }

  export type LanguageCreateEnvelopeInput = {
    set?: LanguageCreateInput
  }

  export type LanguageCreateInput = {
    arabic: string
    english: string
  }

  export type locationCreateEnvelopeInput = {
    set?: locationCreateInput
  }

  export type locationCreateInput = {
    lat: number
    lng: number
  }

  export type EventCreateimagesInput = {
    set: string[]
  }

  export type CollaboratorListCreateEnvelopeInput = {
    set?: CollaboratorCreateInput | CollaboratorCreateInput[]
  }

  export type CollaboratorCreateInput = {
    type: LanguageCreateInput
    name?: LanguageCreateInput | null
    bio?: LanguageCreateInput | null
    image: string
    linkedin: string
  }

  export type AttendeeCreateNestedManyWithoutEventsInput = {
    create?: XOR<AttendeeCreateWithoutEventsInput, AttendeeUncheckedCreateWithoutEventsInput> | AttendeeCreateWithoutEventsInput[] | AttendeeUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: AttendeeCreateOrConnectWithoutEventsInput | AttendeeCreateOrConnectWithoutEventsInput[]
    connect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
  }

  export type TeamCreateNestedManyWithoutEventInput = {
    create?: XOR<TeamCreateWithoutEventInput, TeamUncheckedCreateWithoutEventInput> | TeamCreateWithoutEventInput[] | TeamUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutEventInput | TeamCreateOrConnectWithoutEventInput[]
    createMany?: TeamCreateManyEventInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type EventCreateattendeeIDsInput = {
    set: string[]
  }

  export type AttendeeUncheckedCreateNestedManyWithoutEventsInput = {
    create?: XOR<AttendeeCreateWithoutEventsInput, AttendeeUncheckedCreateWithoutEventsInput> | AttendeeCreateWithoutEventsInput[] | AttendeeUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: AttendeeCreateOrConnectWithoutEventsInput | AttendeeCreateOrConnectWithoutEventsInput[]
    connect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
  }

  export type TeamUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<TeamCreateWithoutEventInput, TeamUncheckedCreateWithoutEventInput> | TeamCreateWithoutEventInput[] | TeamUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutEventInput | TeamCreateOrConnectWithoutEventInput[]
    createMany?: TeamCreateManyEventInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type LanguageUpdateEnvelopeInput = {
    set?: LanguageCreateInput
    update?: LanguageUpdateInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type locationUpdateEnvelopeInput = {
    set?: locationCreateInput
    update?: locationUpdateInput
  }

  export type EventUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CollaboratorListUpdateEnvelopeInput = {
    set?: CollaboratorCreateInput | CollaboratorCreateInput[]
    push?: CollaboratorCreateInput | CollaboratorCreateInput[]
    updateMany?: CollaboratorUpdateManyInput
    deleteMany?: CollaboratorDeleteManyInput
  }

  export type AttendeeUpdateManyWithoutEventsNestedInput = {
    create?: XOR<AttendeeCreateWithoutEventsInput, AttendeeUncheckedCreateWithoutEventsInput> | AttendeeCreateWithoutEventsInput[] | AttendeeUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: AttendeeCreateOrConnectWithoutEventsInput | AttendeeCreateOrConnectWithoutEventsInput[]
    upsert?: AttendeeUpsertWithWhereUniqueWithoutEventsInput | AttendeeUpsertWithWhereUniqueWithoutEventsInput[]
    set?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    disconnect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    delete?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    connect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    update?: AttendeeUpdateWithWhereUniqueWithoutEventsInput | AttendeeUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: AttendeeUpdateManyWithWhereWithoutEventsInput | AttendeeUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: AttendeeScalarWhereInput | AttendeeScalarWhereInput[]
  }

  export type TeamUpdateManyWithoutEventNestedInput = {
    create?: XOR<TeamCreateWithoutEventInput, TeamUncheckedCreateWithoutEventInput> | TeamCreateWithoutEventInput[] | TeamUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutEventInput | TeamCreateOrConnectWithoutEventInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutEventInput | TeamUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TeamCreateManyEventInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutEventInput | TeamUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutEventInput | TeamUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type EventUpdateattendeeIDsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AttendeeUncheckedUpdateManyWithoutEventsNestedInput = {
    create?: XOR<AttendeeCreateWithoutEventsInput, AttendeeUncheckedCreateWithoutEventsInput> | AttendeeCreateWithoutEventsInput[] | AttendeeUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: AttendeeCreateOrConnectWithoutEventsInput | AttendeeCreateOrConnectWithoutEventsInput[]
    upsert?: AttendeeUpsertWithWhereUniqueWithoutEventsInput | AttendeeUpsertWithWhereUniqueWithoutEventsInput[]
    set?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    disconnect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    delete?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    connect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    update?: AttendeeUpdateWithWhereUniqueWithoutEventsInput | AttendeeUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: AttendeeUpdateManyWithWhereWithoutEventsInput | AttendeeUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: AttendeeScalarWhereInput | AttendeeScalarWhereInput[]
  }

  export type TeamUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<TeamCreateWithoutEventInput, TeamUncheckedCreateWithoutEventInput> | TeamCreateWithoutEventInput[] | TeamUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutEventInput | TeamCreateOrConnectWithoutEventInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutEventInput | TeamUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TeamCreateManyEventInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutEventInput | TeamUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutEventInput | TeamUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type NameCreateEnvelopeInput = {
    set?: NameCreateInput
  }

  export type NameCreateInput = {
    frist: string
    last: string
  }

  export type EventCreateNestedManyWithoutAttendeesInput = {
    create?: XOR<EventCreateWithoutAttendeesInput, EventUncheckedCreateWithoutAttendeesInput> | EventCreateWithoutAttendeesInput[] | EventUncheckedCreateWithoutAttendeesInput[]
    connectOrCreate?: EventCreateOrConnectWithoutAttendeesInput | EventCreateOrConnectWithoutAttendeesInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type TeamCreateNestedManyWithoutAttendeeInput = {
    create?: XOR<TeamCreateWithoutAttendeeInput, TeamUncheckedCreateWithoutAttendeeInput> | TeamCreateWithoutAttendeeInput[] | TeamUncheckedCreateWithoutAttendeeInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutAttendeeInput | TeamCreateOrConnectWithoutAttendeeInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type MemberCreateNestedOneWithoutAttendeeInput = {
    create?: XOR<MemberCreateWithoutAttendeeInput, MemberUncheckedCreateWithoutAttendeeInput>
    connectOrCreate?: MemberCreateOrConnectWithoutAttendeeInput
    connect?: MemberWhereUniqueInput
  }

  export type AttendeeCreateeventIDsInput = {
    set: string[]
  }

  export type AttendeeCreateteamIDsInput = {
    set: string[]
  }

  export type EventUncheckedCreateNestedManyWithoutAttendeesInput = {
    create?: XOR<EventCreateWithoutAttendeesInput, EventUncheckedCreateWithoutAttendeesInput> | EventCreateWithoutAttendeesInput[] | EventUncheckedCreateWithoutAttendeesInput[]
    connectOrCreate?: EventCreateOrConnectWithoutAttendeesInput | EventCreateOrConnectWithoutAttendeesInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type TeamUncheckedCreateNestedManyWithoutAttendeeInput = {
    create?: XOR<TeamCreateWithoutAttendeeInput, TeamUncheckedCreateWithoutAttendeeInput> | TeamCreateWithoutAttendeeInput[] | TeamUncheckedCreateWithoutAttendeeInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutAttendeeInput | TeamCreateOrConnectWithoutAttendeeInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type MemberUncheckedCreateNestedOneWithoutAttendeeInput = {
    create?: XOR<MemberCreateWithoutAttendeeInput, MemberUncheckedCreateWithoutAttendeeInput>
    connectOrCreate?: MemberCreateOrConnectWithoutAttendeeInput
    connect?: MemberWhereUniqueInput
  }

  export type NameUpdateEnvelopeInput = {
    set?: NameCreateInput
    update?: NameUpdateInput
  }

  export type EventUpdateManyWithoutAttendeesNestedInput = {
    create?: XOR<EventCreateWithoutAttendeesInput, EventUncheckedCreateWithoutAttendeesInput> | EventCreateWithoutAttendeesInput[] | EventUncheckedCreateWithoutAttendeesInput[]
    connectOrCreate?: EventCreateOrConnectWithoutAttendeesInput | EventCreateOrConnectWithoutAttendeesInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutAttendeesInput | EventUpsertWithWhereUniqueWithoutAttendeesInput[]
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutAttendeesInput | EventUpdateWithWhereUniqueWithoutAttendeesInput[]
    updateMany?: EventUpdateManyWithWhereWithoutAttendeesInput | EventUpdateManyWithWhereWithoutAttendeesInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type TeamUpdateManyWithoutAttendeeNestedInput = {
    create?: XOR<TeamCreateWithoutAttendeeInput, TeamUncheckedCreateWithoutAttendeeInput> | TeamCreateWithoutAttendeeInput[] | TeamUncheckedCreateWithoutAttendeeInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutAttendeeInput | TeamCreateOrConnectWithoutAttendeeInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutAttendeeInput | TeamUpsertWithWhereUniqueWithoutAttendeeInput[]
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutAttendeeInput | TeamUpdateWithWhereUniqueWithoutAttendeeInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutAttendeeInput | TeamUpdateManyWithWhereWithoutAttendeeInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type MemberUpdateOneWithoutAttendeeNestedInput = {
    create?: XOR<MemberCreateWithoutAttendeeInput, MemberUncheckedCreateWithoutAttendeeInput>
    connectOrCreate?: MemberCreateOrConnectWithoutAttendeeInput
    upsert?: MemberUpsertWithoutAttendeeInput
    disconnect?: MemberWhereInput | boolean
    delete?: MemberWhereInput | boolean
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutAttendeeInput, MemberUpdateWithoutAttendeeInput>, MemberUncheckedUpdateWithoutAttendeeInput>
  }

  export type AttendeeUpdateeventIDsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AttendeeUpdateteamIDsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EventUncheckedUpdateManyWithoutAttendeesNestedInput = {
    create?: XOR<EventCreateWithoutAttendeesInput, EventUncheckedCreateWithoutAttendeesInput> | EventCreateWithoutAttendeesInput[] | EventUncheckedCreateWithoutAttendeesInput[]
    connectOrCreate?: EventCreateOrConnectWithoutAttendeesInput | EventCreateOrConnectWithoutAttendeesInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutAttendeesInput | EventUpsertWithWhereUniqueWithoutAttendeesInput[]
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutAttendeesInput | EventUpdateWithWhereUniqueWithoutAttendeesInput[]
    updateMany?: EventUpdateManyWithWhereWithoutAttendeesInput | EventUpdateManyWithWhereWithoutAttendeesInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type TeamUncheckedUpdateManyWithoutAttendeeNestedInput = {
    create?: XOR<TeamCreateWithoutAttendeeInput, TeamUncheckedCreateWithoutAttendeeInput> | TeamCreateWithoutAttendeeInput[] | TeamUncheckedCreateWithoutAttendeeInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutAttendeeInput | TeamCreateOrConnectWithoutAttendeeInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutAttendeeInput | TeamUpsertWithWhereUniqueWithoutAttendeeInput[]
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutAttendeeInput | TeamUpdateWithWhereUniqueWithoutAttendeeInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutAttendeeInput | TeamUpdateManyWithWhereWithoutAttendeeInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type MemberUncheckedUpdateOneWithoutAttendeeNestedInput = {
    create?: XOR<MemberCreateWithoutAttendeeInput, MemberUncheckedCreateWithoutAttendeeInput>
    connectOrCreate?: MemberCreateOrConnectWithoutAttendeeInput
    upsert?: MemberUpsertWithoutAttendeeInput
    disconnect?: MemberWhereInput | boolean
    delete?: MemberWhereInput | boolean
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutAttendeeInput, MemberUpdateWithoutAttendeeInput>, MemberUncheckedUpdateWithoutAttendeeInput>
  }

  export type EventCreateNestedOneWithoutTeamsInput = {
    create?: XOR<EventCreateWithoutTeamsInput, EventUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: EventCreateOrConnectWithoutTeamsInput
    connect?: EventWhereUniqueInput
  }

  export type AttendeeCreateNestedManyWithoutTeamInput = {
    create?: XOR<AttendeeCreateWithoutTeamInput, AttendeeUncheckedCreateWithoutTeamInput> | AttendeeCreateWithoutTeamInput[] | AttendeeUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: AttendeeCreateOrConnectWithoutTeamInput | AttendeeCreateOrConnectWithoutTeamInput[]
    connect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
  }

  export type TeamCreatemembersInput = {
    set: string[]
  }

  export type AttendeeUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<AttendeeCreateWithoutTeamInput, AttendeeUncheckedCreateWithoutTeamInput> | AttendeeCreateWithoutTeamInput[] | AttendeeUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: AttendeeCreateOrConnectWithoutTeamInput | AttendeeCreateOrConnectWithoutTeamInput[]
    connect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
  }

  export type EventUpdateOneRequiredWithoutTeamsNestedInput = {
    create?: XOR<EventCreateWithoutTeamsInput, EventUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: EventCreateOrConnectWithoutTeamsInput
    upsert?: EventUpsertWithoutTeamsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutTeamsInput, EventUpdateWithoutTeamsInput>, EventUncheckedUpdateWithoutTeamsInput>
  }

  export type AttendeeUpdateManyWithoutTeamNestedInput = {
    create?: XOR<AttendeeCreateWithoutTeamInput, AttendeeUncheckedCreateWithoutTeamInput> | AttendeeCreateWithoutTeamInput[] | AttendeeUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: AttendeeCreateOrConnectWithoutTeamInput | AttendeeCreateOrConnectWithoutTeamInput[]
    upsert?: AttendeeUpsertWithWhereUniqueWithoutTeamInput | AttendeeUpsertWithWhereUniqueWithoutTeamInput[]
    set?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    disconnect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    delete?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    connect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    update?: AttendeeUpdateWithWhereUniqueWithoutTeamInput | AttendeeUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: AttendeeUpdateManyWithWhereWithoutTeamInput | AttendeeUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: AttendeeScalarWhereInput | AttendeeScalarWhereInput[]
  }

  export type TeamUpdatemembersInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AttendeeUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<AttendeeCreateWithoutTeamInput, AttendeeUncheckedCreateWithoutTeamInput> | AttendeeCreateWithoutTeamInput[] | AttendeeUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: AttendeeCreateOrConnectWithoutTeamInput | AttendeeCreateOrConnectWithoutTeamInput[]
    upsert?: AttendeeUpsertWithWhereUniqueWithoutTeamInput | AttendeeUpsertWithWhereUniqueWithoutTeamInput[]
    set?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    disconnect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    delete?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    connect?: AttendeeWhereUniqueInput | AttendeeWhereUniqueInput[]
    update?: AttendeeUpdateWithWhereUniqueWithoutTeamInput | AttendeeUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: AttendeeUpdateManyWithWhereWithoutTeamInput | AttendeeUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: AttendeeScalarWhereInput | AttendeeScalarWhereInput[]
  }

  export type AttendeeCreateNestedOneWithoutMemberInput = {
    create?: XOR<AttendeeCreateWithoutMemberInput, AttendeeUncheckedCreateWithoutMemberInput>
    connectOrCreate?: AttendeeCreateOrConnectWithoutMemberInput
    connect?: AttendeeWhereUniqueInput
  }

  export type AttendeeUpdateOneRequiredWithoutMemberNestedInput = {
    create?: XOR<AttendeeCreateWithoutMemberInput, AttendeeUncheckedCreateWithoutMemberInput>
    connectOrCreate?: AttendeeCreateOrConnectWithoutMemberInput
    upsert?: AttendeeUpsertWithoutMemberInput
    connect?: AttendeeWhereUniqueInput
    update?: XOR<XOR<AttendeeUpdateToOneWithWhereWithoutMemberInput, AttendeeUpdateWithoutMemberInput>, AttendeeUncheckedUpdateWithoutMemberInput>
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

  export type LanguageWhereInput = {
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    arabic?: StringFilter<"Language"> | string
    english?: StringFilter<"Language"> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type locationWhereInput = {
    AND?: locationWhereInput | locationWhereInput[]
    OR?: locationWhereInput[]
    NOT?: locationWhereInput | locationWhereInput[]
    lat?: FloatFilter<"location"> | number
    lng?: FloatFilter<"location"> | number
  }

  export type CollaboratorWhereInput = {
    AND?: CollaboratorWhereInput | CollaboratorWhereInput[]
    OR?: CollaboratorWhereInput[]
    NOT?: CollaboratorWhereInput | CollaboratorWhereInput[]
    type?: XOR<LanguageCompositeFilter, LanguageObjectEqualityInput>
    name?: XOR<LanguageNullableCompositeFilter, LanguageObjectEqualityInput> | null
    bio?: XOR<LanguageNullableCompositeFilter, LanguageObjectEqualityInput> | null
    image?: StringFilter<"Collaborator"> | string
    linkedin?: StringFilter<"Collaborator"> | string
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NameWhereInput = {
    AND?: NameWhereInput | NameWhereInput[]
    OR?: NameWhereInput[]
    NOT?: NameWhereInput | NameWhereInput[]
    frist?: StringFilter<"Name"> | string
    last?: StringFilter<"Name"> | string
  }

  export type AttendeeCreateWithoutEventsInput = {
    id?: string
    name: XOR<NameCreateEnvelopeInput, NameCreateInput>
    email: string
    password: string
    phone: string
    education: string
    gender: string
    image: string
    governorate: string
    birthday: Date | string
    activation?: boolean
    Team?: TeamCreateNestedManyWithoutAttendeeInput
    member?: MemberCreateNestedOneWithoutAttendeeInput
  }

  export type AttendeeUncheckedCreateWithoutEventsInput = {
    id?: string
    name: XOR<NameCreateEnvelopeInput, NameCreateInput>
    email: string
    password: string
    phone: string
    education: string
    gender: string
    image: string
    governorate: string
    birthday: Date | string
    activation?: boolean
    eventIDs?: AttendeeCreateeventIDsInput | string[]
    teamIDs?: AttendeeCreateteamIDsInput | string[]
    Team?: TeamUncheckedCreateNestedManyWithoutAttendeeInput
    member?: MemberUncheckedCreateNestedOneWithoutAttendeeInput
  }

  export type AttendeeCreateOrConnectWithoutEventsInput = {
    where: AttendeeWhereUniqueInput
    create: XOR<AttendeeCreateWithoutEventsInput, AttendeeUncheckedCreateWithoutEventsInput>
  }

  export type TeamCreateWithoutEventInput = {
    id?: string
    name: string
    proposal: string
    attendee?: AttendeeCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutEventInput = {
    id?: string
    name: string
    members?: TeamCreatemembersInput | string[]
    proposal: string
    attendee?: AttendeeUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutEventInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutEventInput, TeamUncheckedCreateWithoutEventInput>
  }

  export type TeamCreateManyEventInputEnvelope = {
    data: TeamCreateManyEventInput | TeamCreateManyEventInput[]
  }

  export type LanguageUpdateInput = {
    arabic?: StringFieldUpdateOperationsInput | string
    english?: StringFieldUpdateOperationsInput | string
  }

  export type locationUpdateInput = {
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
  }

  export type CollaboratorUpdateManyInput = {
    where: CollaboratorWhereInput
    data: CollaboratorUpdateInput
  }

  export type CollaboratorDeleteManyInput = {
    where: CollaboratorWhereInput
  }

  export type AttendeeUpsertWithWhereUniqueWithoutEventsInput = {
    where: AttendeeWhereUniqueInput
    update: XOR<AttendeeUpdateWithoutEventsInput, AttendeeUncheckedUpdateWithoutEventsInput>
    create: XOR<AttendeeCreateWithoutEventsInput, AttendeeUncheckedCreateWithoutEventsInput>
  }

  export type AttendeeUpdateWithWhereUniqueWithoutEventsInput = {
    where: AttendeeWhereUniqueInput
    data: XOR<AttendeeUpdateWithoutEventsInput, AttendeeUncheckedUpdateWithoutEventsInput>
  }

  export type AttendeeUpdateManyWithWhereWithoutEventsInput = {
    where: AttendeeScalarWhereInput
    data: XOR<AttendeeUpdateManyMutationInput, AttendeeUncheckedUpdateManyWithoutEventsInput>
  }

  export type AttendeeScalarWhereInput = {
    AND?: AttendeeScalarWhereInput | AttendeeScalarWhereInput[]
    OR?: AttendeeScalarWhereInput[]
    NOT?: AttendeeScalarWhereInput | AttendeeScalarWhereInput[]
    id?: StringFilter<"Attendee"> | string
    email?: StringFilter<"Attendee"> | string
    password?: StringFilter<"Attendee"> | string
    phone?: StringFilter<"Attendee"> | string
    education?: StringFilter<"Attendee"> | string
    gender?: StringFilter<"Attendee"> | string
    image?: StringFilter<"Attendee"> | string
    governorate?: StringFilter<"Attendee"> | string
    birthday?: DateTimeFilter<"Attendee"> | Date | string
    activation?: BoolFilter<"Attendee"> | boolean
    eventIDs?: StringNullableListFilter<"Attendee">
    teamIDs?: StringNullableListFilter<"Attendee">
  }

  export type TeamUpsertWithWhereUniqueWithoutEventInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutEventInput, TeamUncheckedUpdateWithoutEventInput>
    create: XOR<TeamCreateWithoutEventInput, TeamUncheckedCreateWithoutEventInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutEventInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutEventInput, TeamUncheckedUpdateWithoutEventInput>
  }

  export type TeamUpdateManyWithWhereWithoutEventInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutEventInput>
  }

  export type TeamScalarWhereInput = {
    AND?: TeamScalarWhereInput | TeamScalarWhereInput[]
    OR?: TeamScalarWhereInput[]
    NOT?: TeamScalarWhereInput | TeamScalarWhereInput[]
    id?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    eventId?: StringFilter<"Team"> | string
    members?: StringNullableListFilter<"Team">
    proposal?: StringFilter<"Team"> | string
  }

  export type EventCreateWithoutAttendeesInput = {
    id?: string
    name: XOR<LanguageCreateEnvelopeInput, LanguageCreateInput>
    description: XOR<LanguageCreateEnvelopeInput, LanguageCreateInput>
    withTeams?: boolean
    date: Date | string
    location: XOR<locationCreateEnvelopeInput, locationCreateInput>
    address: XOR<LanguageCreateEnvelopeInput, LanguageCreateInput>
    upcoming: boolean
    images?: EventCreateimagesInput | string[]
    locationImage: string
    timeline: string
    collaborators?: XOR<CollaboratorListCreateEnvelopeInput, CollaboratorCreateInput> | CollaboratorCreateInput[]
    teams?: TeamCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutAttendeesInput = {
    id?: string
    name: XOR<LanguageCreateEnvelopeInput, LanguageCreateInput>
    description: XOR<LanguageCreateEnvelopeInput, LanguageCreateInput>
    withTeams?: boolean
    date: Date | string
    location: XOR<locationCreateEnvelopeInput, locationCreateInput>
    address: XOR<LanguageCreateEnvelopeInput, LanguageCreateInput>
    upcoming: boolean
    images?: EventCreateimagesInput | string[]
    locationImage: string
    timeline: string
    collaborators?: XOR<CollaboratorListCreateEnvelopeInput, CollaboratorCreateInput> | CollaboratorCreateInput[]
    attendeeIDs?: EventCreateattendeeIDsInput | string[]
    teams?: TeamUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutAttendeesInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutAttendeesInput, EventUncheckedCreateWithoutAttendeesInput>
  }

  export type TeamCreateWithoutAttendeeInput = {
    id?: string
    name: string
    proposal: string
    event: EventCreateNestedOneWithoutTeamsInput
  }

  export type TeamUncheckedCreateWithoutAttendeeInput = {
    id?: string
    name: string
    eventId: string
    members?: TeamCreatemembersInput | string[]
    proposal: string
  }

  export type TeamCreateOrConnectWithoutAttendeeInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutAttendeeInput, TeamUncheckedCreateWithoutAttendeeInput>
  }

  export type MemberCreateWithoutAttendeeInput = {
    id?: string
    position: XOR<LanguageCreateEnvelopeInput, LanguageCreateInput>
    community: string
  }

  export type MemberUncheckedCreateWithoutAttendeeInput = {
    id?: string
    position: XOR<LanguageCreateEnvelopeInput, LanguageCreateInput>
    community: string
  }

  export type MemberCreateOrConnectWithoutAttendeeInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutAttendeeInput, MemberUncheckedCreateWithoutAttendeeInput>
  }

  export type NameUpdateInput = {
    frist?: StringFieldUpdateOperationsInput | string
    last?: StringFieldUpdateOperationsInput | string
  }

  export type EventUpsertWithWhereUniqueWithoutAttendeesInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutAttendeesInput, EventUncheckedUpdateWithoutAttendeesInput>
    create: XOR<EventCreateWithoutAttendeesInput, EventUncheckedCreateWithoutAttendeesInput>
  }

  export type EventUpdateWithWhereUniqueWithoutAttendeesInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutAttendeesInput, EventUncheckedUpdateWithoutAttendeesInput>
  }

  export type EventUpdateManyWithWhereWithoutAttendeesInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutAttendeesInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    withTeams?: BoolFilter<"Event"> | boolean
    date?: DateTimeFilter<"Event"> | Date | string
    upcoming?: BoolFilter<"Event"> | boolean
    images?: StringNullableListFilter<"Event">
    locationImage?: StringFilter<"Event"> | string
    timeline?: StringFilter<"Event"> | string
    attendeeIDs?: StringNullableListFilter<"Event">
  }

  export type TeamUpsertWithWhereUniqueWithoutAttendeeInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutAttendeeInput, TeamUncheckedUpdateWithoutAttendeeInput>
    create: XOR<TeamCreateWithoutAttendeeInput, TeamUncheckedCreateWithoutAttendeeInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutAttendeeInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutAttendeeInput, TeamUncheckedUpdateWithoutAttendeeInput>
  }

  export type TeamUpdateManyWithWhereWithoutAttendeeInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutAttendeeInput>
  }

  export type MemberUpsertWithoutAttendeeInput = {
    update: XOR<MemberUpdateWithoutAttendeeInput, MemberUncheckedUpdateWithoutAttendeeInput>
    create: XOR<MemberCreateWithoutAttendeeInput, MemberUncheckedCreateWithoutAttendeeInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutAttendeeInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutAttendeeInput, MemberUncheckedUpdateWithoutAttendeeInput>
  }

  export type MemberUpdateWithoutAttendeeInput = {
    position?: XOR<LanguageUpdateEnvelopeInput, LanguageCreateInput>
    community?: StringFieldUpdateOperationsInput | string
  }

  export type MemberUncheckedUpdateWithoutAttendeeInput = {
    position?: XOR<LanguageUpdateEnvelopeInput, LanguageCreateInput>
    community?: StringFieldUpdateOperationsInput | string
  }

  export type EventCreateWithoutTeamsInput = {
    id?: string
    name: XOR<LanguageCreateEnvelopeInput, LanguageCreateInput>
    description: XOR<LanguageCreateEnvelopeInput, LanguageCreateInput>
    withTeams?: boolean
    date: Date | string
    location: XOR<locationCreateEnvelopeInput, locationCreateInput>
    address: XOR<LanguageCreateEnvelopeInput, LanguageCreateInput>
    upcoming: boolean
    images?: EventCreateimagesInput | string[]
    locationImage: string
    timeline: string
    collaborators?: XOR<CollaboratorListCreateEnvelopeInput, CollaboratorCreateInput> | CollaboratorCreateInput[]
    attendees?: AttendeeCreateNestedManyWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutTeamsInput = {
    id?: string
    name: XOR<LanguageCreateEnvelopeInput, LanguageCreateInput>
    description: XOR<LanguageCreateEnvelopeInput, LanguageCreateInput>
    withTeams?: boolean
    date: Date | string
    location: XOR<locationCreateEnvelopeInput, locationCreateInput>
    address: XOR<LanguageCreateEnvelopeInput, LanguageCreateInput>
    upcoming: boolean
    images?: EventCreateimagesInput | string[]
    locationImage: string
    timeline: string
    collaborators?: XOR<CollaboratorListCreateEnvelopeInput, CollaboratorCreateInput> | CollaboratorCreateInput[]
    attendeeIDs?: EventCreateattendeeIDsInput | string[]
    attendees?: AttendeeUncheckedCreateNestedManyWithoutEventsInput
  }

  export type EventCreateOrConnectWithoutTeamsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutTeamsInput, EventUncheckedCreateWithoutTeamsInput>
  }

  export type AttendeeCreateWithoutTeamInput = {
    id?: string
    name: XOR<NameCreateEnvelopeInput, NameCreateInput>
    email: string
    password: string
    phone: string
    education: string
    gender: string
    image: string
    governorate: string
    birthday: Date | string
    activation?: boolean
    events?: EventCreateNestedManyWithoutAttendeesInput
    member?: MemberCreateNestedOneWithoutAttendeeInput
  }

  export type AttendeeUncheckedCreateWithoutTeamInput = {
    id?: string
    name: XOR<NameCreateEnvelopeInput, NameCreateInput>
    email: string
    password: string
    phone: string
    education: string
    gender: string
    image: string
    governorate: string
    birthday: Date | string
    activation?: boolean
    eventIDs?: AttendeeCreateeventIDsInput | string[]
    teamIDs?: AttendeeCreateteamIDsInput | string[]
    events?: EventUncheckedCreateNestedManyWithoutAttendeesInput
    member?: MemberUncheckedCreateNestedOneWithoutAttendeeInput
  }

  export type AttendeeCreateOrConnectWithoutTeamInput = {
    where: AttendeeWhereUniqueInput
    create: XOR<AttendeeCreateWithoutTeamInput, AttendeeUncheckedCreateWithoutTeamInput>
  }

  export type EventUpsertWithoutTeamsInput = {
    update: XOR<EventUpdateWithoutTeamsInput, EventUncheckedUpdateWithoutTeamsInput>
    create: XOR<EventCreateWithoutTeamsInput, EventUncheckedCreateWithoutTeamsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutTeamsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutTeamsInput, EventUncheckedUpdateWithoutTeamsInput>
  }

  export type EventUpdateWithoutTeamsInput = {
    name?: XOR<LanguageUpdateEnvelopeInput, LanguageCreateInput>
    description?: XOR<LanguageUpdateEnvelopeInput, LanguageCreateInput>
    withTeams?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: XOR<locationUpdateEnvelopeInput, locationCreateInput>
    address?: XOR<LanguageUpdateEnvelopeInput, LanguageCreateInput>
    upcoming?: BoolFieldUpdateOperationsInput | boolean
    images?: EventUpdateimagesInput | string[]
    locationImage?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    collaborators?: XOR<CollaboratorListUpdateEnvelopeInput, CollaboratorCreateInput> | CollaboratorCreateInput[]
    attendees?: AttendeeUpdateManyWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutTeamsInput = {
    name?: XOR<LanguageUpdateEnvelopeInput, LanguageCreateInput>
    description?: XOR<LanguageUpdateEnvelopeInput, LanguageCreateInput>
    withTeams?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: XOR<locationUpdateEnvelopeInput, locationCreateInput>
    address?: XOR<LanguageUpdateEnvelopeInput, LanguageCreateInput>
    upcoming?: BoolFieldUpdateOperationsInput | boolean
    images?: EventUpdateimagesInput | string[]
    locationImage?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    collaborators?: XOR<CollaboratorListUpdateEnvelopeInput, CollaboratorCreateInput> | CollaboratorCreateInput[]
    attendeeIDs?: EventUpdateattendeeIDsInput | string[]
    attendees?: AttendeeUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type AttendeeUpsertWithWhereUniqueWithoutTeamInput = {
    where: AttendeeWhereUniqueInput
    update: XOR<AttendeeUpdateWithoutTeamInput, AttendeeUncheckedUpdateWithoutTeamInput>
    create: XOR<AttendeeCreateWithoutTeamInput, AttendeeUncheckedCreateWithoutTeamInput>
  }

  export type AttendeeUpdateWithWhereUniqueWithoutTeamInput = {
    where: AttendeeWhereUniqueInput
    data: XOR<AttendeeUpdateWithoutTeamInput, AttendeeUncheckedUpdateWithoutTeamInput>
  }

  export type AttendeeUpdateManyWithWhereWithoutTeamInput = {
    where: AttendeeScalarWhereInput
    data: XOR<AttendeeUpdateManyMutationInput, AttendeeUncheckedUpdateManyWithoutTeamInput>
  }

  export type AttendeeCreateWithoutMemberInput = {
    id?: string
    name: XOR<NameCreateEnvelopeInput, NameCreateInput>
    email: string
    password: string
    phone: string
    education: string
    gender: string
    image: string
    governorate: string
    birthday: Date | string
    activation?: boolean
    events?: EventCreateNestedManyWithoutAttendeesInput
    Team?: TeamCreateNestedManyWithoutAttendeeInput
  }

  export type AttendeeUncheckedCreateWithoutMemberInput = {
    id?: string
    name: XOR<NameCreateEnvelopeInput, NameCreateInput>
    email: string
    password: string
    phone: string
    education: string
    gender: string
    image: string
    governorate: string
    birthday: Date | string
    activation?: boolean
    eventIDs?: AttendeeCreateeventIDsInput | string[]
    teamIDs?: AttendeeCreateteamIDsInput | string[]
    events?: EventUncheckedCreateNestedManyWithoutAttendeesInput
    Team?: TeamUncheckedCreateNestedManyWithoutAttendeeInput
  }

  export type AttendeeCreateOrConnectWithoutMemberInput = {
    where: AttendeeWhereUniqueInput
    create: XOR<AttendeeCreateWithoutMemberInput, AttendeeUncheckedCreateWithoutMemberInput>
  }

  export type AttendeeUpsertWithoutMemberInput = {
    update: XOR<AttendeeUpdateWithoutMemberInput, AttendeeUncheckedUpdateWithoutMemberInput>
    create: XOR<AttendeeCreateWithoutMemberInput, AttendeeUncheckedCreateWithoutMemberInput>
    where?: AttendeeWhereInput
  }

  export type AttendeeUpdateToOneWithWhereWithoutMemberInput = {
    where?: AttendeeWhereInput
    data: XOR<AttendeeUpdateWithoutMemberInput, AttendeeUncheckedUpdateWithoutMemberInput>
  }

  export type AttendeeUpdateWithoutMemberInput = {
    name?: XOR<NameUpdateEnvelopeInput, NameCreateInput>
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    activation?: BoolFieldUpdateOperationsInput | boolean
    events?: EventUpdateManyWithoutAttendeesNestedInput
    Team?: TeamUpdateManyWithoutAttendeeNestedInput
  }

  export type AttendeeUncheckedUpdateWithoutMemberInput = {
    name?: XOR<NameUpdateEnvelopeInput, NameCreateInput>
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    activation?: BoolFieldUpdateOperationsInput | boolean
    eventIDs?: AttendeeUpdateeventIDsInput | string[]
    teamIDs?: AttendeeUpdateteamIDsInput | string[]
    events?: EventUncheckedUpdateManyWithoutAttendeesNestedInput
    Team?: TeamUncheckedUpdateManyWithoutAttendeeNestedInput
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type LanguageNullableCompositeFilter = {
    equals?: LanguageObjectEqualityInput | null
    is?: LanguageWhereInput | null
    isNot?: LanguageWhereInput | null
    isSet?: boolean
  }

  export type TeamCreateManyEventInput = {
    id?: string
    name: string
    members?: TeamCreatemembersInput | string[]
    proposal: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CollaboratorUpdateInput = {
    type?: XOR<LanguageUpdateEnvelopeInput, LanguageCreateInput>
    name?: XOR<LanguageNullableUpdateEnvelopeInput, LanguageCreateInput> | null
    bio?: XOR<LanguageNullableUpdateEnvelopeInput, LanguageCreateInput> | null
    image?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
  }

  export type AttendeeUpdateWithoutEventsInput = {
    name?: XOR<NameUpdateEnvelopeInput, NameCreateInput>
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    activation?: BoolFieldUpdateOperationsInput | boolean
    Team?: TeamUpdateManyWithoutAttendeeNestedInput
    member?: MemberUpdateOneWithoutAttendeeNestedInput
  }

  export type AttendeeUncheckedUpdateWithoutEventsInput = {
    name?: XOR<NameUpdateEnvelopeInput, NameCreateInput>
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    activation?: BoolFieldUpdateOperationsInput | boolean
    eventIDs?: AttendeeUpdateeventIDsInput | string[]
    teamIDs?: AttendeeUpdateteamIDsInput | string[]
    Team?: TeamUncheckedUpdateManyWithoutAttendeeNestedInput
    member?: MemberUncheckedUpdateOneWithoutAttendeeNestedInput
  }

  export type AttendeeUncheckedUpdateManyWithoutEventsInput = {
    name?: XOR<NameUpdateEnvelopeInput, NameCreateInput>
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    activation?: BoolFieldUpdateOperationsInput | boolean
    eventIDs?: AttendeeUpdateeventIDsInput | string[]
    teamIDs?: AttendeeUpdateteamIDsInput | string[]
  }

  export type TeamUpdateWithoutEventInput = {
    name?: StringFieldUpdateOperationsInput | string
    proposal?: StringFieldUpdateOperationsInput | string
    attendee?: AttendeeUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutEventInput = {
    name?: StringFieldUpdateOperationsInput | string
    members?: TeamUpdatemembersInput | string[]
    proposal?: StringFieldUpdateOperationsInput | string
    attendee?: AttendeeUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateManyWithoutEventInput = {
    name?: StringFieldUpdateOperationsInput | string
    members?: TeamUpdatemembersInput | string[]
    proposal?: StringFieldUpdateOperationsInput | string
  }

  export type EventUpdateWithoutAttendeesInput = {
    name?: XOR<LanguageUpdateEnvelopeInput, LanguageCreateInput>
    description?: XOR<LanguageUpdateEnvelopeInput, LanguageCreateInput>
    withTeams?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: XOR<locationUpdateEnvelopeInput, locationCreateInput>
    address?: XOR<LanguageUpdateEnvelopeInput, LanguageCreateInput>
    upcoming?: BoolFieldUpdateOperationsInput | boolean
    images?: EventUpdateimagesInput | string[]
    locationImage?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    collaborators?: XOR<CollaboratorListUpdateEnvelopeInput, CollaboratorCreateInput> | CollaboratorCreateInput[]
    teams?: TeamUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutAttendeesInput = {
    name?: XOR<LanguageUpdateEnvelopeInput, LanguageCreateInput>
    description?: XOR<LanguageUpdateEnvelopeInput, LanguageCreateInput>
    withTeams?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: XOR<locationUpdateEnvelopeInput, locationCreateInput>
    address?: XOR<LanguageUpdateEnvelopeInput, LanguageCreateInput>
    upcoming?: BoolFieldUpdateOperationsInput | boolean
    images?: EventUpdateimagesInput | string[]
    locationImage?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    collaborators?: XOR<CollaboratorListUpdateEnvelopeInput, CollaboratorCreateInput> | CollaboratorCreateInput[]
    attendeeIDs?: EventUpdateattendeeIDsInput | string[]
    teams?: TeamUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutAttendeesInput = {
    name?: XOR<LanguageUpdateEnvelopeInput, LanguageCreateInput>
    description?: XOR<LanguageUpdateEnvelopeInput, LanguageCreateInput>
    withTeams?: BoolFieldUpdateOperationsInput | boolean
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: XOR<locationUpdateEnvelopeInput, locationCreateInput>
    address?: XOR<LanguageUpdateEnvelopeInput, LanguageCreateInput>
    upcoming?: BoolFieldUpdateOperationsInput | boolean
    images?: EventUpdateimagesInput | string[]
    locationImage?: StringFieldUpdateOperationsInput | string
    timeline?: StringFieldUpdateOperationsInput | string
    collaborators?: XOR<CollaboratorListUpdateEnvelopeInput, CollaboratorCreateInput> | CollaboratorCreateInput[]
    attendeeIDs?: EventUpdateattendeeIDsInput | string[]
  }

  export type TeamUpdateWithoutAttendeeInput = {
    name?: StringFieldUpdateOperationsInput | string
    proposal?: StringFieldUpdateOperationsInput | string
    event?: EventUpdateOneRequiredWithoutTeamsNestedInput
  }

  export type TeamUncheckedUpdateWithoutAttendeeInput = {
    name?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    members?: TeamUpdatemembersInput | string[]
    proposal?: StringFieldUpdateOperationsInput | string
  }

  export type TeamUncheckedUpdateManyWithoutAttendeeInput = {
    name?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    members?: TeamUpdatemembersInput | string[]
    proposal?: StringFieldUpdateOperationsInput | string
  }

  export type AttendeeUpdateWithoutTeamInput = {
    name?: XOR<NameUpdateEnvelopeInput, NameCreateInput>
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    activation?: BoolFieldUpdateOperationsInput | boolean
    events?: EventUpdateManyWithoutAttendeesNestedInput
    member?: MemberUpdateOneWithoutAttendeeNestedInput
  }

  export type AttendeeUncheckedUpdateWithoutTeamInput = {
    name?: XOR<NameUpdateEnvelopeInput, NameCreateInput>
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    activation?: BoolFieldUpdateOperationsInput | boolean
    eventIDs?: AttendeeUpdateeventIDsInput | string[]
    teamIDs?: AttendeeUpdateteamIDsInput | string[]
    events?: EventUncheckedUpdateManyWithoutAttendeesNestedInput
    member?: MemberUncheckedUpdateOneWithoutAttendeeNestedInput
  }

  export type AttendeeUncheckedUpdateManyWithoutTeamInput = {
    name?: XOR<NameUpdateEnvelopeInput, NameCreateInput>
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    activation?: BoolFieldUpdateOperationsInput | boolean
    eventIDs?: AttendeeUpdateeventIDsInput | string[]
    teamIDs?: AttendeeUpdateteamIDsInput | string[]
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

  export type LanguageNullableUpdateEnvelopeInput = {
    set?: LanguageCreateInput | null
    upsert?: LanguageUpsertInput
    unset?: boolean
  }

  export type LanguageUpsertInput = {
    set: LanguageCreateInput | null
    update: LanguageUpdateInput
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use LanguageDefaultArgs instead
     */
    export type LanguageArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = LanguageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use locationDefaultArgs instead
     */
    export type locationArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = locationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CollaboratorDefaultArgs instead
     */
    export type CollaboratorArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = CollaboratorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NameDefaultArgs instead
     */
    export type NameArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = NameDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventDefaultArgs instead
     */
    export type EventArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = EventDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AttendeeDefaultArgs instead
     */
    export type AttendeeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = AttendeeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeamDefaultArgs instead
     */
    export type TeamArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = TeamDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HearAboutUsDefaultArgs instead
     */
    export type HearAboutUsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = HearAboutUsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MemberDefaultArgs instead
     */
    export type MemberArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = MemberDefaultArgs<ExtArgs>

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