
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model CityState
 * 
 */
export type CityState = $Result.DefaultSelection<Prisma.$CityStatePayload>
/**
 * Model CityMemory
 * 
 */
export type CityMemory = $Result.DefaultSelection<Prisma.$CityMemoryPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model UserTaskProgress
 * 
 */
export type UserTaskProgress = $Result.DefaultSelection<Prisma.$UserTaskProgressPayload>
/**
 * Model Petition
 * 
 */
export type Petition = $Result.DefaultSelection<Prisma.$PetitionPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Voucher
 * 
 */
export type Voucher = $Result.DefaultSelection<Prisma.$VoucherPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>
/**
 * Model chatroom
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type chatroom = $Result.DefaultSelection<Prisma.$chatroomPayload>
/**
 * Model chatroom_member
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type chatroom_member = $Result.DefaultSelection<Prisma.$chatroom_memberPayload>
/**
 * Model message
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type message = $Result.DefaultSelection<Prisma.$messagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const SustainabilityScore: {
  CRITICAL: 'CRITICAL',
  CONCERNING: 'CONCERNING',
  DEVELOPING: 'DEVELOPING',
  STABLE: 'STABLE',
  IMPROVING: 'IMPROVING',
  EFFICIENT: 'EFFICIENT',
  LOW_IMPACT: 'LOW_IMPACT',
  POSITIVE_IMPACT: 'POSITIVE_IMPACT',
  LEADING: 'LEADING'
};

export type SustainabilityScore = (typeof SustainabilityScore)[keyof typeof SustainabilityScore]


export const TaskDifficulty: {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD'
};

export type TaskDifficulty = (typeof TaskDifficulty)[keyof typeof TaskDifficulty]


export const VerificationType: {
  MANUAL_REVIEW: 'MANUAL_REVIEW'
};

export type VerificationType = (typeof VerificationType)[keyof typeof VerificationType]


export const TaskStatus: {
  PENDING: 'PENDING',
  SUBMITTED: 'SUBMITTED',
  VERIFIED: 'VERIFIED',
  REJECTED: 'REJECTED'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]


export const PetitionStatus: {
  OPEN: 'OPEN',
  UNDER_REVIEW: 'UNDER_REVIEW',
  RESOLVED: 'RESOLVED',
  REJECTED: 'REJECTED'
};

export type PetitionStatus = (typeof PetitionStatus)[keyof typeof PetitionStatus]


export const CityMood: {
  HAPPY: 'HAPPY',
  ANGRY: 'ANGRY',
  NEGLECTED: 'NEGLECTED',
  NEUTRAL: 'NEUTRAL'
};

export type CityMood = (typeof CityMood)[keyof typeof CityMood]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type SustainabilityScore = $Enums.SustainabilityScore

export const SustainabilityScore: typeof $Enums.SustainabilityScore

export type TaskDifficulty = $Enums.TaskDifficulty

export const TaskDifficulty: typeof $Enums.TaskDifficulty

export type VerificationType = $Enums.VerificationType

export const VerificationType: typeof $Enums.VerificationType

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

export type PetitionStatus = $Enums.PetitionStatus

export const PetitionStatus: typeof $Enums.PetitionStatus

export type CityMood = $Enums.CityMood

export const CityMood: typeof $Enums.CityMood

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Profiles
 * const profiles = await prisma.profile.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Profiles
   * const profiles = await prisma.profile.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cityState`: Exposes CRUD operations for the **CityState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CityStates
    * const cityStates = await prisma.cityState.findMany()
    * ```
    */
  get cityState(): Prisma.CityStateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cityMemory`: Exposes CRUD operations for the **CityMemory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CityMemories
    * const cityMemories = await prisma.cityMemory.findMany()
    * ```
    */
  get cityMemory(): Prisma.CityMemoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userTaskProgress`: Exposes CRUD operations for the **UserTaskProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserTaskProgresses
    * const userTaskProgresses = await prisma.userTaskProgress.findMany()
    * ```
    */
  get userTaskProgress(): Prisma.UserTaskProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.petition`: Exposes CRUD operations for the **Petition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Petitions
    * const petitions = await prisma.petition.findMany()
    * ```
    */
  get petition(): Prisma.PetitionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.voucher`: Exposes CRUD operations for the **Voucher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vouchers
    * const vouchers = await prisma.voucher.findMany()
    * ```
    */
  get voucher(): Prisma.VoucherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatroom`: Exposes CRUD operations for the **chatroom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chatrooms
    * const chatrooms = await prisma.chatroom.findMany()
    * ```
    */
  get chatroom(): Prisma.chatroomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatroom_member`: Exposes CRUD operations for the **chatroom_member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chatroom_members
    * const chatroom_members = await prisma.chatroom_member.findMany()
    * ```
    */
  get chatroom_member(): Prisma.chatroom_memberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.messageDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Profile: 'Profile',
    CityState: 'CityState',
    CityMemory: 'CityMemory',
    Task: 'Task',
    UserTaskProgress: 'UserTaskProgress',
    Petition: 'Petition',
    Post: 'Post',
    Voucher: 'Voucher',
    Transaction: 'Transaction',
    AuditLog: 'AuditLog',
    Report: 'Report',
    chatroom: 'chatroom',
    chatroom_member: 'chatroom_member',
    message: 'message'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "profile" | "cityState" | "cityMemory" | "task" | "userTaskProgress" | "petition" | "post" | "voucher" | "transaction" | "auditLog" | "report" | "chatroom" | "chatroom_member" | "message"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      CityState: {
        payload: Prisma.$CityStatePayload<ExtArgs>
        fields: Prisma.CityStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CityStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CityStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityStatePayload>
          }
          findFirst: {
            args: Prisma.CityStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CityStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityStatePayload>
          }
          findMany: {
            args: Prisma.CityStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityStatePayload>[]
          }
          create: {
            args: Prisma.CityStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityStatePayload>
          }
          createMany: {
            args: Prisma.CityStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CityStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityStatePayload>[]
          }
          delete: {
            args: Prisma.CityStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityStatePayload>
          }
          update: {
            args: Prisma.CityStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityStatePayload>
          }
          deleteMany: {
            args: Prisma.CityStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CityStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CityStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityStatePayload>[]
          }
          upsert: {
            args: Prisma.CityStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityStatePayload>
          }
          aggregate: {
            args: Prisma.CityStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCityState>
          }
          groupBy: {
            args: Prisma.CityStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CityStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CityStateCountArgs<ExtArgs>
            result: $Utils.Optional<CityStateCountAggregateOutputType> | number
          }
        }
      }
      CityMemory: {
        payload: Prisma.$CityMemoryPayload<ExtArgs>
        fields: Prisma.CityMemoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CityMemoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityMemoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CityMemoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityMemoryPayload>
          }
          findFirst: {
            args: Prisma.CityMemoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityMemoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CityMemoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityMemoryPayload>
          }
          findMany: {
            args: Prisma.CityMemoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityMemoryPayload>[]
          }
          create: {
            args: Prisma.CityMemoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityMemoryPayload>
          }
          createMany: {
            args: Prisma.CityMemoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CityMemoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityMemoryPayload>[]
          }
          delete: {
            args: Prisma.CityMemoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityMemoryPayload>
          }
          update: {
            args: Prisma.CityMemoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityMemoryPayload>
          }
          deleteMany: {
            args: Prisma.CityMemoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CityMemoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CityMemoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityMemoryPayload>[]
          }
          upsert: {
            args: Prisma.CityMemoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityMemoryPayload>
          }
          aggregate: {
            args: Prisma.CityMemoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCityMemory>
          }
          groupBy: {
            args: Prisma.CityMemoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CityMemoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CityMemoryCountArgs<ExtArgs>
            result: $Utils.Optional<CityMemoryCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      UserTaskProgress: {
        payload: Prisma.$UserTaskProgressPayload<ExtArgs>
        fields: Prisma.UserTaskProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserTaskProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTaskProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserTaskProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTaskProgressPayload>
          }
          findFirst: {
            args: Prisma.UserTaskProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTaskProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserTaskProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTaskProgressPayload>
          }
          findMany: {
            args: Prisma.UserTaskProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTaskProgressPayload>[]
          }
          create: {
            args: Prisma.UserTaskProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTaskProgressPayload>
          }
          createMany: {
            args: Prisma.UserTaskProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserTaskProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTaskProgressPayload>[]
          }
          delete: {
            args: Prisma.UserTaskProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTaskProgressPayload>
          }
          update: {
            args: Prisma.UserTaskProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTaskProgressPayload>
          }
          deleteMany: {
            args: Prisma.UserTaskProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserTaskProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserTaskProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTaskProgressPayload>[]
          }
          upsert: {
            args: Prisma.UserTaskProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTaskProgressPayload>
          }
          aggregate: {
            args: Prisma.UserTaskProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserTaskProgress>
          }
          groupBy: {
            args: Prisma.UserTaskProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserTaskProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserTaskProgressCountArgs<ExtArgs>
            result: $Utils.Optional<UserTaskProgressCountAggregateOutputType> | number
          }
        }
      }
      Petition: {
        payload: Prisma.$PetitionPayload<ExtArgs>
        fields: Prisma.PetitionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PetitionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetitionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PetitionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetitionPayload>
          }
          findFirst: {
            args: Prisma.PetitionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetitionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PetitionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetitionPayload>
          }
          findMany: {
            args: Prisma.PetitionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetitionPayload>[]
          }
          create: {
            args: Prisma.PetitionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetitionPayload>
          }
          createMany: {
            args: Prisma.PetitionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PetitionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetitionPayload>[]
          }
          delete: {
            args: Prisma.PetitionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetitionPayload>
          }
          update: {
            args: Prisma.PetitionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetitionPayload>
          }
          deleteMany: {
            args: Prisma.PetitionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PetitionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PetitionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetitionPayload>[]
          }
          upsert: {
            args: Prisma.PetitionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetitionPayload>
          }
          aggregate: {
            args: Prisma.PetitionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePetition>
          }
          groupBy: {
            args: Prisma.PetitionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetitionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PetitionCountArgs<ExtArgs>
            result: $Utils.Optional<PetitionCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Voucher: {
        payload: Prisma.$VoucherPayload<ExtArgs>
        fields: Prisma.VoucherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoucherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoucherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          findFirst: {
            args: Prisma.VoucherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoucherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          findMany: {
            args: Prisma.VoucherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>[]
          }
          create: {
            args: Prisma.VoucherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          createMany: {
            args: Prisma.VoucherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoucherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>[]
          }
          delete: {
            args: Prisma.VoucherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          update: {
            args: Prisma.VoucherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          deleteMany: {
            args: Prisma.VoucherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoucherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VoucherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>[]
          }
          upsert: {
            args: Prisma.VoucherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          aggregate: {
            args: Prisma.VoucherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoucher>
          }
          groupBy: {
            args: Prisma.VoucherGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoucherGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoucherCountArgs<ExtArgs>
            result: $Utils.Optional<VoucherCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
      chatroom: {
        payload: Prisma.$chatroomPayload<ExtArgs>
        fields: Prisma.chatroomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chatroomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatroomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chatroomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatroomPayload>
          }
          findFirst: {
            args: Prisma.chatroomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatroomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chatroomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatroomPayload>
          }
          findMany: {
            args: Prisma.chatroomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatroomPayload>[]
          }
          create: {
            args: Prisma.chatroomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatroomPayload>
          }
          createMany: {
            args: Prisma.chatroomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.chatroomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatroomPayload>[]
          }
          delete: {
            args: Prisma.chatroomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatroomPayload>
          }
          update: {
            args: Prisma.chatroomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatroomPayload>
          }
          deleteMany: {
            args: Prisma.chatroomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chatroomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.chatroomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatroomPayload>[]
          }
          upsert: {
            args: Prisma.chatroomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatroomPayload>
          }
          aggregate: {
            args: Prisma.ChatroomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatroom>
          }
          groupBy: {
            args: Prisma.chatroomGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatroomGroupByOutputType>[]
          }
          count: {
            args: Prisma.chatroomCountArgs<ExtArgs>
            result: $Utils.Optional<ChatroomCountAggregateOutputType> | number
          }
        }
      }
      chatroom_member: {
        payload: Prisma.$chatroom_memberPayload<ExtArgs>
        fields: Prisma.chatroom_memberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chatroom_memberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatroom_memberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chatroom_memberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatroom_memberPayload>
          }
          findFirst: {
            args: Prisma.chatroom_memberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatroom_memberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chatroom_memberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatroom_memberPayload>
          }
          findMany: {
            args: Prisma.chatroom_memberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatroom_memberPayload>[]
          }
          create: {
            args: Prisma.chatroom_memberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatroom_memberPayload>
          }
          createMany: {
            args: Prisma.chatroom_memberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.chatroom_memberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatroom_memberPayload>[]
          }
          delete: {
            args: Prisma.chatroom_memberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatroom_memberPayload>
          }
          update: {
            args: Prisma.chatroom_memberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatroom_memberPayload>
          }
          deleteMany: {
            args: Prisma.chatroom_memberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chatroom_memberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.chatroom_memberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatroom_memberPayload>[]
          }
          upsert: {
            args: Prisma.chatroom_memberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatroom_memberPayload>
          }
          aggregate: {
            args: Prisma.Chatroom_memberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatroom_member>
          }
          groupBy: {
            args: Prisma.chatroom_memberGroupByArgs<ExtArgs>
            result: $Utils.Optional<Chatroom_memberGroupByOutputType>[]
          }
          count: {
            args: Prisma.chatroom_memberCountArgs<ExtArgs>
            result: $Utils.Optional<Chatroom_memberCountAggregateOutputType> | number
          }
        }
      }
      message: {
        payload: Prisma.$messagePayload<ExtArgs>
        fields: Prisma.messageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.messageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.messageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          findFirst: {
            args: Prisma.messageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.messageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          findMany: {
            args: Prisma.messageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>[]
          }
          create: {
            args: Prisma.messageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          createMany: {
            args: Prisma.messageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.messageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>[]
          }
          delete: {
            args: Prisma.messageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          update: {
            args: Prisma.messageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          deleteMany: {
            args: Prisma.messageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.messageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.messageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>[]
          }
          upsert: {
            args: Prisma.messageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.messageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.messageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    profile?: ProfileOmit
    cityState?: CityStateOmit
    cityMemory?: CityMemoryOmit
    task?: TaskOmit
    userTaskProgress?: UserTaskProgressOmit
    petition?: PetitionOmit
    post?: PostOmit
    voucher?: VoucherOmit
    transaction?: TransactionOmit
    auditLog?: AuditLogOmit
    report?: ReportOmit
    chatroom?: chatroomOmit
    chatroom_member?: chatroom_memberOmit
    message?: messageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    auditLogs: number
    chatroom_member: number
    message: number
    petitions: number
    posts: number
    transactions: number
    userTaskProgress: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auditLogs?: boolean | ProfileCountOutputTypeCountAuditLogsArgs
    chatroom_member?: boolean | ProfileCountOutputTypeCountChatroom_memberArgs
    message?: boolean | ProfileCountOutputTypeCountMessageArgs
    petitions?: boolean | ProfileCountOutputTypeCountPetitionsArgs
    posts?: boolean | ProfileCountOutputTypeCountPostsArgs
    transactions?: boolean | ProfileCountOutputTypeCountTransactionsArgs
    userTaskProgress?: boolean | ProfileCountOutputTypeCountUserTaskProgressArgs
  }

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountChatroom_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatroom_memberWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messageWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountPetitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetitionWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountUserTaskProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTaskProgressWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    userTaskProgress: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userTaskProgress?: boolean | TaskCountOutputTypeCountUserTaskProgressArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountUserTaskProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTaskProgressWhereInput
  }


  /**
   * Count Type VoucherCountOutputType
   */

  export type VoucherCountOutputType = {
    transactions: number
  }

  export type VoucherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | VoucherCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * VoucherCountOutputType without action
   */
  export type VoucherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoucherCountOutputType
     */
    select?: VoucherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VoucherCountOutputType without action
   */
  export type VoucherCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type ChatroomCountOutputType
   */

  export type ChatroomCountOutputType = {
    chatroom_member: number
  }

  export type ChatroomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatroom_member?: boolean | ChatroomCountOutputTypeCountChatroom_memberArgs
  }

  // Custom InputTypes
  /**
   * ChatroomCountOutputType without action
   */
  export type ChatroomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatroomCountOutputType
     */
    select?: ChatroomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatroomCountOutputType without action
   */
  export type ChatroomCountOutputTypeCountChatroom_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatroom_memberWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    xp_points: number | null
  }

  export type ProfileSumAggregateOutputType = {
    xp_points: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    username: string | null
    role: $Enums.Role | null
    xp_points: number | null
    sustainability_score: $Enums.SustainabilityScore | null
    avatar_url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    username: string | null
    role: $Enums.Role | null
    xp_points: number | null
    sustainability_score: $Enums.SustainabilityScore | null
    avatar_url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    username: number
    role: number
    xp_points: number
    sustainability_score: number
    attributes: number
    avatar_url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    xp_points?: true
  }

  export type ProfileSumAggregateInputType = {
    xp_points?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    username?: true
    role?: true
    xp_points?: true
    sustainability_score?: true
    avatar_url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    username?: true
    role?: true
    xp_points?: true
    sustainability_score?: true
    avatar_url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    username?: true
    role?: true
    xp_points?: true
    sustainability_score?: true
    attributes?: true
    avatar_url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    username: string
    role: $Enums.Role
    xp_points: number
    sustainability_score: $Enums.SustainabilityScore
    attributes: JsonValue
    avatar_url: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    role?: boolean
    xp_points?: boolean
    sustainability_score?: boolean
    attributes?: boolean
    avatar_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    auditLogs?: boolean | Profile$auditLogsArgs<ExtArgs>
    chatroom_member?: boolean | Profile$chatroom_memberArgs<ExtArgs>
    message?: boolean | Profile$messageArgs<ExtArgs>
    petitions?: boolean | Profile$petitionsArgs<ExtArgs>
    posts?: boolean | Profile$postsArgs<ExtArgs>
    transactions?: boolean | Profile$transactionsArgs<ExtArgs>
    userTaskProgress?: boolean | Profile$userTaskProgressArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    role?: boolean
    xp_points?: boolean
    sustainability_score?: boolean
    attributes?: boolean
    avatar_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    role?: boolean
    xp_points?: boolean
    sustainability_score?: boolean
    attributes?: boolean
    avatar_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    username?: boolean
    role?: boolean
    xp_points?: boolean
    sustainability_score?: boolean
    attributes?: boolean
    avatar_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "role" | "xp_points" | "sustainability_score" | "attributes" | "avatar_url" | "createdAt" | "updatedAt", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auditLogs?: boolean | Profile$auditLogsArgs<ExtArgs>
    chatroom_member?: boolean | Profile$chatroom_memberArgs<ExtArgs>
    message?: boolean | Profile$messageArgs<ExtArgs>
    petitions?: boolean | Profile$petitionsArgs<ExtArgs>
    posts?: boolean | Profile$postsArgs<ExtArgs>
    transactions?: boolean | Profile$transactionsArgs<ExtArgs>
    userTaskProgress?: boolean | Profile$userTaskProgressArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
      chatroom_member: Prisma.$chatroom_memberPayload<ExtArgs>[]
      message: Prisma.$messagePayload<ExtArgs>[]
      petitions: Prisma.$PetitionPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      userTaskProgress: Prisma.$UserTaskProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      role: $Enums.Role
      xp_points: number
      sustainability_score: $Enums.SustainabilityScore
      attributes: Prisma.JsonValue
      avatar_url: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auditLogs<T extends Profile$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatroom_member<T extends Profile$chatroom_memberArgs<ExtArgs> = {}>(args?: Subset<T, Profile$chatroom_memberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatroom_memberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    message<T extends Profile$messageArgs<ExtArgs> = {}>(args?: Subset<T, Profile$messageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    petitions<T extends Profile$petitionsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$petitionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends Profile$postsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends Profile$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userTaskProgress<T extends Profile$userTaskProgressArgs<ExtArgs> = {}>(args?: Subset<T, Profile$userTaskProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTaskProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly username: FieldRef<"Profile", 'String'>
    readonly role: FieldRef<"Profile", 'Role'>
    readonly xp_points: FieldRef<"Profile", 'Int'>
    readonly sustainability_score: FieldRef<"Profile", 'SustainabilityScore'>
    readonly attributes: FieldRef<"Profile", 'Json'>
    readonly avatar_url: FieldRef<"Profile", 'String'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile.auditLogs
   */
  export type Profile$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * Profile.chatroom_member
   */
  export type Profile$chatroom_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatroom_member
     */
    select?: chatroom_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatroom_member
     */
    omit?: chatroom_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatroom_memberInclude<ExtArgs> | null
    where?: chatroom_memberWhereInput
    orderBy?: chatroom_memberOrderByWithRelationInput | chatroom_memberOrderByWithRelationInput[]
    cursor?: chatroom_memberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Chatroom_memberScalarFieldEnum | Chatroom_memberScalarFieldEnum[]
  }

  /**
   * Profile.message
   */
  export type Profile$messageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    where?: messageWhereInput
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    cursor?: messageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Profile.petitions
   */
  export type Profile$petitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petition
     */
    select?: PetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Petition
     */
    omit?: PetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetitionInclude<ExtArgs> | null
    where?: PetitionWhereInput
    orderBy?: PetitionOrderByWithRelationInput | PetitionOrderByWithRelationInput[]
    cursor?: PetitionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetitionScalarFieldEnum | PetitionScalarFieldEnum[]
  }

  /**
   * Profile.posts
   */
  export type Profile$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Profile.transactions
   */
  export type Profile$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Profile.userTaskProgress
   */
  export type Profile$userTaskProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskProgress
     */
    select?: UserTaskProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTaskProgress
     */
    omit?: UserTaskProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskProgressInclude<ExtArgs> | null
    where?: UserTaskProgressWhereInput
    orderBy?: UserTaskProgressOrderByWithRelationInput | UserTaskProgressOrderByWithRelationInput[]
    cursor?: UserTaskProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTaskProgressScalarFieldEnum | UserTaskProgressScalarFieldEnum[]
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model CityState
   */

  export type AggregateCityState = {
    _count: CityStateCountAggregateOutputType | null
    _min: CityStateMinAggregateOutputType | null
    _max: CityStateMaxAggregateOutputType | null
  }

  export type CityStateMinAggregateOutputType = {
    id: string | null
    mood: $Enums.CityMood | null
    last_updated: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CityStateMaxAggregateOutputType = {
    id: string | null
    mood: $Enums.CityMood | null
    last_updated: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CityStateCountAggregateOutputType = {
    id: number
    mood: number
    health_stats: number
    last_updated: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CityStateMinAggregateInputType = {
    id?: true
    mood?: true
    last_updated?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CityStateMaxAggregateInputType = {
    id?: true
    mood?: true
    last_updated?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CityStateCountAggregateInputType = {
    id?: true
    mood?: true
    health_stats?: true
    last_updated?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CityStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CityState to aggregate.
     */
    where?: CityStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CityStates to fetch.
     */
    orderBy?: CityStateOrderByWithRelationInput | CityStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CityStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CityStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CityStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CityStates
    **/
    _count?: true | CityStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CityStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CityStateMaxAggregateInputType
  }

  export type GetCityStateAggregateType<T extends CityStateAggregateArgs> = {
        [P in keyof T & keyof AggregateCityState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCityState[P]>
      : GetScalarType<T[P], AggregateCityState[P]>
  }




  export type CityStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityStateWhereInput
    orderBy?: CityStateOrderByWithAggregationInput | CityStateOrderByWithAggregationInput[]
    by: CityStateScalarFieldEnum[] | CityStateScalarFieldEnum
    having?: CityStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CityStateCountAggregateInputType | true
    _min?: CityStateMinAggregateInputType
    _max?: CityStateMaxAggregateInputType
  }

  export type CityStateGroupByOutputType = {
    id: string
    mood: $Enums.CityMood
    health_stats: JsonValue
    last_updated: Date
    createdAt: Date
    updatedAt: Date
    _count: CityStateCountAggregateOutputType | null
    _min: CityStateMinAggregateOutputType | null
    _max: CityStateMaxAggregateOutputType | null
  }

  type GetCityStateGroupByPayload<T extends CityStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CityStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CityStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CityStateGroupByOutputType[P]>
            : GetScalarType<T[P], CityStateGroupByOutputType[P]>
        }
      >
    >


  export type CityStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mood?: boolean
    health_stats?: boolean
    last_updated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cityState"]>

  export type CityStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mood?: boolean
    health_stats?: boolean
    last_updated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cityState"]>

  export type CityStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mood?: boolean
    health_stats?: boolean
    last_updated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cityState"]>

  export type CityStateSelectScalar = {
    id?: boolean
    mood?: boolean
    health_stats?: boolean
    last_updated?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CityStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mood" | "health_stats" | "last_updated" | "createdAt" | "updatedAt", ExtArgs["result"]["cityState"]>

  export type $CityStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CityState"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mood: $Enums.CityMood
      health_stats: Prisma.JsonValue
      last_updated: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cityState"]>
    composites: {}
  }

  type CityStateGetPayload<S extends boolean | null | undefined | CityStateDefaultArgs> = $Result.GetResult<Prisma.$CityStatePayload, S>

  type CityStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CityStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CityStateCountAggregateInputType | true
    }

  export interface CityStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CityState'], meta: { name: 'CityState' } }
    /**
     * Find zero or one CityState that matches the filter.
     * @param {CityStateFindUniqueArgs} args - Arguments to find a CityState
     * @example
     * // Get one CityState
     * const cityState = await prisma.cityState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CityStateFindUniqueArgs>(args: SelectSubset<T, CityStateFindUniqueArgs<ExtArgs>>): Prisma__CityStateClient<$Result.GetResult<Prisma.$CityStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CityState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CityStateFindUniqueOrThrowArgs} args - Arguments to find a CityState
     * @example
     * // Get one CityState
     * const cityState = await prisma.cityState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CityStateFindUniqueOrThrowArgs>(args: SelectSubset<T, CityStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CityStateClient<$Result.GetResult<Prisma.$CityStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CityState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityStateFindFirstArgs} args - Arguments to find a CityState
     * @example
     * // Get one CityState
     * const cityState = await prisma.cityState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CityStateFindFirstArgs>(args?: SelectSubset<T, CityStateFindFirstArgs<ExtArgs>>): Prisma__CityStateClient<$Result.GetResult<Prisma.$CityStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CityState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityStateFindFirstOrThrowArgs} args - Arguments to find a CityState
     * @example
     * // Get one CityState
     * const cityState = await prisma.cityState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CityStateFindFirstOrThrowArgs>(args?: SelectSubset<T, CityStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CityStateClient<$Result.GetResult<Prisma.$CityStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CityStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CityStates
     * const cityStates = await prisma.cityState.findMany()
     * 
     * // Get first 10 CityStates
     * const cityStates = await prisma.cityState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cityStateWithIdOnly = await prisma.cityState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CityStateFindManyArgs>(args?: SelectSubset<T, CityStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CityState.
     * @param {CityStateCreateArgs} args - Arguments to create a CityState.
     * @example
     * // Create one CityState
     * const CityState = await prisma.cityState.create({
     *   data: {
     *     // ... data to create a CityState
     *   }
     * })
     * 
     */
    create<T extends CityStateCreateArgs>(args: SelectSubset<T, CityStateCreateArgs<ExtArgs>>): Prisma__CityStateClient<$Result.GetResult<Prisma.$CityStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CityStates.
     * @param {CityStateCreateManyArgs} args - Arguments to create many CityStates.
     * @example
     * // Create many CityStates
     * const cityState = await prisma.cityState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CityStateCreateManyArgs>(args?: SelectSubset<T, CityStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CityStates and returns the data saved in the database.
     * @param {CityStateCreateManyAndReturnArgs} args - Arguments to create many CityStates.
     * @example
     * // Create many CityStates
     * const cityState = await prisma.cityState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CityStates and only return the `id`
     * const cityStateWithIdOnly = await prisma.cityState.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CityStateCreateManyAndReturnArgs>(args?: SelectSubset<T, CityStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CityState.
     * @param {CityStateDeleteArgs} args - Arguments to delete one CityState.
     * @example
     * // Delete one CityState
     * const CityState = await prisma.cityState.delete({
     *   where: {
     *     // ... filter to delete one CityState
     *   }
     * })
     * 
     */
    delete<T extends CityStateDeleteArgs>(args: SelectSubset<T, CityStateDeleteArgs<ExtArgs>>): Prisma__CityStateClient<$Result.GetResult<Prisma.$CityStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CityState.
     * @param {CityStateUpdateArgs} args - Arguments to update one CityState.
     * @example
     * // Update one CityState
     * const cityState = await prisma.cityState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CityStateUpdateArgs>(args: SelectSubset<T, CityStateUpdateArgs<ExtArgs>>): Prisma__CityStateClient<$Result.GetResult<Prisma.$CityStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CityStates.
     * @param {CityStateDeleteManyArgs} args - Arguments to filter CityStates to delete.
     * @example
     * // Delete a few CityStates
     * const { count } = await prisma.cityState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CityStateDeleteManyArgs>(args?: SelectSubset<T, CityStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CityStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CityStates
     * const cityState = await prisma.cityState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CityStateUpdateManyArgs>(args: SelectSubset<T, CityStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CityStates and returns the data updated in the database.
     * @param {CityStateUpdateManyAndReturnArgs} args - Arguments to update many CityStates.
     * @example
     * // Update many CityStates
     * const cityState = await prisma.cityState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CityStates and only return the `id`
     * const cityStateWithIdOnly = await prisma.cityState.updateManyAndReturn({
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
    updateManyAndReturn<T extends CityStateUpdateManyAndReturnArgs>(args: SelectSubset<T, CityStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CityState.
     * @param {CityStateUpsertArgs} args - Arguments to update or create a CityState.
     * @example
     * // Update or create a CityState
     * const cityState = await prisma.cityState.upsert({
     *   create: {
     *     // ... data to create a CityState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CityState we want to update
     *   }
     * })
     */
    upsert<T extends CityStateUpsertArgs>(args: SelectSubset<T, CityStateUpsertArgs<ExtArgs>>): Prisma__CityStateClient<$Result.GetResult<Prisma.$CityStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CityStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityStateCountArgs} args - Arguments to filter CityStates to count.
     * @example
     * // Count the number of CityStates
     * const count = await prisma.cityState.count({
     *   where: {
     *     // ... the filter for the CityStates we want to count
     *   }
     * })
    **/
    count<T extends CityStateCountArgs>(
      args?: Subset<T, CityStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CityStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CityState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CityStateAggregateArgs>(args: Subset<T, CityStateAggregateArgs>): Prisma.PrismaPromise<GetCityStateAggregateType<T>>

    /**
     * Group by CityState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityStateGroupByArgs} args - Group by arguments.
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
      T extends CityStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CityStateGroupByArgs['orderBy'] }
        : { orderBy?: CityStateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CityStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CityState model
   */
  readonly fields: CityStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CityState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CityStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the CityState model
   */
  interface CityStateFieldRefs {
    readonly id: FieldRef<"CityState", 'String'>
    readonly mood: FieldRef<"CityState", 'CityMood'>
    readonly health_stats: FieldRef<"CityState", 'Json'>
    readonly last_updated: FieldRef<"CityState", 'DateTime'>
    readonly createdAt: FieldRef<"CityState", 'DateTime'>
    readonly updatedAt: FieldRef<"CityState", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CityState findUnique
   */
  export type CityStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityState
     */
    select?: CityStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityState
     */
    omit?: CityStateOmit<ExtArgs> | null
    /**
     * Filter, which CityState to fetch.
     */
    where: CityStateWhereUniqueInput
  }

  /**
   * CityState findUniqueOrThrow
   */
  export type CityStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityState
     */
    select?: CityStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityState
     */
    omit?: CityStateOmit<ExtArgs> | null
    /**
     * Filter, which CityState to fetch.
     */
    where: CityStateWhereUniqueInput
  }

  /**
   * CityState findFirst
   */
  export type CityStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityState
     */
    select?: CityStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityState
     */
    omit?: CityStateOmit<ExtArgs> | null
    /**
     * Filter, which CityState to fetch.
     */
    where?: CityStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CityStates to fetch.
     */
    orderBy?: CityStateOrderByWithRelationInput | CityStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CityStates.
     */
    cursor?: CityStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CityStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CityStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CityStates.
     */
    distinct?: CityStateScalarFieldEnum | CityStateScalarFieldEnum[]
  }

  /**
   * CityState findFirstOrThrow
   */
  export type CityStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityState
     */
    select?: CityStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityState
     */
    omit?: CityStateOmit<ExtArgs> | null
    /**
     * Filter, which CityState to fetch.
     */
    where?: CityStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CityStates to fetch.
     */
    orderBy?: CityStateOrderByWithRelationInput | CityStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CityStates.
     */
    cursor?: CityStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CityStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CityStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CityStates.
     */
    distinct?: CityStateScalarFieldEnum | CityStateScalarFieldEnum[]
  }

  /**
   * CityState findMany
   */
  export type CityStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityState
     */
    select?: CityStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityState
     */
    omit?: CityStateOmit<ExtArgs> | null
    /**
     * Filter, which CityStates to fetch.
     */
    where?: CityStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CityStates to fetch.
     */
    orderBy?: CityStateOrderByWithRelationInput | CityStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CityStates.
     */
    cursor?: CityStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CityStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CityStates.
     */
    skip?: number
    distinct?: CityStateScalarFieldEnum | CityStateScalarFieldEnum[]
  }

  /**
   * CityState create
   */
  export type CityStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityState
     */
    select?: CityStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityState
     */
    omit?: CityStateOmit<ExtArgs> | null
    /**
     * The data needed to create a CityState.
     */
    data: XOR<CityStateCreateInput, CityStateUncheckedCreateInput>
  }

  /**
   * CityState createMany
   */
  export type CityStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CityStates.
     */
    data: CityStateCreateManyInput | CityStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CityState createManyAndReturn
   */
  export type CityStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityState
     */
    select?: CityStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CityState
     */
    omit?: CityStateOmit<ExtArgs> | null
    /**
     * The data used to create many CityStates.
     */
    data: CityStateCreateManyInput | CityStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CityState update
   */
  export type CityStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityState
     */
    select?: CityStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityState
     */
    omit?: CityStateOmit<ExtArgs> | null
    /**
     * The data needed to update a CityState.
     */
    data: XOR<CityStateUpdateInput, CityStateUncheckedUpdateInput>
    /**
     * Choose, which CityState to update.
     */
    where: CityStateWhereUniqueInput
  }

  /**
   * CityState updateMany
   */
  export type CityStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CityStates.
     */
    data: XOR<CityStateUpdateManyMutationInput, CityStateUncheckedUpdateManyInput>
    /**
     * Filter which CityStates to update
     */
    where?: CityStateWhereInput
    /**
     * Limit how many CityStates to update.
     */
    limit?: number
  }

  /**
   * CityState updateManyAndReturn
   */
  export type CityStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityState
     */
    select?: CityStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CityState
     */
    omit?: CityStateOmit<ExtArgs> | null
    /**
     * The data used to update CityStates.
     */
    data: XOR<CityStateUpdateManyMutationInput, CityStateUncheckedUpdateManyInput>
    /**
     * Filter which CityStates to update
     */
    where?: CityStateWhereInput
    /**
     * Limit how many CityStates to update.
     */
    limit?: number
  }

  /**
   * CityState upsert
   */
  export type CityStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityState
     */
    select?: CityStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityState
     */
    omit?: CityStateOmit<ExtArgs> | null
    /**
     * The filter to search for the CityState to update in case it exists.
     */
    where: CityStateWhereUniqueInput
    /**
     * In case the CityState found by the `where` argument doesn't exist, create a new CityState with this data.
     */
    create: XOR<CityStateCreateInput, CityStateUncheckedCreateInput>
    /**
     * In case the CityState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CityStateUpdateInput, CityStateUncheckedUpdateInput>
  }

  /**
   * CityState delete
   */
  export type CityStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityState
     */
    select?: CityStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityState
     */
    omit?: CityStateOmit<ExtArgs> | null
    /**
     * Filter which CityState to delete.
     */
    where: CityStateWhereUniqueInput
  }

  /**
   * CityState deleteMany
   */
  export type CityStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CityStates to delete
     */
    where?: CityStateWhereInput
    /**
     * Limit how many CityStates to delete.
     */
    limit?: number
  }

  /**
   * CityState without action
   */
  export type CityStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityState
     */
    select?: CityStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityState
     */
    omit?: CityStateOmit<ExtArgs> | null
  }


  /**
   * Model CityMemory
   */

  export type AggregateCityMemory = {
    _count: CityMemoryCountAggregateOutputType | null
    _avg: CityMemoryAvgAggregateOutputType | null
    _sum: CityMemorySumAggregateOutputType | null
    _min: CityMemoryMinAggregateOutputType | null
    _max: CityMemoryMaxAggregateOutputType | null
  }

  export type CityMemoryAvgAggregateOutputType = {
    impact_score: number | null
  }

  export type CityMemorySumAggregateOutputType = {
    impact_score: number | null
  }

  export type CityMemoryMinAggregateOutputType = {
    id: string | null
    event_type: string | null
    description: string | null
    impact_score: number | null
    created_at: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CityMemoryMaxAggregateOutputType = {
    id: string | null
    event_type: string | null
    description: string | null
    impact_score: number | null
    created_at: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CityMemoryCountAggregateOutputType = {
    id: number
    event_type: number
    description: number
    impact_score: number
    created_at: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CityMemoryAvgAggregateInputType = {
    impact_score?: true
  }

  export type CityMemorySumAggregateInputType = {
    impact_score?: true
  }

  export type CityMemoryMinAggregateInputType = {
    id?: true
    event_type?: true
    description?: true
    impact_score?: true
    created_at?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CityMemoryMaxAggregateInputType = {
    id?: true
    event_type?: true
    description?: true
    impact_score?: true
    created_at?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CityMemoryCountAggregateInputType = {
    id?: true
    event_type?: true
    description?: true
    impact_score?: true
    created_at?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CityMemoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CityMemory to aggregate.
     */
    where?: CityMemoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CityMemories to fetch.
     */
    orderBy?: CityMemoryOrderByWithRelationInput | CityMemoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CityMemoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CityMemories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CityMemories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CityMemories
    **/
    _count?: true | CityMemoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CityMemoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CityMemorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CityMemoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CityMemoryMaxAggregateInputType
  }

  export type GetCityMemoryAggregateType<T extends CityMemoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCityMemory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCityMemory[P]>
      : GetScalarType<T[P], AggregateCityMemory[P]>
  }




  export type CityMemoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityMemoryWhereInput
    orderBy?: CityMemoryOrderByWithAggregationInput | CityMemoryOrderByWithAggregationInput[]
    by: CityMemoryScalarFieldEnum[] | CityMemoryScalarFieldEnum
    having?: CityMemoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CityMemoryCountAggregateInputType | true
    _avg?: CityMemoryAvgAggregateInputType
    _sum?: CityMemorySumAggregateInputType
    _min?: CityMemoryMinAggregateInputType
    _max?: CityMemoryMaxAggregateInputType
  }

  export type CityMemoryGroupByOutputType = {
    id: string
    event_type: string
    description: string
    impact_score: number
    created_at: Date
    createdAt: Date
    updatedAt: Date
    _count: CityMemoryCountAggregateOutputType | null
    _avg: CityMemoryAvgAggregateOutputType | null
    _sum: CityMemorySumAggregateOutputType | null
    _min: CityMemoryMinAggregateOutputType | null
    _max: CityMemoryMaxAggregateOutputType | null
  }

  type GetCityMemoryGroupByPayload<T extends CityMemoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CityMemoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CityMemoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CityMemoryGroupByOutputType[P]>
            : GetScalarType<T[P], CityMemoryGroupByOutputType[P]>
        }
      >
    >


  export type CityMemorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_type?: boolean
    description?: boolean
    impact_score?: boolean
    created_at?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cityMemory"]>

  export type CityMemorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_type?: boolean
    description?: boolean
    impact_score?: boolean
    created_at?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cityMemory"]>

  export type CityMemorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_type?: boolean
    description?: boolean
    impact_score?: boolean
    created_at?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cityMemory"]>

  export type CityMemorySelectScalar = {
    id?: boolean
    event_type?: boolean
    description?: boolean
    impact_score?: boolean
    created_at?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CityMemoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "event_type" | "description" | "impact_score" | "created_at" | "createdAt" | "updatedAt", ExtArgs["result"]["cityMemory"]>

  export type $CityMemoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CityMemory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      event_type: string
      description: string
      impact_score: number
      created_at: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cityMemory"]>
    composites: {}
  }

  type CityMemoryGetPayload<S extends boolean | null | undefined | CityMemoryDefaultArgs> = $Result.GetResult<Prisma.$CityMemoryPayload, S>

  type CityMemoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CityMemoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CityMemoryCountAggregateInputType | true
    }

  export interface CityMemoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CityMemory'], meta: { name: 'CityMemory' } }
    /**
     * Find zero or one CityMemory that matches the filter.
     * @param {CityMemoryFindUniqueArgs} args - Arguments to find a CityMemory
     * @example
     * // Get one CityMemory
     * const cityMemory = await prisma.cityMemory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CityMemoryFindUniqueArgs>(args: SelectSubset<T, CityMemoryFindUniqueArgs<ExtArgs>>): Prisma__CityMemoryClient<$Result.GetResult<Prisma.$CityMemoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CityMemory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CityMemoryFindUniqueOrThrowArgs} args - Arguments to find a CityMemory
     * @example
     * // Get one CityMemory
     * const cityMemory = await prisma.cityMemory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CityMemoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CityMemoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CityMemoryClient<$Result.GetResult<Prisma.$CityMemoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CityMemory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityMemoryFindFirstArgs} args - Arguments to find a CityMemory
     * @example
     * // Get one CityMemory
     * const cityMemory = await prisma.cityMemory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CityMemoryFindFirstArgs>(args?: SelectSubset<T, CityMemoryFindFirstArgs<ExtArgs>>): Prisma__CityMemoryClient<$Result.GetResult<Prisma.$CityMemoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CityMemory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityMemoryFindFirstOrThrowArgs} args - Arguments to find a CityMemory
     * @example
     * // Get one CityMemory
     * const cityMemory = await prisma.cityMemory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CityMemoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CityMemoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CityMemoryClient<$Result.GetResult<Prisma.$CityMemoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CityMemories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityMemoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CityMemories
     * const cityMemories = await prisma.cityMemory.findMany()
     * 
     * // Get first 10 CityMemories
     * const cityMemories = await prisma.cityMemory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cityMemoryWithIdOnly = await prisma.cityMemory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CityMemoryFindManyArgs>(args?: SelectSubset<T, CityMemoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityMemoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CityMemory.
     * @param {CityMemoryCreateArgs} args - Arguments to create a CityMemory.
     * @example
     * // Create one CityMemory
     * const CityMemory = await prisma.cityMemory.create({
     *   data: {
     *     // ... data to create a CityMemory
     *   }
     * })
     * 
     */
    create<T extends CityMemoryCreateArgs>(args: SelectSubset<T, CityMemoryCreateArgs<ExtArgs>>): Prisma__CityMemoryClient<$Result.GetResult<Prisma.$CityMemoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CityMemories.
     * @param {CityMemoryCreateManyArgs} args - Arguments to create many CityMemories.
     * @example
     * // Create many CityMemories
     * const cityMemory = await prisma.cityMemory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CityMemoryCreateManyArgs>(args?: SelectSubset<T, CityMemoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CityMemories and returns the data saved in the database.
     * @param {CityMemoryCreateManyAndReturnArgs} args - Arguments to create many CityMemories.
     * @example
     * // Create many CityMemories
     * const cityMemory = await prisma.cityMemory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CityMemories and only return the `id`
     * const cityMemoryWithIdOnly = await prisma.cityMemory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CityMemoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CityMemoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityMemoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CityMemory.
     * @param {CityMemoryDeleteArgs} args - Arguments to delete one CityMemory.
     * @example
     * // Delete one CityMemory
     * const CityMemory = await prisma.cityMemory.delete({
     *   where: {
     *     // ... filter to delete one CityMemory
     *   }
     * })
     * 
     */
    delete<T extends CityMemoryDeleteArgs>(args: SelectSubset<T, CityMemoryDeleteArgs<ExtArgs>>): Prisma__CityMemoryClient<$Result.GetResult<Prisma.$CityMemoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CityMemory.
     * @param {CityMemoryUpdateArgs} args - Arguments to update one CityMemory.
     * @example
     * // Update one CityMemory
     * const cityMemory = await prisma.cityMemory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CityMemoryUpdateArgs>(args: SelectSubset<T, CityMemoryUpdateArgs<ExtArgs>>): Prisma__CityMemoryClient<$Result.GetResult<Prisma.$CityMemoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CityMemories.
     * @param {CityMemoryDeleteManyArgs} args - Arguments to filter CityMemories to delete.
     * @example
     * // Delete a few CityMemories
     * const { count } = await prisma.cityMemory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CityMemoryDeleteManyArgs>(args?: SelectSubset<T, CityMemoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CityMemories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityMemoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CityMemories
     * const cityMemory = await prisma.cityMemory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CityMemoryUpdateManyArgs>(args: SelectSubset<T, CityMemoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CityMemories and returns the data updated in the database.
     * @param {CityMemoryUpdateManyAndReturnArgs} args - Arguments to update many CityMemories.
     * @example
     * // Update many CityMemories
     * const cityMemory = await prisma.cityMemory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CityMemories and only return the `id`
     * const cityMemoryWithIdOnly = await prisma.cityMemory.updateManyAndReturn({
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
    updateManyAndReturn<T extends CityMemoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CityMemoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityMemoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CityMemory.
     * @param {CityMemoryUpsertArgs} args - Arguments to update or create a CityMemory.
     * @example
     * // Update or create a CityMemory
     * const cityMemory = await prisma.cityMemory.upsert({
     *   create: {
     *     // ... data to create a CityMemory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CityMemory we want to update
     *   }
     * })
     */
    upsert<T extends CityMemoryUpsertArgs>(args: SelectSubset<T, CityMemoryUpsertArgs<ExtArgs>>): Prisma__CityMemoryClient<$Result.GetResult<Prisma.$CityMemoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CityMemories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityMemoryCountArgs} args - Arguments to filter CityMemories to count.
     * @example
     * // Count the number of CityMemories
     * const count = await prisma.cityMemory.count({
     *   where: {
     *     // ... the filter for the CityMemories we want to count
     *   }
     * })
    **/
    count<T extends CityMemoryCountArgs>(
      args?: Subset<T, CityMemoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CityMemoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CityMemory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityMemoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CityMemoryAggregateArgs>(args: Subset<T, CityMemoryAggregateArgs>): Prisma.PrismaPromise<GetCityMemoryAggregateType<T>>

    /**
     * Group by CityMemory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityMemoryGroupByArgs} args - Group by arguments.
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
      T extends CityMemoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CityMemoryGroupByArgs['orderBy'] }
        : { orderBy?: CityMemoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CityMemoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityMemoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CityMemory model
   */
  readonly fields: CityMemoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CityMemory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CityMemoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the CityMemory model
   */
  interface CityMemoryFieldRefs {
    readonly id: FieldRef<"CityMemory", 'String'>
    readonly event_type: FieldRef<"CityMemory", 'String'>
    readonly description: FieldRef<"CityMemory", 'String'>
    readonly impact_score: FieldRef<"CityMemory", 'Int'>
    readonly created_at: FieldRef<"CityMemory", 'DateTime'>
    readonly createdAt: FieldRef<"CityMemory", 'DateTime'>
    readonly updatedAt: FieldRef<"CityMemory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CityMemory findUnique
   */
  export type CityMemoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityMemory
     */
    select?: CityMemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityMemory
     */
    omit?: CityMemoryOmit<ExtArgs> | null
    /**
     * Filter, which CityMemory to fetch.
     */
    where: CityMemoryWhereUniqueInput
  }

  /**
   * CityMemory findUniqueOrThrow
   */
  export type CityMemoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityMemory
     */
    select?: CityMemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityMemory
     */
    omit?: CityMemoryOmit<ExtArgs> | null
    /**
     * Filter, which CityMemory to fetch.
     */
    where: CityMemoryWhereUniqueInput
  }

  /**
   * CityMemory findFirst
   */
  export type CityMemoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityMemory
     */
    select?: CityMemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityMemory
     */
    omit?: CityMemoryOmit<ExtArgs> | null
    /**
     * Filter, which CityMemory to fetch.
     */
    where?: CityMemoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CityMemories to fetch.
     */
    orderBy?: CityMemoryOrderByWithRelationInput | CityMemoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CityMemories.
     */
    cursor?: CityMemoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CityMemories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CityMemories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CityMemories.
     */
    distinct?: CityMemoryScalarFieldEnum | CityMemoryScalarFieldEnum[]
  }

  /**
   * CityMemory findFirstOrThrow
   */
  export type CityMemoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityMemory
     */
    select?: CityMemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityMemory
     */
    omit?: CityMemoryOmit<ExtArgs> | null
    /**
     * Filter, which CityMemory to fetch.
     */
    where?: CityMemoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CityMemories to fetch.
     */
    orderBy?: CityMemoryOrderByWithRelationInput | CityMemoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CityMemories.
     */
    cursor?: CityMemoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CityMemories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CityMemories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CityMemories.
     */
    distinct?: CityMemoryScalarFieldEnum | CityMemoryScalarFieldEnum[]
  }

  /**
   * CityMemory findMany
   */
  export type CityMemoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityMemory
     */
    select?: CityMemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityMemory
     */
    omit?: CityMemoryOmit<ExtArgs> | null
    /**
     * Filter, which CityMemories to fetch.
     */
    where?: CityMemoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CityMemories to fetch.
     */
    orderBy?: CityMemoryOrderByWithRelationInput | CityMemoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CityMemories.
     */
    cursor?: CityMemoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CityMemories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CityMemories.
     */
    skip?: number
    distinct?: CityMemoryScalarFieldEnum | CityMemoryScalarFieldEnum[]
  }

  /**
   * CityMemory create
   */
  export type CityMemoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityMemory
     */
    select?: CityMemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityMemory
     */
    omit?: CityMemoryOmit<ExtArgs> | null
    /**
     * The data needed to create a CityMemory.
     */
    data: XOR<CityMemoryCreateInput, CityMemoryUncheckedCreateInput>
  }

  /**
   * CityMemory createMany
   */
  export type CityMemoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CityMemories.
     */
    data: CityMemoryCreateManyInput | CityMemoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CityMemory createManyAndReturn
   */
  export type CityMemoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityMemory
     */
    select?: CityMemorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CityMemory
     */
    omit?: CityMemoryOmit<ExtArgs> | null
    /**
     * The data used to create many CityMemories.
     */
    data: CityMemoryCreateManyInput | CityMemoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CityMemory update
   */
  export type CityMemoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityMemory
     */
    select?: CityMemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityMemory
     */
    omit?: CityMemoryOmit<ExtArgs> | null
    /**
     * The data needed to update a CityMemory.
     */
    data: XOR<CityMemoryUpdateInput, CityMemoryUncheckedUpdateInput>
    /**
     * Choose, which CityMemory to update.
     */
    where: CityMemoryWhereUniqueInput
  }

  /**
   * CityMemory updateMany
   */
  export type CityMemoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CityMemories.
     */
    data: XOR<CityMemoryUpdateManyMutationInput, CityMemoryUncheckedUpdateManyInput>
    /**
     * Filter which CityMemories to update
     */
    where?: CityMemoryWhereInput
    /**
     * Limit how many CityMemories to update.
     */
    limit?: number
  }

  /**
   * CityMemory updateManyAndReturn
   */
  export type CityMemoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityMemory
     */
    select?: CityMemorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CityMemory
     */
    omit?: CityMemoryOmit<ExtArgs> | null
    /**
     * The data used to update CityMemories.
     */
    data: XOR<CityMemoryUpdateManyMutationInput, CityMemoryUncheckedUpdateManyInput>
    /**
     * Filter which CityMemories to update
     */
    where?: CityMemoryWhereInput
    /**
     * Limit how many CityMemories to update.
     */
    limit?: number
  }

  /**
   * CityMemory upsert
   */
  export type CityMemoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityMemory
     */
    select?: CityMemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityMemory
     */
    omit?: CityMemoryOmit<ExtArgs> | null
    /**
     * The filter to search for the CityMemory to update in case it exists.
     */
    where: CityMemoryWhereUniqueInput
    /**
     * In case the CityMemory found by the `where` argument doesn't exist, create a new CityMemory with this data.
     */
    create: XOR<CityMemoryCreateInput, CityMemoryUncheckedCreateInput>
    /**
     * In case the CityMemory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CityMemoryUpdateInput, CityMemoryUncheckedUpdateInput>
  }

  /**
   * CityMemory delete
   */
  export type CityMemoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityMemory
     */
    select?: CityMemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityMemory
     */
    omit?: CityMemoryOmit<ExtArgs> | null
    /**
     * Filter which CityMemory to delete.
     */
    where: CityMemoryWhereUniqueInput
  }

  /**
   * CityMemory deleteMany
   */
  export type CityMemoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CityMemories to delete
     */
    where?: CityMemoryWhereInput
    /**
     * Limit how many CityMemories to delete.
     */
    limit?: number
  }

  /**
   * CityMemory without action
   */
  export type CityMemoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityMemory
     */
    select?: CityMemorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CityMemory
     */
    omit?: CityMemoryOmit<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    points_reward: number | null
  }

  export type TaskSumAggregateOutputType = {
    points_reward: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    difficulty: $Enums.TaskDifficulty | null
    points_reward: number | null
    verification_type: $Enums.VerificationType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    difficulty: $Enums.TaskDifficulty | null
    points_reward: number | null
    verification_type: $Enums.VerificationType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    category: number
    difficulty: number
    points_reward: number
    verification_type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    points_reward?: true
  }

  export type TaskSumAggregateInputType = {
    points_reward?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    difficulty?: true
    points_reward?: true
    verification_type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    difficulty?: true
    points_reward?: true
    verification_type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    difficulty?: true
    points_reward?: true
    verification_type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    title: string
    description: string
    category: string
    difficulty: $Enums.TaskDifficulty
    points_reward: number
    verification_type: $Enums.VerificationType
    createdAt: Date
    updatedAt: Date
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    difficulty?: boolean
    points_reward?: boolean
    verification_type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userTaskProgress?: boolean | Task$userTaskProgressArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    difficulty?: boolean
    points_reward?: boolean
    verification_type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    difficulty?: boolean
    points_reward?: boolean
    verification_type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    difficulty?: boolean
    points_reward?: boolean
    verification_type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "category" | "difficulty" | "points_reward" | "verification_type" | "createdAt" | "updatedAt", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userTaskProgress?: boolean | Task$userTaskProgressArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      userTaskProgress: Prisma.$UserTaskProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      category: string
      difficulty: $Enums.TaskDifficulty
      points_reward: number
      verification_type: $Enums.VerificationType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
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
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userTaskProgress<T extends Task$userTaskProgressArgs<ExtArgs> = {}>(args?: Subset<T, Task$userTaskProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTaskProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly category: FieldRef<"Task", 'String'>
    readonly difficulty: FieldRef<"Task", 'TaskDifficulty'>
    readonly points_reward: FieldRef<"Task", 'Int'>
    readonly verification_type: FieldRef<"Task", 'VerificationType'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.userTaskProgress
   */
  export type Task$userTaskProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskProgress
     */
    select?: UserTaskProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTaskProgress
     */
    omit?: UserTaskProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskProgressInclude<ExtArgs> | null
    where?: UserTaskProgressWhereInput
    orderBy?: UserTaskProgressOrderByWithRelationInput | UserTaskProgressOrderByWithRelationInput[]
    cursor?: UserTaskProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTaskProgressScalarFieldEnum | UserTaskProgressScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model UserTaskProgress
   */

  export type AggregateUserTaskProgress = {
    _count: UserTaskProgressCountAggregateOutputType | null
    _min: UserTaskProgressMinAggregateOutputType | null
    _max: UserTaskProgressMaxAggregateOutputType | null
  }

  export type UserTaskProgressMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    task_id: string | null
    status: $Enums.TaskStatus | null
    proof_data: string | null
    completed_at: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserTaskProgressMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    task_id: string | null
    status: $Enums.TaskStatus | null
    proof_data: string | null
    completed_at: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserTaskProgressCountAggregateOutputType = {
    id: number
    user_id: number
    task_id: number
    status: number
    proof_data: number
    completed_at: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserTaskProgressMinAggregateInputType = {
    id?: true
    user_id?: true
    task_id?: true
    status?: true
    proof_data?: true
    completed_at?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserTaskProgressMaxAggregateInputType = {
    id?: true
    user_id?: true
    task_id?: true
    status?: true
    proof_data?: true
    completed_at?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserTaskProgressCountAggregateInputType = {
    id?: true
    user_id?: true
    task_id?: true
    status?: true
    proof_data?: true
    completed_at?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserTaskProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTaskProgress to aggregate.
     */
    where?: UserTaskProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTaskProgresses to fetch.
     */
    orderBy?: UserTaskProgressOrderByWithRelationInput | UserTaskProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserTaskProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTaskProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTaskProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserTaskProgresses
    **/
    _count?: true | UserTaskProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserTaskProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserTaskProgressMaxAggregateInputType
  }

  export type GetUserTaskProgressAggregateType<T extends UserTaskProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateUserTaskProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserTaskProgress[P]>
      : GetScalarType<T[P], AggregateUserTaskProgress[P]>
  }




  export type UserTaskProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTaskProgressWhereInput
    orderBy?: UserTaskProgressOrderByWithAggregationInput | UserTaskProgressOrderByWithAggregationInput[]
    by: UserTaskProgressScalarFieldEnum[] | UserTaskProgressScalarFieldEnum
    having?: UserTaskProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserTaskProgressCountAggregateInputType | true
    _min?: UserTaskProgressMinAggregateInputType
    _max?: UserTaskProgressMaxAggregateInputType
  }

  export type UserTaskProgressGroupByOutputType = {
    id: string
    user_id: string
    task_id: string
    status: $Enums.TaskStatus
    proof_data: string | null
    completed_at: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserTaskProgressCountAggregateOutputType | null
    _min: UserTaskProgressMinAggregateOutputType | null
    _max: UserTaskProgressMaxAggregateOutputType | null
  }

  type GetUserTaskProgressGroupByPayload<T extends UserTaskProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserTaskProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserTaskProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserTaskProgressGroupByOutputType[P]>
            : GetScalarType<T[P], UserTaskProgressGroupByOutputType[P]>
        }
      >
    >


  export type UserTaskProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    task_id?: boolean
    status?: boolean
    proof_data?: boolean
    completed_at?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTaskProgress"]>

  export type UserTaskProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    task_id?: boolean
    status?: boolean
    proof_data?: boolean
    completed_at?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTaskProgress"]>

  export type UserTaskProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    task_id?: boolean
    status?: boolean
    proof_data?: boolean
    completed_at?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTaskProgress"]>

  export type UserTaskProgressSelectScalar = {
    id?: boolean
    user_id?: boolean
    task_id?: boolean
    status?: boolean
    proof_data?: boolean
    completed_at?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserTaskProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "task_id" | "status" | "proof_data" | "completed_at" | "createdAt" | "updatedAt", ExtArgs["result"]["userTaskProgress"]>
  export type UserTaskProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type UserTaskProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type UserTaskProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $UserTaskProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserTaskProgress"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      user: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      task_id: string
      status: $Enums.TaskStatus
      proof_data: string | null
      completed_at: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userTaskProgress"]>
    composites: {}
  }

  type UserTaskProgressGetPayload<S extends boolean | null | undefined | UserTaskProgressDefaultArgs> = $Result.GetResult<Prisma.$UserTaskProgressPayload, S>

  type UserTaskProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserTaskProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserTaskProgressCountAggregateInputType | true
    }

  export interface UserTaskProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserTaskProgress'], meta: { name: 'UserTaskProgress' } }
    /**
     * Find zero or one UserTaskProgress that matches the filter.
     * @param {UserTaskProgressFindUniqueArgs} args - Arguments to find a UserTaskProgress
     * @example
     * // Get one UserTaskProgress
     * const userTaskProgress = await prisma.userTaskProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserTaskProgressFindUniqueArgs>(args: SelectSubset<T, UserTaskProgressFindUniqueArgs<ExtArgs>>): Prisma__UserTaskProgressClient<$Result.GetResult<Prisma.$UserTaskProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserTaskProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserTaskProgressFindUniqueOrThrowArgs} args - Arguments to find a UserTaskProgress
     * @example
     * // Get one UserTaskProgress
     * const userTaskProgress = await prisma.userTaskProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserTaskProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, UserTaskProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserTaskProgressClient<$Result.GetResult<Prisma.$UserTaskProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTaskProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTaskProgressFindFirstArgs} args - Arguments to find a UserTaskProgress
     * @example
     * // Get one UserTaskProgress
     * const userTaskProgress = await prisma.userTaskProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserTaskProgressFindFirstArgs>(args?: SelectSubset<T, UserTaskProgressFindFirstArgs<ExtArgs>>): Prisma__UserTaskProgressClient<$Result.GetResult<Prisma.$UserTaskProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTaskProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTaskProgressFindFirstOrThrowArgs} args - Arguments to find a UserTaskProgress
     * @example
     * // Get one UserTaskProgress
     * const userTaskProgress = await prisma.userTaskProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserTaskProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, UserTaskProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserTaskProgressClient<$Result.GetResult<Prisma.$UserTaskProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserTaskProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTaskProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserTaskProgresses
     * const userTaskProgresses = await prisma.userTaskProgress.findMany()
     * 
     * // Get first 10 UserTaskProgresses
     * const userTaskProgresses = await prisma.userTaskProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userTaskProgressWithIdOnly = await prisma.userTaskProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserTaskProgressFindManyArgs>(args?: SelectSubset<T, UserTaskProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTaskProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserTaskProgress.
     * @param {UserTaskProgressCreateArgs} args - Arguments to create a UserTaskProgress.
     * @example
     * // Create one UserTaskProgress
     * const UserTaskProgress = await prisma.userTaskProgress.create({
     *   data: {
     *     // ... data to create a UserTaskProgress
     *   }
     * })
     * 
     */
    create<T extends UserTaskProgressCreateArgs>(args: SelectSubset<T, UserTaskProgressCreateArgs<ExtArgs>>): Prisma__UserTaskProgressClient<$Result.GetResult<Prisma.$UserTaskProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserTaskProgresses.
     * @param {UserTaskProgressCreateManyArgs} args - Arguments to create many UserTaskProgresses.
     * @example
     * // Create many UserTaskProgresses
     * const userTaskProgress = await prisma.userTaskProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserTaskProgressCreateManyArgs>(args?: SelectSubset<T, UserTaskProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserTaskProgresses and returns the data saved in the database.
     * @param {UserTaskProgressCreateManyAndReturnArgs} args - Arguments to create many UserTaskProgresses.
     * @example
     * // Create many UserTaskProgresses
     * const userTaskProgress = await prisma.userTaskProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserTaskProgresses and only return the `id`
     * const userTaskProgressWithIdOnly = await prisma.userTaskProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserTaskProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, UserTaskProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTaskProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserTaskProgress.
     * @param {UserTaskProgressDeleteArgs} args - Arguments to delete one UserTaskProgress.
     * @example
     * // Delete one UserTaskProgress
     * const UserTaskProgress = await prisma.userTaskProgress.delete({
     *   where: {
     *     // ... filter to delete one UserTaskProgress
     *   }
     * })
     * 
     */
    delete<T extends UserTaskProgressDeleteArgs>(args: SelectSubset<T, UserTaskProgressDeleteArgs<ExtArgs>>): Prisma__UserTaskProgressClient<$Result.GetResult<Prisma.$UserTaskProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserTaskProgress.
     * @param {UserTaskProgressUpdateArgs} args - Arguments to update one UserTaskProgress.
     * @example
     * // Update one UserTaskProgress
     * const userTaskProgress = await prisma.userTaskProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserTaskProgressUpdateArgs>(args: SelectSubset<T, UserTaskProgressUpdateArgs<ExtArgs>>): Prisma__UserTaskProgressClient<$Result.GetResult<Prisma.$UserTaskProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserTaskProgresses.
     * @param {UserTaskProgressDeleteManyArgs} args - Arguments to filter UserTaskProgresses to delete.
     * @example
     * // Delete a few UserTaskProgresses
     * const { count } = await prisma.userTaskProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserTaskProgressDeleteManyArgs>(args?: SelectSubset<T, UserTaskProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTaskProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTaskProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserTaskProgresses
     * const userTaskProgress = await prisma.userTaskProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserTaskProgressUpdateManyArgs>(args: SelectSubset<T, UserTaskProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTaskProgresses and returns the data updated in the database.
     * @param {UserTaskProgressUpdateManyAndReturnArgs} args - Arguments to update many UserTaskProgresses.
     * @example
     * // Update many UserTaskProgresses
     * const userTaskProgress = await prisma.userTaskProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserTaskProgresses and only return the `id`
     * const userTaskProgressWithIdOnly = await prisma.userTaskProgress.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserTaskProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, UserTaskProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTaskProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserTaskProgress.
     * @param {UserTaskProgressUpsertArgs} args - Arguments to update or create a UserTaskProgress.
     * @example
     * // Update or create a UserTaskProgress
     * const userTaskProgress = await prisma.userTaskProgress.upsert({
     *   create: {
     *     // ... data to create a UserTaskProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserTaskProgress we want to update
     *   }
     * })
     */
    upsert<T extends UserTaskProgressUpsertArgs>(args: SelectSubset<T, UserTaskProgressUpsertArgs<ExtArgs>>): Prisma__UserTaskProgressClient<$Result.GetResult<Prisma.$UserTaskProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserTaskProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTaskProgressCountArgs} args - Arguments to filter UserTaskProgresses to count.
     * @example
     * // Count the number of UserTaskProgresses
     * const count = await prisma.userTaskProgress.count({
     *   where: {
     *     // ... the filter for the UserTaskProgresses we want to count
     *   }
     * })
    **/
    count<T extends UserTaskProgressCountArgs>(
      args?: Subset<T, UserTaskProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserTaskProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserTaskProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTaskProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserTaskProgressAggregateArgs>(args: Subset<T, UserTaskProgressAggregateArgs>): Prisma.PrismaPromise<GetUserTaskProgressAggregateType<T>>

    /**
     * Group by UserTaskProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTaskProgressGroupByArgs} args - Group by arguments.
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
      T extends UserTaskProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserTaskProgressGroupByArgs['orderBy'] }
        : { orderBy?: UserTaskProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserTaskProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserTaskProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserTaskProgress model
   */
  readonly fields: UserTaskProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserTaskProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserTaskProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserTaskProgress model
   */
  interface UserTaskProgressFieldRefs {
    readonly id: FieldRef<"UserTaskProgress", 'String'>
    readonly user_id: FieldRef<"UserTaskProgress", 'String'>
    readonly task_id: FieldRef<"UserTaskProgress", 'String'>
    readonly status: FieldRef<"UserTaskProgress", 'TaskStatus'>
    readonly proof_data: FieldRef<"UserTaskProgress", 'String'>
    readonly completed_at: FieldRef<"UserTaskProgress", 'DateTime'>
    readonly createdAt: FieldRef<"UserTaskProgress", 'DateTime'>
    readonly updatedAt: FieldRef<"UserTaskProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserTaskProgress findUnique
   */
  export type UserTaskProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskProgress
     */
    select?: UserTaskProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTaskProgress
     */
    omit?: UserTaskProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserTaskProgress to fetch.
     */
    where: UserTaskProgressWhereUniqueInput
  }

  /**
   * UserTaskProgress findUniqueOrThrow
   */
  export type UserTaskProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskProgress
     */
    select?: UserTaskProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTaskProgress
     */
    omit?: UserTaskProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserTaskProgress to fetch.
     */
    where: UserTaskProgressWhereUniqueInput
  }

  /**
   * UserTaskProgress findFirst
   */
  export type UserTaskProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskProgress
     */
    select?: UserTaskProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTaskProgress
     */
    omit?: UserTaskProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserTaskProgress to fetch.
     */
    where?: UserTaskProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTaskProgresses to fetch.
     */
    orderBy?: UserTaskProgressOrderByWithRelationInput | UserTaskProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTaskProgresses.
     */
    cursor?: UserTaskProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTaskProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTaskProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTaskProgresses.
     */
    distinct?: UserTaskProgressScalarFieldEnum | UserTaskProgressScalarFieldEnum[]
  }

  /**
   * UserTaskProgress findFirstOrThrow
   */
  export type UserTaskProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskProgress
     */
    select?: UserTaskProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTaskProgress
     */
    omit?: UserTaskProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserTaskProgress to fetch.
     */
    where?: UserTaskProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTaskProgresses to fetch.
     */
    orderBy?: UserTaskProgressOrderByWithRelationInput | UserTaskProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTaskProgresses.
     */
    cursor?: UserTaskProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTaskProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTaskProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTaskProgresses.
     */
    distinct?: UserTaskProgressScalarFieldEnum | UserTaskProgressScalarFieldEnum[]
  }

  /**
   * UserTaskProgress findMany
   */
  export type UserTaskProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskProgress
     */
    select?: UserTaskProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTaskProgress
     */
    omit?: UserTaskProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserTaskProgresses to fetch.
     */
    where?: UserTaskProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTaskProgresses to fetch.
     */
    orderBy?: UserTaskProgressOrderByWithRelationInput | UserTaskProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserTaskProgresses.
     */
    cursor?: UserTaskProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTaskProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTaskProgresses.
     */
    skip?: number
    distinct?: UserTaskProgressScalarFieldEnum | UserTaskProgressScalarFieldEnum[]
  }

  /**
   * UserTaskProgress create
   */
  export type UserTaskProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskProgress
     */
    select?: UserTaskProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTaskProgress
     */
    omit?: UserTaskProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a UserTaskProgress.
     */
    data: XOR<UserTaskProgressCreateInput, UserTaskProgressUncheckedCreateInput>
  }

  /**
   * UserTaskProgress createMany
   */
  export type UserTaskProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserTaskProgresses.
     */
    data: UserTaskProgressCreateManyInput | UserTaskProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserTaskProgress createManyAndReturn
   */
  export type UserTaskProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskProgress
     */
    select?: UserTaskProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTaskProgress
     */
    omit?: UserTaskProgressOmit<ExtArgs> | null
    /**
     * The data used to create many UserTaskProgresses.
     */
    data: UserTaskProgressCreateManyInput | UserTaskProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTaskProgress update
   */
  export type UserTaskProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskProgress
     */
    select?: UserTaskProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTaskProgress
     */
    omit?: UserTaskProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a UserTaskProgress.
     */
    data: XOR<UserTaskProgressUpdateInput, UserTaskProgressUncheckedUpdateInput>
    /**
     * Choose, which UserTaskProgress to update.
     */
    where: UserTaskProgressWhereUniqueInput
  }

  /**
   * UserTaskProgress updateMany
   */
  export type UserTaskProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserTaskProgresses.
     */
    data: XOR<UserTaskProgressUpdateManyMutationInput, UserTaskProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserTaskProgresses to update
     */
    where?: UserTaskProgressWhereInput
    /**
     * Limit how many UserTaskProgresses to update.
     */
    limit?: number
  }

  /**
   * UserTaskProgress updateManyAndReturn
   */
  export type UserTaskProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskProgress
     */
    select?: UserTaskProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserTaskProgress
     */
    omit?: UserTaskProgressOmit<ExtArgs> | null
    /**
     * The data used to update UserTaskProgresses.
     */
    data: XOR<UserTaskProgressUpdateManyMutationInput, UserTaskProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserTaskProgresses to update
     */
    where?: UserTaskProgressWhereInput
    /**
     * Limit how many UserTaskProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserTaskProgress upsert
   */
  export type UserTaskProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskProgress
     */
    select?: UserTaskProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTaskProgress
     */
    omit?: UserTaskProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the UserTaskProgress to update in case it exists.
     */
    where: UserTaskProgressWhereUniqueInput
    /**
     * In case the UserTaskProgress found by the `where` argument doesn't exist, create a new UserTaskProgress with this data.
     */
    create: XOR<UserTaskProgressCreateInput, UserTaskProgressUncheckedCreateInput>
    /**
     * In case the UserTaskProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserTaskProgressUpdateInput, UserTaskProgressUncheckedUpdateInput>
  }

  /**
   * UserTaskProgress delete
   */
  export type UserTaskProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskProgress
     */
    select?: UserTaskProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTaskProgress
     */
    omit?: UserTaskProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskProgressInclude<ExtArgs> | null
    /**
     * Filter which UserTaskProgress to delete.
     */
    where: UserTaskProgressWhereUniqueInput
  }

  /**
   * UserTaskProgress deleteMany
   */
  export type UserTaskProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTaskProgresses to delete
     */
    where?: UserTaskProgressWhereInput
    /**
     * Limit how many UserTaskProgresses to delete.
     */
    limit?: number
  }

  /**
   * UserTaskProgress without action
   */
  export type UserTaskProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTaskProgress
     */
    select?: UserTaskProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTaskProgress
     */
    omit?: UserTaskProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTaskProgressInclude<ExtArgs> | null
  }


  /**
   * Model Petition
   */

  export type AggregatePetition = {
    _count: PetitionCountAggregateOutputType | null
    _avg: PetitionAvgAggregateOutputType | null
    _sum: PetitionSumAggregateOutputType | null
    _min: PetitionMinAggregateOutputType | null
    _max: PetitionMaxAggregateOutputType | null
  }

  export type PetitionAvgAggregateOutputType = {
    support_count: number | null
  }

  export type PetitionSumAggregateOutputType = {
    support_count: number | null
  }

  export type PetitionMinAggregateOutputType = {
    id: string | null
    creator_id: string | null
    title: string | null
    description_encrypted: string | null
    location_data: string | null
    support_count: number | null
    status: $Enums.PetitionStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PetitionMaxAggregateOutputType = {
    id: string | null
    creator_id: string | null
    title: string | null
    description_encrypted: string | null
    location_data: string | null
    support_count: number | null
    status: $Enums.PetitionStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PetitionCountAggregateOutputType = {
    id: number
    creator_id: number
    title: number
    description_encrypted: number
    location_data: number
    support_count: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PetitionAvgAggregateInputType = {
    support_count?: true
  }

  export type PetitionSumAggregateInputType = {
    support_count?: true
  }

  export type PetitionMinAggregateInputType = {
    id?: true
    creator_id?: true
    title?: true
    description_encrypted?: true
    location_data?: true
    support_count?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PetitionMaxAggregateInputType = {
    id?: true
    creator_id?: true
    title?: true
    description_encrypted?: true
    location_data?: true
    support_count?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PetitionCountAggregateInputType = {
    id?: true
    creator_id?: true
    title?: true
    description_encrypted?: true
    location_data?: true
    support_count?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PetitionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Petition to aggregate.
     */
    where?: PetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Petitions to fetch.
     */
    orderBy?: PetitionOrderByWithRelationInput | PetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Petitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Petitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Petitions
    **/
    _count?: true | PetitionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PetitionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PetitionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetitionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetitionMaxAggregateInputType
  }

  export type GetPetitionAggregateType<T extends PetitionAggregateArgs> = {
        [P in keyof T & keyof AggregatePetition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePetition[P]>
      : GetScalarType<T[P], AggregatePetition[P]>
  }




  export type PetitionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetitionWhereInput
    orderBy?: PetitionOrderByWithAggregationInput | PetitionOrderByWithAggregationInput[]
    by: PetitionScalarFieldEnum[] | PetitionScalarFieldEnum
    having?: PetitionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetitionCountAggregateInputType | true
    _avg?: PetitionAvgAggregateInputType
    _sum?: PetitionSumAggregateInputType
    _min?: PetitionMinAggregateInputType
    _max?: PetitionMaxAggregateInputType
  }

  export type PetitionGroupByOutputType = {
    id: string
    creator_id: string
    title: string
    description_encrypted: string
    location_data: string
    support_count: number
    status: $Enums.PetitionStatus
    createdAt: Date
    updatedAt: Date
    _count: PetitionCountAggregateOutputType | null
    _avg: PetitionAvgAggregateOutputType | null
    _sum: PetitionSumAggregateOutputType | null
    _min: PetitionMinAggregateOutputType | null
    _max: PetitionMaxAggregateOutputType | null
  }

  type GetPetitionGroupByPayload<T extends PetitionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetitionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetitionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetitionGroupByOutputType[P]>
            : GetScalarType<T[P], PetitionGroupByOutputType[P]>
        }
      >
    >


  export type PetitionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creator_id?: boolean
    title?: boolean
    description_encrypted?: boolean
    location_data?: boolean
    support_count?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["petition"]>

  export type PetitionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creator_id?: boolean
    title?: boolean
    description_encrypted?: boolean
    location_data?: boolean
    support_count?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["petition"]>

  export type PetitionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creator_id?: boolean
    title?: boolean
    description_encrypted?: boolean
    location_data?: boolean
    support_count?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["petition"]>

  export type PetitionSelectScalar = {
    id?: boolean
    creator_id?: boolean
    title?: boolean
    description_encrypted?: boolean
    location_data?: boolean
    support_count?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PetitionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "creator_id" | "title" | "description_encrypted" | "location_data" | "support_count" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["petition"]>
  export type PetitionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type PetitionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type PetitionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $PetitionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Petition"
    objects: {
      creator: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      creator_id: string
      title: string
      description_encrypted: string
      location_data: string
      support_count: number
      status: $Enums.PetitionStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["petition"]>
    composites: {}
  }

  type PetitionGetPayload<S extends boolean | null | undefined | PetitionDefaultArgs> = $Result.GetResult<Prisma.$PetitionPayload, S>

  type PetitionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PetitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PetitionCountAggregateInputType | true
    }

  export interface PetitionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Petition'], meta: { name: 'Petition' } }
    /**
     * Find zero or one Petition that matches the filter.
     * @param {PetitionFindUniqueArgs} args - Arguments to find a Petition
     * @example
     * // Get one Petition
     * const petition = await prisma.petition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PetitionFindUniqueArgs>(args: SelectSubset<T, PetitionFindUniqueArgs<ExtArgs>>): Prisma__PetitionClient<$Result.GetResult<Prisma.$PetitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Petition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PetitionFindUniqueOrThrowArgs} args - Arguments to find a Petition
     * @example
     * // Get one Petition
     * const petition = await prisma.petition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PetitionFindUniqueOrThrowArgs>(args: SelectSubset<T, PetitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PetitionClient<$Result.GetResult<Prisma.$PetitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Petition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetitionFindFirstArgs} args - Arguments to find a Petition
     * @example
     * // Get one Petition
     * const petition = await prisma.petition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PetitionFindFirstArgs>(args?: SelectSubset<T, PetitionFindFirstArgs<ExtArgs>>): Prisma__PetitionClient<$Result.GetResult<Prisma.$PetitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Petition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetitionFindFirstOrThrowArgs} args - Arguments to find a Petition
     * @example
     * // Get one Petition
     * const petition = await prisma.petition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PetitionFindFirstOrThrowArgs>(args?: SelectSubset<T, PetitionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PetitionClient<$Result.GetResult<Prisma.$PetitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Petitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetitionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Petitions
     * const petitions = await prisma.petition.findMany()
     * 
     * // Get first 10 Petitions
     * const petitions = await prisma.petition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const petitionWithIdOnly = await prisma.petition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PetitionFindManyArgs>(args?: SelectSubset<T, PetitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Petition.
     * @param {PetitionCreateArgs} args - Arguments to create a Petition.
     * @example
     * // Create one Petition
     * const Petition = await prisma.petition.create({
     *   data: {
     *     // ... data to create a Petition
     *   }
     * })
     * 
     */
    create<T extends PetitionCreateArgs>(args: SelectSubset<T, PetitionCreateArgs<ExtArgs>>): Prisma__PetitionClient<$Result.GetResult<Prisma.$PetitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Petitions.
     * @param {PetitionCreateManyArgs} args - Arguments to create many Petitions.
     * @example
     * // Create many Petitions
     * const petition = await prisma.petition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PetitionCreateManyArgs>(args?: SelectSubset<T, PetitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Petitions and returns the data saved in the database.
     * @param {PetitionCreateManyAndReturnArgs} args - Arguments to create many Petitions.
     * @example
     * // Create many Petitions
     * const petition = await prisma.petition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Petitions and only return the `id`
     * const petitionWithIdOnly = await prisma.petition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PetitionCreateManyAndReturnArgs>(args?: SelectSubset<T, PetitionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetitionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Petition.
     * @param {PetitionDeleteArgs} args - Arguments to delete one Petition.
     * @example
     * // Delete one Petition
     * const Petition = await prisma.petition.delete({
     *   where: {
     *     // ... filter to delete one Petition
     *   }
     * })
     * 
     */
    delete<T extends PetitionDeleteArgs>(args: SelectSubset<T, PetitionDeleteArgs<ExtArgs>>): Prisma__PetitionClient<$Result.GetResult<Prisma.$PetitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Petition.
     * @param {PetitionUpdateArgs} args - Arguments to update one Petition.
     * @example
     * // Update one Petition
     * const petition = await prisma.petition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PetitionUpdateArgs>(args: SelectSubset<T, PetitionUpdateArgs<ExtArgs>>): Prisma__PetitionClient<$Result.GetResult<Prisma.$PetitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Petitions.
     * @param {PetitionDeleteManyArgs} args - Arguments to filter Petitions to delete.
     * @example
     * // Delete a few Petitions
     * const { count } = await prisma.petition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PetitionDeleteManyArgs>(args?: SelectSubset<T, PetitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Petitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetitionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Petitions
     * const petition = await prisma.petition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PetitionUpdateManyArgs>(args: SelectSubset<T, PetitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Petitions and returns the data updated in the database.
     * @param {PetitionUpdateManyAndReturnArgs} args - Arguments to update many Petitions.
     * @example
     * // Update many Petitions
     * const petition = await prisma.petition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Petitions and only return the `id`
     * const petitionWithIdOnly = await prisma.petition.updateManyAndReturn({
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
    updateManyAndReturn<T extends PetitionUpdateManyAndReturnArgs>(args: SelectSubset<T, PetitionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetitionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Petition.
     * @param {PetitionUpsertArgs} args - Arguments to update or create a Petition.
     * @example
     * // Update or create a Petition
     * const petition = await prisma.petition.upsert({
     *   create: {
     *     // ... data to create a Petition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Petition we want to update
     *   }
     * })
     */
    upsert<T extends PetitionUpsertArgs>(args: SelectSubset<T, PetitionUpsertArgs<ExtArgs>>): Prisma__PetitionClient<$Result.GetResult<Prisma.$PetitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Petitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetitionCountArgs} args - Arguments to filter Petitions to count.
     * @example
     * // Count the number of Petitions
     * const count = await prisma.petition.count({
     *   where: {
     *     // ... the filter for the Petitions we want to count
     *   }
     * })
    **/
    count<T extends PetitionCountArgs>(
      args?: Subset<T, PetitionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetitionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Petition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetitionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PetitionAggregateArgs>(args: Subset<T, PetitionAggregateArgs>): Prisma.PrismaPromise<GetPetitionAggregateType<T>>

    /**
     * Group by Petition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetitionGroupByArgs} args - Group by arguments.
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
      T extends PetitionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PetitionGroupByArgs['orderBy'] }
        : { orderBy?: PetitionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PetitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Petition model
   */
  readonly fields: PetitionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Petition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PetitionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Petition model
   */
  interface PetitionFieldRefs {
    readonly id: FieldRef<"Petition", 'String'>
    readonly creator_id: FieldRef<"Petition", 'String'>
    readonly title: FieldRef<"Petition", 'String'>
    readonly description_encrypted: FieldRef<"Petition", 'String'>
    readonly location_data: FieldRef<"Petition", 'String'>
    readonly support_count: FieldRef<"Petition", 'Int'>
    readonly status: FieldRef<"Petition", 'PetitionStatus'>
    readonly createdAt: FieldRef<"Petition", 'DateTime'>
    readonly updatedAt: FieldRef<"Petition", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Petition findUnique
   */
  export type PetitionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petition
     */
    select?: PetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Petition
     */
    omit?: PetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetitionInclude<ExtArgs> | null
    /**
     * Filter, which Petition to fetch.
     */
    where: PetitionWhereUniqueInput
  }

  /**
   * Petition findUniqueOrThrow
   */
  export type PetitionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petition
     */
    select?: PetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Petition
     */
    omit?: PetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetitionInclude<ExtArgs> | null
    /**
     * Filter, which Petition to fetch.
     */
    where: PetitionWhereUniqueInput
  }

  /**
   * Petition findFirst
   */
  export type PetitionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petition
     */
    select?: PetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Petition
     */
    omit?: PetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetitionInclude<ExtArgs> | null
    /**
     * Filter, which Petition to fetch.
     */
    where?: PetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Petitions to fetch.
     */
    orderBy?: PetitionOrderByWithRelationInput | PetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Petitions.
     */
    cursor?: PetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Petitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Petitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Petitions.
     */
    distinct?: PetitionScalarFieldEnum | PetitionScalarFieldEnum[]
  }

  /**
   * Petition findFirstOrThrow
   */
  export type PetitionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petition
     */
    select?: PetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Petition
     */
    omit?: PetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetitionInclude<ExtArgs> | null
    /**
     * Filter, which Petition to fetch.
     */
    where?: PetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Petitions to fetch.
     */
    orderBy?: PetitionOrderByWithRelationInput | PetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Petitions.
     */
    cursor?: PetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Petitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Petitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Petitions.
     */
    distinct?: PetitionScalarFieldEnum | PetitionScalarFieldEnum[]
  }

  /**
   * Petition findMany
   */
  export type PetitionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petition
     */
    select?: PetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Petition
     */
    omit?: PetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetitionInclude<ExtArgs> | null
    /**
     * Filter, which Petitions to fetch.
     */
    where?: PetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Petitions to fetch.
     */
    orderBy?: PetitionOrderByWithRelationInput | PetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Petitions.
     */
    cursor?: PetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Petitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Petitions.
     */
    skip?: number
    distinct?: PetitionScalarFieldEnum | PetitionScalarFieldEnum[]
  }

  /**
   * Petition create
   */
  export type PetitionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petition
     */
    select?: PetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Petition
     */
    omit?: PetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetitionInclude<ExtArgs> | null
    /**
     * The data needed to create a Petition.
     */
    data: XOR<PetitionCreateInput, PetitionUncheckedCreateInput>
  }

  /**
   * Petition createMany
   */
  export type PetitionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Petitions.
     */
    data: PetitionCreateManyInput | PetitionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Petition createManyAndReturn
   */
  export type PetitionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petition
     */
    select?: PetitionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Petition
     */
    omit?: PetitionOmit<ExtArgs> | null
    /**
     * The data used to create many Petitions.
     */
    data: PetitionCreateManyInput | PetitionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetitionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Petition update
   */
  export type PetitionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petition
     */
    select?: PetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Petition
     */
    omit?: PetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetitionInclude<ExtArgs> | null
    /**
     * The data needed to update a Petition.
     */
    data: XOR<PetitionUpdateInput, PetitionUncheckedUpdateInput>
    /**
     * Choose, which Petition to update.
     */
    where: PetitionWhereUniqueInput
  }

  /**
   * Petition updateMany
   */
  export type PetitionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Petitions.
     */
    data: XOR<PetitionUpdateManyMutationInput, PetitionUncheckedUpdateManyInput>
    /**
     * Filter which Petitions to update
     */
    where?: PetitionWhereInput
    /**
     * Limit how many Petitions to update.
     */
    limit?: number
  }

  /**
   * Petition updateManyAndReturn
   */
  export type PetitionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petition
     */
    select?: PetitionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Petition
     */
    omit?: PetitionOmit<ExtArgs> | null
    /**
     * The data used to update Petitions.
     */
    data: XOR<PetitionUpdateManyMutationInput, PetitionUncheckedUpdateManyInput>
    /**
     * Filter which Petitions to update
     */
    where?: PetitionWhereInput
    /**
     * Limit how many Petitions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetitionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Petition upsert
   */
  export type PetitionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petition
     */
    select?: PetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Petition
     */
    omit?: PetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetitionInclude<ExtArgs> | null
    /**
     * The filter to search for the Petition to update in case it exists.
     */
    where: PetitionWhereUniqueInput
    /**
     * In case the Petition found by the `where` argument doesn't exist, create a new Petition with this data.
     */
    create: XOR<PetitionCreateInput, PetitionUncheckedCreateInput>
    /**
     * In case the Petition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PetitionUpdateInput, PetitionUncheckedUpdateInput>
  }

  /**
   * Petition delete
   */
  export type PetitionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petition
     */
    select?: PetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Petition
     */
    omit?: PetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetitionInclude<ExtArgs> | null
    /**
     * Filter which Petition to delete.
     */
    where: PetitionWhereUniqueInput
  }

  /**
   * Petition deleteMany
   */
  export type PetitionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Petitions to delete
     */
    where?: PetitionWhereInput
    /**
     * Limit how many Petitions to delete.
     */
    limit?: number
  }

  /**
   * Petition without action
   */
  export type PetitionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petition
     */
    select?: PetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Petition
     */
    omit?: PetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetitionInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    sentiment_score: number | null
  }

  export type PostSumAggregateOutputType = {
    sentiment_score: number | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    author_id: string | null
    content: string | null
    image_url: string | null
    sentiment_score: number | null
    sdg_tag: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    author_id: string | null
    content: string | null
    image_url: string | null
    sentiment_score: number | null
    sdg_tag: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    author_id: number
    content: number
    image_url: number
    sentiment_score: number
    sdg_tag: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    sentiment_score?: true
  }

  export type PostSumAggregateInputType = {
    sentiment_score?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    author_id?: true
    content?: true
    image_url?: true
    sentiment_score?: true
    sdg_tag?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    author_id?: true
    content?: true
    image_url?: true
    sentiment_score?: true
    sdg_tag?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    author_id?: true
    content?: true
    image_url?: true
    sentiment_score?: true
    sdg_tag?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    author_id: string
    content: string
    image_url: string | null
    sentiment_score: number | null
    sdg_tag: string | null
    createdAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author_id?: boolean
    content?: boolean
    image_url?: boolean
    sentiment_score?: boolean
    sdg_tag?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author_id?: boolean
    content?: boolean
    image_url?: boolean
    sentiment_score?: boolean
    sdg_tag?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author_id?: boolean
    content?: boolean
    image_url?: boolean
    sentiment_score?: boolean
    sdg_tag?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    author_id?: boolean
    content?: boolean
    image_url?: boolean
    sentiment_score?: boolean
    sdg_tag?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "author_id" | "content" | "image_url" | "sentiment_score" | "sdg_tag" | "createdAt" | "updatedAt", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      author: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      author_id: string
      content: string
      image_url: string | null
      sentiment_score: number | null
      sdg_tag: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly author_id: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly image_url: FieldRef<"Post", 'String'>
    readonly sentiment_score: FieldRef<"Post", 'Float'>
    readonly sdg_tag: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Voucher
   */

  export type AggregateVoucher = {
    _count: VoucherCountAggregateOutputType | null
    _avg: VoucherAvgAggregateOutputType | null
    _sum: VoucherSumAggregateOutputType | null
    _min: VoucherMinAggregateOutputType | null
    _max: VoucherMaxAggregateOutputType | null
  }

  export type VoucherAvgAggregateOutputType = {
    cost_points: number | null
    stock: number | null
  }

  export type VoucherSumAggregateOutputType = {
    cost_points: number | null
    stock: number | null
  }

  export type VoucherMinAggregateOutputType = {
    id: string | null
    title: string | null
    cost_points: number | null
    code: string | null
    stock: number | null
    expiry_date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VoucherMaxAggregateOutputType = {
    id: string | null
    title: string | null
    cost_points: number | null
    code: string | null
    stock: number | null
    expiry_date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VoucherCountAggregateOutputType = {
    id: number
    title: number
    cost_points: number
    code: number
    stock: number
    expiry_date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VoucherAvgAggregateInputType = {
    cost_points?: true
    stock?: true
  }

  export type VoucherSumAggregateInputType = {
    cost_points?: true
    stock?: true
  }

  export type VoucherMinAggregateInputType = {
    id?: true
    title?: true
    cost_points?: true
    code?: true
    stock?: true
    expiry_date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VoucherMaxAggregateInputType = {
    id?: true
    title?: true
    cost_points?: true
    code?: true
    stock?: true
    expiry_date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VoucherCountAggregateInputType = {
    id?: true
    title?: true
    cost_points?: true
    code?: true
    stock?: true
    expiry_date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VoucherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Voucher to aggregate.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vouchers
    **/
    _count?: true | VoucherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VoucherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VoucherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoucherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoucherMaxAggregateInputType
  }

  export type GetVoucherAggregateType<T extends VoucherAggregateArgs> = {
        [P in keyof T & keyof AggregateVoucher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoucher[P]>
      : GetScalarType<T[P], AggregateVoucher[P]>
  }




  export type VoucherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoucherWhereInput
    orderBy?: VoucherOrderByWithAggregationInput | VoucherOrderByWithAggregationInput[]
    by: VoucherScalarFieldEnum[] | VoucherScalarFieldEnum
    having?: VoucherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoucherCountAggregateInputType | true
    _avg?: VoucherAvgAggregateInputType
    _sum?: VoucherSumAggregateInputType
    _min?: VoucherMinAggregateInputType
    _max?: VoucherMaxAggregateInputType
  }

  export type VoucherGroupByOutputType = {
    id: string
    title: string
    cost_points: number
    code: string
    stock: number
    expiry_date: Date
    createdAt: Date
    updatedAt: Date
    _count: VoucherCountAggregateOutputType | null
    _avg: VoucherAvgAggregateOutputType | null
    _sum: VoucherSumAggregateOutputType | null
    _min: VoucherMinAggregateOutputType | null
    _max: VoucherMaxAggregateOutputType | null
  }

  type GetVoucherGroupByPayload<T extends VoucherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoucherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoucherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoucherGroupByOutputType[P]>
            : GetScalarType<T[P], VoucherGroupByOutputType[P]>
        }
      >
    >


  export type VoucherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    cost_points?: boolean
    code?: boolean
    stock?: boolean
    expiry_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transactions?: boolean | Voucher$transactionsArgs<ExtArgs>
    _count?: boolean | VoucherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voucher"]>

  export type VoucherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    cost_points?: boolean
    code?: boolean
    stock?: boolean
    expiry_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["voucher"]>

  export type VoucherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    cost_points?: boolean
    code?: boolean
    stock?: boolean
    expiry_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["voucher"]>

  export type VoucherSelectScalar = {
    id?: boolean
    title?: boolean
    cost_points?: boolean
    code?: boolean
    stock?: boolean
    expiry_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VoucherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "cost_points" | "code" | "stock" | "expiry_date" | "createdAt" | "updatedAt", ExtArgs["result"]["voucher"]>
  export type VoucherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | Voucher$transactionsArgs<ExtArgs>
    _count?: boolean | VoucherCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VoucherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VoucherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VoucherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Voucher"
    objects: {
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      cost_points: number
      code: string
      stock: number
      expiry_date: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["voucher"]>
    composites: {}
  }

  type VoucherGetPayload<S extends boolean | null | undefined | VoucherDefaultArgs> = $Result.GetResult<Prisma.$VoucherPayload, S>

  type VoucherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoucherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoucherCountAggregateInputType | true
    }

  export interface VoucherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Voucher'], meta: { name: 'Voucher' } }
    /**
     * Find zero or one Voucher that matches the filter.
     * @param {VoucherFindUniqueArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoucherFindUniqueArgs>(args: SelectSubset<T, VoucherFindUniqueArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Voucher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoucherFindUniqueOrThrowArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoucherFindUniqueOrThrowArgs>(args: SelectSubset<T, VoucherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voucher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindFirstArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoucherFindFirstArgs>(args?: SelectSubset<T, VoucherFindFirstArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voucher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindFirstOrThrowArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoucherFindFirstOrThrowArgs>(args?: SelectSubset<T, VoucherFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vouchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vouchers
     * const vouchers = await prisma.voucher.findMany()
     * 
     * // Get first 10 Vouchers
     * const vouchers = await prisma.voucher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voucherWithIdOnly = await prisma.voucher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoucherFindManyArgs>(args?: SelectSubset<T, VoucherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Voucher.
     * @param {VoucherCreateArgs} args - Arguments to create a Voucher.
     * @example
     * // Create one Voucher
     * const Voucher = await prisma.voucher.create({
     *   data: {
     *     // ... data to create a Voucher
     *   }
     * })
     * 
     */
    create<T extends VoucherCreateArgs>(args: SelectSubset<T, VoucherCreateArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vouchers.
     * @param {VoucherCreateManyArgs} args - Arguments to create many Vouchers.
     * @example
     * // Create many Vouchers
     * const voucher = await prisma.voucher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoucherCreateManyArgs>(args?: SelectSubset<T, VoucherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vouchers and returns the data saved in the database.
     * @param {VoucherCreateManyAndReturnArgs} args - Arguments to create many Vouchers.
     * @example
     * // Create many Vouchers
     * const voucher = await prisma.voucher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vouchers and only return the `id`
     * const voucherWithIdOnly = await prisma.voucher.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoucherCreateManyAndReturnArgs>(args?: SelectSubset<T, VoucherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Voucher.
     * @param {VoucherDeleteArgs} args - Arguments to delete one Voucher.
     * @example
     * // Delete one Voucher
     * const Voucher = await prisma.voucher.delete({
     *   where: {
     *     // ... filter to delete one Voucher
     *   }
     * })
     * 
     */
    delete<T extends VoucherDeleteArgs>(args: SelectSubset<T, VoucherDeleteArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Voucher.
     * @param {VoucherUpdateArgs} args - Arguments to update one Voucher.
     * @example
     * // Update one Voucher
     * const voucher = await prisma.voucher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoucherUpdateArgs>(args: SelectSubset<T, VoucherUpdateArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vouchers.
     * @param {VoucherDeleteManyArgs} args - Arguments to filter Vouchers to delete.
     * @example
     * // Delete a few Vouchers
     * const { count } = await prisma.voucher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoucherDeleteManyArgs>(args?: SelectSubset<T, VoucherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vouchers
     * const voucher = await prisma.voucher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoucherUpdateManyArgs>(args: SelectSubset<T, VoucherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vouchers and returns the data updated in the database.
     * @param {VoucherUpdateManyAndReturnArgs} args - Arguments to update many Vouchers.
     * @example
     * // Update many Vouchers
     * const voucher = await prisma.voucher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vouchers and only return the `id`
     * const voucherWithIdOnly = await prisma.voucher.updateManyAndReturn({
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
    updateManyAndReturn<T extends VoucherUpdateManyAndReturnArgs>(args: SelectSubset<T, VoucherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Voucher.
     * @param {VoucherUpsertArgs} args - Arguments to update or create a Voucher.
     * @example
     * // Update or create a Voucher
     * const voucher = await prisma.voucher.upsert({
     *   create: {
     *     // ... data to create a Voucher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Voucher we want to update
     *   }
     * })
     */
    upsert<T extends VoucherUpsertArgs>(args: SelectSubset<T, VoucherUpsertArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherCountArgs} args - Arguments to filter Vouchers to count.
     * @example
     * // Count the number of Vouchers
     * const count = await prisma.voucher.count({
     *   where: {
     *     // ... the filter for the Vouchers we want to count
     *   }
     * })
    **/
    count<T extends VoucherCountArgs>(
      args?: Subset<T, VoucherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoucherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Voucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VoucherAggregateArgs>(args: Subset<T, VoucherAggregateArgs>): Prisma.PrismaPromise<GetVoucherAggregateType<T>>

    /**
     * Group by Voucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherGroupByArgs} args - Group by arguments.
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
      T extends VoucherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoucherGroupByArgs['orderBy'] }
        : { orderBy?: VoucherGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VoucherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoucherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Voucher model
   */
  readonly fields: VoucherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Voucher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoucherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends Voucher$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Voucher$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Voucher model
   */
  interface VoucherFieldRefs {
    readonly id: FieldRef<"Voucher", 'String'>
    readonly title: FieldRef<"Voucher", 'String'>
    readonly cost_points: FieldRef<"Voucher", 'Int'>
    readonly code: FieldRef<"Voucher", 'String'>
    readonly stock: FieldRef<"Voucher", 'Int'>
    readonly expiry_date: FieldRef<"Voucher", 'DateTime'>
    readonly createdAt: FieldRef<"Voucher", 'DateTime'>
    readonly updatedAt: FieldRef<"Voucher", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Voucher findUnique
   */
  export type VoucherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher findUniqueOrThrow
   */
  export type VoucherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher findFirst
   */
  export type VoucherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vouchers.
     */
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher findFirstOrThrow
   */
  export type VoucherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vouchers.
     */
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher findMany
   */
  export type VoucherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Vouchers to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher create
   */
  export type VoucherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The data needed to create a Voucher.
     */
    data: XOR<VoucherCreateInput, VoucherUncheckedCreateInput>
  }

  /**
   * Voucher createMany
   */
  export type VoucherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vouchers.
     */
    data: VoucherCreateManyInput | VoucherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Voucher createManyAndReturn
   */
  export type VoucherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * The data used to create many Vouchers.
     */
    data: VoucherCreateManyInput | VoucherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Voucher update
   */
  export type VoucherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The data needed to update a Voucher.
     */
    data: XOR<VoucherUpdateInput, VoucherUncheckedUpdateInput>
    /**
     * Choose, which Voucher to update.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher updateMany
   */
  export type VoucherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vouchers.
     */
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyInput>
    /**
     * Filter which Vouchers to update
     */
    where?: VoucherWhereInput
    /**
     * Limit how many Vouchers to update.
     */
    limit?: number
  }

  /**
   * Voucher updateManyAndReturn
   */
  export type VoucherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * The data used to update Vouchers.
     */
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyInput>
    /**
     * Filter which Vouchers to update
     */
    where?: VoucherWhereInput
    /**
     * Limit how many Vouchers to update.
     */
    limit?: number
  }

  /**
   * Voucher upsert
   */
  export type VoucherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The filter to search for the Voucher to update in case it exists.
     */
    where: VoucherWhereUniqueInput
    /**
     * In case the Voucher found by the `where` argument doesn't exist, create a new Voucher with this data.
     */
    create: XOR<VoucherCreateInput, VoucherUncheckedCreateInput>
    /**
     * In case the Voucher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoucherUpdateInput, VoucherUncheckedUpdateInput>
  }

  /**
   * Voucher delete
   */
  export type VoucherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter which Voucher to delete.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher deleteMany
   */
  export type VoucherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vouchers to delete
     */
    where?: VoucherWhereInput
    /**
     * Limit how many Vouchers to delete.
     */
    limit?: number
  }

  /**
   * Voucher.transactions
   */
  export type Voucher$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Voucher without action
   */
  export type VoucherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    points_spent: number | null
  }

  export type TransactionSumAggregateOutputType = {
    points_spent: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    voucher_id: string | null
    points_spent: number | null
    redeemed_at: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    voucher_id: string | null
    points_spent: number | null
    redeemed_at: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    user_id: number
    voucher_id: number
    points_spent: number
    redeemed_at: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    points_spent?: true
  }

  export type TransactionSumAggregateInputType = {
    points_spent?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    user_id?: true
    voucher_id?: true
    points_spent?: true
    redeemed_at?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    user_id?: true
    voucher_id?: true
    points_spent?: true
    redeemed_at?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    user_id?: true
    voucher_id?: true
    points_spent?: true
    redeemed_at?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    user_id: string
    voucher_id: string
    points_spent: number
    redeemed_at: Date
    createdAt: Date
    updatedAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    voucher_id?: boolean
    points_spent?: boolean
    redeemed_at?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    voucher?: boolean | VoucherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    voucher_id?: boolean
    points_spent?: boolean
    redeemed_at?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    voucher?: boolean | VoucherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    voucher_id?: boolean
    points_spent?: boolean
    redeemed_at?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    voucher?: boolean | VoucherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    user_id?: boolean
    voucher_id?: boolean
    points_spent?: boolean
    redeemed_at?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "voucher_id" | "points_spent" | "redeemed_at" | "createdAt" | "updatedAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    voucher?: boolean | VoucherDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    voucher?: boolean | VoucherDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProfileDefaultArgs<ExtArgs>
    voucher?: boolean | VoucherDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      user: Prisma.$ProfilePayload<ExtArgs>
      voucher: Prisma.$VoucherPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      voucher_id: string
      points_spent: number
      redeemed_at: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    voucher<T extends VoucherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VoucherDefaultArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly user_id: FieldRef<"Transaction", 'String'>
    readonly voucher_id: FieldRef<"Transaction", 'String'>
    readonly points_spent: FieldRef<"Transaction", 'Int'>
    readonly redeemed_at: FieldRef<"Transaction", 'DateTime'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    admin_id: string | null
    action: string | null
    target_id: string | null
    details: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    admin_id: string | null
    action: string | null
    target_id: string | null
    details: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    admin_id: number
    action: number
    target_id: number
    details: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    admin_id?: true
    action?: true
    target_id?: true
    details?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    admin_id?: true
    action?: true
    target_id?: true
    details?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    admin_id?: true
    action?: true
    target_id?: true
    details?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    admin_id: string
    action: string
    target_id: string | null
    details: string | null
    createdAt: Date
    updatedAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    admin_id?: boolean
    action?: boolean
    target_id?: boolean
    details?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    admin_id?: boolean
    action?: boolean
    target_id?: boolean
    details?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    admin_id?: boolean
    action?: boolean
    target_id?: boolean
    details?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    admin_id?: boolean
    action?: boolean
    target_id?: boolean
    details?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "admin_id" | "action" | "target_id" | "details" | "createdAt" | "updatedAt", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      admin: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      admin_id: string
      action: string
      target_id: string | null
      details: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly admin_id: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly target_id: FieldRef<"AuditLog", 'String'>
    readonly details: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
    readonly updatedAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportMinAggregateOutputType = {
    id: string | null
    report_type: string | null
    file_url: string | null
    generated_at: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportMaxAggregateOutputType = {
    id: string | null
    report_type: string | null
    file_url: string | null
    generated_at: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    report_type: number
    file_url: number
    generated_at: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReportMinAggregateInputType = {
    id?: true
    report_type?: true
    file_url?: true
    generated_at?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    report_type?: true
    file_url?: true
    generated_at?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    report_type?: true
    file_url?: true
    generated_at?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: string
    report_type: string
    file_url: string
    generated_at: Date
    createdAt: Date
    updatedAt: Date
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    report_type?: boolean
    file_url?: boolean
    generated_at?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["report"]>

  export type ReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    report_type?: boolean
    file_url?: boolean
    generated_at?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["report"]>

  export type ReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    report_type?: boolean
    file_url?: boolean
    generated_at?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["report"]>

  export type ReportSelectScalar = {
    id?: boolean
    report_type?: boolean
    file_url?: boolean
    generated_at?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "report_type" | "file_url" | "generated_at" | "createdAt" | "updatedAt", ExtArgs["result"]["report"]>

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      report_type: string
      file_url: string
      generated_at: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {ReportCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports and returns the data updated in the database.
     * @param {ReportUpdateManyAndReturnArgs} args - Arguments to update many Reports.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReportUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
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
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Report model
   */
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'String'>
    readonly report_type: FieldRef<"Report", 'String'>
    readonly file_url: FieldRef<"Report", 'String'>
    readonly generated_at: FieldRef<"Report", 'DateTime'>
    readonly createdAt: FieldRef<"Report", 'DateTime'>
    readonly updatedAt: FieldRef<"Report", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Report createManyAndReturn
   */
  export type ReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report updateManyAndReturn
   */
  export type ReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to delete.
     */
    limit?: number
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
  }


  /**
   * Model chatroom
   */

  export type AggregateChatroom = {
    _count: ChatroomCountAggregateOutputType | null
    _min: ChatroomMinAggregateOutputType | null
    _max: ChatroomMaxAggregateOutputType | null
  }

  export type ChatroomMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    name: string | null
    is_public: boolean | null
  }

  export type ChatroomMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    name: string | null
    is_public: boolean | null
  }

  export type ChatroomCountAggregateOutputType = {
    id: number
    created_at: number
    name: number
    is_public: number
    _all: number
  }


  export type ChatroomMinAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
    is_public?: true
  }

  export type ChatroomMaxAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
    is_public?: true
  }

  export type ChatroomCountAggregateInputType = {
    id?: true
    created_at?: true
    name?: true
    is_public?: true
    _all?: true
  }

  export type ChatroomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chatroom to aggregate.
     */
    where?: chatroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatrooms to fetch.
     */
    orderBy?: chatroomOrderByWithRelationInput | chatroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chatroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chatrooms
    **/
    _count?: true | ChatroomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatroomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatroomMaxAggregateInputType
  }

  export type GetChatroomAggregateType<T extends ChatroomAggregateArgs> = {
        [P in keyof T & keyof AggregateChatroom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatroom[P]>
      : GetScalarType<T[P], AggregateChatroom[P]>
  }




  export type chatroomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatroomWhereInput
    orderBy?: chatroomOrderByWithAggregationInput | chatroomOrderByWithAggregationInput[]
    by: ChatroomScalarFieldEnum[] | ChatroomScalarFieldEnum
    having?: chatroomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatroomCountAggregateInputType | true
    _min?: ChatroomMinAggregateInputType
    _max?: ChatroomMaxAggregateInputType
  }

  export type ChatroomGroupByOutputType = {
    id: string
    created_at: Date
    name: string
    is_public: boolean
    _count: ChatroomCountAggregateOutputType | null
    _min: ChatroomMinAggregateOutputType | null
    _max: ChatroomMaxAggregateOutputType | null
  }

  type GetChatroomGroupByPayload<T extends chatroomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatroomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatroomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatroomGroupByOutputType[P]>
            : GetScalarType<T[P], ChatroomGroupByOutputType[P]>
        }
      >
    >


  export type chatroomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
    is_public?: boolean
    chatroom_member?: boolean | chatroom$chatroom_memberArgs<ExtArgs>
    _count?: boolean | ChatroomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatroom"]>

  export type chatroomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
    is_public?: boolean
  }, ExtArgs["result"]["chatroom"]>

  export type chatroomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    name?: boolean
    is_public?: boolean
  }, ExtArgs["result"]["chatroom"]>

  export type chatroomSelectScalar = {
    id?: boolean
    created_at?: boolean
    name?: boolean
    is_public?: boolean
  }

  export type chatroomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "name" | "is_public", ExtArgs["result"]["chatroom"]>
  export type chatroomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatroom_member?: boolean | chatroom$chatroom_memberArgs<ExtArgs>
    _count?: boolean | ChatroomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type chatroomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type chatroomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $chatroomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chatroom"
    objects: {
      chatroom_member: Prisma.$chatroom_memberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      name: string
      is_public: boolean
    }, ExtArgs["result"]["chatroom"]>
    composites: {}
  }

  type chatroomGetPayload<S extends boolean | null | undefined | chatroomDefaultArgs> = $Result.GetResult<Prisma.$chatroomPayload, S>

  type chatroomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chatroomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatroomCountAggregateInputType | true
    }

  export interface chatroomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chatroom'], meta: { name: 'chatroom' } }
    /**
     * Find zero or one Chatroom that matches the filter.
     * @param {chatroomFindUniqueArgs} args - Arguments to find a Chatroom
     * @example
     * // Get one Chatroom
     * const chatroom = await prisma.chatroom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chatroomFindUniqueArgs>(args: SelectSubset<T, chatroomFindUniqueArgs<ExtArgs>>): Prisma__chatroomClient<$Result.GetResult<Prisma.$chatroomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chatroom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chatroomFindUniqueOrThrowArgs} args - Arguments to find a Chatroom
     * @example
     * // Get one Chatroom
     * const chatroom = await prisma.chatroom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chatroomFindUniqueOrThrowArgs>(args: SelectSubset<T, chatroomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chatroomClient<$Result.GetResult<Prisma.$chatroomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chatroom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatroomFindFirstArgs} args - Arguments to find a Chatroom
     * @example
     * // Get one Chatroom
     * const chatroom = await prisma.chatroom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chatroomFindFirstArgs>(args?: SelectSubset<T, chatroomFindFirstArgs<ExtArgs>>): Prisma__chatroomClient<$Result.GetResult<Prisma.$chatroomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chatroom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatroomFindFirstOrThrowArgs} args - Arguments to find a Chatroom
     * @example
     * // Get one Chatroom
     * const chatroom = await prisma.chatroom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chatroomFindFirstOrThrowArgs>(args?: SelectSubset<T, chatroomFindFirstOrThrowArgs<ExtArgs>>): Prisma__chatroomClient<$Result.GetResult<Prisma.$chatroomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chatrooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatroomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chatrooms
     * const chatrooms = await prisma.chatroom.findMany()
     * 
     * // Get first 10 Chatrooms
     * const chatrooms = await prisma.chatroom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatroomWithIdOnly = await prisma.chatroom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chatroomFindManyArgs>(args?: SelectSubset<T, chatroomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatroomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chatroom.
     * @param {chatroomCreateArgs} args - Arguments to create a Chatroom.
     * @example
     * // Create one Chatroom
     * const Chatroom = await prisma.chatroom.create({
     *   data: {
     *     // ... data to create a Chatroom
     *   }
     * })
     * 
     */
    create<T extends chatroomCreateArgs>(args: SelectSubset<T, chatroomCreateArgs<ExtArgs>>): Prisma__chatroomClient<$Result.GetResult<Prisma.$chatroomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chatrooms.
     * @param {chatroomCreateManyArgs} args - Arguments to create many Chatrooms.
     * @example
     * // Create many Chatrooms
     * const chatroom = await prisma.chatroom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chatroomCreateManyArgs>(args?: SelectSubset<T, chatroomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chatrooms and returns the data saved in the database.
     * @param {chatroomCreateManyAndReturnArgs} args - Arguments to create many Chatrooms.
     * @example
     * // Create many Chatrooms
     * const chatroom = await prisma.chatroom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chatrooms and only return the `id`
     * const chatroomWithIdOnly = await prisma.chatroom.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends chatroomCreateManyAndReturnArgs>(args?: SelectSubset<T, chatroomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatroomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chatroom.
     * @param {chatroomDeleteArgs} args - Arguments to delete one Chatroom.
     * @example
     * // Delete one Chatroom
     * const Chatroom = await prisma.chatroom.delete({
     *   where: {
     *     // ... filter to delete one Chatroom
     *   }
     * })
     * 
     */
    delete<T extends chatroomDeleteArgs>(args: SelectSubset<T, chatroomDeleteArgs<ExtArgs>>): Prisma__chatroomClient<$Result.GetResult<Prisma.$chatroomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chatroom.
     * @param {chatroomUpdateArgs} args - Arguments to update one Chatroom.
     * @example
     * // Update one Chatroom
     * const chatroom = await prisma.chatroom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chatroomUpdateArgs>(args: SelectSubset<T, chatroomUpdateArgs<ExtArgs>>): Prisma__chatroomClient<$Result.GetResult<Prisma.$chatroomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chatrooms.
     * @param {chatroomDeleteManyArgs} args - Arguments to filter Chatrooms to delete.
     * @example
     * // Delete a few Chatrooms
     * const { count } = await prisma.chatroom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chatroomDeleteManyArgs>(args?: SelectSubset<T, chatroomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chatrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatroomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chatrooms
     * const chatroom = await prisma.chatroom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chatroomUpdateManyArgs>(args: SelectSubset<T, chatroomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chatrooms and returns the data updated in the database.
     * @param {chatroomUpdateManyAndReturnArgs} args - Arguments to update many Chatrooms.
     * @example
     * // Update many Chatrooms
     * const chatroom = await prisma.chatroom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chatrooms and only return the `id`
     * const chatroomWithIdOnly = await prisma.chatroom.updateManyAndReturn({
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
    updateManyAndReturn<T extends chatroomUpdateManyAndReturnArgs>(args: SelectSubset<T, chatroomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatroomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chatroom.
     * @param {chatroomUpsertArgs} args - Arguments to update or create a Chatroom.
     * @example
     * // Update or create a Chatroom
     * const chatroom = await prisma.chatroom.upsert({
     *   create: {
     *     // ... data to create a Chatroom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chatroom we want to update
     *   }
     * })
     */
    upsert<T extends chatroomUpsertArgs>(args: SelectSubset<T, chatroomUpsertArgs<ExtArgs>>): Prisma__chatroomClient<$Result.GetResult<Prisma.$chatroomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chatrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatroomCountArgs} args - Arguments to filter Chatrooms to count.
     * @example
     * // Count the number of Chatrooms
     * const count = await prisma.chatroom.count({
     *   where: {
     *     // ... the filter for the Chatrooms we want to count
     *   }
     * })
    **/
    count<T extends chatroomCountArgs>(
      args?: Subset<T, chatroomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatroomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chatroom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatroomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatroomAggregateArgs>(args: Subset<T, ChatroomAggregateArgs>): Prisma.PrismaPromise<GetChatroomAggregateType<T>>

    /**
     * Group by Chatroom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatroomGroupByArgs} args - Group by arguments.
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
      T extends chatroomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chatroomGroupByArgs['orderBy'] }
        : { orderBy?: chatroomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, chatroomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatroomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chatroom model
   */
  readonly fields: chatroomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chatroom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chatroomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatroom_member<T extends chatroom$chatroom_memberArgs<ExtArgs> = {}>(args?: Subset<T, chatroom$chatroom_memberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatroom_memberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the chatroom model
   */
  interface chatroomFieldRefs {
    readonly id: FieldRef<"chatroom", 'String'>
    readonly created_at: FieldRef<"chatroom", 'DateTime'>
    readonly name: FieldRef<"chatroom", 'String'>
    readonly is_public: FieldRef<"chatroom", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * chatroom findUnique
   */
  export type chatroomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatroom
     */
    select?: chatroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatroom
     */
    omit?: chatroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatroomInclude<ExtArgs> | null
    /**
     * Filter, which chatroom to fetch.
     */
    where: chatroomWhereUniqueInput
  }

  /**
   * chatroom findUniqueOrThrow
   */
  export type chatroomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatroom
     */
    select?: chatroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatroom
     */
    omit?: chatroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatroomInclude<ExtArgs> | null
    /**
     * Filter, which chatroom to fetch.
     */
    where: chatroomWhereUniqueInput
  }

  /**
   * chatroom findFirst
   */
  export type chatroomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatroom
     */
    select?: chatroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatroom
     */
    omit?: chatroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatroomInclude<ExtArgs> | null
    /**
     * Filter, which chatroom to fetch.
     */
    where?: chatroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatrooms to fetch.
     */
    orderBy?: chatroomOrderByWithRelationInput | chatroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chatrooms.
     */
    cursor?: chatroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatrooms.
     */
    distinct?: ChatroomScalarFieldEnum | ChatroomScalarFieldEnum[]
  }

  /**
   * chatroom findFirstOrThrow
   */
  export type chatroomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatroom
     */
    select?: chatroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatroom
     */
    omit?: chatroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatroomInclude<ExtArgs> | null
    /**
     * Filter, which chatroom to fetch.
     */
    where?: chatroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatrooms to fetch.
     */
    orderBy?: chatroomOrderByWithRelationInput | chatroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chatrooms.
     */
    cursor?: chatroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatrooms.
     */
    distinct?: ChatroomScalarFieldEnum | ChatroomScalarFieldEnum[]
  }

  /**
   * chatroom findMany
   */
  export type chatroomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatroom
     */
    select?: chatroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatroom
     */
    omit?: chatroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatroomInclude<ExtArgs> | null
    /**
     * Filter, which chatrooms to fetch.
     */
    where?: chatroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatrooms to fetch.
     */
    orderBy?: chatroomOrderByWithRelationInput | chatroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chatrooms.
     */
    cursor?: chatroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatrooms.
     */
    skip?: number
    distinct?: ChatroomScalarFieldEnum | ChatroomScalarFieldEnum[]
  }

  /**
   * chatroom create
   */
  export type chatroomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatroom
     */
    select?: chatroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatroom
     */
    omit?: chatroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatroomInclude<ExtArgs> | null
    /**
     * The data needed to create a chatroom.
     */
    data: XOR<chatroomCreateInput, chatroomUncheckedCreateInput>
  }

  /**
   * chatroom createMany
   */
  export type chatroomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chatrooms.
     */
    data: chatroomCreateManyInput | chatroomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chatroom createManyAndReturn
   */
  export type chatroomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatroom
     */
    select?: chatroomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chatroom
     */
    omit?: chatroomOmit<ExtArgs> | null
    /**
     * The data used to create many chatrooms.
     */
    data: chatroomCreateManyInput | chatroomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chatroom update
   */
  export type chatroomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatroom
     */
    select?: chatroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatroom
     */
    omit?: chatroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatroomInclude<ExtArgs> | null
    /**
     * The data needed to update a chatroom.
     */
    data: XOR<chatroomUpdateInput, chatroomUncheckedUpdateInput>
    /**
     * Choose, which chatroom to update.
     */
    where: chatroomWhereUniqueInput
  }

  /**
   * chatroom updateMany
   */
  export type chatroomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chatrooms.
     */
    data: XOR<chatroomUpdateManyMutationInput, chatroomUncheckedUpdateManyInput>
    /**
     * Filter which chatrooms to update
     */
    where?: chatroomWhereInput
    /**
     * Limit how many chatrooms to update.
     */
    limit?: number
  }

  /**
   * chatroom updateManyAndReturn
   */
  export type chatroomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatroom
     */
    select?: chatroomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chatroom
     */
    omit?: chatroomOmit<ExtArgs> | null
    /**
     * The data used to update chatrooms.
     */
    data: XOR<chatroomUpdateManyMutationInput, chatroomUncheckedUpdateManyInput>
    /**
     * Filter which chatrooms to update
     */
    where?: chatroomWhereInput
    /**
     * Limit how many chatrooms to update.
     */
    limit?: number
  }

  /**
   * chatroom upsert
   */
  export type chatroomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatroom
     */
    select?: chatroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatroom
     */
    omit?: chatroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatroomInclude<ExtArgs> | null
    /**
     * The filter to search for the chatroom to update in case it exists.
     */
    where: chatroomWhereUniqueInput
    /**
     * In case the chatroom found by the `where` argument doesn't exist, create a new chatroom with this data.
     */
    create: XOR<chatroomCreateInput, chatroomUncheckedCreateInput>
    /**
     * In case the chatroom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chatroomUpdateInput, chatroomUncheckedUpdateInput>
  }

  /**
   * chatroom delete
   */
  export type chatroomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatroom
     */
    select?: chatroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatroom
     */
    omit?: chatroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatroomInclude<ExtArgs> | null
    /**
     * Filter which chatroom to delete.
     */
    where: chatroomWhereUniqueInput
  }

  /**
   * chatroom deleteMany
   */
  export type chatroomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chatrooms to delete
     */
    where?: chatroomWhereInput
    /**
     * Limit how many chatrooms to delete.
     */
    limit?: number
  }

  /**
   * chatroom.chatroom_member
   */
  export type chatroom$chatroom_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatroom_member
     */
    select?: chatroom_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatroom_member
     */
    omit?: chatroom_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatroom_memberInclude<ExtArgs> | null
    where?: chatroom_memberWhereInput
    orderBy?: chatroom_memberOrderByWithRelationInput | chatroom_memberOrderByWithRelationInput[]
    cursor?: chatroom_memberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Chatroom_memberScalarFieldEnum | Chatroom_memberScalarFieldEnum[]
  }

  /**
   * chatroom without action
   */
  export type chatroomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatroom
     */
    select?: chatroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatroom
     */
    omit?: chatroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatroomInclude<ExtArgs> | null
  }


  /**
   * Model chatroom_member
   */

  export type AggregateChatroom_member = {
    _count: Chatroom_memberCountAggregateOutputType | null
    _min: Chatroom_memberMinAggregateOutputType | null
    _max: Chatroom_memberMaxAggregateOutputType | null
  }

  export type Chatroom_memberMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    member_id: string | null
    chatroom_id: string | null
  }

  export type Chatroom_memberMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    member_id: string | null
    chatroom_id: string | null
  }

  export type Chatroom_memberCountAggregateOutputType = {
    id: number
    created_at: number
    member_id: number
    chatroom_id: number
    _all: number
  }


  export type Chatroom_memberMinAggregateInputType = {
    id?: true
    created_at?: true
    member_id?: true
    chatroom_id?: true
  }

  export type Chatroom_memberMaxAggregateInputType = {
    id?: true
    created_at?: true
    member_id?: true
    chatroom_id?: true
  }

  export type Chatroom_memberCountAggregateInputType = {
    id?: true
    created_at?: true
    member_id?: true
    chatroom_id?: true
    _all?: true
  }

  export type Chatroom_memberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chatroom_member to aggregate.
     */
    where?: chatroom_memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatroom_members to fetch.
     */
    orderBy?: chatroom_memberOrderByWithRelationInput | chatroom_memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chatroom_memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatroom_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatroom_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chatroom_members
    **/
    _count?: true | Chatroom_memberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Chatroom_memberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Chatroom_memberMaxAggregateInputType
  }

  export type GetChatroom_memberAggregateType<T extends Chatroom_memberAggregateArgs> = {
        [P in keyof T & keyof AggregateChatroom_member]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatroom_member[P]>
      : GetScalarType<T[P], AggregateChatroom_member[P]>
  }




  export type chatroom_memberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatroom_memberWhereInput
    orderBy?: chatroom_memberOrderByWithAggregationInput | chatroom_memberOrderByWithAggregationInput[]
    by: Chatroom_memberScalarFieldEnum[] | Chatroom_memberScalarFieldEnum
    having?: chatroom_memberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Chatroom_memberCountAggregateInputType | true
    _min?: Chatroom_memberMinAggregateInputType
    _max?: Chatroom_memberMaxAggregateInputType
  }

  export type Chatroom_memberGroupByOutputType = {
    id: string
    created_at: Date
    member_id: string
    chatroom_id: string
    _count: Chatroom_memberCountAggregateOutputType | null
    _min: Chatroom_memberMinAggregateOutputType | null
    _max: Chatroom_memberMaxAggregateOutputType | null
  }

  type GetChatroom_memberGroupByPayload<T extends chatroom_memberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Chatroom_memberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Chatroom_memberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Chatroom_memberGroupByOutputType[P]>
            : GetScalarType<T[P], Chatroom_memberGroupByOutputType[P]>
        }
      >
    >


  export type chatroom_memberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    member_id?: boolean
    chatroom_id?: boolean
    chatroom?: boolean | chatroomDefaultArgs<ExtArgs>
    profiles?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatroom_member"]>

  export type chatroom_memberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    member_id?: boolean
    chatroom_id?: boolean
    chatroom?: boolean | chatroomDefaultArgs<ExtArgs>
    profiles?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatroom_member"]>

  export type chatroom_memberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    member_id?: boolean
    chatroom_id?: boolean
    chatroom?: boolean | chatroomDefaultArgs<ExtArgs>
    profiles?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatroom_member"]>

  export type chatroom_memberSelectScalar = {
    id?: boolean
    created_at?: boolean
    member_id?: boolean
    chatroom_id?: boolean
  }

  export type chatroom_memberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "member_id" | "chatroom_id", ExtArgs["result"]["chatroom_member"]>
  export type chatroom_memberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatroom?: boolean | chatroomDefaultArgs<ExtArgs>
    profiles?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type chatroom_memberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatroom?: boolean | chatroomDefaultArgs<ExtArgs>
    profiles?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type chatroom_memberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatroom?: boolean | chatroomDefaultArgs<ExtArgs>
    profiles?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $chatroom_memberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chatroom_member"
    objects: {
      chatroom: Prisma.$chatroomPayload<ExtArgs>
      profiles: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date
      member_id: string
      chatroom_id: string
    }, ExtArgs["result"]["chatroom_member"]>
    composites: {}
  }

  type chatroom_memberGetPayload<S extends boolean | null | undefined | chatroom_memberDefaultArgs> = $Result.GetResult<Prisma.$chatroom_memberPayload, S>

  type chatroom_memberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chatroom_memberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Chatroom_memberCountAggregateInputType | true
    }

  export interface chatroom_memberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chatroom_member'], meta: { name: 'chatroom_member' } }
    /**
     * Find zero or one Chatroom_member that matches the filter.
     * @param {chatroom_memberFindUniqueArgs} args - Arguments to find a Chatroom_member
     * @example
     * // Get one Chatroom_member
     * const chatroom_member = await prisma.chatroom_member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chatroom_memberFindUniqueArgs>(args: SelectSubset<T, chatroom_memberFindUniqueArgs<ExtArgs>>): Prisma__chatroom_memberClient<$Result.GetResult<Prisma.$chatroom_memberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chatroom_member that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chatroom_memberFindUniqueOrThrowArgs} args - Arguments to find a Chatroom_member
     * @example
     * // Get one Chatroom_member
     * const chatroom_member = await prisma.chatroom_member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chatroom_memberFindUniqueOrThrowArgs>(args: SelectSubset<T, chatroom_memberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chatroom_memberClient<$Result.GetResult<Prisma.$chatroom_memberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chatroom_member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatroom_memberFindFirstArgs} args - Arguments to find a Chatroom_member
     * @example
     * // Get one Chatroom_member
     * const chatroom_member = await prisma.chatroom_member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chatroom_memberFindFirstArgs>(args?: SelectSubset<T, chatroom_memberFindFirstArgs<ExtArgs>>): Prisma__chatroom_memberClient<$Result.GetResult<Prisma.$chatroom_memberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chatroom_member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatroom_memberFindFirstOrThrowArgs} args - Arguments to find a Chatroom_member
     * @example
     * // Get one Chatroom_member
     * const chatroom_member = await prisma.chatroom_member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chatroom_memberFindFirstOrThrowArgs>(args?: SelectSubset<T, chatroom_memberFindFirstOrThrowArgs<ExtArgs>>): Prisma__chatroom_memberClient<$Result.GetResult<Prisma.$chatroom_memberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chatroom_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatroom_memberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chatroom_members
     * const chatroom_members = await prisma.chatroom_member.findMany()
     * 
     * // Get first 10 Chatroom_members
     * const chatroom_members = await prisma.chatroom_member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatroom_memberWithIdOnly = await prisma.chatroom_member.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chatroom_memberFindManyArgs>(args?: SelectSubset<T, chatroom_memberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatroom_memberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chatroom_member.
     * @param {chatroom_memberCreateArgs} args - Arguments to create a Chatroom_member.
     * @example
     * // Create one Chatroom_member
     * const Chatroom_member = await prisma.chatroom_member.create({
     *   data: {
     *     // ... data to create a Chatroom_member
     *   }
     * })
     * 
     */
    create<T extends chatroom_memberCreateArgs>(args: SelectSubset<T, chatroom_memberCreateArgs<ExtArgs>>): Prisma__chatroom_memberClient<$Result.GetResult<Prisma.$chatroom_memberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chatroom_members.
     * @param {chatroom_memberCreateManyArgs} args - Arguments to create many Chatroom_members.
     * @example
     * // Create many Chatroom_members
     * const chatroom_member = await prisma.chatroom_member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chatroom_memberCreateManyArgs>(args?: SelectSubset<T, chatroom_memberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chatroom_members and returns the data saved in the database.
     * @param {chatroom_memberCreateManyAndReturnArgs} args - Arguments to create many Chatroom_members.
     * @example
     * // Create many Chatroom_members
     * const chatroom_member = await prisma.chatroom_member.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chatroom_members and only return the `id`
     * const chatroom_memberWithIdOnly = await prisma.chatroom_member.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends chatroom_memberCreateManyAndReturnArgs>(args?: SelectSubset<T, chatroom_memberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatroom_memberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chatroom_member.
     * @param {chatroom_memberDeleteArgs} args - Arguments to delete one Chatroom_member.
     * @example
     * // Delete one Chatroom_member
     * const Chatroom_member = await prisma.chatroom_member.delete({
     *   where: {
     *     // ... filter to delete one Chatroom_member
     *   }
     * })
     * 
     */
    delete<T extends chatroom_memberDeleteArgs>(args: SelectSubset<T, chatroom_memberDeleteArgs<ExtArgs>>): Prisma__chatroom_memberClient<$Result.GetResult<Prisma.$chatroom_memberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chatroom_member.
     * @param {chatroom_memberUpdateArgs} args - Arguments to update one Chatroom_member.
     * @example
     * // Update one Chatroom_member
     * const chatroom_member = await prisma.chatroom_member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chatroom_memberUpdateArgs>(args: SelectSubset<T, chatroom_memberUpdateArgs<ExtArgs>>): Prisma__chatroom_memberClient<$Result.GetResult<Prisma.$chatroom_memberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chatroom_members.
     * @param {chatroom_memberDeleteManyArgs} args - Arguments to filter Chatroom_members to delete.
     * @example
     * // Delete a few Chatroom_members
     * const { count } = await prisma.chatroom_member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chatroom_memberDeleteManyArgs>(args?: SelectSubset<T, chatroom_memberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chatroom_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatroom_memberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chatroom_members
     * const chatroom_member = await prisma.chatroom_member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chatroom_memberUpdateManyArgs>(args: SelectSubset<T, chatroom_memberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chatroom_members and returns the data updated in the database.
     * @param {chatroom_memberUpdateManyAndReturnArgs} args - Arguments to update many Chatroom_members.
     * @example
     * // Update many Chatroom_members
     * const chatroom_member = await prisma.chatroom_member.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chatroom_members and only return the `id`
     * const chatroom_memberWithIdOnly = await prisma.chatroom_member.updateManyAndReturn({
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
    updateManyAndReturn<T extends chatroom_memberUpdateManyAndReturnArgs>(args: SelectSubset<T, chatroom_memberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatroom_memberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chatroom_member.
     * @param {chatroom_memberUpsertArgs} args - Arguments to update or create a Chatroom_member.
     * @example
     * // Update or create a Chatroom_member
     * const chatroom_member = await prisma.chatroom_member.upsert({
     *   create: {
     *     // ... data to create a Chatroom_member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chatroom_member we want to update
     *   }
     * })
     */
    upsert<T extends chatroom_memberUpsertArgs>(args: SelectSubset<T, chatroom_memberUpsertArgs<ExtArgs>>): Prisma__chatroom_memberClient<$Result.GetResult<Prisma.$chatroom_memberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chatroom_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatroom_memberCountArgs} args - Arguments to filter Chatroom_members to count.
     * @example
     * // Count the number of Chatroom_members
     * const count = await prisma.chatroom_member.count({
     *   where: {
     *     // ... the filter for the Chatroom_members we want to count
     *   }
     * })
    **/
    count<T extends chatroom_memberCountArgs>(
      args?: Subset<T, chatroom_memberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Chatroom_memberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chatroom_member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chatroom_memberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Chatroom_memberAggregateArgs>(args: Subset<T, Chatroom_memberAggregateArgs>): Prisma.PrismaPromise<GetChatroom_memberAggregateType<T>>

    /**
     * Group by Chatroom_member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatroom_memberGroupByArgs} args - Group by arguments.
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
      T extends chatroom_memberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chatroom_memberGroupByArgs['orderBy'] }
        : { orderBy?: chatroom_memberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, chatroom_memberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatroom_memberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chatroom_member model
   */
  readonly fields: chatroom_memberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chatroom_member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chatroom_memberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatroom<T extends chatroomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, chatroomDefaultArgs<ExtArgs>>): Prisma__chatroomClient<$Result.GetResult<Prisma.$chatroomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profiles<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the chatroom_member model
   */
  interface chatroom_memberFieldRefs {
    readonly id: FieldRef<"chatroom_member", 'String'>
    readonly created_at: FieldRef<"chatroom_member", 'DateTime'>
    readonly member_id: FieldRef<"chatroom_member", 'String'>
    readonly chatroom_id: FieldRef<"chatroom_member", 'String'>
  }
    

  // Custom InputTypes
  /**
   * chatroom_member findUnique
   */
  export type chatroom_memberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatroom_member
     */
    select?: chatroom_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatroom_member
     */
    omit?: chatroom_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatroom_memberInclude<ExtArgs> | null
    /**
     * Filter, which chatroom_member to fetch.
     */
    where: chatroom_memberWhereUniqueInput
  }

  /**
   * chatroom_member findUniqueOrThrow
   */
  export type chatroom_memberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatroom_member
     */
    select?: chatroom_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatroom_member
     */
    omit?: chatroom_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatroom_memberInclude<ExtArgs> | null
    /**
     * Filter, which chatroom_member to fetch.
     */
    where: chatroom_memberWhereUniqueInput
  }

  /**
   * chatroom_member findFirst
   */
  export type chatroom_memberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatroom_member
     */
    select?: chatroom_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatroom_member
     */
    omit?: chatroom_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatroom_memberInclude<ExtArgs> | null
    /**
     * Filter, which chatroom_member to fetch.
     */
    where?: chatroom_memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatroom_members to fetch.
     */
    orderBy?: chatroom_memberOrderByWithRelationInput | chatroom_memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chatroom_members.
     */
    cursor?: chatroom_memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatroom_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatroom_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatroom_members.
     */
    distinct?: Chatroom_memberScalarFieldEnum | Chatroom_memberScalarFieldEnum[]
  }

  /**
   * chatroom_member findFirstOrThrow
   */
  export type chatroom_memberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatroom_member
     */
    select?: chatroom_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatroom_member
     */
    omit?: chatroom_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatroom_memberInclude<ExtArgs> | null
    /**
     * Filter, which chatroom_member to fetch.
     */
    where?: chatroom_memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatroom_members to fetch.
     */
    orderBy?: chatroom_memberOrderByWithRelationInput | chatroom_memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chatroom_members.
     */
    cursor?: chatroom_memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatroom_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatroom_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatroom_members.
     */
    distinct?: Chatroom_memberScalarFieldEnum | Chatroom_memberScalarFieldEnum[]
  }

  /**
   * chatroom_member findMany
   */
  export type chatroom_memberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatroom_member
     */
    select?: chatroom_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatroom_member
     */
    omit?: chatroom_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatroom_memberInclude<ExtArgs> | null
    /**
     * Filter, which chatroom_members to fetch.
     */
    where?: chatroom_memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatroom_members to fetch.
     */
    orderBy?: chatroom_memberOrderByWithRelationInput | chatroom_memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chatroom_members.
     */
    cursor?: chatroom_memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatroom_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatroom_members.
     */
    skip?: number
    distinct?: Chatroom_memberScalarFieldEnum | Chatroom_memberScalarFieldEnum[]
  }

  /**
   * chatroom_member create
   */
  export type chatroom_memberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatroom_member
     */
    select?: chatroom_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatroom_member
     */
    omit?: chatroom_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatroom_memberInclude<ExtArgs> | null
    /**
     * The data needed to create a chatroom_member.
     */
    data: XOR<chatroom_memberCreateInput, chatroom_memberUncheckedCreateInput>
  }

  /**
   * chatroom_member createMany
   */
  export type chatroom_memberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chatroom_members.
     */
    data: chatroom_memberCreateManyInput | chatroom_memberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chatroom_member createManyAndReturn
   */
  export type chatroom_memberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatroom_member
     */
    select?: chatroom_memberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chatroom_member
     */
    omit?: chatroom_memberOmit<ExtArgs> | null
    /**
     * The data used to create many chatroom_members.
     */
    data: chatroom_memberCreateManyInput | chatroom_memberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatroom_memberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * chatroom_member update
   */
  export type chatroom_memberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatroom_member
     */
    select?: chatroom_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatroom_member
     */
    omit?: chatroom_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatroom_memberInclude<ExtArgs> | null
    /**
     * The data needed to update a chatroom_member.
     */
    data: XOR<chatroom_memberUpdateInput, chatroom_memberUncheckedUpdateInput>
    /**
     * Choose, which chatroom_member to update.
     */
    where: chatroom_memberWhereUniqueInput
  }

  /**
   * chatroom_member updateMany
   */
  export type chatroom_memberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chatroom_members.
     */
    data: XOR<chatroom_memberUpdateManyMutationInput, chatroom_memberUncheckedUpdateManyInput>
    /**
     * Filter which chatroom_members to update
     */
    where?: chatroom_memberWhereInput
    /**
     * Limit how many chatroom_members to update.
     */
    limit?: number
  }

  /**
   * chatroom_member updateManyAndReturn
   */
  export type chatroom_memberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatroom_member
     */
    select?: chatroom_memberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chatroom_member
     */
    omit?: chatroom_memberOmit<ExtArgs> | null
    /**
     * The data used to update chatroom_members.
     */
    data: XOR<chatroom_memberUpdateManyMutationInput, chatroom_memberUncheckedUpdateManyInput>
    /**
     * Filter which chatroom_members to update
     */
    where?: chatroom_memberWhereInput
    /**
     * Limit how many chatroom_members to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatroom_memberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * chatroom_member upsert
   */
  export type chatroom_memberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatroom_member
     */
    select?: chatroom_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatroom_member
     */
    omit?: chatroom_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatroom_memberInclude<ExtArgs> | null
    /**
     * The filter to search for the chatroom_member to update in case it exists.
     */
    where: chatroom_memberWhereUniqueInput
    /**
     * In case the chatroom_member found by the `where` argument doesn't exist, create a new chatroom_member with this data.
     */
    create: XOR<chatroom_memberCreateInput, chatroom_memberUncheckedCreateInput>
    /**
     * In case the chatroom_member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chatroom_memberUpdateInput, chatroom_memberUncheckedUpdateInput>
  }

  /**
   * chatroom_member delete
   */
  export type chatroom_memberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatroom_member
     */
    select?: chatroom_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatroom_member
     */
    omit?: chatroom_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatroom_memberInclude<ExtArgs> | null
    /**
     * Filter which chatroom_member to delete.
     */
    where: chatroom_memberWhereUniqueInput
  }

  /**
   * chatroom_member deleteMany
   */
  export type chatroom_memberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chatroom_members to delete
     */
    where?: chatroom_memberWhereInput
    /**
     * Limit how many chatroom_members to delete.
     */
    limit?: number
  }

  /**
   * chatroom_member without action
   */
  export type chatroom_memberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatroom_member
     */
    select?: chatroom_memberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatroom_member
     */
    omit?: chatroom_memberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatroom_memberInclude<ExtArgs> | null
  }


  /**
   * Model message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: bigint | null
  }

  export type MessageMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    text: string | null
    author_id: string | null
  }

  export type MessageMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    text: string | null
    author_id: string | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    created_at: number
    text: number
    author_id: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    created_at?: true
    text?: true
    author_id?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    created_at?: true
    text?: true
    author_id?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    created_at?: true
    text?: true
    author_id?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which message to aggregate.
     */
    where?: messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type messageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messageWhereInput
    orderBy?: messageOrderByWithAggregationInput | messageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: messageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: bigint
    created_at: Date
    text: string | null
    author_id: string | null
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends messageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type messageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    text?: boolean
    author_id?: boolean
    profiles?: boolean | message$profilesArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type messageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    text?: boolean
    author_id?: boolean
    profiles?: boolean | message$profilesArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type messageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    text?: boolean
    author_id?: boolean
    profiles?: boolean | message$profilesArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type messageSelectScalar = {
    id?: boolean
    created_at?: boolean
    text?: boolean
    author_id?: boolean
  }

  export type messageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "text" | "author_id", ExtArgs["result"]["message"]>
  export type messageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profiles?: boolean | message$profilesArgs<ExtArgs>
  }
  export type messageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profiles?: boolean | message$profilesArgs<ExtArgs>
  }
  export type messageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profiles?: boolean | message$profilesArgs<ExtArgs>
  }

  export type $messagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "message"
    objects: {
      profiles: Prisma.$ProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      text: string | null
      author_id: string | null
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type messageGetPayload<S extends boolean | null | undefined | messageDefaultArgs> = $Result.GetResult<Prisma.$messagePayload, S>

  type messageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<messageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface messageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['message'], meta: { name: 'message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {messageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends messageFindUniqueArgs>(args: SelectSubset<T, messageFindUniqueArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {messageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends messageFindUniqueOrThrowArgs>(args: SelectSubset<T, messageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends messageFindFirstArgs>(args?: SelectSubset<T, messageFindFirstArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends messageFindFirstOrThrowArgs>(args?: SelectSubset<T, messageFindFirstOrThrowArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends messageFindManyArgs>(args?: SelectSubset<T, messageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {messageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends messageCreateArgs>(args: SelectSubset<T, messageCreateArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {messageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends messageCreateManyArgs>(args?: SelectSubset<T, messageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {messageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends messageCreateManyAndReturnArgs>(args?: SelectSubset<T, messageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {messageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends messageDeleteArgs>(args: SelectSubset<T, messageDeleteArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {messageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends messageUpdateArgs>(args: SelectSubset<T, messageUpdateArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {messageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends messageDeleteManyArgs>(args?: SelectSubset<T, messageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends messageUpdateManyArgs>(args: SelectSubset<T, messageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {messageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
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
    updateManyAndReturn<T extends messageUpdateManyAndReturnArgs>(args: SelectSubset<T, messageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {messageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends messageUpsertArgs>(args: SelectSubset<T, messageUpsertArgs<ExtArgs>>): Prisma__messageClient<$Result.GetResult<Prisma.$messagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends messageCountArgs>(
      args?: Subset<T, messageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messageGroupByArgs} args - Group by arguments.
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
      T extends messageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: messageGroupByArgs['orderBy'] }
        : { orderBy?: messageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, messageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the message model
   */
  readonly fields: messageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__messageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profiles<T extends message$profilesArgs<ExtArgs> = {}>(args?: Subset<T, message$profilesArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the message model
   */
  interface messageFieldRefs {
    readonly id: FieldRef<"message", 'BigInt'>
    readonly created_at: FieldRef<"message", 'DateTime'>
    readonly text: FieldRef<"message", 'String'>
    readonly author_id: FieldRef<"message", 'String'>
  }
    

  // Custom InputTypes
  /**
   * message findUnique
   */
  export type messageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter, which message to fetch.
     */
    where: messageWhereUniqueInput
  }

  /**
   * message findUniqueOrThrow
   */
  export type messageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter, which message to fetch.
     */
    where: messageWhereUniqueInput
  }

  /**
   * message findFirst
   */
  export type messageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter, which message to fetch.
     */
    where?: messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * message findFirstOrThrow
   */
  export type messageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter, which message to fetch.
     */
    where?: messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messages.
     */
    cursor?: messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * message findMany
   */
  export type messageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter, which messages to fetch.
     */
    where?: messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messages to fetch.
     */
    orderBy?: messageOrderByWithRelationInput | messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing messages.
     */
    cursor?: messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * message create
   */
  export type messageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * The data needed to create a message.
     */
    data?: XOR<messageCreateInput, messageUncheckedCreateInput>
  }

  /**
   * message createMany
   */
  export type messageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many messages.
     */
    data: messageCreateManyInput | messageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * message createManyAndReturn
   */
  export type messageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * The data used to create many messages.
     */
    data: messageCreateManyInput | messageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * message update
   */
  export type messageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * The data needed to update a message.
     */
    data: XOR<messageUpdateInput, messageUncheckedUpdateInput>
    /**
     * Choose, which message to update.
     */
    where: messageWhereUniqueInput
  }

  /**
   * message updateMany
   */
  export type messageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update messages.
     */
    data: XOR<messageUpdateManyMutationInput, messageUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messageWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
  }

  /**
   * message updateManyAndReturn
   */
  export type messageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * The data used to update messages.
     */
    data: XOR<messageUpdateManyMutationInput, messageUncheckedUpdateManyInput>
    /**
     * Filter which messages to update
     */
    where?: messageWhereInput
    /**
     * Limit how many messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * message upsert
   */
  export type messageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * The filter to search for the message to update in case it exists.
     */
    where: messageWhereUniqueInput
    /**
     * In case the message found by the `where` argument doesn't exist, create a new message with this data.
     */
    create: XOR<messageCreateInput, messageUncheckedCreateInput>
    /**
     * In case the message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<messageUpdateInput, messageUncheckedUpdateInput>
  }

  /**
   * message delete
   */
  export type messageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
    /**
     * Filter which message to delete.
     */
    where: messageWhereUniqueInput
  }

  /**
   * message deleteMany
   */
  export type messageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messages to delete
     */
    where?: messageWhereInput
    /**
     * Limit how many messages to delete.
     */
    limit?: number
  }

  /**
   * message.profiles
   */
  export type message$profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * message without action
   */
  export type messageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the message
     */
    select?: messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the message
     */
    omit?: messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: messageInclude<ExtArgs> | null
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


  export const ProfileScalarFieldEnum: {
    id: 'id',
    username: 'username',
    role: 'role',
    xp_points: 'xp_points',
    sustainability_score: 'sustainability_score',
    attributes: 'attributes',
    avatar_url: 'avatar_url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const CityStateScalarFieldEnum: {
    id: 'id',
    mood: 'mood',
    health_stats: 'health_stats',
    last_updated: 'last_updated',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CityStateScalarFieldEnum = (typeof CityStateScalarFieldEnum)[keyof typeof CityStateScalarFieldEnum]


  export const CityMemoryScalarFieldEnum: {
    id: 'id',
    event_type: 'event_type',
    description: 'description',
    impact_score: 'impact_score',
    created_at: 'created_at',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CityMemoryScalarFieldEnum = (typeof CityMemoryScalarFieldEnum)[keyof typeof CityMemoryScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    category: 'category',
    difficulty: 'difficulty',
    points_reward: 'points_reward',
    verification_type: 'verification_type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const UserTaskProgressScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    task_id: 'task_id',
    status: 'status',
    proof_data: 'proof_data',
    completed_at: 'completed_at',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserTaskProgressScalarFieldEnum = (typeof UserTaskProgressScalarFieldEnum)[keyof typeof UserTaskProgressScalarFieldEnum]


  export const PetitionScalarFieldEnum: {
    id: 'id',
    creator_id: 'creator_id',
    title: 'title',
    description_encrypted: 'description_encrypted',
    location_data: 'location_data',
    support_count: 'support_count',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PetitionScalarFieldEnum = (typeof PetitionScalarFieldEnum)[keyof typeof PetitionScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    author_id: 'author_id',
    content: 'content',
    image_url: 'image_url',
    sentiment_score: 'sentiment_score',
    sdg_tag: 'sdg_tag',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const VoucherScalarFieldEnum: {
    id: 'id',
    title: 'title',
    cost_points: 'cost_points',
    code: 'code',
    stock: 'stock',
    expiry_date: 'expiry_date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VoucherScalarFieldEnum = (typeof VoucherScalarFieldEnum)[keyof typeof VoucherScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    voucher_id: 'voucher_id',
    points_spent: 'points_spent',
    redeemed_at: 'redeemed_at',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    admin_id: 'admin_id',
    action: 'action',
    target_id: 'target_id',
    details: 'details',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    report_type: 'report_type',
    file_url: 'file_url',
    generated_at: 'generated_at',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const ChatroomScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    name: 'name',
    is_public: 'is_public'
  };

  export type ChatroomScalarFieldEnum = (typeof ChatroomScalarFieldEnum)[keyof typeof ChatroomScalarFieldEnum]


  export const Chatroom_memberScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    member_id: 'member_id',
    chatroom_id: 'chatroom_id'
  };

  export type Chatroom_memberScalarFieldEnum = (typeof Chatroom_memberScalarFieldEnum)[keyof typeof Chatroom_memberScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    text: 'text',
    author_id: 'author_id'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'SustainabilityScore'
   */
  export type EnumSustainabilityScoreFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SustainabilityScore'>
    


  /**
   * Reference to a field of type 'SustainabilityScore[]'
   */
  export type ListEnumSustainabilityScoreFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SustainabilityScore[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CityMood'
   */
  export type EnumCityMoodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CityMood'>
    


  /**
   * Reference to a field of type 'CityMood[]'
   */
  export type ListEnumCityMoodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CityMood[]'>
    


  /**
   * Reference to a field of type 'TaskDifficulty'
   */
  export type EnumTaskDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskDifficulty'>
    


  /**
   * Reference to a field of type 'TaskDifficulty[]'
   */
  export type ListEnumTaskDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskDifficulty[]'>
    


  /**
   * Reference to a field of type 'VerificationType'
   */
  export type EnumVerificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationType'>
    


  /**
   * Reference to a field of type 'VerificationType[]'
   */
  export type ListEnumVerificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationType[]'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'TaskStatus[]'
   */
  export type ListEnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus[]'>
    


  /**
   * Reference to a field of type 'PetitionStatus'
   */
  export type EnumPetitionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PetitionStatus'>
    


  /**
   * Reference to a field of type 'PetitionStatus[]'
   */
  export type ListEnumPetitionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PetitionStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    
  /**
   * Deep Input Types
   */


  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: UuidFilter<"Profile"> | string
    username?: StringFilter<"Profile"> | string
    role?: EnumRoleFilter<"Profile"> | $Enums.Role
    xp_points?: IntFilter<"Profile"> | number
    sustainability_score?: EnumSustainabilityScoreFilter<"Profile"> | $Enums.SustainabilityScore
    attributes?: JsonFilter<"Profile">
    avatar_url?: StringNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    auditLogs?: AuditLogListRelationFilter
    chatroom_member?: Chatroom_memberListRelationFilter
    message?: MessageListRelationFilter
    petitions?: PetitionListRelationFilter
    posts?: PostListRelationFilter
    transactions?: TransactionListRelationFilter
    userTaskProgress?: UserTaskProgressListRelationFilter
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    role?: SortOrder
    xp_points?: SortOrder
    sustainability_score?: SortOrder
    attributes?: SortOrder
    avatar_url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    auditLogs?: AuditLogOrderByRelationAggregateInput
    chatroom_member?: chatroom_memberOrderByRelationAggregateInput
    message?: messageOrderByRelationAggregateInput
    petitions?: PetitionOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    userTaskProgress?: UserTaskProgressOrderByRelationAggregateInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    role?: EnumRoleFilter<"Profile"> | $Enums.Role
    xp_points?: IntFilter<"Profile"> | number
    sustainability_score?: EnumSustainabilityScoreFilter<"Profile"> | $Enums.SustainabilityScore
    attributes?: JsonFilter<"Profile">
    avatar_url?: StringNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    auditLogs?: AuditLogListRelationFilter
    chatroom_member?: Chatroom_memberListRelationFilter
    message?: MessageListRelationFilter
    petitions?: PetitionListRelationFilter
    posts?: PostListRelationFilter
    transactions?: TransactionListRelationFilter
    userTaskProgress?: UserTaskProgressListRelationFilter
  }, "id" | "username">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    role?: SortOrder
    xp_points?: SortOrder
    sustainability_score?: SortOrder
    attributes?: SortOrder
    avatar_url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Profile"> | string
    username?: StringWithAggregatesFilter<"Profile"> | string
    role?: EnumRoleWithAggregatesFilter<"Profile"> | $Enums.Role
    xp_points?: IntWithAggregatesFilter<"Profile"> | number
    sustainability_score?: EnumSustainabilityScoreWithAggregatesFilter<"Profile"> | $Enums.SustainabilityScore
    attributes?: JsonWithAggregatesFilter<"Profile">
    avatar_url?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type CityStateWhereInput = {
    AND?: CityStateWhereInput | CityStateWhereInput[]
    OR?: CityStateWhereInput[]
    NOT?: CityStateWhereInput | CityStateWhereInput[]
    id?: UuidFilter<"CityState"> | string
    mood?: EnumCityMoodFilter<"CityState"> | $Enums.CityMood
    health_stats?: JsonFilter<"CityState">
    last_updated?: DateTimeFilter<"CityState"> | Date | string
    createdAt?: DateTimeFilter<"CityState"> | Date | string
    updatedAt?: DateTimeFilter<"CityState"> | Date | string
  }

  export type CityStateOrderByWithRelationInput = {
    id?: SortOrder
    mood?: SortOrder
    health_stats?: SortOrder
    last_updated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CityStateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CityStateWhereInput | CityStateWhereInput[]
    OR?: CityStateWhereInput[]
    NOT?: CityStateWhereInput | CityStateWhereInput[]
    mood?: EnumCityMoodFilter<"CityState"> | $Enums.CityMood
    health_stats?: JsonFilter<"CityState">
    last_updated?: DateTimeFilter<"CityState"> | Date | string
    createdAt?: DateTimeFilter<"CityState"> | Date | string
    updatedAt?: DateTimeFilter<"CityState"> | Date | string
  }, "id">

  export type CityStateOrderByWithAggregationInput = {
    id?: SortOrder
    mood?: SortOrder
    health_stats?: SortOrder
    last_updated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CityStateCountOrderByAggregateInput
    _max?: CityStateMaxOrderByAggregateInput
    _min?: CityStateMinOrderByAggregateInput
  }

  export type CityStateScalarWhereWithAggregatesInput = {
    AND?: CityStateScalarWhereWithAggregatesInput | CityStateScalarWhereWithAggregatesInput[]
    OR?: CityStateScalarWhereWithAggregatesInput[]
    NOT?: CityStateScalarWhereWithAggregatesInput | CityStateScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"CityState"> | string
    mood?: EnumCityMoodWithAggregatesFilter<"CityState"> | $Enums.CityMood
    health_stats?: JsonWithAggregatesFilter<"CityState">
    last_updated?: DateTimeWithAggregatesFilter<"CityState"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"CityState"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CityState"> | Date | string
  }

  export type CityMemoryWhereInput = {
    AND?: CityMemoryWhereInput | CityMemoryWhereInput[]
    OR?: CityMemoryWhereInput[]
    NOT?: CityMemoryWhereInput | CityMemoryWhereInput[]
    id?: UuidFilter<"CityMemory"> | string
    event_type?: StringFilter<"CityMemory"> | string
    description?: StringFilter<"CityMemory"> | string
    impact_score?: IntFilter<"CityMemory"> | number
    created_at?: DateTimeFilter<"CityMemory"> | Date | string
    createdAt?: DateTimeFilter<"CityMemory"> | Date | string
    updatedAt?: DateTimeFilter<"CityMemory"> | Date | string
  }

  export type CityMemoryOrderByWithRelationInput = {
    id?: SortOrder
    event_type?: SortOrder
    description?: SortOrder
    impact_score?: SortOrder
    created_at?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CityMemoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CityMemoryWhereInput | CityMemoryWhereInput[]
    OR?: CityMemoryWhereInput[]
    NOT?: CityMemoryWhereInput | CityMemoryWhereInput[]
    event_type?: StringFilter<"CityMemory"> | string
    description?: StringFilter<"CityMemory"> | string
    impact_score?: IntFilter<"CityMemory"> | number
    created_at?: DateTimeFilter<"CityMemory"> | Date | string
    createdAt?: DateTimeFilter<"CityMemory"> | Date | string
    updatedAt?: DateTimeFilter<"CityMemory"> | Date | string
  }, "id">

  export type CityMemoryOrderByWithAggregationInput = {
    id?: SortOrder
    event_type?: SortOrder
    description?: SortOrder
    impact_score?: SortOrder
    created_at?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CityMemoryCountOrderByAggregateInput
    _avg?: CityMemoryAvgOrderByAggregateInput
    _max?: CityMemoryMaxOrderByAggregateInput
    _min?: CityMemoryMinOrderByAggregateInput
    _sum?: CityMemorySumOrderByAggregateInput
  }

  export type CityMemoryScalarWhereWithAggregatesInput = {
    AND?: CityMemoryScalarWhereWithAggregatesInput | CityMemoryScalarWhereWithAggregatesInput[]
    OR?: CityMemoryScalarWhereWithAggregatesInput[]
    NOT?: CityMemoryScalarWhereWithAggregatesInput | CityMemoryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"CityMemory"> | string
    event_type?: StringWithAggregatesFilter<"CityMemory"> | string
    description?: StringWithAggregatesFilter<"CityMemory"> | string
    impact_score?: IntWithAggregatesFilter<"CityMemory"> | number
    created_at?: DateTimeWithAggregatesFilter<"CityMemory"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"CityMemory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CityMemory"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: UuidFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringFilter<"Task"> | string
    category?: StringFilter<"Task"> | string
    difficulty?: EnumTaskDifficultyFilter<"Task"> | $Enums.TaskDifficulty
    points_reward?: IntFilter<"Task"> | number
    verification_type?: EnumVerificationTypeFilter<"Task"> | $Enums.VerificationType
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    userTaskProgress?: UserTaskProgressListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    points_reward?: SortOrder
    verification_type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userTaskProgress?: UserTaskProgressOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    description?: StringFilter<"Task"> | string
    category?: StringFilter<"Task"> | string
    difficulty?: EnumTaskDifficultyFilter<"Task"> | $Enums.TaskDifficulty
    points_reward?: IntFilter<"Task"> | number
    verification_type?: EnumVerificationTypeFilter<"Task"> | $Enums.VerificationType
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    userTaskProgress?: UserTaskProgressListRelationFilter
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    points_reward?: SortOrder
    verification_type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Task"> | string
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringWithAggregatesFilter<"Task"> | string
    category?: StringWithAggregatesFilter<"Task"> | string
    difficulty?: EnumTaskDifficultyWithAggregatesFilter<"Task"> | $Enums.TaskDifficulty
    points_reward?: IntWithAggregatesFilter<"Task"> | number
    verification_type?: EnumVerificationTypeWithAggregatesFilter<"Task"> | $Enums.VerificationType
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type UserTaskProgressWhereInput = {
    AND?: UserTaskProgressWhereInput | UserTaskProgressWhereInput[]
    OR?: UserTaskProgressWhereInput[]
    NOT?: UserTaskProgressWhereInput | UserTaskProgressWhereInput[]
    id?: UuidFilter<"UserTaskProgress"> | string
    user_id?: UuidFilter<"UserTaskProgress"> | string
    task_id?: UuidFilter<"UserTaskProgress"> | string
    status?: EnumTaskStatusFilter<"UserTaskProgress"> | $Enums.TaskStatus
    proof_data?: StringNullableFilter<"UserTaskProgress"> | string | null
    completed_at?: DateTimeNullableFilter<"UserTaskProgress"> | Date | string | null
    createdAt?: DateTimeFilter<"UserTaskProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserTaskProgress"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type UserTaskProgressOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    task_id?: SortOrder
    status?: SortOrder
    proof_data?: SortOrderInput | SortOrder
    completed_at?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    task?: TaskOrderByWithRelationInput
    user?: ProfileOrderByWithRelationInput
  }

  export type UserTaskProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id_task_id?: UserTaskProgressUser_idTask_idCompoundUniqueInput
    AND?: UserTaskProgressWhereInput | UserTaskProgressWhereInput[]
    OR?: UserTaskProgressWhereInput[]
    NOT?: UserTaskProgressWhereInput | UserTaskProgressWhereInput[]
    user_id?: UuidFilter<"UserTaskProgress"> | string
    task_id?: UuidFilter<"UserTaskProgress"> | string
    status?: EnumTaskStatusFilter<"UserTaskProgress"> | $Enums.TaskStatus
    proof_data?: StringNullableFilter<"UserTaskProgress"> | string | null
    completed_at?: DateTimeNullableFilter<"UserTaskProgress"> | Date | string | null
    createdAt?: DateTimeFilter<"UserTaskProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserTaskProgress"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id" | "user_id_task_id">

  export type UserTaskProgressOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    task_id?: SortOrder
    status?: SortOrder
    proof_data?: SortOrderInput | SortOrder
    completed_at?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserTaskProgressCountOrderByAggregateInput
    _max?: UserTaskProgressMaxOrderByAggregateInput
    _min?: UserTaskProgressMinOrderByAggregateInput
  }

  export type UserTaskProgressScalarWhereWithAggregatesInput = {
    AND?: UserTaskProgressScalarWhereWithAggregatesInput | UserTaskProgressScalarWhereWithAggregatesInput[]
    OR?: UserTaskProgressScalarWhereWithAggregatesInput[]
    NOT?: UserTaskProgressScalarWhereWithAggregatesInput | UserTaskProgressScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"UserTaskProgress"> | string
    user_id?: UuidWithAggregatesFilter<"UserTaskProgress"> | string
    task_id?: UuidWithAggregatesFilter<"UserTaskProgress"> | string
    status?: EnumTaskStatusWithAggregatesFilter<"UserTaskProgress"> | $Enums.TaskStatus
    proof_data?: StringNullableWithAggregatesFilter<"UserTaskProgress"> | string | null
    completed_at?: DateTimeNullableWithAggregatesFilter<"UserTaskProgress"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserTaskProgress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserTaskProgress"> | Date | string
  }

  export type PetitionWhereInput = {
    AND?: PetitionWhereInput | PetitionWhereInput[]
    OR?: PetitionWhereInput[]
    NOT?: PetitionWhereInput | PetitionWhereInput[]
    id?: UuidFilter<"Petition"> | string
    creator_id?: UuidFilter<"Petition"> | string
    title?: StringFilter<"Petition"> | string
    description_encrypted?: StringFilter<"Petition"> | string
    location_data?: StringFilter<"Petition"> | string
    support_count?: IntFilter<"Petition"> | number
    status?: EnumPetitionStatusFilter<"Petition"> | $Enums.PetitionStatus
    createdAt?: DateTimeFilter<"Petition"> | Date | string
    updatedAt?: DateTimeFilter<"Petition"> | Date | string
    creator?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type PetitionOrderByWithRelationInput = {
    id?: SortOrder
    creator_id?: SortOrder
    title?: SortOrder
    description_encrypted?: SortOrder
    location_data?: SortOrder
    support_count?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creator?: ProfileOrderByWithRelationInput
  }

  export type PetitionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PetitionWhereInput | PetitionWhereInput[]
    OR?: PetitionWhereInput[]
    NOT?: PetitionWhereInput | PetitionWhereInput[]
    creator_id?: UuidFilter<"Petition"> | string
    title?: StringFilter<"Petition"> | string
    description_encrypted?: StringFilter<"Petition"> | string
    location_data?: StringFilter<"Petition"> | string
    support_count?: IntFilter<"Petition"> | number
    status?: EnumPetitionStatusFilter<"Petition"> | $Enums.PetitionStatus
    createdAt?: DateTimeFilter<"Petition"> | Date | string
    updatedAt?: DateTimeFilter<"Petition"> | Date | string
    creator?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type PetitionOrderByWithAggregationInput = {
    id?: SortOrder
    creator_id?: SortOrder
    title?: SortOrder
    description_encrypted?: SortOrder
    location_data?: SortOrder
    support_count?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PetitionCountOrderByAggregateInput
    _avg?: PetitionAvgOrderByAggregateInput
    _max?: PetitionMaxOrderByAggregateInput
    _min?: PetitionMinOrderByAggregateInput
    _sum?: PetitionSumOrderByAggregateInput
  }

  export type PetitionScalarWhereWithAggregatesInput = {
    AND?: PetitionScalarWhereWithAggregatesInput | PetitionScalarWhereWithAggregatesInput[]
    OR?: PetitionScalarWhereWithAggregatesInput[]
    NOT?: PetitionScalarWhereWithAggregatesInput | PetitionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Petition"> | string
    creator_id?: UuidWithAggregatesFilter<"Petition"> | string
    title?: StringWithAggregatesFilter<"Petition"> | string
    description_encrypted?: StringWithAggregatesFilter<"Petition"> | string
    location_data?: StringWithAggregatesFilter<"Petition"> | string
    support_count?: IntWithAggregatesFilter<"Petition"> | number
    status?: EnumPetitionStatusWithAggregatesFilter<"Petition"> | $Enums.PetitionStatus
    createdAt?: DateTimeWithAggregatesFilter<"Petition"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Petition"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: UuidFilter<"Post"> | string
    author_id?: UuidFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    image_url?: StringNullableFilter<"Post"> | string | null
    sentiment_score?: FloatNullableFilter<"Post"> | number | null
    sdg_tag?: StringNullableFilter<"Post"> | string | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    author?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    author_id?: SortOrder
    content?: SortOrder
    image_url?: SortOrderInput | SortOrder
    sentiment_score?: SortOrderInput | SortOrder
    sdg_tag?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: ProfileOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    author_id?: UuidFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    image_url?: StringNullableFilter<"Post"> | string | null
    sentiment_score?: FloatNullableFilter<"Post"> | number | null
    sdg_tag?: StringNullableFilter<"Post"> | string | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    author?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    author_id?: SortOrder
    content?: SortOrder
    image_url?: SortOrderInput | SortOrder
    sentiment_score?: SortOrderInput | SortOrder
    sdg_tag?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Post"> | string
    author_id?: UuidWithAggregatesFilter<"Post"> | string
    content?: StringWithAggregatesFilter<"Post"> | string
    image_url?: StringNullableWithAggregatesFilter<"Post"> | string | null
    sentiment_score?: FloatNullableWithAggregatesFilter<"Post"> | number | null
    sdg_tag?: StringNullableWithAggregatesFilter<"Post"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type VoucherWhereInput = {
    AND?: VoucherWhereInput | VoucherWhereInput[]
    OR?: VoucherWhereInput[]
    NOT?: VoucherWhereInput | VoucherWhereInput[]
    id?: UuidFilter<"Voucher"> | string
    title?: StringFilter<"Voucher"> | string
    cost_points?: IntFilter<"Voucher"> | number
    code?: StringFilter<"Voucher"> | string
    stock?: IntFilter<"Voucher"> | number
    expiry_date?: DateTimeFilter<"Voucher"> | Date | string
    createdAt?: DateTimeFilter<"Voucher"> | Date | string
    updatedAt?: DateTimeFilter<"Voucher"> | Date | string
    transactions?: TransactionListRelationFilter
  }

  export type VoucherOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    cost_points?: SortOrder
    code?: SortOrder
    stock?: SortOrder
    expiry_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type VoucherWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: VoucherWhereInput | VoucherWhereInput[]
    OR?: VoucherWhereInput[]
    NOT?: VoucherWhereInput | VoucherWhereInput[]
    title?: StringFilter<"Voucher"> | string
    cost_points?: IntFilter<"Voucher"> | number
    stock?: IntFilter<"Voucher"> | number
    expiry_date?: DateTimeFilter<"Voucher"> | Date | string
    createdAt?: DateTimeFilter<"Voucher"> | Date | string
    updatedAt?: DateTimeFilter<"Voucher"> | Date | string
    transactions?: TransactionListRelationFilter
  }, "id" | "code">

  export type VoucherOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    cost_points?: SortOrder
    code?: SortOrder
    stock?: SortOrder
    expiry_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VoucherCountOrderByAggregateInput
    _avg?: VoucherAvgOrderByAggregateInput
    _max?: VoucherMaxOrderByAggregateInput
    _min?: VoucherMinOrderByAggregateInput
    _sum?: VoucherSumOrderByAggregateInput
  }

  export type VoucherScalarWhereWithAggregatesInput = {
    AND?: VoucherScalarWhereWithAggregatesInput | VoucherScalarWhereWithAggregatesInput[]
    OR?: VoucherScalarWhereWithAggregatesInput[]
    NOT?: VoucherScalarWhereWithAggregatesInput | VoucherScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Voucher"> | string
    title?: StringWithAggregatesFilter<"Voucher"> | string
    cost_points?: IntWithAggregatesFilter<"Voucher"> | number
    code?: StringWithAggregatesFilter<"Voucher"> | string
    stock?: IntWithAggregatesFilter<"Voucher"> | number
    expiry_date?: DateTimeWithAggregatesFilter<"Voucher"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Voucher"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Voucher"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: UuidFilter<"Transaction"> | string
    user_id?: UuidFilter<"Transaction"> | string
    voucher_id?: UuidFilter<"Transaction"> | string
    points_spent?: IntFilter<"Transaction"> | number
    redeemed_at?: DateTimeFilter<"Transaction"> | Date | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    voucher?: XOR<VoucherScalarRelationFilter, VoucherWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    voucher_id?: SortOrder
    points_spent?: SortOrder
    redeemed_at?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: ProfileOrderByWithRelationInput
    voucher?: VoucherOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    user_id?: UuidFilter<"Transaction"> | string
    voucher_id?: UuidFilter<"Transaction"> | string
    points_spent?: IntFilter<"Transaction"> | number
    redeemed_at?: DateTimeFilter<"Transaction"> | Date | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    voucher?: XOR<VoucherScalarRelationFilter, VoucherWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    voucher_id?: SortOrder
    points_spent?: SortOrder
    redeemed_at?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Transaction"> | string
    user_id?: UuidWithAggregatesFilter<"Transaction"> | string
    voucher_id?: UuidWithAggregatesFilter<"Transaction"> | string
    points_spent?: IntWithAggregatesFilter<"Transaction"> | number
    redeemed_at?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: UuidFilter<"AuditLog"> | string
    admin_id?: UuidFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    target_id?: UuidNullableFilter<"AuditLog"> | string | null
    details?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    updatedAt?: DateTimeFilter<"AuditLog"> | Date | string
    admin?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    admin_id?: SortOrder
    action?: SortOrder
    target_id?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    admin?: ProfileOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    admin_id?: UuidFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    target_id?: UuidNullableFilter<"AuditLog"> | string | null
    details?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    updatedAt?: DateTimeFilter<"AuditLog"> | Date | string
    admin?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    admin_id?: SortOrder
    action?: SortOrder
    target_id?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"AuditLog"> | string
    admin_id?: UuidWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    target_id?: UuidNullableWithAggregatesFilter<"AuditLog"> | string | null
    details?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: UuidFilter<"Report"> | string
    report_type?: StringFilter<"Report"> | string
    file_url?: StringFilter<"Report"> | string
    generated_at?: DateTimeFilter<"Report"> | Date | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    report_type?: SortOrder
    file_url?: SortOrder
    generated_at?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    report_type?: StringFilter<"Report"> | string
    file_url?: StringFilter<"Report"> | string
    generated_at?: DateTimeFilter<"Report"> | Date | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
  }, "id">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    report_type?: SortOrder
    file_url?: SortOrder
    generated_at?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReportCountOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Report"> | string
    report_type?: StringWithAggregatesFilter<"Report"> | string
    file_url?: StringWithAggregatesFilter<"Report"> | string
    generated_at?: DateTimeWithAggregatesFilter<"Report"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
  }

  export type chatroomWhereInput = {
    AND?: chatroomWhereInput | chatroomWhereInput[]
    OR?: chatroomWhereInput[]
    NOT?: chatroomWhereInput | chatroomWhereInput[]
    id?: UuidFilter<"chatroom"> | string
    created_at?: DateTimeFilter<"chatroom"> | Date | string
    name?: StringFilter<"chatroom"> | string
    is_public?: BoolFilter<"chatroom"> | boolean
    chatroom_member?: Chatroom_memberListRelationFilter
  }

  export type chatroomOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    is_public?: SortOrder
    chatroom_member?: chatroom_memberOrderByRelationAggregateInput
  }

  export type chatroomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: chatroomWhereInput | chatroomWhereInput[]
    OR?: chatroomWhereInput[]
    NOT?: chatroomWhereInput | chatroomWhereInput[]
    created_at?: DateTimeFilter<"chatroom"> | Date | string
    name?: StringFilter<"chatroom"> | string
    is_public?: BoolFilter<"chatroom"> | boolean
    chatroom_member?: Chatroom_memberListRelationFilter
  }, "id">

  export type chatroomOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    is_public?: SortOrder
    _count?: chatroomCountOrderByAggregateInput
    _max?: chatroomMaxOrderByAggregateInput
    _min?: chatroomMinOrderByAggregateInput
  }

  export type chatroomScalarWhereWithAggregatesInput = {
    AND?: chatroomScalarWhereWithAggregatesInput | chatroomScalarWhereWithAggregatesInput[]
    OR?: chatroomScalarWhereWithAggregatesInput[]
    NOT?: chatroomScalarWhereWithAggregatesInput | chatroomScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"chatroom"> | string
    created_at?: DateTimeWithAggregatesFilter<"chatroom"> | Date | string
    name?: StringWithAggregatesFilter<"chatroom"> | string
    is_public?: BoolWithAggregatesFilter<"chatroom"> | boolean
  }

  export type chatroom_memberWhereInput = {
    AND?: chatroom_memberWhereInput | chatroom_memberWhereInput[]
    OR?: chatroom_memberWhereInput[]
    NOT?: chatroom_memberWhereInput | chatroom_memberWhereInput[]
    id?: UuidFilter<"chatroom_member"> | string
    created_at?: DateTimeFilter<"chatroom_member"> | Date | string
    member_id?: UuidFilter<"chatroom_member"> | string
    chatroom_id?: UuidFilter<"chatroom_member"> | string
    chatroom?: XOR<ChatroomScalarRelationFilter, chatroomWhereInput>
    profiles?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type chatroom_memberOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    member_id?: SortOrder
    chatroom_id?: SortOrder
    chatroom?: chatroomOrderByWithRelationInput
    profiles?: ProfileOrderByWithRelationInput
  }

  export type chatroom_memberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: chatroom_memberWhereInput | chatroom_memberWhereInput[]
    OR?: chatroom_memberWhereInput[]
    NOT?: chatroom_memberWhereInput | chatroom_memberWhereInput[]
    created_at?: DateTimeFilter<"chatroom_member"> | Date | string
    member_id?: UuidFilter<"chatroom_member"> | string
    chatroom_id?: UuidFilter<"chatroom_member"> | string
    chatroom?: XOR<ChatroomScalarRelationFilter, chatroomWhereInput>
    profiles?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type chatroom_memberOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    member_id?: SortOrder
    chatroom_id?: SortOrder
    _count?: chatroom_memberCountOrderByAggregateInput
    _max?: chatroom_memberMaxOrderByAggregateInput
    _min?: chatroom_memberMinOrderByAggregateInput
  }

  export type chatroom_memberScalarWhereWithAggregatesInput = {
    AND?: chatroom_memberScalarWhereWithAggregatesInput | chatroom_memberScalarWhereWithAggregatesInput[]
    OR?: chatroom_memberScalarWhereWithAggregatesInput[]
    NOT?: chatroom_memberScalarWhereWithAggregatesInput | chatroom_memberScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"chatroom_member"> | string
    created_at?: DateTimeWithAggregatesFilter<"chatroom_member"> | Date | string
    member_id?: UuidWithAggregatesFilter<"chatroom_member"> | string
    chatroom_id?: UuidWithAggregatesFilter<"chatroom_member"> | string
  }

  export type messageWhereInput = {
    AND?: messageWhereInput | messageWhereInput[]
    OR?: messageWhereInput[]
    NOT?: messageWhereInput | messageWhereInput[]
    id?: BigIntFilter<"message"> | bigint | number
    created_at?: DateTimeFilter<"message"> | Date | string
    text?: StringNullableFilter<"message"> | string | null
    author_id?: UuidNullableFilter<"message"> | string | null
    profiles?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
  }

  export type messageOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    text?: SortOrderInput | SortOrder
    author_id?: SortOrderInput | SortOrder
    profiles?: ProfileOrderByWithRelationInput
  }

  export type messageWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: messageWhereInput | messageWhereInput[]
    OR?: messageWhereInput[]
    NOT?: messageWhereInput | messageWhereInput[]
    created_at?: DateTimeFilter<"message"> | Date | string
    text?: StringNullableFilter<"message"> | string | null
    author_id?: UuidNullableFilter<"message"> | string | null
    profiles?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
  }, "id">

  export type messageOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    text?: SortOrderInput | SortOrder
    author_id?: SortOrderInput | SortOrder
    _count?: messageCountOrderByAggregateInput
    _avg?: messageAvgOrderByAggregateInput
    _max?: messageMaxOrderByAggregateInput
    _min?: messageMinOrderByAggregateInput
    _sum?: messageSumOrderByAggregateInput
  }

  export type messageScalarWhereWithAggregatesInput = {
    AND?: messageScalarWhereWithAggregatesInput | messageScalarWhereWithAggregatesInput[]
    OR?: messageScalarWhereWithAggregatesInput[]
    NOT?: messageScalarWhereWithAggregatesInput | messageScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"message"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"message"> | Date | string
    text?: StringNullableWithAggregatesFilter<"message"> | string | null
    author_id?: UuidNullableWithAggregatesFilter<"message"> | string | null
  }

  export type ProfileCreateInput = {
    id: string
    username: string
    role?: $Enums.Role
    xp_points?: number
    sustainability_score?: $Enums.SustainabilityScore
    attributes: JsonNullValueInput | InputJsonValue
    avatar_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogCreateNestedManyWithoutAdminInput
    chatroom_member?: chatroom_memberCreateNestedManyWithoutProfilesInput
    message?: messageCreateNestedManyWithoutProfilesInput
    petitions?: PetitionCreateNestedManyWithoutCreatorInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    userTaskProgress?: UserTaskProgressCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateInput = {
    id: string
    username: string
    role?: $Enums.Role
    xp_points?: number
    sustainability_score?: $Enums.SustainabilityScore
    attributes: JsonNullValueInput | InputJsonValue
    avatar_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutAdminInput
    chatroom_member?: chatroom_memberUncheckedCreateNestedManyWithoutProfilesInput
    message?: messageUncheckedCreateNestedManyWithoutProfilesInput
    petitions?: PetitionUncheckedCreateNestedManyWithoutCreatorInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    userTaskProgress?: UserTaskProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    xp_points?: IntFieldUpdateOperationsInput | number
    sustainability_score?: EnumSustainabilityScoreFieldUpdateOperationsInput | $Enums.SustainabilityScore
    attributes?: JsonNullValueInput | InputJsonValue
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUpdateManyWithoutAdminNestedInput
    chatroom_member?: chatroom_memberUpdateManyWithoutProfilesNestedInput
    message?: messageUpdateManyWithoutProfilesNestedInput
    petitions?: PetitionUpdateManyWithoutCreatorNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    userTaskProgress?: UserTaskProgressUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    xp_points?: IntFieldUpdateOperationsInput | number
    sustainability_score?: EnumSustainabilityScoreFieldUpdateOperationsInput | $Enums.SustainabilityScore
    attributes?: JsonNullValueInput | InputJsonValue
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUncheckedUpdateManyWithoutAdminNestedInput
    chatroom_member?: chatroom_memberUncheckedUpdateManyWithoutProfilesNestedInput
    message?: messageUncheckedUpdateManyWithoutProfilesNestedInput
    petitions?: PetitionUncheckedUpdateManyWithoutCreatorNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    userTaskProgress?: UserTaskProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProfileCreateManyInput = {
    id: string
    username: string
    role?: $Enums.Role
    xp_points?: number
    sustainability_score?: $Enums.SustainabilityScore
    attributes: JsonNullValueInput | InputJsonValue
    avatar_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    xp_points?: IntFieldUpdateOperationsInput | number
    sustainability_score?: EnumSustainabilityScoreFieldUpdateOperationsInput | $Enums.SustainabilityScore
    attributes?: JsonNullValueInput | InputJsonValue
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    xp_points?: IntFieldUpdateOperationsInput | number
    sustainability_score?: EnumSustainabilityScoreFieldUpdateOperationsInput | $Enums.SustainabilityScore
    attributes?: JsonNullValueInput | InputJsonValue
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CityStateCreateInput = {
    id: string
    mood: $Enums.CityMood
    health_stats: JsonNullValueInput | InputJsonValue
    last_updated?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CityStateUncheckedCreateInput = {
    id: string
    mood: $Enums.CityMood
    health_stats: JsonNullValueInput | InputJsonValue
    last_updated?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CityStateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mood?: EnumCityMoodFieldUpdateOperationsInput | $Enums.CityMood
    health_stats?: JsonNullValueInput | InputJsonValue
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CityStateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mood?: EnumCityMoodFieldUpdateOperationsInput | $Enums.CityMood
    health_stats?: JsonNullValueInput | InputJsonValue
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CityStateCreateManyInput = {
    id: string
    mood: $Enums.CityMood
    health_stats: JsonNullValueInput | InputJsonValue
    last_updated?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CityStateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mood?: EnumCityMoodFieldUpdateOperationsInput | $Enums.CityMood
    health_stats?: JsonNullValueInput | InputJsonValue
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CityStateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mood?: EnumCityMoodFieldUpdateOperationsInput | $Enums.CityMood
    health_stats?: JsonNullValueInput | InputJsonValue
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CityMemoryCreateInput = {
    id?: string
    event_type: string
    description: string
    impact_score: number
    created_at?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CityMemoryUncheckedCreateInput = {
    id?: string
    event_type: string
    description: string
    impact_score: number
    created_at?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CityMemoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    impact_score?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CityMemoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    impact_score?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CityMemoryCreateManyInput = {
    id?: string
    event_type: string
    description: string
    impact_score: number
    created_at?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CityMemoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    impact_score?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CityMemoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    impact_score?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    id?: string
    title: string
    description: string
    category: string
    difficulty: $Enums.TaskDifficulty
    points_reward: number
    verification_type: $Enums.VerificationType
    createdAt?: Date | string
    updatedAt?: Date | string
    userTaskProgress?: UserTaskProgressCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    category: string
    difficulty: $Enums.TaskDifficulty
    points_reward: number
    verification_type: $Enums.VerificationType
    createdAt?: Date | string
    updatedAt?: Date | string
    userTaskProgress?: UserTaskProgressUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumTaskDifficultyFieldUpdateOperationsInput | $Enums.TaskDifficulty
    points_reward?: IntFieldUpdateOperationsInput | number
    verification_type?: EnumVerificationTypeFieldUpdateOperationsInput | $Enums.VerificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTaskProgress?: UserTaskProgressUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumTaskDifficultyFieldUpdateOperationsInput | $Enums.TaskDifficulty
    points_reward?: IntFieldUpdateOperationsInput | number
    verification_type?: EnumVerificationTypeFieldUpdateOperationsInput | $Enums.VerificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTaskProgress?: UserTaskProgressUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: string
    title: string
    description: string
    category: string
    difficulty: $Enums.TaskDifficulty
    points_reward: number
    verification_type: $Enums.VerificationType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumTaskDifficultyFieldUpdateOperationsInput | $Enums.TaskDifficulty
    points_reward?: IntFieldUpdateOperationsInput | number
    verification_type?: EnumVerificationTypeFieldUpdateOperationsInput | $Enums.VerificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumTaskDifficultyFieldUpdateOperationsInput | $Enums.TaskDifficulty
    points_reward?: IntFieldUpdateOperationsInput | number
    verification_type?: EnumVerificationTypeFieldUpdateOperationsInput | $Enums.VerificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTaskProgressCreateInput = {
    id?: string
    status?: $Enums.TaskStatus
    proof_data?: string | null
    completed_at?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    task: TaskCreateNestedOneWithoutUserTaskProgressInput
    user: ProfileCreateNestedOneWithoutUserTaskProgressInput
  }

  export type UserTaskProgressUncheckedCreateInput = {
    id?: string
    user_id: string
    task_id: string
    status?: $Enums.TaskStatus
    proof_data?: string | null
    completed_at?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserTaskProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    proof_data?: NullableStringFieldUpdateOperationsInput | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutUserTaskProgressNestedInput
    user?: ProfileUpdateOneRequiredWithoutUserTaskProgressNestedInput
  }

  export type UserTaskProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    task_id?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    proof_data?: NullableStringFieldUpdateOperationsInput | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTaskProgressCreateManyInput = {
    id?: string
    user_id: string
    task_id: string
    status?: $Enums.TaskStatus
    proof_data?: string | null
    completed_at?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserTaskProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    proof_data?: NullableStringFieldUpdateOperationsInput | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTaskProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    task_id?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    proof_data?: NullableStringFieldUpdateOperationsInput | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetitionCreateInput = {
    id?: string
    title: string
    description_encrypted: string
    location_data: string
    support_count?: number
    status?: $Enums.PetitionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: ProfileCreateNestedOneWithoutPetitionsInput
  }

  export type PetitionUncheckedCreateInput = {
    id?: string
    creator_id: string
    title: string
    description_encrypted: string
    location_data: string
    support_count?: number
    status?: $Enums.PetitionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PetitionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description_encrypted?: StringFieldUpdateOperationsInput | string
    location_data?: StringFieldUpdateOperationsInput | string
    support_count?: IntFieldUpdateOperationsInput | number
    status?: EnumPetitionStatusFieldUpdateOperationsInput | $Enums.PetitionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: ProfileUpdateOneRequiredWithoutPetitionsNestedInput
  }

  export type PetitionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    creator_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description_encrypted?: StringFieldUpdateOperationsInput | string
    location_data?: StringFieldUpdateOperationsInput | string
    support_count?: IntFieldUpdateOperationsInput | number
    status?: EnumPetitionStatusFieldUpdateOperationsInput | $Enums.PetitionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetitionCreateManyInput = {
    id?: string
    creator_id: string
    title: string
    description_encrypted: string
    location_data: string
    support_count?: number
    status?: $Enums.PetitionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PetitionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description_encrypted?: StringFieldUpdateOperationsInput | string
    location_data?: StringFieldUpdateOperationsInput | string
    support_count?: IntFieldUpdateOperationsInput | number
    status?: EnumPetitionStatusFieldUpdateOperationsInput | $Enums.PetitionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetitionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    creator_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description_encrypted?: StringFieldUpdateOperationsInput | string
    location_data?: StringFieldUpdateOperationsInput | string
    support_count?: IntFieldUpdateOperationsInput | number
    status?: EnumPetitionStatusFieldUpdateOperationsInput | $Enums.PetitionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    id?: string
    content: string
    image_url?: string | null
    sentiment_score?: number | null
    sdg_tag?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author: ProfileCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    author_id: string
    content: string
    image_url?: string | null
    sentiment_score?: number | null
    sdg_tag?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment_score?: NullableFloatFieldUpdateOperationsInput | number | null
    sdg_tag?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: ProfileUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment_score?: NullableFloatFieldUpdateOperationsInput | number | null
    sdg_tag?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateManyInput = {
    id?: string
    author_id: string
    content: string
    image_url?: string | null
    sentiment_score?: number | null
    sdg_tag?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment_score?: NullableFloatFieldUpdateOperationsInput | number | null
    sdg_tag?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment_score?: NullableFloatFieldUpdateOperationsInput | number | null
    sdg_tag?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoucherCreateInput = {
    id?: string
    title: string
    cost_points: number
    code: string
    stock: number
    expiry_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutVoucherInput
  }

  export type VoucherUncheckedCreateInput = {
    id?: string
    title: string
    cost_points: number
    code: string
    stock: number
    expiry_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutVoucherInput
  }

  export type VoucherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    cost_points?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    expiry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutVoucherNestedInput
  }

  export type VoucherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    cost_points?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    expiry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutVoucherNestedInput
  }

  export type VoucherCreateManyInput = {
    id?: string
    title: string
    cost_points: number
    code: string
    stock: number
    expiry_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VoucherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    cost_points?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    expiry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoucherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    cost_points?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    expiry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    id?: string
    points_spent: number
    redeemed_at?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: ProfileCreateNestedOneWithoutTransactionsInput
    voucher: VoucherCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    user_id: string
    voucher_id: string
    points_spent: number
    redeemed_at?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    points_spent?: IntFieldUpdateOperationsInput | number
    redeemed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ProfileUpdateOneRequiredWithoutTransactionsNestedInput
    voucher?: VoucherUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    voucher_id?: StringFieldUpdateOperationsInput | string
    points_spent?: IntFieldUpdateOperationsInput | number
    redeemed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    user_id: string
    voucher_id: string
    points_spent: number
    redeemed_at?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    points_spent?: IntFieldUpdateOperationsInput | number
    redeemed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    voucher_id?: StringFieldUpdateOperationsInput | string
    points_spent?: IntFieldUpdateOperationsInput | number
    redeemed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    target_id?: string | null
    details?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: ProfileCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    admin_id: string
    action: string
    target_id?: string | null
    details?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    target_id?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: ProfileUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    admin_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    target_id?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    admin_id: string
    action: string
    target_id?: string | null
    details?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    target_id?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    admin_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    target_id?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateInput = {
    id?: string
    report_type: string
    file_url: string
    generated_at?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUncheckedCreateInput = {
    id?: string
    report_type: string
    file_url: string
    generated_at?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    report_type?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    report_type?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateManyInput = {
    id?: string
    report_type: string
    file_url: string
    generated_at?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    report_type?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    report_type?: StringFieldUpdateOperationsInput | string
    file_url?: StringFieldUpdateOperationsInput | string
    generated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatroomCreateInput = {
    id?: string
    created_at?: Date | string
    name: string
    is_public: boolean
    chatroom_member?: chatroom_memberCreateNestedManyWithoutChatroomInput
  }

  export type chatroomUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    name: string
    is_public: boolean
    chatroom_member?: chatroom_memberUncheckedCreateNestedManyWithoutChatroomInput
  }

  export type chatroomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    is_public?: BoolFieldUpdateOperationsInput | boolean
    chatroom_member?: chatroom_memberUpdateManyWithoutChatroomNestedInput
  }

  export type chatroomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    is_public?: BoolFieldUpdateOperationsInput | boolean
    chatroom_member?: chatroom_memberUncheckedUpdateManyWithoutChatroomNestedInput
  }

  export type chatroomCreateManyInput = {
    id?: string
    created_at?: Date | string
    name: string
    is_public: boolean
  }

  export type chatroomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    is_public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type chatroomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    is_public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type chatroom_memberCreateInput = {
    id?: string
    created_at?: Date | string
    chatroom: chatroomCreateNestedOneWithoutChatroom_memberInput
    profiles: ProfileCreateNestedOneWithoutChatroom_memberInput
  }

  export type chatroom_memberUncheckedCreateInput = {
    id?: string
    created_at?: Date | string
    member_id: string
    chatroom_id: string
  }

  export type chatroom_memberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chatroom?: chatroomUpdateOneRequiredWithoutChatroom_memberNestedInput
    profiles?: ProfileUpdateOneRequiredWithoutChatroom_memberNestedInput
  }

  export type chatroom_memberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    member_id?: StringFieldUpdateOperationsInput | string
    chatroom_id?: StringFieldUpdateOperationsInput | string
  }

  export type chatroom_memberCreateManyInput = {
    id?: string
    created_at?: Date | string
    member_id: string
    chatroom_id: string
  }

  export type chatroom_memberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatroom_memberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    member_id?: StringFieldUpdateOperationsInput | string
    chatroom_id?: StringFieldUpdateOperationsInput | string
  }

  export type messageCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    text?: string | null
    profiles?: ProfileCreateNestedOneWithoutMessageInput
  }

  export type messageUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    text?: string | null
    author_id?: string | null
  }

  export type messageUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    profiles?: ProfileUpdateOneWithoutMessageNestedInput
  }

  export type messageUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    author_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type messageCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    text?: string | null
    author_id?: string | null
  }

  export type messageUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type messageUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    author_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type EnumSustainabilityScoreFilter<$PrismaModel = never> = {
    equals?: $Enums.SustainabilityScore | EnumSustainabilityScoreFieldRefInput<$PrismaModel>
    in?: $Enums.SustainabilityScore[] | ListEnumSustainabilityScoreFieldRefInput<$PrismaModel>
    notIn?: $Enums.SustainabilityScore[] | ListEnumSustainabilityScoreFieldRefInput<$PrismaModel>
    not?: NestedEnumSustainabilityScoreFilter<$PrismaModel> | $Enums.SustainabilityScore
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type Chatroom_memberListRelationFilter = {
    every?: chatroom_memberWhereInput
    some?: chatroom_memberWhereInput
    none?: chatroom_memberWhereInput
  }

  export type MessageListRelationFilter = {
    every?: messageWhereInput
    some?: messageWhereInput
    none?: messageWhereInput
  }

  export type PetitionListRelationFilter = {
    every?: PetitionWhereInput
    some?: PetitionWhereInput
    none?: PetitionWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type UserTaskProgressListRelationFilter = {
    every?: UserTaskProgressWhereInput
    some?: UserTaskProgressWhereInput
    none?: UserTaskProgressWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type chatroom_memberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type messageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PetitionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserTaskProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    role?: SortOrder
    xp_points?: SortOrder
    sustainability_score?: SortOrder
    attributes?: SortOrder
    avatar_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    xp_points?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    role?: SortOrder
    xp_points?: SortOrder
    sustainability_score?: SortOrder
    avatar_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    role?: SortOrder
    xp_points?: SortOrder
    sustainability_score?: SortOrder
    avatar_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    xp_points?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type EnumSustainabilityScoreWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SustainabilityScore | EnumSustainabilityScoreFieldRefInput<$PrismaModel>
    in?: $Enums.SustainabilityScore[] | ListEnumSustainabilityScoreFieldRefInput<$PrismaModel>
    notIn?: $Enums.SustainabilityScore[] | ListEnumSustainabilityScoreFieldRefInput<$PrismaModel>
    not?: NestedEnumSustainabilityScoreWithAggregatesFilter<$PrismaModel> | $Enums.SustainabilityScore
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSustainabilityScoreFilter<$PrismaModel>
    _max?: NestedEnumSustainabilityScoreFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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

  export type EnumCityMoodFilter<$PrismaModel = never> = {
    equals?: $Enums.CityMood | EnumCityMoodFieldRefInput<$PrismaModel>
    in?: $Enums.CityMood[] | ListEnumCityMoodFieldRefInput<$PrismaModel>
    notIn?: $Enums.CityMood[] | ListEnumCityMoodFieldRefInput<$PrismaModel>
    not?: NestedEnumCityMoodFilter<$PrismaModel> | $Enums.CityMood
  }

  export type CityStateCountOrderByAggregateInput = {
    id?: SortOrder
    mood?: SortOrder
    health_stats?: SortOrder
    last_updated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CityStateMaxOrderByAggregateInput = {
    id?: SortOrder
    mood?: SortOrder
    last_updated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CityStateMinOrderByAggregateInput = {
    id?: SortOrder
    mood?: SortOrder
    last_updated?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCityMoodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CityMood | EnumCityMoodFieldRefInput<$PrismaModel>
    in?: $Enums.CityMood[] | ListEnumCityMoodFieldRefInput<$PrismaModel>
    notIn?: $Enums.CityMood[] | ListEnumCityMoodFieldRefInput<$PrismaModel>
    not?: NestedEnumCityMoodWithAggregatesFilter<$PrismaModel> | $Enums.CityMood
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCityMoodFilter<$PrismaModel>
    _max?: NestedEnumCityMoodFilter<$PrismaModel>
  }

  export type CityMemoryCountOrderByAggregateInput = {
    id?: SortOrder
    event_type?: SortOrder
    description?: SortOrder
    impact_score?: SortOrder
    created_at?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CityMemoryAvgOrderByAggregateInput = {
    impact_score?: SortOrder
  }

  export type CityMemoryMaxOrderByAggregateInput = {
    id?: SortOrder
    event_type?: SortOrder
    description?: SortOrder
    impact_score?: SortOrder
    created_at?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CityMemoryMinOrderByAggregateInput = {
    id?: SortOrder
    event_type?: SortOrder
    description?: SortOrder
    impact_score?: SortOrder
    created_at?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CityMemorySumOrderByAggregateInput = {
    impact_score?: SortOrder
  }

  export type EnumTaskDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskDifficulty | EnumTaskDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.TaskDifficulty[] | ListEnumTaskDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskDifficulty[] | ListEnumTaskDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskDifficultyFilter<$PrismaModel> | $Enums.TaskDifficulty
  }

  export type EnumVerificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationType | EnumVerificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationType[] | ListEnumVerificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationType[] | ListEnumVerificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationTypeFilter<$PrismaModel> | $Enums.VerificationType
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    points_reward?: SortOrder
    verification_type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    points_reward?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    points_reward?: SortOrder
    verification_type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    points_reward?: SortOrder
    verification_type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    points_reward?: SortOrder
  }

  export type EnumTaskDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskDifficulty | EnumTaskDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.TaskDifficulty[] | ListEnumTaskDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskDifficulty[] | ListEnumTaskDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.TaskDifficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskDifficultyFilter<$PrismaModel>
    _max?: NestedEnumTaskDifficultyFilter<$PrismaModel>
  }

  export type EnumVerificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationType | EnumVerificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationType[] | ListEnumVerificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationType[] | ListEnumVerificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.VerificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationTypeFilter<$PrismaModel>
    _max?: NestedEnumVerificationTypeFilter<$PrismaModel>
  }

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
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

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type UserTaskProgressUser_idTask_idCompoundUniqueInput = {
    user_id: string
    task_id: string
  }

  export type UserTaskProgressCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    task_id?: SortOrder
    status?: SortOrder
    proof_data?: SortOrder
    completed_at?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserTaskProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    task_id?: SortOrder
    status?: SortOrder
    proof_data?: SortOrder
    completed_at?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserTaskProgressMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    task_id?: SortOrder
    status?: SortOrder
    proof_data?: SortOrder
    completed_at?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
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

  export type EnumPetitionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PetitionStatus | EnumPetitionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PetitionStatus[] | ListEnumPetitionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetitionStatus[] | ListEnumPetitionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPetitionStatusFilter<$PrismaModel> | $Enums.PetitionStatus
  }

  export type PetitionCountOrderByAggregateInput = {
    id?: SortOrder
    creator_id?: SortOrder
    title?: SortOrder
    description_encrypted?: SortOrder
    location_data?: SortOrder
    support_count?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PetitionAvgOrderByAggregateInput = {
    support_count?: SortOrder
  }

  export type PetitionMaxOrderByAggregateInput = {
    id?: SortOrder
    creator_id?: SortOrder
    title?: SortOrder
    description_encrypted?: SortOrder
    location_data?: SortOrder
    support_count?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PetitionMinOrderByAggregateInput = {
    id?: SortOrder
    creator_id?: SortOrder
    title?: SortOrder
    description_encrypted?: SortOrder
    location_data?: SortOrder
    support_count?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PetitionSumOrderByAggregateInput = {
    support_count?: SortOrder
  }

  export type EnumPetitionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetitionStatus | EnumPetitionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PetitionStatus[] | ListEnumPetitionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetitionStatus[] | ListEnumPetitionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPetitionStatusWithAggregatesFilter<$PrismaModel> | $Enums.PetitionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPetitionStatusFilter<$PrismaModel>
    _max?: NestedEnumPetitionStatusFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    content?: SortOrder
    image_url?: SortOrder
    sentiment_score?: SortOrder
    sdg_tag?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    sentiment_score?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    content?: SortOrder
    image_url?: SortOrder
    sentiment_score?: SortOrder
    sdg_tag?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    content?: SortOrder
    image_url?: SortOrder
    sentiment_score?: SortOrder
    sdg_tag?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    sentiment_score?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type VoucherCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    cost_points?: SortOrder
    code?: SortOrder
    stock?: SortOrder
    expiry_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VoucherAvgOrderByAggregateInput = {
    cost_points?: SortOrder
    stock?: SortOrder
  }

  export type VoucherMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    cost_points?: SortOrder
    code?: SortOrder
    stock?: SortOrder
    expiry_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VoucherMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    cost_points?: SortOrder
    code?: SortOrder
    stock?: SortOrder
    expiry_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VoucherSumOrderByAggregateInput = {
    cost_points?: SortOrder
    stock?: SortOrder
  }

  export type VoucherScalarRelationFilter = {
    is?: VoucherWhereInput
    isNot?: VoucherWhereInput
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    voucher_id?: SortOrder
    points_spent?: SortOrder
    redeemed_at?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    points_spent?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    voucher_id?: SortOrder
    points_spent?: SortOrder
    redeemed_at?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    voucher_id?: SortOrder
    points_spent?: SortOrder
    redeemed_at?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    points_spent?: SortOrder
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    admin_id?: SortOrder
    action?: SortOrder
    target_id?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    admin_id?: SortOrder
    action?: SortOrder
    target_id?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    admin_id?: SortOrder
    action?: SortOrder
    target_id?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    report_type?: SortOrder
    file_url?: SortOrder
    generated_at?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    report_type?: SortOrder
    file_url?: SortOrder
    generated_at?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    report_type?: SortOrder
    file_url?: SortOrder
    generated_at?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type chatroomCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    is_public?: SortOrder
  }

  export type chatroomMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    is_public?: SortOrder
  }

  export type chatroomMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    name?: SortOrder
    is_public?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ChatroomScalarRelationFilter = {
    is?: chatroomWhereInput
    isNot?: chatroomWhereInput
  }

  export type chatroom_memberCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    member_id?: SortOrder
    chatroom_id?: SortOrder
  }

  export type chatroom_memberMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    member_id?: SortOrder
    chatroom_id?: SortOrder
  }

  export type chatroom_memberMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    member_id?: SortOrder
    chatroom_id?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type messageCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    text?: SortOrder
    author_id?: SortOrder
  }

  export type messageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type messageMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    text?: SortOrder
    author_id?: SortOrder
  }

  export type messageMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    text?: SortOrder
    author_id?: SortOrder
  }

  export type messageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type AuditLogCreateNestedManyWithoutAdminInput = {
    create?: XOR<AuditLogCreateWithoutAdminInput, AuditLogUncheckedCreateWithoutAdminInput> | AuditLogCreateWithoutAdminInput[] | AuditLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutAdminInput | AuditLogCreateOrConnectWithoutAdminInput[]
    createMany?: AuditLogCreateManyAdminInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type chatroom_memberCreateNestedManyWithoutProfilesInput = {
    create?: XOR<chatroom_memberCreateWithoutProfilesInput, chatroom_memberUncheckedCreateWithoutProfilesInput> | chatroom_memberCreateWithoutProfilesInput[] | chatroom_memberUncheckedCreateWithoutProfilesInput[]
    connectOrCreate?: chatroom_memberCreateOrConnectWithoutProfilesInput | chatroom_memberCreateOrConnectWithoutProfilesInput[]
    createMany?: chatroom_memberCreateManyProfilesInputEnvelope
    connect?: chatroom_memberWhereUniqueInput | chatroom_memberWhereUniqueInput[]
  }

  export type messageCreateNestedManyWithoutProfilesInput = {
    create?: XOR<messageCreateWithoutProfilesInput, messageUncheckedCreateWithoutProfilesInput> | messageCreateWithoutProfilesInput[] | messageUncheckedCreateWithoutProfilesInput[]
    connectOrCreate?: messageCreateOrConnectWithoutProfilesInput | messageCreateOrConnectWithoutProfilesInput[]
    createMany?: messageCreateManyProfilesInputEnvelope
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
  }

  export type PetitionCreateNestedManyWithoutCreatorInput = {
    create?: XOR<PetitionCreateWithoutCreatorInput, PetitionUncheckedCreateWithoutCreatorInput> | PetitionCreateWithoutCreatorInput[] | PetitionUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PetitionCreateOrConnectWithoutCreatorInput | PetitionCreateOrConnectWithoutCreatorInput[]
    createMany?: PetitionCreateManyCreatorInputEnvelope
    connect?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type UserTaskProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTaskProgressCreateWithoutUserInput, UserTaskProgressUncheckedCreateWithoutUserInput> | UserTaskProgressCreateWithoutUserInput[] | UserTaskProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTaskProgressCreateOrConnectWithoutUserInput | UserTaskProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserTaskProgressCreateManyUserInputEnvelope
    connect?: UserTaskProgressWhereUniqueInput | UserTaskProgressWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<AuditLogCreateWithoutAdminInput, AuditLogUncheckedCreateWithoutAdminInput> | AuditLogCreateWithoutAdminInput[] | AuditLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutAdminInput | AuditLogCreateOrConnectWithoutAdminInput[]
    createMany?: AuditLogCreateManyAdminInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type chatroom_memberUncheckedCreateNestedManyWithoutProfilesInput = {
    create?: XOR<chatroom_memberCreateWithoutProfilesInput, chatroom_memberUncheckedCreateWithoutProfilesInput> | chatroom_memberCreateWithoutProfilesInput[] | chatroom_memberUncheckedCreateWithoutProfilesInput[]
    connectOrCreate?: chatroom_memberCreateOrConnectWithoutProfilesInput | chatroom_memberCreateOrConnectWithoutProfilesInput[]
    createMany?: chatroom_memberCreateManyProfilesInputEnvelope
    connect?: chatroom_memberWhereUniqueInput | chatroom_memberWhereUniqueInput[]
  }

  export type messageUncheckedCreateNestedManyWithoutProfilesInput = {
    create?: XOR<messageCreateWithoutProfilesInput, messageUncheckedCreateWithoutProfilesInput> | messageCreateWithoutProfilesInput[] | messageUncheckedCreateWithoutProfilesInput[]
    connectOrCreate?: messageCreateOrConnectWithoutProfilesInput | messageCreateOrConnectWithoutProfilesInput[]
    createMany?: messageCreateManyProfilesInputEnvelope
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
  }

  export type PetitionUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<PetitionCreateWithoutCreatorInput, PetitionUncheckedCreateWithoutCreatorInput> | PetitionCreateWithoutCreatorInput[] | PetitionUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PetitionCreateOrConnectWithoutCreatorInput | PetitionCreateOrConnectWithoutCreatorInput[]
    createMany?: PetitionCreateManyCreatorInputEnvelope
    connect?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type UserTaskProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTaskProgressCreateWithoutUserInput, UserTaskProgressUncheckedCreateWithoutUserInput> | UserTaskProgressCreateWithoutUserInput[] | UserTaskProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTaskProgressCreateOrConnectWithoutUserInput | UserTaskProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserTaskProgressCreateManyUserInputEnvelope
    connect?: UserTaskProgressWhereUniqueInput | UserTaskProgressWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumSustainabilityScoreFieldUpdateOperationsInput = {
    set?: $Enums.SustainabilityScore
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AuditLogUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AuditLogCreateWithoutAdminInput, AuditLogUncheckedCreateWithoutAdminInput> | AuditLogCreateWithoutAdminInput[] | AuditLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutAdminInput | AuditLogCreateOrConnectWithoutAdminInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutAdminInput | AuditLogUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AuditLogCreateManyAdminInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutAdminInput | AuditLogUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutAdminInput | AuditLogUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type chatroom_memberUpdateManyWithoutProfilesNestedInput = {
    create?: XOR<chatroom_memberCreateWithoutProfilesInput, chatroom_memberUncheckedCreateWithoutProfilesInput> | chatroom_memberCreateWithoutProfilesInput[] | chatroom_memberUncheckedCreateWithoutProfilesInput[]
    connectOrCreate?: chatroom_memberCreateOrConnectWithoutProfilesInput | chatroom_memberCreateOrConnectWithoutProfilesInput[]
    upsert?: chatroom_memberUpsertWithWhereUniqueWithoutProfilesInput | chatroom_memberUpsertWithWhereUniqueWithoutProfilesInput[]
    createMany?: chatroom_memberCreateManyProfilesInputEnvelope
    set?: chatroom_memberWhereUniqueInput | chatroom_memberWhereUniqueInput[]
    disconnect?: chatroom_memberWhereUniqueInput | chatroom_memberWhereUniqueInput[]
    delete?: chatroom_memberWhereUniqueInput | chatroom_memberWhereUniqueInput[]
    connect?: chatroom_memberWhereUniqueInput | chatroom_memberWhereUniqueInput[]
    update?: chatroom_memberUpdateWithWhereUniqueWithoutProfilesInput | chatroom_memberUpdateWithWhereUniqueWithoutProfilesInput[]
    updateMany?: chatroom_memberUpdateManyWithWhereWithoutProfilesInput | chatroom_memberUpdateManyWithWhereWithoutProfilesInput[]
    deleteMany?: chatroom_memberScalarWhereInput | chatroom_memberScalarWhereInput[]
  }

  export type messageUpdateManyWithoutProfilesNestedInput = {
    create?: XOR<messageCreateWithoutProfilesInput, messageUncheckedCreateWithoutProfilesInput> | messageCreateWithoutProfilesInput[] | messageUncheckedCreateWithoutProfilesInput[]
    connectOrCreate?: messageCreateOrConnectWithoutProfilesInput | messageCreateOrConnectWithoutProfilesInput[]
    upsert?: messageUpsertWithWhereUniqueWithoutProfilesInput | messageUpsertWithWhereUniqueWithoutProfilesInput[]
    createMany?: messageCreateManyProfilesInputEnvelope
    set?: messageWhereUniqueInput | messageWhereUniqueInput[]
    disconnect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    delete?: messageWhereUniqueInput | messageWhereUniqueInput[]
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    update?: messageUpdateWithWhereUniqueWithoutProfilesInput | messageUpdateWithWhereUniqueWithoutProfilesInput[]
    updateMany?: messageUpdateManyWithWhereWithoutProfilesInput | messageUpdateManyWithWhereWithoutProfilesInput[]
    deleteMany?: messageScalarWhereInput | messageScalarWhereInput[]
  }

  export type PetitionUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<PetitionCreateWithoutCreatorInput, PetitionUncheckedCreateWithoutCreatorInput> | PetitionCreateWithoutCreatorInput[] | PetitionUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PetitionCreateOrConnectWithoutCreatorInput | PetitionCreateOrConnectWithoutCreatorInput[]
    upsert?: PetitionUpsertWithWhereUniqueWithoutCreatorInput | PetitionUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: PetitionCreateManyCreatorInputEnvelope
    set?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
    disconnect?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
    delete?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
    connect?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
    update?: PetitionUpdateWithWhereUniqueWithoutCreatorInput | PetitionUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: PetitionUpdateManyWithWhereWithoutCreatorInput | PetitionUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: PetitionScalarWhereInput | PetitionScalarWhereInput[]
  }

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserTaskProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTaskProgressCreateWithoutUserInput, UserTaskProgressUncheckedCreateWithoutUserInput> | UserTaskProgressCreateWithoutUserInput[] | UserTaskProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTaskProgressCreateOrConnectWithoutUserInput | UserTaskProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserTaskProgressUpsertWithWhereUniqueWithoutUserInput | UserTaskProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTaskProgressCreateManyUserInputEnvelope
    set?: UserTaskProgressWhereUniqueInput | UserTaskProgressWhereUniqueInput[]
    disconnect?: UserTaskProgressWhereUniqueInput | UserTaskProgressWhereUniqueInput[]
    delete?: UserTaskProgressWhereUniqueInput | UserTaskProgressWhereUniqueInput[]
    connect?: UserTaskProgressWhereUniqueInput | UserTaskProgressWhereUniqueInput[]
    update?: UserTaskProgressUpdateWithWhereUniqueWithoutUserInput | UserTaskProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTaskProgressUpdateManyWithWhereWithoutUserInput | UserTaskProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTaskProgressScalarWhereInput | UserTaskProgressScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AuditLogCreateWithoutAdminInput, AuditLogUncheckedCreateWithoutAdminInput> | AuditLogCreateWithoutAdminInput[] | AuditLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutAdminInput | AuditLogCreateOrConnectWithoutAdminInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutAdminInput | AuditLogUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AuditLogCreateManyAdminInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutAdminInput | AuditLogUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutAdminInput | AuditLogUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type chatroom_memberUncheckedUpdateManyWithoutProfilesNestedInput = {
    create?: XOR<chatroom_memberCreateWithoutProfilesInput, chatroom_memberUncheckedCreateWithoutProfilesInput> | chatroom_memberCreateWithoutProfilesInput[] | chatroom_memberUncheckedCreateWithoutProfilesInput[]
    connectOrCreate?: chatroom_memberCreateOrConnectWithoutProfilesInput | chatroom_memberCreateOrConnectWithoutProfilesInput[]
    upsert?: chatroom_memberUpsertWithWhereUniqueWithoutProfilesInput | chatroom_memberUpsertWithWhereUniqueWithoutProfilesInput[]
    createMany?: chatroom_memberCreateManyProfilesInputEnvelope
    set?: chatroom_memberWhereUniqueInput | chatroom_memberWhereUniqueInput[]
    disconnect?: chatroom_memberWhereUniqueInput | chatroom_memberWhereUniqueInput[]
    delete?: chatroom_memberWhereUniqueInput | chatroom_memberWhereUniqueInput[]
    connect?: chatroom_memberWhereUniqueInput | chatroom_memberWhereUniqueInput[]
    update?: chatroom_memberUpdateWithWhereUniqueWithoutProfilesInput | chatroom_memberUpdateWithWhereUniqueWithoutProfilesInput[]
    updateMany?: chatroom_memberUpdateManyWithWhereWithoutProfilesInput | chatroom_memberUpdateManyWithWhereWithoutProfilesInput[]
    deleteMany?: chatroom_memberScalarWhereInput | chatroom_memberScalarWhereInput[]
  }

  export type messageUncheckedUpdateManyWithoutProfilesNestedInput = {
    create?: XOR<messageCreateWithoutProfilesInput, messageUncheckedCreateWithoutProfilesInput> | messageCreateWithoutProfilesInput[] | messageUncheckedCreateWithoutProfilesInput[]
    connectOrCreate?: messageCreateOrConnectWithoutProfilesInput | messageCreateOrConnectWithoutProfilesInput[]
    upsert?: messageUpsertWithWhereUniqueWithoutProfilesInput | messageUpsertWithWhereUniqueWithoutProfilesInput[]
    createMany?: messageCreateManyProfilesInputEnvelope
    set?: messageWhereUniqueInput | messageWhereUniqueInput[]
    disconnect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    delete?: messageWhereUniqueInput | messageWhereUniqueInput[]
    connect?: messageWhereUniqueInput | messageWhereUniqueInput[]
    update?: messageUpdateWithWhereUniqueWithoutProfilesInput | messageUpdateWithWhereUniqueWithoutProfilesInput[]
    updateMany?: messageUpdateManyWithWhereWithoutProfilesInput | messageUpdateManyWithWhereWithoutProfilesInput[]
    deleteMany?: messageScalarWhereInput | messageScalarWhereInput[]
  }

  export type PetitionUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<PetitionCreateWithoutCreatorInput, PetitionUncheckedCreateWithoutCreatorInput> | PetitionCreateWithoutCreatorInput[] | PetitionUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PetitionCreateOrConnectWithoutCreatorInput | PetitionCreateOrConnectWithoutCreatorInput[]
    upsert?: PetitionUpsertWithWhereUniqueWithoutCreatorInput | PetitionUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: PetitionCreateManyCreatorInputEnvelope
    set?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
    disconnect?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
    delete?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
    connect?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
    update?: PetitionUpdateWithWhereUniqueWithoutCreatorInput | PetitionUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: PetitionUpdateManyWithWhereWithoutCreatorInput | PetitionUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: PetitionScalarWhereInput | PetitionScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserTaskProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTaskProgressCreateWithoutUserInput, UserTaskProgressUncheckedCreateWithoutUserInput> | UserTaskProgressCreateWithoutUserInput[] | UserTaskProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTaskProgressCreateOrConnectWithoutUserInput | UserTaskProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserTaskProgressUpsertWithWhereUniqueWithoutUserInput | UserTaskProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTaskProgressCreateManyUserInputEnvelope
    set?: UserTaskProgressWhereUniqueInput | UserTaskProgressWhereUniqueInput[]
    disconnect?: UserTaskProgressWhereUniqueInput | UserTaskProgressWhereUniqueInput[]
    delete?: UserTaskProgressWhereUniqueInput | UserTaskProgressWhereUniqueInput[]
    connect?: UserTaskProgressWhereUniqueInput | UserTaskProgressWhereUniqueInput[]
    update?: UserTaskProgressUpdateWithWhereUniqueWithoutUserInput | UserTaskProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTaskProgressUpdateManyWithWhereWithoutUserInput | UserTaskProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTaskProgressScalarWhereInput | UserTaskProgressScalarWhereInput[]
  }

  export type EnumCityMoodFieldUpdateOperationsInput = {
    set?: $Enums.CityMood
  }

  export type UserTaskProgressCreateNestedManyWithoutTaskInput = {
    create?: XOR<UserTaskProgressCreateWithoutTaskInput, UserTaskProgressUncheckedCreateWithoutTaskInput> | UserTaskProgressCreateWithoutTaskInput[] | UserTaskProgressUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: UserTaskProgressCreateOrConnectWithoutTaskInput | UserTaskProgressCreateOrConnectWithoutTaskInput[]
    createMany?: UserTaskProgressCreateManyTaskInputEnvelope
    connect?: UserTaskProgressWhereUniqueInput | UserTaskProgressWhereUniqueInput[]
  }

  export type UserTaskProgressUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<UserTaskProgressCreateWithoutTaskInput, UserTaskProgressUncheckedCreateWithoutTaskInput> | UserTaskProgressCreateWithoutTaskInput[] | UserTaskProgressUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: UserTaskProgressCreateOrConnectWithoutTaskInput | UserTaskProgressCreateOrConnectWithoutTaskInput[]
    createMany?: UserTaskProgressCreateManyTaskInputEnvelope
    connect?: UserTaskProgressWhereUniqueInput | UserTaskProgressWhereUniqueInput[]
  }

  export type EnumTaskDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.TaskDifficulty
  }

  export type EnumVerificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.VerificationType
  }

  export type UserTaskProgressUpdateManyWithoutTaskNestedInput = {
    create?: XOR<UserTaskProgressCreateWithoutTaskInput, UserTaskProgressUncheckedCreateWithoutTaskInput> | UserTaskProgressCreateWithoutTaskInput[] | UserTaskProgressUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: UserTaskProgressCreateOrConnectWithoutTaskInput | UserTaskProgressCreateOrConnectWithoutTaskInput[]
    upsert?: UserTaskProgressUpsertWithWhereUniqueWithoutTaskInput | UserTaskProgressUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: UserTaskProgressCreateManyTaskInputEnvelope
    set?: UserTaskProgressWhereUniqueInput | UserTaskProgressWhereUniqueInput[]
    disconnect?: UserTaskProgressWhereUniqueInput | UserTaskProgressWhereUniqueInput[]
    delete?: UserTaskProgressWhereUniqueInput | UserTaskProgressWhereUniqueInput[]
    connect?: UserTaskProgressWhereUniqueInput | UserTaskProgressWhereUniqueInput[]
    update?: UserTaskProgressUpdateWithWhereUniqueWithoutTaskInput | UserTaskProgressUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: UserTaskProgressUpdateManyWithWhereWithoutTaskInput | UserTaskProgressUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: UserTaskProgressScalarWhereInput | UserTaskProgressScalarWhereInput[]
  }

  export type UserTaskProgressUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<UserTaskProgressCreateWithoutTaskInput, UserTaskProgressUncheckedCreateWithoutTaskInput> | UserTaskProgressCreateWithoutTaskInput[] | UserTaskProgressUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: UserTaskProgressCreateOrConnectWithoutTaskInput | UserTaskProgressCreateOrConnectWithoutTaskInput[]
    upsert?: UserTaskProgressUpsertWithWhereUniqueWithoutTaskInput | UserTaskProgressUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: UserTaskProgressCreateManyTaskInputEnvelope
    set?: UserTaskProgressWhereUniqueInput | UserTaskProgressWhereUniqueInput[]
    disconnect?: UserTaskProgressWhereUniqueInput | UserTaskProgressWhereUniqueInput[]
    delete?: UserTaskProgressWhereUniqueInput | UserTaskProgressWhereUniqueInput[]
    connect?: UserTaskProgressWhereUniqueInput | UserTaskProgressWhereUniqueInput[]
    update?: UserTaskProgressUpdateWithWhereUniqueWithoutTaskInput | UserTaskProgressUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: UserTaskProgressUpdateManyWithWhereWithoutTaskInput | UserTaskProgressUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: UserTaskProgressScalarWhereInput | UserTaskProgressScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutUserTaskProgressInput = {
    create?: XOR<TaskCreateWithoutUserTaskProgressInput, TaskUncheckedCreateWithoutUserTaskProgressInput>
    connectOrCreate?: TaskCreateOrConnectWithoutUserTaskProgressInput
    connect?: TaskWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutUserTaskProgressInput = {
    create?: XOR<ProfileCreateWithoutUserTaskProgressInput, ProfileUncheckedCreateWithoutUserTaskProgressInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserTaskProgressInput
    connect?: ProfileWhereUniqueInput
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TaskUpdateOneRequiredWithoutUserTaskProgressNestedInput = {
    create?: XOR<TaskCreateWithoutUserTaskProgressInput, TaskUncheckedCreateWithoutUserTaskProgressInput>
    connectOrCreate?: TaskCreateOrConnectWithoutUserTaskProgressInput
    upsert?: TaskUpsertWithoutUserTaskProgressInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutUserTaskProgressInput, TaskUpdateWithoutUserTaskProgressInput>, TaskUncheckedUpdateWithoutUserTaskProgressInput>
  }

  export type ProfileUpdateOneRequiredWithoutUserTaskProgressNestedInput = {
    create?: XOR<ProfileCreateWithoutUserTaskProgressInput, ProfileUncheckedCreateWithoutUserTaskProgressInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserTaskProgressInput
    upsert?: ProfileUpsertWithoutUserTaskProgressInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserTaskProgressInput, ProfileUpdateWithoutUserTaskProgressInput>, ProfileUncheckedUpdateWithoutUserTaskProgressInput>
  }

  export type ProfileCreateNestedOneWithoutPetitionsInput = {
    create?: XOR<ProfileCreateWithoutPetitionsInput, ProfileUncheckedCreateWithoutPetitionsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutPetitionsInput
    connect?: ProfileWhereUniqueInput
  }

  export type EnumPetitionStatusFieldUpdateOperationsInput = {
    set?: $Enums.PetitionStatus
  }

  export type ProfileUpdateOneRequiredWithoutPetitionsNestedInput = {
    create?: XOR<ProfileCreateWithoutPetitionsInput, ProfileUncheckedCreateWithoutPetitionsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutPetitionsInput
    upsert?: ProfileUpsertWithoutPetitionsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutPetitionsInput, ProfileUpdateWithoutPetitionsInput>, ProfileUncheckedUpdateWithoutPetitionsInput>
  }

  export type ProfileCreateNestedOneWithoutPostsInput = {
    create?: XOR<ProfileCreateWithoutPostsInput, ProfileUncheckedCreateWithoutPostsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutPostsInput
    connect?: ProfileWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfileUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<ProfileCreateWithoutPostsInput, ProfileUncheckedCreateWithoutPostsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutPostsInput
    upsert?: ProfileUpsertWithoutPostsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutPostsInput, ProfileUpdateWithoutPostsInput>, ProfileUncheckedUpdateWithoutPostsInput>
  }

  export type TransactionCreateNestedManyWithoutVoucherInput = {
    create?: XOR<TransactionCreateWithoutVoucherInput, TransactionUncheckedCreateWithoutVoucherInput> | TransactionCreateWithoutVoucherInput[] | TransactionUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutVoucherInput | TransactionCreateOrConnectWithoutVoucherInput[]
    createMany?: TransactionCreateManyVoucherInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutVoucherInput = {
    create?: XOR<TransactionCreateWithoutVoucherInput, TransactionUncheckedCreateWithoutVoucherInput> | TransactionCreateWithoutVoucherInput[] | TransactionUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutVoucherInput | TransactionCreateOrConnectWithoutVoucherInput[]
    createMany?: TransactionCreateManyVoucherInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUpdateManyWithoutVoucherNestedInput = {
    create?: XOR<TransactionCreateWithoutVoucherInput, TransactionUncheckedCreateWithoutVoucherInput> | TransactionCreateWithoutVoucherInput[] | TransactionUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutVoucherInput | TransactionCreateOrConnectWithoutVoucherInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutVoucherInput | TransactionUpsertWithWhereUniqueWithoutVoucherInput[]
    createMany?: TransactionCreateManyVoucherInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutVoucherInput | TransactionUpdateWithWhereUniqueWithoutVoucherInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutVoucherInput | TransactionUpdateManyWithWhereWithoutVoucherInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutVoucherNestedInput = {
    create?: XOR<TransactionCreateWithoutVoucherInput, TransactionUncheckedCreateWithoutVoucherInput> | TransactionCreateWithoutVoucherInput[] | TransactionUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutVoucherInput | TransactionCreateOrConnectWithoutVoucherInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutVoucherInput | TransactionUpsertWithWhereUniqueWithoutVoucherInput[]
    createMany?: TransactionCreateManyVoucherInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutVoucherInput | TransactionUpdateWithWhereUniqueWithoutVoucherInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutVoucherInput | TransactionUpdateManyWithWhereWithoutVoucherInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<ProfileCreateWithoutTransactionsInput, ProfileUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutTransactionsInput
    connect?: ProfileWhereUniqueInput
  }

  export type VoucherCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<VoucherCreateWithoutTransactionsInput, VoucherUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: VoucherCreateOrConnectWithoutTransactionsInput
    connect?: VoucherWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<ProfileCreateWithoutTransactionsInput, ProfileUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutTransactionsInput
    upsert?: ProfileUpsertWithoutTransactionsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutTransactionsInput, ProfileUpdateWithoutTransactionsInput>, ProfileUncheckedUpdateWithoutTransactionsInput>
  }

  export type VoucherUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<VoucherCreateWithoutTransactionsInput, VoucherUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: VoucherCreateOrConnectWithoutTransactionsInput
    upsert?: VoucherUpsertWithoutTransactionsInput
    connect?: VoucherWhereUniqueInput
    update?: XOR<XOR<VoucherUpdateToOneWithWhereWithoutTransactionsInput, VoucherUpdateWithoutTransactionsInput>, VoucherUncheckedUpdateWithoutTransactionsInput>
  }

  export type ProfileCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<ProfileCreateWithoutAuditLogsInput, ProfileUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutAuditLogsInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<ProfileCreateWithoutAuditLogsInput, ProfileUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutAuditLogsInput
    upsert?: ProfileUpsertWithoutAuditLogsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutAuditLogsInput, ProfileUpdateWithoutAuditLogsInput>, ProfileUncheckedUpdateWithoutAuditLogsInput>
  }

  export type chatroom_memberCreateNestedManyWithoutChatroomInput = {
    create?: XOR<chatroom_memberCreateWithoutChatroomInput, chatroom_memberUncheckedCreateWithoutChatroomInput> | chatroom_memberCreateWithoutChatroomInput[] | chatroom_memberUncheckedCreateWithoutChatroomInput[]
    connectOrCreate?: chatroom_memberCreateOrConnectWithoutChatroomInput | chatroom_memberCreateOrConnectWithoutChatroomInput[]
    createMany?: chatroom_memberCreateManyChatroomInputEnvelope
    connect?: chatroom_memberWhereUniqueInput | chatroom_memberWhereUniqueInput[]
  }

  export type chatroom_memberUncheckedCreateNestedManyWithoutChatroomInput = {
    create?: XOR<chatroom_memberCreateWithoutChatroomInput, chatroom_memberUncheckedCreateWithoutChatroomInput> | chatroom_memberCreateWithoutChatroomInput[] | chatroom_memberUncheckedCreateWithoutChatroomInput[]
    connectOrCreate?: chatroom_memberCreateOrConnectWithoutChatroomInput | chatroom_memberCreateOrConnectWithoutChatroomInput[]
    createMany?: chatroom_memberCreateManyChatroomInputEnvelope
    connect?: chatroom_memberWhereUniqueInput | chatroom_memberWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type chatroom_memberUpdateManyWithoutChatroomNestedInput = {
    create?: XOR<chatroom_memberCreateWithoutChatroomInput, chatroom_memberUncheckedCreateWithoutChatroomInput> | chatroom_memberCreateWithoutChatroomInput[] | chatroom_memberUncheckedCreateWithoutChatroomInput[]
    connectOrCreate?: chatroom_memberCreateOrConnectWithoutChatroomInput | chatroom_memberCreateOrConnectWithoutChatroomInput[]
    upsert?: chatroom_memberUpsertWithWhereUniqueWithoutChatroomInput | chatroom_memberUpsertWithWhereUniqueWithoutChatroomInput[]
    createMany?: chatroom_memberCreateManyChatroomInputEnvelope
    set?: chatroom_memberWhereUniqueInput | chatroom_memberWhereUniqueInput[]
    disconnect?: chatroom_memberWhereUniqueInput | chatroom_memberWhereUniqueInput[]
    delete?: chatroom_memberWhereUniqueInput | chatroom_memberWhereUniqueInput[]
    connect?: chatroom_memberWhereUniqueInput | chatroom_memberWhereUniqueInput[]
    update?: chatroom_memberUpdateWithWhereUniqueWithoutChatroomInput | chatroom_memberUpdateWithWhereUniqueWithoutChatroomInput[]
    updateMany?: chatroom_memberUpdateManyWithWhereWithoutChatroomInput | chatroom_memberUpdateManyWithWhereWithoutChatroomInput[]
    deleteMany?: chatroom_memberScalarWhereInput | chatroom_memberScalarWhereInput[]
  }

  export type chatroom_memberUncheckedUpdateManyWithoutChatroomNestedInput = {
    create?: XOR<chatroom_memberCreateWithoutChatroomInput, chatroom_memberUncheckedCreateWithoutChatroomInput> | chatroom_memberCreateWithoutChatroomInput[] | chatroom_memberUncheckedCreateWithoutChatroomInput[]
    connectOrCreate?: chatroom_memberCreateOrConnectWithoutChatroomInput | chatroom_memberCreateOrConnectWithoutChatroomInput[]
    upsert?: chatroom_memberUpsertWithWhereUniqueWithoutChatroomInput | chatroom_memberUpsertWithWhereUniqueWithoutChatroomInput[]
    createMany?: chatroom_memberCreateManyChatroomInputEnvelope
    set?: chatroom_memberWhereUniqueInput | chatroom_memberWhereUniqueInput[]
    disconnect?: chatroom_memberWhereUniqueInput | chatroom_memberWhereUniqueInput[]
    delete?: chatroom_memberWhereUniqueInput | chatroom_memberWhereUniqueInput[]
    connect?: chatroom_memberWhereUniqueInput | chatroom_memberWhereUniqueInput[]
    update?: chatroom_memberUpdateWithWhereUniqueWithoutChatroomInput | chatroom_memberUpdateWithWhereUniqueWithoutChatroomInput[]
    updateMany?: chatroom_memberUpdateManyWithWhereWithoutChatroomInput | chatroom_memberUpdateManyWithWhereWithoutChatroomInput[]
    deleteMany?: chatroom_memberScalarWhereInput | chatroom_memberScalarWhereInput[]
  }

  export type chatroomCreateNestedOneWithoutChatroom_memberInput = {
    create?: XOR<chatroomCreateWithoutChatroom_memberInput, chatroomUncheckedCreateWithoutChatroom_memberInput>
    connectOrCreate?: chatroomCreateOrConnectWithoutChatroom_memberInput
    connect?: chatroomWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutChatroom_memberInput = {
    create?: XOR<ProfileCreateWithoutChatroom_memberInput, ProfileUncheckedCreateWithoutChatroom_memberInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutChatroom_memberInput
    connect?: ProfileWhereUniqueInput
  }

  export type chatroomUpdateOneRequiredWithoutChatroom_memberNestedInput = {
    create?: XOR<chatroomCreateWithoutChatroom_memberInput, chatroomUncheckedCreateWithoutChatroom_memberInput>
    connectOrCreate?: chatroomCreateOrConnectWithoutChatroom_memberInput
    upsert?: chatroomUpsertWithoutChatroom_memberInput
    connect?: chatroomWhereUniqueInput
    update?: XOR<XOR<chatroomUpdateToOneWithWhereWithoutChatroom_memberInput, chatroomUpdateWithoutChatroom_memberInput>, chatroomUncheckedUpdateWithoutChatroom_memberInput>
  }

  export type ProfileUpdateOneRequiredWithoutChatroom_memberNestedInput = {
    create?: XOR<ProfileCreateWithoutChatroom_memberInput, ProfileUncheckedCreateWithoutChatroom_memberInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutChatroom_memberInput
    upsert?: ProfileUpsertWithoutChatroom_memberInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutChatroom_memberInput, ProfileUpdateWithoutChatroom_memberInput>, ProfileUncheckedUpdateWithoutChatroom_memberInput>
  }

  export type ProfileCreateNestedOneWithoutMessageInput = {
    create?: XOR<ProfileCreateWithoutMessageInput, ProfileUncheckedCreateWithoutMessageInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutMessageInput
    connect?: ProfileWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type ProfileUpdateOneWithoutMessageNestedInput = {
    create?: XOR<ProfileCreateWithoutMessageInput, ProfileUncheckedCreateWithoutMessageInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutMessageInput
    upsert?: ProfileUpsertWithoutMessageInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutMessageInput, ProfileUpdateWithoutMessageInput>, ProfileUncheckedUpdateWithoutMessageInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumSustainabilityScoreFilter<$PrismaModel = never> = {
    equals?: $Enums.SustainabilityScore | EnumSustainabilityScoreFieldRefInput<$PrismaModel>
    in?: $Enums.SustainabilityScore[] | ListEnumSustainabilityScoreFieldRefInput<$PrismaModel>
    notIn?: $Enums.SustainabilityScore[] | ListEnumSustainabilityScoreFieldRefInput<$PrismaModel>
    not?: NestedEnumSustainabilityScoreFilter<$PrismaModel> | $Enums.SustainabilityScore
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumSustainabilityScoreWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SustainabilityScore | EnumSustainabilityScoreFieldRefInput<$PrismaModel>
    in?: $Enums.SustainabilityScore[] | ListEnumSustainabilityScoreFieldRefInput<$PrismaModel>
    notIn?: $Enums.SustainabilityScore[] | ListEnumSustainabilityScoreFieldRefInput<$PrismaModel>
    not?: NestedEnumSustainabilityScoreWithAggregatesFilter<$PrismaModel> | $Enums.SustainabilityScore
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSustainabilityScoreFilter<$PrismaModel>
    _max?: NestedEnumSustainabilityScoreFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedEnumCityMoodFilter<$PrismaModel = never> = {
    equals?: $Enums.CityMood | EnumCityMoodFieldRefInput<$PrismaModel>
    in?: $Enums.CityMood[] | ListEnumCityMoodFieldRefInput<$PrismaModel>
    notIn?: $Enums.CityMood[] | ListEnumCityMoodFieldRefInput<$PrismaModel>
    not?: NestedEnumCityMoodFilter<$PrismaModel> | $Enums.CityMood
  }

  export type NestedEnumCityMoodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CityMood | EnumCityMoodFieldRefInput<$PrismaModel>
    in?: $Enums.CityMood[] | ListEnumCityMoodFieldRefInput<$PrismaModel>
    notIn?: $Enums.CityMood[] | ListEnumCityMoodFieldRefInput<$PrismaModel>
    not?: NestedEnumCityMoodWithAggregatesFilter<$PrismaModel> | $Enums.CityMood
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCityMoodFilter<$PrismaModel>
    _max?: NestedEnumCityMoodFilter<$PrismaModel>
  }

  export type NestedEnumTaskDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskDifficulty | EnumTaskDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.TaskDifficulty[] | ListEnumTaskDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskDifficulty[] | ListEnumTaskDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskDifficultyFilter<$PrismaModel> | $Enums.TaskDifficulty
  }

  export type NestedEnumVerificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationType | EnumVerificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationType[] | ListEnumVerificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationType[] | ListEnumVerificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationTypeFilter<$PrismaModel> | $Enums.VerificationType
  }

  export type NestedEnumTaskDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskDifficulty | EnumTaskDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.TaskDifficulty[] | ListEnumTaskDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskDifficulty[] | ListEnumTaskDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.TaskDifficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskDifficultyFilter<$PrismaModel>
    _max?: NestedEnumTaskDifficultyFilter<$PrismaModel>
  }

  export type NestedEnumVerificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationType | EnumVerificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationType[] | ListEnumVerificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationType[] | ListEnumVerificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.VerificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationTypeFilter<$PrismaModel>
    _max?: NestedEnumVerificationTypeFilter<$PrismaModel>
  }

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
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

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
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

  export type NestedEnumPetitionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PetitionStatus | EnumPetitionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PetitionStatus[] | ListEnumPetitionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetitionStatus[] | ListEnumPetitionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPetitionStatusFilter<$PrismaModel> | $Enums.PetitionStatus
  }

  export type NestedEnumPetitionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetitionStatus | EnumPetitionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PetitionStatus[] | ListEnumPetitionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetitionStatus[] | ListEnumPetitionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPetitionStatusWithAggregatesFilter<$PrismaModel> | $Enums.PetitionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPetitionStatusFilter<$PrismaModel>
    _max?: NestedEnumPetitionStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type AuditLogCreateWithoutAdminInput = {
    id?: string
    action: string
    target_id?: string | null
    details?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutAdminInput = {
    id?: string
    action: string
    target_id?: string | null
    details?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutAdminInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutAdminInput, AuditLogUncheckedCreateWithoutAdminInput>
  }

  export type AuditLogCreateManyAdminInputEnvelope = {
    data: AuditLogCreateManyAdminInput | AuditLogCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type chatroom_memberCreateWithoutProfilesInput = {
    id?: string
    created_at?: Date | string
    chatroom: chatroomCreateNestedOneWithoutChatroom_memberInput
  }

  export type chatroom_memberUncheckedCreateWithoutProfilesInput = {
    id?: string
    created_at?: Date | string
    chatroom_id: string
  }

  export type chatroom_memberCreateOrConnectWithoutProfilesInput = {
    where: chatroom_memberWhereUniqueInput
    create: XOR<chatroom_memberCreateWithoutProfilesInput, chatroom_memberUncheckedCreateWithoutProfilesInput>
  }

  export type chatroom_memberCreateManyProfilesInputEnvelope = {
    data: chatroom_memberCreateManyProfilesInput | chatroom_memberCreateManyProfilesInput[]
    skipDuplicates?: boolean
  }

  export type messageCreateWithoutProfilesInput = {
    id?: bigint | number
    created_at?: Date | string
    text?: string | null
  }

  export type messageUncheckedCreateWithoutProfilesInput = {
    id?: bigint | number
    created_at?: Date | string
    text?: string | null
  }

  export type messageCreateOrConnectWithoutProfilesInput = {
    where: messageWhereUniqueInput
    create: XOR<messageCreateWithoutProfilesInput, messageUncheckedCreateWithoutProfilesInput>
  }

  export type messageCreateManyProfilesInputEnvelope = {
    data: messageCreateManyProfilesInput | messageCreateManyProfilesInput[]
    skipDuplicates?: boolean
  }

  export type PetitionCreateWithoutCreatorInput = {
    id?: string
    title: string
    description_encrypted: string
    location_data: string
    support_count?: number
    status?: $Enums.PetitionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PetitionUncheckedCreateWithoutCreatorInput = {
    id?: string
    title: string
    description_encrypted: string
    location_data: string
    support_count?: number
    status?: $Enums.PetitionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PetitionCreateOrConnectWithoutCreatorInput = {
    where: PetitionWhereUniqueInput
    create: XOR<PetitionCreateWithoutCreatorInput, PetitionUncheckedCreateWithoutCreatorInput>
  }

  export type PetitionCreateManyCreatorInputEnvelope = {
    data: PetitionCreateManyCreatorInput | PetitionCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutAuthorInput = {
    id?: string
    content: string
    image_url?: string | null
    sentiment_score?: number | null
    sdg_tag?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: string
    content: string
    image_url?: string | null
    sentiment_score?: number | null
    sdg_tag?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: PostCreateManyAuthorInput | PostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutUserInput = {
    id?: string
    points_spent: number
    redeemed_at?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    voucher: VoucherCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: string
    voucher_id: string
    points_spent: number
    redeemed_at?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserTaskProgressCreateWithoutUserInput = {
    id?: string
    status?: $Enums.TaskStatus
    proof_data?: string | null
    completed_at?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    task: TaskCreateNestedOneWithoutUserTaskProgressInput
  }

  export type UserTaskProgressUncheckedCreateWithoutUserInput = {
    id?: string
    task_id: string
    status?: $Enums.TaskStatus
    proof_data?: string | null
    completed_at?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserTaskProgressCreateOrConnectWithoutUserInput = {
    where: UserTaskProgressWhereUniqueInput
    create: XOR<UserTaskProgressCreateWithoutUserInput, UserTaskProgressUncheckedCreateWithoutUserInput>
  }

  export type UserTaskProgressCreateManyUserInputEnvelope = {
    data: UserTaskProgressCreateManyUserInput | UserTaskProgressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogUpsertWithWhereUniqueWithoutAdminInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutAdminInput, AuditLogUncheckedUpdateWithoutAdminInput>
    create: XOR<AuditLogCreateWithoutAdminInput, AuditLogUncheckedCreateWithoutAdminInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutAdminInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutAdminInput, AuditLogUncheckedUpdateWithoutAdminInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutAdminInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutAdminInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: UuidFilter<"AuditLog"> | string
    admin_id?: UuidFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    target_id?: UuidNullableFilter<"AuditLog"> | string | null
    details?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    updatedAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type chatroom_memberUpsertWithWhereUniqueWithoutProfilesInput = {
    where: chatroom_memberWhereUniqueInput
    update: XOR<chatroom_memberUpdateWithoutProfilesInput, chatroom_memberUncheckedUpdateWithoutProfilesInput>
    create: XOR<chatroom_memberCreateWithoutProfilesInput, chatroom_memberUncheckedCreateWithoutProfilesInput>
  }

  export type chatroom_memberUpdateWithWhereUniqueWithoutProfilesInput = {
    where: chatroom_memberWhereUniqueInput
    data: XOR<chatroom_memberUpdateWithoutProfilesInput, chatroom_memberUncheckedUpdateWithoutProfilesInput>
  }

  export type chatroom_memberUpdateManyWithWhereWithoutProfilesInput = {
    where: chatroom_memberScalarWhereInput
    data: XOR<chatroom_memberUpdateManyMutationInput, chatroom_memberUncheckedUpdateManyWithoutProfilesInput>
  }

  export type chatroom_memberScalarWhereInput = {
    AND?: chatroom_memberScalarWhereInput | chatroom_memberScalarWhereInput[]
    OR?: chatroom_memberScalarWhereInput[]
    NOT?: chatroom_memberScalarWhereInput | chatroom_memberScalarWhereInput[]
    id?: UuidFilter<"chatroom_member"> | string
    created_at?: DateTimeFilter<"chatroom_member"> | Date | string
    member_id?: UuidFilter<"chatroom_member"> | string
    chatroom_id?: UuidFilter<"chatroom_member"> | string
  }

  export type messageUpsertWithWhereUniqueWithoutProfilesInput = {
    where: messageWhereUniqueInput
    update: XOR<messageUpdateWithoutProfilesInput, messageUncheckedUpdateWithoutProfilesInput>
    create: XOR<messageCreateWithoutProfilesInput, messageUncheckedCreateWithoutProfilesInput>
  }

  export type messageUpdateWithWhereUniqueWithoutProfilesInput = {
    where: messageWhereUniqueInput
    data: XOR<messageUpdateWithoutProfilesInput, messageUncheckedUpdateWithoutProfilesInput>
  }

  export type messageUpdateManyWithWhereWithoutProfilesInput = {
    where: messageScalarWhereInput
    data: XOR<messageUpdateManyMutationInput, messageUncheckedUpdateManyWithoutProfilesInput>
  }

  export type messageScalarWhereInput = {
    AND?: messageScalarWhereInput | messageScalarWhereInput[]
    OR?: messageScalarWhereInput[]
    NOT?: messageScalarWhereInput | messageScalarWhereInput[]
    id?: BigIntFilter<"message"> | bigint | number
    created_at?: DateTimeFilter<"message"> | Date | string
    text?: StringNullableFilter<"message"> | string | null
    author_id?: UuidNullableFilter<"message"> | string | null
  }

  export type PetitionUpsertWithWhereUniqueWithoutCreatorInput = {
    where: PetitionWhereUniqueInput
    update: XOR<PetitionUpdateWithoutCreatorInput, PetitionUncheckedUpdateWithoutCreatorInput>
    create: XOR<PetitionCreateWithoutCreatorInput, PetitionUncheckedCreateWithoutCreatorInput>
  }

  export type PetitionUpdateWithWhereUniqueWithoutCreatorInput = {
    where: PetitionWhereUniqueInput
    data: XOR<PetitionUpdateWithoutCreatorInput, PetitionUncheckedUpdateWithoutCreatorInput>
  }

  export type PetitionUpdateManyWithWhereWithoutCreatorInput = {
    where: PetitionScalarWhereInput
    data: XOR<PetitionUpdateManyMutationInput, PetitionUncheckedUpdateManyWithoutCreatorInput>
  }

  export type PetitionScalarWhereInput = {
    AND?: PetitionScalarWhereInput | PetitionScalarWhereInput[]
    OR?: PetitionScalarWhereInput[]
    NOT?: PetitionScalarWhereInput | PetitionScalarWhereInput[]
    id?: UuidFilter<"Petition"> | string
    creator_id?: UuidFilter<"Petition"> | string
    title?: StringFilter<"Petition"> | string
    description_encrypted?: StringFilter<"Petition"> | string
    location_data?: StringFilter<"Petition"> | string
    support_count?: IntFilter<"Petition"> | number
    status?: EnumPetitionStatusFilter<"Petition"> | $Enums.PetitionStatus
    createdAt?: DateTimeFilter<"Petition"> | Date | string
    updatedAt?: DateTimeFilter<"Petition"> | Date | string
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: UuidFilter<"Post"> | string
    author_id?: UuidFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    image_url?: StringNullableFilter<"Post"> | string | null
    sentiment_score?: FloatNullableFilter<"Post"> | number | null
    sdg_tag?: StringNullableFilter<"Post"> | string | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: UuidFilter<"Transaction"> | string
    user_id?: UuidFilter<"Transaction"> | string
    voucher_id?: UuidFilter<"Transaction"> | string
    points_spent?: IntFilter<"Transaction"> | number
    redeemed_at?: DateTimeFilter<"Transaction"> | Date | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type UserTaskProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: UserTaskProgressWhereUniqueInput
    update: XOR<UserTaskProgressUpdateWithoutUserInput, UserTaskProgressUncheckedUpdateWithoutUserInput>
    create: XOR<UserTaskProgressCreateWithoutUserInput, UserTaskProgressUncheckedCreateWithoutUserInput>
  }

  export type UserTaskProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: UserTaskProgressWhereUniqueInput
    data: XOR<UserTaskProgressUpdateWithoutUserInput, UserTaskProgressUncheckedUpdateWithoutUserInput>
  }

  export type UserTaskProgressUpdateManyWithWhereWithoutUserInput = {
    where: UserTaskProgressScalarWhereInput
    data: XOR<UserTaskProgressUpdateManyMutationInput, UserTaskProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type UserTaskProgressScalarWhereInput = {
    AND?: UserTaskProgressScalarWhereInput | UserTaskProgressScalarWhereInput[]
    OR?: UserTaskProgressScalarWhereInput[]
    NOT?: UserTaskProgressScalarWhereInput | UserTaskProgressScalarWhereInput[]
    id?: UuidFilter<"UserTaskProgress"> | string
    user_id?: UuidFilter<"UserTaskProgress"> | string
    task_id?: UuidFilter<"UserTaskProgress"> | string
    status?: EnumTaskStatusFilter<"UserTaskProgress"> | $Enums.TaskStatus
    proof_data?: StringNullableFilter<"UserTaskProgress"> | string | null
    completed_at?: DateTimeNullableFilter<"UserTaskProgress"> | Date | string | null
    createdAt?: DateTimeFilter<"UserTaskProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserTaskProgress"> | Date | string
  }

  export type UserTaskProgressCreateWithoutTaskInput = {
    id?: string
    status?: $Enums.TaskStatus
    proof_data?: string | null
    completed_at?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: ProfileCreateNestedOneWithoutUserTaskProgressInput
  }

  export type UserTaskProgressUncheckedCreateWithoutTaskInput = {
    id?: string
    user_id: string
    status?: $Enums.TaskStatus
    proof_data?: string | null
    completed_at?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserTaskProgressCreateOrConnectWithoutTaskInput = {
    where: UserTaskProgressWhereUniqueInput
    create: XOR<UserTaskProgressCreateWithoutTaskInput, UserTaskProgressUncheckedCreateWithoutTaskInput>
  }

  export type UserTaskProgressCreateManyTaskInputEnvelope = {
    data: UserTaskProgressCreateManyTaskInput | UserTaskProgressCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type UserTaskProgressUpsertWithWhereUniqueWithoutTaskInput = {
    where: UserTaskProgressWhereUniqueInput
    update: XOR<UserTaskProgressUpdateWithoutTaskInput, UserTaskProgressUncheckedUpdateWithoutTaskInput>
    create: XOR<UserTaskProgressCreateWithoutTaskInput, UserTaskProgressUncheckedCreateWithoutTaskInput>
  }

  export type UserTaskProgressUpdateWithWhereUniqueWithoutTaskInput = {
    where: UserTaskProgressWhereUniqueInput
    data: XOR<UserTaskProgressUpdateWithoutTaskInput, UserTaskProgressUncheckedUpdateWithoutTaskInput>
  }

  export type UserTaskProgressUpdateManyWithWhereWithoutTaskInput = {
    where: UserTaskProgressScalarWhereInput
    data: XOR<UserTaskProgressUpdateManyMutationInput, UserTaskProgressUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskCreateWithoutUserTaskProgressInput = {
    id?: string
    title: string
    description: string
    category: string
    difficulty: $Enums.TaskDifficulty
    points_reward: number
    verification_type: $Enums.VerificationType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUncheckedCreateWithoutUserTaskProgressInput = {
    id?: string
    title: string
    description: string
    category: string
    difficulty: $Enums.TaskDifficulty
    points_reward: number
    verification_type: $Enums.VerificationType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutUserTaskProgressInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutUserTaskProgressInput, TaskUncheckedCreateWithoutUserTaskProgressInput>
  }

  export type ProfileCreateWithoutUserTaskProgressInput = {
    id: string
    username: string
    role?: $Enums.Role
    xp_points?: number
    sustainability_score?: $Enums.SustainabilityScore
    attributes: JsonNullValueInput | InputJsonValue
    avatar_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogCreateNestedManyWithoutAdminInput
    chatroom_member?: chatroom_memberCreateNestedManyWithoutProfilesInput
    message?: messageCreateNestedManyWithoutProfilesInput
    petitions?: PetitionCreateNestedManyWithoutCreatorInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateWithoutUserTaskProgressInput = {
    id: string
    username: string
    role?: $Enums.Role
    xp_points?: number
    sustainability_score?: $Enums.SustainabilityScore
    attributes: JsonNullValueInput | InputJsonValue
    avatar_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutAdminInput
    chatroom_member?: chatroom_memberUncheckedCreateNestedManyWithoutProfilesInput
    message?: messageUncheckedCreateNestedManyWithoutProfilesInput
    petitions?: PetitionUncheckedCreateNestedManyWithoutCreatorInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileCreateOrConnectWithoutUserTaskProgressInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserTaskProgressInput, ProfileUncheckedCreateWithoutUserTaskProgressInput>
  }

  export type TaskUpsertWithoutUserTaskProgressInput = {
    update: XOR<TaskUpdateWithoutUserTaskProgressInput, TaskUncheckedUpdateWithoutUserTaskProgressInput>
    create: XOR<TaskCreateWithoutUserTaskProgressInput, TaskUncheckedCreateWithoutUserTaskProgressInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutUserTaskProgressInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutUserTaskProgressInput, TaskUncheckedUpdateWithoutUserTaskProgressInput>
  }

  export type TaskUpdateWithoutUserTaskProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumTaskDifficultyFieldUpdateOperationsInput | $Enums.TaskDifficulty
    points_reward?: IntFieldUpdateOperationsInput | number
    verification_type?: EnumVerificationTypeFieldUpdateOperationsInput | $Enums.VerificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateWithoutUserTaskProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumTaskDifficultyFieldUpdateOperationsInput | $Enums.TaskDifficulty
    points_reward?: IntFieldUpdateOperationsInput | number
    verification_type?: EnumVerificationTypeFieldUpdateOperationsInput | $Enums.VerificationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUpsertWithoutUserTaskProgressInput = {
    update: XOR<ProfileUpdateWithoutUserTaskProgressInput, ProfileUncheckedUpdateWithoutUserTaskProgressInput>
    create: XOR<ProfileCreateWithoutUserTaskProgressInput, ProfileUncheckedCreateWithoutUserTaskProgressInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserTaskProgressInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserTaskProgressInput, ProfileUncheckedUpdateWithoutUserTaskProgressInput>
  }

  export type ProfileUpdateWithoutUserTaskProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    xp_points?: IntFieldUpdateOperationsInput | number
    sustainability_score?: EnumSustainabilityScoreFieldUpdateOperationsInput | $Enums.SustainabilityScore
    attributes?: JsonNullValueInput | InputJsonValue
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUpdateManyWithoutAdminNestedInput
    chatroom_member?: chatroom_memberUpdateManyWithoutProfilesNestedInput
    message?: messageUpdateManyWithoutProfilesNestedInput
    petitions?: PetitionUpdateManyWithoutCreatorNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateWithoutUserTaskProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    xp_points?: IntFieldUpdateOperationsInput | number
    sustainability_score?: EnumSustainabilityScoreFieldUpdateOperationsInput | $Enums.SustainabilityScore
    attributes?: JsonNullValueInput | InputJsonValue
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUncheckedUpdateManyWithoutAdminNestedInput
    chatroom_member?: chatroom_memberUncheckedUpdateManyWithoutProfilesNestedInput
    message?: messageUncheckedUpdateManyWithoutProfilesNestedInput
    petitions?: PetitionUncheckedUpdateManyWithoutCreatorNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProfileCreateWithoutPetitionsInput = {
    id: string
    username: string
    role?: $Enums.Role
    xp_points?: number
    sustainability_score?: $Enums.SustainabilityScore
    attributes: JsonNullValueInput | InputJsonValue
    avatar_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogCreateNestedManyWithoutAdminInput
    chatroom_member?: chatroom_memberCreateNestedManyWithoutProfilesInput
    message?: messageCreateNestedManyWithoutProfilesInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    userTaskProgress?: UserTaskProgressCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateWithoutPetitionsInput = {
    id: string
    username: string
    role?: $Enums.Role
    xp_points?: number
    sustainability_score?: $Enums.SustainabilityScore
    attributes: JsonNullValueInput | InputJsonValue
    avatar_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutAdminInput
    chatroom_member?: chatroom_memberUncheckedCreateNestedManyWithoutProfilesInput
    message?: messageUncheckedCreateNestedManyWithoutProfilesInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    userTaskProgress?: UserTaskProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileCreateOrConnectWithoutPetitionsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutPetitionsInput, ProfileUncheckedCreateWithoutPetitionsInput>
  }

  export type ProfileUpsertWithoutPetitionsInput = {
    update: XOR<ProfileUpdateWithoutPetitionsInput, ProfileUncheckedUpdateWithoutPetitionsInput>
    create: XOR<ProfileCreateWithoutPetitionsInput, ProfileUncheckedCreateWithoutPetitionsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutPetitionsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutPetitionsInput, ProfileUncheckedUpdateWithoutPetitionsInput>
  }

  export type ProfileUpdateWithoutPetitionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    xp_points?: IntFieldUpdateOperationsInput | number
    sustainability_score?: EnumSustainabilityScoreFieldUpdateOperationsInput | $Enums.SustainabilityScore
    attributes?: JsonNullValueInput | InputJsonValue
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUpdateManyWithoutAdminNestedInput
    chatroom_member?: chatroom_memberUpdateManyWithoutProfilesNestedInput
    message?: messageUpdateManyWithoutProfilesNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    userTaskProgress?: UserTaskProgressUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateWithoutPetitionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    xp_points?: IntFieldUpdateOperationsInput | number
    sustainability_score?: EnumSustainabilityScoreFieldUpdateOperationsInput | $Enums.SustainabilityScore
    attributes?: JsonNullValueInput | InputJsonValue
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUncheckedUpdateManyWithoutAdminNestedInput
    chatroom_member?: chatroom_memberUncheckedUpdateManyWithoutProfilesNestedInput
    message?: messageUncheckedUpdateManyWithoutProfilesNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    userTaskProgress?: UserTaskProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProfileCreateWithoutPostsInput = {
    id: string
    username: string
    role?: $Enums.Role
    xp_points?: number
    sustainability_score?: $Enums.SustainabilityScore
    attributes: JsonNullValueInput | InputJsonValue
    avatar_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogCreateNestedManyWithoutAdminInput
    chatroom_member?: chatroom_memberCreateNestedManyWithoutProfilesInput
    message?: messageCreateNestedManyWithoutProfilesInput
    petitions?: PetitionCreateNestedManyWithoutCreatorInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    userTaskProgress?: UserTaskProgressCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateWithoutPostsInput = {
    id: string
    username: string
    role?: $Enums.Role
    xp_points?: number
    sustainability_score?: $Enums.SustainabilityScore
    attributes: JsonNullValueInput | InputJsonValue
    avatar_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutAdminInput
    chatroom_member?: chatroom_memberUncheckedCreateNestedManyWithoutProfilesInput
    message?: messageUncheckedCreateNestedManyWithoutProfilesInput
    petitions?: PetitionUncheckedCreateNestedManyWithoutCreatorInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    userTaskProgress?: UserTaskProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileCreateOrConnectWithoutPostsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutPostsInput, ProfileUncheckedCreateWithoutPostsInput>
  }

  export type ProfileUpsertWithoutPostsInput = {
    update: XOR<ProfileUpdateWithoutPostsInput, ProfileUncheckedUpdateWithoutPostsInput>
    create: XOR<ProfileCreateWithoutPostsInput, ProfileUncheckedCreateWithoutPostsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutPostsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutPostsInput, ProfileUncheckedUpdateWithoutPostsInput>
  }

  export type ProfileUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    xp_points?: IntFieldUpdateOperationsInput | number
    sustainability_score?: EnumSustainabilityScoreFieldUpdateOperationsInput | $Enums.SustainabilityScore
    attributes?: JsonNullValueInput | InputJsonValue
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUpdateManyWithoutAdminNestedInput
    chatroom_member?: chatroom_memberUpdateManyWithoutProfilesNestedInput
    message?: messageUpdateManyWithoutProfilesNestedInput
    petitions?: PetitionUpdateManyWithoutCreatorNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    userTaskProgress?: UserTaskProgressUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    xp_points?: IntFieldUpdateOperationsInput | number
    sustainability_score?: EnumSustainabilityScoreFieldUpdateOperationsInput | $Enums.SustainabilityScore
    attributes?: JsonNullValueInput | InputJsonValue
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUncheckedUpdateManyWithoutAdminNestedInput
    chatroom_member?: chatroom_memberUncheckedUpdateManyWithoutProfilesNestedInput
    message?: messageUncheckedUpdateManyWithoutProfilesNestedInput
    petitions?: PetitionUncheckedUpdateManyWithoutCreatorNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    userTaskProgress?: UserTaskProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TransactionCreateWithoutVoucherInput = {
    id?: string
    points_spent: number
    redeemed_at?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: ProfileCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutVoucherInput = {
    id?: string
    user_id: string
    points_spent: number
    redeemed_at?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutVoucherInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutVoucherInput, TransactionUncheckedCreateWithoutVoucherInput>
  }

  export type TransactionCreateManyVoucherInputEnvelope = {
    data: TransactionCreateManyVoucherInput | TransactionCreateManyVoucherInput[]
    skipDuplicates?: boolean
  }

  export type TransactionUpsertWithWhereUniqueWithoutVoucherInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutVoucherInput, TransactionUncheckedUpdateWithoutVoucherInput>
    create: XOR<TransactionCreateWithoutVoucherInput, TransactionUncheckedCreateWithoutVoucherInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutVoucherInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutVoucherInput, TransactionUncheckedUpdateWithoutVoucherInput>
  }

  export type TransactionUpdateManyWithWhereWithoutVoucherInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutVoucherInput>
  }

  export type ProfileCreateWithoutTransactionsInput = {
    id: string
    username: string
    role?: $Enums.Role
    xp_points?: number
    sustainability_score?: $Enums.SustainabilityScore
    attributes: JsonNullValueInput | InputJsonValue
    avatar_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogCreateNestedManyWithoutAdminInput
    chatroom_member?: chatroom_memberCreateNestedManyWithoutProfilesInput
    message?: messageCreateNestedManyWithoutProfilesInput
    petitions?: PetitionCreateNestedManyWithoutCreatorInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    userTaskProgress?: UserTaskProgressCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateWithoutTransactionsInput = {
    id: string
    username: string
    role?: $Enums.Role
    xp_points?: number
    sustainability_score?: $Enums.SustainabilityScore
    attributes: JsonNullValueInput | InputJsonValue
    avatar_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutAdminInput
    chatroom_member?: chatroom_memberUncheckedCreateNestedManyWithoutProfilesInput
    message?: messageUncheckedCreateNestedManyWithoutProfilesInput
    petitions?: PetitionUncheckedCreateNestedManyWithoutCreatorInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    userTaskProgress?: UserTaskProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileCreateOrConnectWithoutTransactionsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutTransactionsInput, ProfileUncheckedCreateWithoutTransactionsInput>
  }

  export type VoucherCreateWithoutTransactionsInput = {
    id?: string
    title: string
    cost_points: number
    code: string
    stock: number
    expiry_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VoucherUncheckedCreateWithoutTransactionsInput = {
    id?: string
    title: string
    cost_points: number
    code: string
    stock: number
    expiry_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VoucherCreateOrConnectWithoutTransactionsInput = {
    where: VoucherWhereUniqueInput
    create: XOR<VoucherCreateWithoutTransactionsInput, VoucherUncheckedCreateWithoutTransactionsInput>
  }

  export type ProfileUpsertWithoutTransactionsInput = {
    update: XOR<ProfileUpdateWithoutTransactionsInput, ProfileUncheckedUpdateWithoutTransactionsInput>
    create: XOR<ProfileCreateWithoutTransactionsInput, ProfileUncheckedCreateWithoutTransactionsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutTransactionsInput, ProfileUncheckedUpdateWithoutTransactionsInput>
  }

  export type ProfileUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    xp_points?: IntFieldUpdateOperationsInput | number
    sustainability_score?: EnumSustainabilityScoreFieldUpdateOperationsInput | $Enums.SustainabilityScore
    attributes?: JsonNullValueInput | InputJsonValue
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUpdateManyWithoutAdminNestedInput
    chatroom_member?: chatroom_memberUpdateManyWithoutProfilesNestedInput
    message?: messageUpdateManyWithoutProfilesNestedInput
    petitions?: PetitionUpdateManyWithoutCreatorNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    userTaskProgress?: UserTaskProgressUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    xp_points?: IntFieldUpdateOperationsInput | number
    sustainability_score?: EnumSustainabilityScoreFieldUpdateOperationsInput | $Enums.SustainabilityScore
    attributes?: JsonNullValueInput | InputJsonValue
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUncheckedUpdateManyWithoutAdminNestedInput
    chatroom_member?: chatroom_memberUncheckedUpdateManyWithoutProfilesNestedInput
    message?: messageUncheckedUpdateManyWithoutProfilesNestedInput
    petitions?: PetitionUncheckedUpdateManyWithoutCreatorNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    userTaskProgress?: UserTaskProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VoucherUpsertWithoutTransactionsInput = {
    update: XOR<VoucherUpdateWithoutTransactionsInput, VoucherUncheckedUpdateWithoutTransactionsInput>
    create: XOR<VoucherCreateWithoutTransactionsInput, VoucherUncheckedCreateWithoutTransactionsInput>
    where?: VoucherWhereInput
  }

  export type VoucherUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: VoucherWhereInput
    data: XOR<VoucherUpdateWithoutTransactionsInput, VoucherUncheckedUpdateWithoutTransactionsInput>
  }

  export type VoucherUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    cost_points?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    expiry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoucherUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    cost_points?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    expiry_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateWithoutAuditLogsInput = {
    id: string
    username: string
    role?: $Enums.Role
    xp_points?: number
    sustainability_score?: $Enums.SustainabilityScore
    attributes: JsonNullValueInput | InputJsonValue
    avatar_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatroom_member?: chatroom_memberCreateNestedManyWithoutProfilesInput
    message?: messageCreateNestedManyWithoutProfilesInput
    petitions?: PetitionCreateNestedManyWithoutCreatorInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    userTaskProgress?: UserTaskProgressCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateWithoutAuditLogsInput = {
    id: string
    username: string
    role?: $Enums.Role
    xp_points?: number
    sustainability_score?: $Enums.SustainabilityScore
    attributes: JsonNullValueInput | InputJsonValue
    avatar_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatroom_member?: chatroom_memberUncheckedCreateNestedManyWithoutProfilesInput
    message?: messageUncheckedCreateNestedManyWithoutProfilesInput
    petitions?: PetitionUncheckedCreateNestedManyWithoutCreatorInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    userTaskProgress?: UserTaskProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileCreateOrConnectWithoutAuditLogsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutAuditLogsInput, ProfileUncheckedCreateWithoutAuditLogsInput>
  }

  export type ProfileUpsertWithoutAuditLogsInput = {
    update: XOR<ProfileUpdateWithoutAuditLogsInput, ProfileUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<ProfileCreateWithoutAuditLogsInput, ProfileUncheckedCreateWithoutAuditLogsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutAuditLogsInput, ProfileUncheckedUpdateWithoutAuditLogsInput>
  }

  export type ProfileUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    xp_points?: IntFieldUpdateOperationsInput | number
    sustainability_score?: EnumSustainabilityScoreFieldUpdateOperationsInput | $Enums.SustainabilityScore
    attributes?: JsonNullValueInput | InputJsonValue
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatroom_member?: chatroom_memberUpdateManyWithoutProfilesNestedInput
    message?: messageUpdateManyWithoutProfilesNestedInput
    petitions?: PetitionUpdateManyWithoutCreatorNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    userTaskProgress?: UserTaskProgressUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    xp_points?: IntFieldUpdateOperationsInput | number
    sustainability_score?: EnumSustainabilityScoreFieldUpdateOperationsInput | $Enums.SustainabilityScore
    attributes?: JsonNullValueInput | InputJsonValue
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatroom_member?: chatroom_memberUncheckedUpdateManyWithoutProfilesNestedInput
    message?: messageUncheckedUpdateManyWithoutProfilesNestedInput
    petitions?: PetitionUncheckedUpdateManyWithoutCreatorNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    userTaskProgress?: UserTaskProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type chatroom_memberCreateWithoutChatroomInput = {
    id?: string
    created_at?: Date | string
    profiles: ProfileCreateNestedOneWithoutChatroom_memberInput
  }

  export type chatroom_memberUncheckedCreateWithoutChatroomInput = {
    id?: string
    created_at?: Date | string
    member_id: string
  }

  export type chatroom_memberCreateOrConnectWithoutChatroomInput = {
    where: chatroom_memberWhereUniqueInput
    create: XOR<chatroom_memberCreateWithoutChatroomInput, chatroom_memberUncheckedCreateWithoutChatroomInput>
  }

  export type chatroom_memberCreateManyChatroomInputEnvelope = {
    data: chatroom_memberCreateManyChatroomInput | chatroom_memberCreateManyChatroomInput[]
    skipDuplicates?: boolean
  }

  export type chatroom_memberUpsertWithWhereUniqueWithoutChatroomInput = {
    where: chatroom_memberWhereUniqueInput
    update: XOR<chatroom_memberUpdateWithoutChatroomInput, chatroom_memberUncheckedUpdateWithoutChatroomInput>
    create: XOR<chatroom_memberCreateWithoutChatroomInput, chatroom_memberUncheckedCreateWithoutChatroomInput>
  }

  export type chatroom_memberUpdateWithWhereUniqueWithoutChatroomInput = {
    where: chatroom_memberWhereUniqueInput
    data: XOR<chatroom_memberUpdateWithoutChatroomInput, chatroom_memberUncheckedUpdateWithoutChatroomInput>
  }

  export type chatroom_memberUpdateManyWithWhereWithoutChatroomInput = {
    where: chatroom_memberScalarWhereInput
    data: XOR<chatroom_memberUpdateManyMutationInput, chatroom_memberUncheckedUpdateManyWithoutChatroomInput>
  }

  export type chatroomCreateWithoutChatroom_memberInput = {
    id?: string
    created_at?: Date | string
    name: string
    is_public: boolean
  }

  export type chatroomUncheckedCreateWithoutChatroom_memberInput = {
    id?: string
    created_at?: Date | string
    name: string
    is_public: boolean
  }

  export type chatroomCreateOrConnectWithoutChatroom_memberInput = {
    where: chatroomWhereUniqueInput
    create: XOR<chatroomCreateWithoutChatroom_memberInput, chatroomUncheckedCreateWithoutChatroom_memberInput>
  }

  export type ProfileCreateWithoutChatroom_memberInput = {
    id: string
    username: string
    role?: $Enums.Role
    xp_points?: number
    sustainability_score?: $Enums.SustainabilityScore
    attributes: JsonNullValueInput | InputJsonValue
    avatar_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogCreateNestedManyWithoutAdminInput
    message?: messageCreateNestedManyWithoutProfilesInput
    petitions?: PetitionCreateNestedManyWithoutCreatorInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    userTaskProgress?: UserTaskProgressCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateWithoutChatroom_memberInput = {
    id: string
    username: string
    role?: $Enums.Role
    xp_points?: number
    sustainability_score?: $Enums.SustainabilityScore
    attributes: JsonNullValueInput | InputJsonValue
    avatar_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutAdminInput
    message?: messageUncheckedCreateNestedManyWithoutProfilesInput
    petitions?: PetitionUncheckedCreateNestedManyWithoutCreatorInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    userTaskProgress?: UserTaskProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileCreateOrConnectWithoutChatroom_memberInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutChatroom_memberInput, ProfileUncheckedCreateWithoutChatroom_memberInput>
  }

  export type chatroomUpsertWithoutChatroom_memberInput = {
    update: XOR<chatroomUpdateWithoutChatroom_memberInput, chatroomUncheckedUpdateWithoutChatroom_memberInput>
    create: XOR<chatroomCreateWithoutChatroom_memberInput, chatroomUncheckedCreateWithoutChatroom_memberInput>
    where?: chatroomWhereInput
  }

  export type chatroomUpdateToOneWithWhereWithoutChatroom_memberInput = {
    where?: chatroomWhereInput
    data: XOR<chatroomUpdateWithoutChatroom_memberInput, chatroomUncheckedUpdateWithoutChatroom_memberInput>
  }

  export type chatroomUpdateWithoutChatroom_memberInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    is_public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type chatroomUncheckedUpdateWithoutChatroom_memberInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    is_public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProfileUpsertWithoutChatroom_memberInput = {
    update: XOR<ProfileUpdateWithoutChatroom_memberInput, ProfileUncheckedUpdateWithoutChatroom_memberInput>
    create: XOR<ProfileCreateWithoutChatroom_memberInput, ProfileUncheckedCreateWithoutChatroom_memberInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutChatroom_memberInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutChatroom_memberInput, ProfileUncheckedUpdateWithoutChatroom_memberInput>
  }

  export type ProfileUpdateWithoutChatroom_memberInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    xp_points?: IntFieldUpdateOperationsInput | number
    sustainability_score?: EnumSustainabilityScoreFieldUpdateOperationsInput | $Enums.SustainabilityScore
    attributes?: JsonNullValueInput | InputJsonValue
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUpdateManyWithoutAdminNestedInput
    message?: messageUpdateManyWithoutProfilesNestedInput
    petitions?: PetitionUpdateManyWithoutCreatorNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    userTaskProgress?: UserTaskProgressUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateWithoutChatroom_memberInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    xp_points?: IntFieldUpdateOperationsInput | number
    sustainability_score?: EnumSustainabilityScoreFieldUpdateOperationsInput | $Enums.SustainabilityScore
    attributes?: JsonNullValueInput | InputJsonValue
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUncheckedUpdateManyWithoutAdminNestedInput
    message?: messageUncheckedUpdateManyWithoutProfilesNestedInput
    petitions?: PetitionUncheckedUpdateManyWithoutCreatorNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    userTaskProgress?: UserTaskProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProfileCreateWithoutMessageInput = {
    id: string
    username: string
    role?: $Enums.Role
    xp_points?: number
    sustainability_score?: $Enums.SustainabilityScore
    attributes: JsonNullValueInput | InputJsonValue
    avatar_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogCreateNestedManyWithoutAdminInput
    chatroom_member?: chatroom_memberCreateNestedManyWithoutProfilesInput
    petitions?: PetitionCreateNestedManyWithoutCreatorInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    userTaskProgress?: UserTaskProgressCreateNestedManyWithoutUserInput
  }

  export type ProfileUncheckedCreateWithoutMessageInput = {
    id: string
    username: string
    role?: $Enums.Role
    xp_points?: number
    sustainability_score?: $Enums.SustainabilityScore
    attributes: JsonNullValueInput | InputJsonValue
    avatar_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutAdminInput
    chatroom_member?: chatroom_memberUncheckedCreateNestedManyWithoutProfilesInput
    petitions?: PetitionUncheckedCreateNestedManyWithoutCreatorInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    userTaskProgress?: UserTaskProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type ProfileCreateOrConnectWithoutMessageInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutMessageInput, ProfileUncheckedCreateWithoutMessageInput>
  }

  export type ProfileUpsertWithoutMessageInput = {
    update: XOR<ProfileUpdateWithoutMessageInput, ProfileUncheckedUpdateWithoutMessageInput>
    create: XOR<ProfileCreateWithoutMessageInput, ProfileUncheckedCreateWithoutMessageInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutMessageInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutMessageInput, ProfileUncheckedUpdateWithoutMessageInput>
  }

  export type ProfileUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    xp_points?: IntFieldUpdateOperationsInput | number
    sustainability_score?: EnumSustainabilityScoreFieldUpdateOperationsInput | $Enums.SustainabilityScore
    attributes?: JsonNullValueInput | InputJsonValue
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUpdateManyWithoutAdminNestedInput
    chatroom_member?: chatroom_memberUpdateManyWithoutProfilesNestedInput
    petitions?: PetitionUpdateManyWithoutCreatorNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    userTaskProgress?: UserTaskProgressUpdateManyWithoutUserNestedInput
  }

  export type ProfileUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    xp_points?: IntFieldUpdateOperationsInput | number
    sustainability_score?: EnumSustainabilityScoreFieldUpdateOperationsInput | $Enums.SustainabilityScore
    attributes?: JsonNullValueInput | InputJsonValue
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUncheckedUpdateManyWithoutAdminNestedInput
    chatroom_member?: chatroom_memberUncheckedUpdateManyWithoutProfilesNestedInput
    petitions?: PetitionUncheckedUpdateManyWithoutCreatorNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    userTaskProgress?: UserTaskProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AuditLogCreateManyAdminInput = {
    id?: string
    action: string
    target_id?: string | null
    details?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type chatroom_memberCreateManyProfilesInput = {
    id?: string
    created_at?: Date | string
    chatroom_id: string
  }

  export type messageCreateManyProfilesInput = {
    id?: bigint | number
    created_at?: Date | string
    text?: string | null
  }

  export type PetitionCreateManyCreatorInput = {
    id?: string
    title: string
    description_encrypted: string
    location_data: string
    support_count?: number
    status?: $Enums.PetitionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateManyAuthorInput = {
    id?: string
    content: string
    image_url?: string | null
    sentiment_score?: number | null
    sdg_tag?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateManyUserInput = {
    id?: string
    voucher_id: string
    points_spent: number
    redeemed_at?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserTaskProgressCreateManyUserInput = {
    id?: string
    task_id: string
    status?: $Enums.TaskStatus
    proof_data?: string | null
    completed_at?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuditLogUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    target_id?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    target_id?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    target_id?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatroom_memberUpdateWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chatroom?: chatroomUpdateOneRequiredWithoutChatroom_memberNestedInput
  }

  export type chatroom_memberUncheckedUpdateWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chatroom_id?: StringFieldUpdateOperationsInput | string
  }

  export type chatroom_memberUncheckedUpdateManyWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chatroom_id?: StringFieldUpdateOperationsInput | string
  }

  export type messageUpdateWithoutProfilesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type messageUncheckedUpdateWithoutProfilesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type messageUncheckedUpdateManyWithoutProfilesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PetitionUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description_encrypted?: StringFieldUpdateOperationsInput | string
    location_data?: StringFieldUpdateOperationsInput | string
    support_count?: IntFieldUpdateOperationsInput | number
    status?: EnumPetitionStatusFieldUpdateOperationsInput | $Enums.PetitionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetitionUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description_encrypted?: StringFieldUpdateOperationsInput | string
    location_data?: StringFieldUpdateOperationsInput | string
    support_count?: IntFieldUpdateOperationsInput | number
    status?: EnumPetitionStatusFieldUpdateOperationsInput | $Enums.PetitionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetitionUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description_encrypted?: StringFieldUpdateOperationsInput | string
    location_data?: StringFieldUpdateOperationsInput | string
    support_count?: IntFieldUpdateOperationsInput | number
    status?: EnumPetitionStatusFieldUpdateOperationsInput | $Enums.PetitionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment_score?: NullableFloatFieldUpdateOperationsInput | number | null
    sdg_tag?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment_score?: NullableFloatFieldUpdateOperationsInput | number | null
    sdg_tag?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment_score?: NullableFloatFieldUpdateOperationsInput | number | null
    sdg_tag?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    points_spent?: IntFieldUpdateOperationsInput | number
    redeemed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucher?: VoucherUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    voucher_id?: StringFieldUpdateOperationsInput | string
    points_spent?: IntFieldUpdateOperationsInput | number
    redeemed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    voucher_id?: StringFieldUpdateOperationsInput | string
    points_spent?: IntFieldUpdateOperationsInput | number
    redeemed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTaskProgressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    proof_data?: NullableStringFieldUpdateOperationsInput | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutUserTaskProgressNestedInput
  }

  export type UserTaskProgressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    task_id?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    proof_data?: NullableStringFieldUpdateOperationsInput | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTaskProgressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    task_id?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    proof_data?: NullableStringFieldUpdateOperationsInput | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTaskProgressCreateManyTaskInput = {
    id?: string
    user_id: string
    status?: $Enums.TaskStatus
    proof_data?: string | null
    completed_at?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserTaskProgressUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    proof_data?: NullableStringFieldUpdateOperationsInput | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ProfileUpdateOneRequiredWithoutUserTaskProgressNestedInput
  }

  export type UserTaskProgressUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    proof_data?: NullableStringFieldUpdateOperationsInput | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTaskProgressUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    proof_data?: NullableStringFieldUpdateOperationsInput | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyVoucherInput = {
    id?: string
    user_id: string
    points_spent: number
    redeemed_at?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateWithoutVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    points_spent?: IntFieldUpdateOperationsInput | number
    redeemed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: ProfileUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    points_spent?: IntFieldUpdateOperationsInput | number
    redeemed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    points_spent?: IntFieldUpdateOperationsInput | number
    redeemed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatroom_memberCreateManyChatroomInput = {
    id?: string
    created_at?: Date | string
    member_id: string
  }

  export type chatroom_memberUpdateWithoutChatroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profiles?: ProfileUpdateOneRequiredWithoutChatroom_memberNestedInput
  }

  export type chatroom_memberUncheckedUpdateWithoutChatroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    member_id?: StringFieldUpdateOperationsInput | string
  }

  export type chatroom_memberUncheckedUpdateManyWithoutChatroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    member_id?: StringFieldUpdateOperationsInput | string
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