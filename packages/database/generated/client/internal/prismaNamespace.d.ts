/**
 * WARNING: This is an internal file that is subject to change!
 *
 * 🛑 Under no circumstances should you import this file directly! 🛑
 *
 * All exports from this file are wrapped under a `Prisma` namespace object in the client.ts file.
 * While this enables partial backward compatibility, it is not part of the stable public API.
 *
 * If you are looking for your Models, Enums, and Input Types, please import them from the respective
 * model files in the `model` directory!
 */
import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from "../models.js";
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Validator
 */
export declare const validator: typeof runtime.Public.validator;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError =
  runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError =
  runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError =
  runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
 * Metrics
 */
export type Metrics = runtime.Metrics;
export type Metric<T> = runtime.Metric<T>;
export type MetricHistogram = runtime.MetricHistogram;
export type MetricHistogramBucket = runtime.MetricHistogramBucket;
/**
 * Extensions
 */
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<
  T,
  F
>;
export type Payload<
  T,
  F extends runtime.Operation = never,
> = runtime.Types.Public.Payload<T, F>;
export type Result<
  T,
  A,
  F extends runtime.Operation,
> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
  client: string;
  engine: string;
};
/**
 * Prisma Client JS version: 6.9.0
 * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
  DbNull: new (
    secret: never,
  ) => typeof runtime.objectEnumValues.instances.DbNull;
  JsonNull: new (
    secret: never,
  ) => typeof runtime.objectEnumValues.instances.JsonNull;
  AnyNull: new (
    secret: never,
  ) => typeof runtime.objectEnumValues.instances.AnyNull;
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: {
  "__#2@#private": any;
  _getNamespace(): string;
  _getName(): string;
  toString(): string;
};
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: {
  "__#3@#private": any;
  _getNamespace(): string;
  _getName(): string;
  toString(): string;
};
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: {
  "__#1@#private": any;
  _getNamespace(): string;
  _getName(): string;
  toString(): string;
};
type SelectAndInclude = {
  select: any;
  include: any;
};
type SelectAndOmit = {
  select: any;
  omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
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
  [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude
  ? "Please either choose `select` or `include`."
  : T extends SelectAndOmit
    ? "Please either choose `select` or `omit`."
    : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
  [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
  [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object
  ? U extends object
    ? (Without<T, U> & U) | (Without<U, T> & T)
    : U
  : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> =
  T extends Array<any>
    ? False
    : T extends Date
      ? False
      : T extends Uint8Array
        ? False
        : T extends BigInt
          ? False
          : T extends object
            ? True
            : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> &
  {
    [P in K]: Prisma__Pick<O, P & keyof O>;
  }[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
  1: EitherStrict<O, K>;
  0: EitherLoose<O, K>;
}[strict];
export type Either<
  O extends object,
  K extends Key,
  strict extends Boolean = 1,
> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
  [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (
  U extends unknown ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;
export type Overwrite<O extends object, O1 extends object> = {
  [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<
  Overwrite<
    U,
    {
      [K in keyof U]-?: At<U, K>;
    }
  >
>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown
  ? AtStrict<O, K>
  : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
  1: AtStrict<O, K>;
  0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function
  ? A
  : {
      [K in keyof A]: A[K];
    } & {};
export type OptionalFlat<O> = {
  [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
  [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<
  O extends unknown
    ?
        | (K extends keyof O
            ? {
                [P in K]: O[P];
              } & O
            : O)
        | ({
            [P in keyof O as P extends K ? P : never]-?: O[P];
          } & O)
    : never
>;
type _Strict<U, _U = U> = U extends unknown
  ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
  : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
  0: 1;
  1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
  ? 0
  : A1 extends A2
    ? 1
    : 0;
export type Has<U extends Union, U1 extends Union> = Not<
  Extends<Exclude<U1, U>, U1>
>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
  0: {
    0: 0;
    1: 1;
  };
  1: {
    0: 1;
    1: 1;
  };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object
  ? {
      [P in keyof T]: P extends keyof O ? O[P] : never;
    }
  : never;
type FieldPaths<T, U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">> =
  IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
  [K in keyof T]: Or<
    Or<Extends<"OR", K>, Extends<"AND", K>>,
    Extends<"NOT", K>
  > extends True
    ? T[K] extends infer TK
      ? GetHavingFields<
          UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
        >
      : never
    : {} extends FieldPaths<T[K]>
      ? never
      : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<
  T,
  K extends Enumerable<keyof T> | keyof T,
> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
  ? never
  : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never
  ? never
  : FieldRef<Model, FieldType>;
export declare const ModelName: {
  readonly User: "User";
  readonly CreatorEditor: "CreatorEditor";
  readonly Video: "Video";
  readonly Channel: "Channel";
  readonly VideoEditor: "VideoEditor";
  readonly Invite: "Invite";
  readonly Session: "Session";
  readonly Account: "Account";
  readonly Verification: "Verification";
  readonly Subscription: "Subscription";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<ClientOptions = {}>
  extends runtime.Types.Utils.Fn<
    {
      extArgs: runtime.Types.Extensions.InternalArgs;
    },
    runtime.Types.Utils.Record<string, any>
  > {
  returns: TypeMap<
    this["params"]["extArgs"],
    ClientOptions extends {
      omit: infer OmitOptions;
    }
      ? OmitOptions
      : {}
  >;
}
export type TypeMap<
  ExtArgs extends
    runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
  GlobalOmitOptions = {},
> = {
  globalOmitOptions: {
    omit: GlobalOmitOptions;
  };
  meta: {
    modelProps:
      | "user"
      | "creatorEditor"
      | "video"
      | "channel"
      | "videoEditor"
      | "invite"
      | "session"
      | "account"
      | "verification"
      | "subscription";
    txIsolationLevel: TransactionIsolationLevel;
  };
  model: {
    User: {
      payload: Prisma.$UserPayload<ExtArgs>;
      fields: Prisma.UserFieldRefs;
      operations: {
        findUnique: {
          args: Prisma.UserFindUniqueArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
        };
        findUniqueOrThrow: {
          args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
        };
        findFirst: {
          args: Prisma.UserFindFirstArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
        };
        findFirstOrThrow: {
          args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
        };
        findMany: {
          args: Prisma.UserFindManyArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
        };
        create: {
          args: Prisma.UserCreateArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
        };
        createMany: {
          args: Prisma.UserCreateManyArgs<ExtArgs>;
          result: BatchPayload;
        };
        createManyAndReturn: {
          args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
        };
        delete: {
          args: Prisma.UserDeleteArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
        };
        update: {
          args: Prisma.UserUpdateArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
        };
        deleteMany: {
          args: Prisma.UserDeleteManyArgs<ExtArgs>;
          result: BatchPayload;
        };
        updateMany: {
          args: Prisma.UserUpdateManyArgs<ExtArgs>;
          result: BatchPayload;
        };
        updateManyAndReturn: {
          args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
        };
        upsert: {
          args: Prisma.UserUpsertArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
        };
        aggregate: {
          args: Prisma.UserAggregateArgs<ExtArgs>;
          result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
        };
        groupBy: {
          args: Prisma.UserGroupByArgs<ExtArgs>;
          result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
        };
        count: {
          args: Prisma.UserCountArgs<ExtArgs>;
          result:
            | runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType>
            | number;
        };
      };
    };
    CreatorEditor: {
      payload: Prisma.$CreatorEditorPayload<ExtArgs>;
      fields: Prisma.CreatorEditorFieldRefs;
      operations: {
        findUnique: {
          args: Prisma.CreatorEditorFindUniqueArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$CreatorEditorPayload> | null;
        };
        findUniqueOrThrow: {
          args: Prisma.CreatorEditorFindUniqueOrThrowArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$CreatorEditorPayload>;
        };
        findFirst: {
          args: Prisma.CreatorEditorFindFirstArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$CreatorEditorPayload> | null;
        };
        findFirstOrThrow: {
          args: Prisma.CreatorEditorFindFirstOrThrowArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$CreatorEditorPayload>;
        };
        findMany: {
          args: Prisma.CreatorEditorFindManyArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$CreatorEditorPayload>[];
        };
        create: {
          args: Prisma.CreatorEditorCreateArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$CreatorEditorPayload>;
        };
        createMany: {
          args: Prisma.CreatorEditorCreateManyArgs<ExtArgs>;
          result: BatchPayload;
        };
        createManyAndReturn: {
          args: Prisma.CreatorEditorCreateManyAndReturnArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$CreatorEditorPayload>[];
        };
        delete: {
          args: Prisma.CreatorEditorDeleteArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$CreatorEditorPayload>;
        };
        update: {
          args: Prisma.CreatorEditorUpdateArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$CreatorEditorPayload>;
        };
        deleteMany: {
          args: Prisma.CreatorEditorDeleteManyArgs<ExtArgs>;
          result: BatchPayload;
        };
        updateMany: {
          args: Prisma.CreatorEditorUpdateManyArgs<ExtArgs>;
          result: BatchPayload;
        };
        updateManyAndReturn: {
          args: Prisma.CreatorEditorUpdateManyAndReturnArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$CreatorEditorPayload>[];
        };
        upsert: {
          args: Prisma.CreatorEditorUpsertArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$CreatorEditorPayload>;
        };
        aggregate: {
          args: Prisma.CreatorEditorAggregateArgs<ExtArgs>;
          result: runtime.Types.Utils.Optional<Prisma.AggregateCreatorEditor>;
        };
        groupBy: {
          args: Prisma.CreatorEditorGroupByArgs<ExtArgs>;
          result: runtime.Types.Utils.Optional<Prisma.CreatorEditorGroupByOutputType>[];
        };
        count: {
          args: Prisma.CreatorEditorCountArgs<ExtArgs>;
          result:
            | runtime.Types.Utils.Optional<Prisma.CreatorEditorCountAggregateOutputType>
            | number;
        };
      };
    };
    Video: {
      payload: Prisma.$VideoPayload<ExtArgs>;
      fields: Prisma.VideoFieldRefs;
      operations: {
        findUnique: {
          args: Prisma.VideoFindUniqueArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VideoPayload> | null;
        };
        findUniqueOrThrow: {
          args: Prisma.VideoFindUniqueOrThrowArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VideoPayload>;
        };
        findFirst: {
          args: Prisma.VideoFindFirstArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VideoPayload> | null;
        };
        findFirstOrThrow: {
          args: Prisma.VideoFindFirstOrThrowArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VideoPayload>;
        };
        findMany: {
          args: Prisma.VideoFindManyArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VideoPayload>[];
        };
        create: {
          args: Prisma.VideoCreateArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VideoPayload>;
        };
        createMany: {
          args: Prisma.VideoCreateManyArgs<ExtArgs>;
          result: BatchPayload;
        };
        createManyAndReturn: {
          args: Prisma.VideoCreateManyAndReturnArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VideoPayload>[];
        };
        delete: {
          args: Prisma.VideoDeleteArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VideoPayload>;
        };
        update: {
          args: Prisma.VideoUpdateArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VideoPayload>;
        };
        deleteMany: {
          args: Prisma.VideoDeleteManyArgs<ExtArgs>;
          result: BatchPayload;
        };
        updateMany: {
          args: Prisma.VideoUpdateManyArgs<ExtArgs>;
          result: BatchPayload;
        };
        updateManyAndReturn: {
          args: Prisma.VideoUpdateManyAndReturnArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VideoPayload>[];
        };
        upsert: {
          args: Prisma.VideoUpsertArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VideoPayload>;
        };
        aggregate: {
          args: Prisma.VideoAggregateArgs<ExtArgs>;
          result: runtime.Types.Utils.Optional<Prisma.AggregateVideo>;
        };
        groupBy: {
          args: Prisma.VideoGroupByArgs<ExtArgs>;
          result: runtime.Types.Utils.Optional<Prisma.VideoGroupByOutputType>[];
        };
        count: {
          args: Prisma.VideoCountArgs<ExtArgs>;
          result:
            | runtime.Types.Utils.Optional<Prisma.VideoCountAggregateOutputType>
            | number;
        };
      };
    };
    Channel: {
      payload: Prisma.$ChannelPayload<ExtArgs>;
      fields: Prisma.ChannelFieldRefs;
      operations: {
        findUnique: {
          args: Prisma.ChannelFindUniqueArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelPayload> | null;
        };
        findUniqueOrThrow: {
          args: Prisma.ChannelFindUniqueOrThrowArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelPayload>;
        };
        findFirst: {
          args: Prisma.ChannelFindFirstArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelPayload> | null;
        };
        findFirstOrThrow: {
          args: Prisma.ChannelFindFirstOrThrowArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelPayload>;
        };
        findMany: {
          args: Prisma.ChannelFindManyArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelPayload>[];
        };
        create: {
          args: Prisma.ChannelCreateArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelPayload>;
        };
        createMany: {
          args: Prisma.ChannelCreateManyArgs<ExtArgs>;
          result: BatchPayload;
        };
        createManyAndReturn: {
          args: Prisma.ChannelCreateManyAndReturnArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelPayload>[];
        };
        delete: {
          args: Prisma.ChannelDeleteArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelPayload>;
        };
        update: {
          args: Prisma.ChannelUpdateArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelPayload>;
        };
        deleteMany: {
          args: Prisma.ChannelDeleteManyArgs<ExtArgs>;
          result: BatchPayload;
        };
        updateMany: {
          args: Prisma.ChannelUpdateManyArgs<ExtArgs>;
          result: BatchPayload;
        };
        updateManyAndReturn: {
          args: Prisma.ChannelUpdateManyAndReturnArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelPayload>[];
        };
        upsert: {
          args: Prisma.ChannelUpsertArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$ChannelPayload>;
        };
        aggregate: {
          args: Prisma.ChannelAggregateArgs<ExtArgs>;
          result: runtime.Types.Utils.Optional<Prisma.AggregateChannel>;
        };
        groupBy: {
          args: Prisma.ChannelGroupByArgs<ExtArgs>;
          result: runtime.Types.Utils.Optional<Prisma.ChannelGroupByOutputType>[];
        };
        count: {
          args: Prisma.ChannelCountArgs<ExtArgs>;
          result:
            | runtime.Types.Utils.Optional<Prisma.ChannelCountAggregateOutputType>
            | number;
        };
      };
    };
    VideoEditor: {
      payload: Prisma.$VideoEditorPayload<ExtArgs>;
      fields: Prisma.VideoEditorFieldRefs;
      operations: {
        findUnique: {
          args: Prisma.VideoEditorFindUniqueArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VideoEditorPayload> | null;
        };
        findUniqueOrThrow: {
          args: Prisma.VideoEditorFindUniqueOrThrowArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VideoEditorPayload>;
        };
        findFirst: {
          args: Prisma.VideoEditorFindFirstArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VideoEditorPayload> | null;
        };
        findFirstOrThrow: {
          args: Prisma.VideoEditorFindFirstOrThrowArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VideoEditorPayload>;
        };
        findMany: {
          args: Prisma.VideoEditorFindManyArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VideoEditorPayload>[];
        };
        create: {
          args: Prisma.VideoEditorCreateArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VideoEditorPayload>;
        };
        createMany: {
          args: Prisma.VideoEditorCreateManyArgs<ExtArgs>;
          result: BatchPayload;
        };
        createManyAndReturn: {
          args: Prisma.VideoEditorCreateManyAndReturnArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VideoEditorPayload>[];
        };
        delete: {
          args: Prisma.VideoEditorDeleteArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VideoEditorPayload>;
        };
        update: {
          args: Prisma.VideoEditorUpdateArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VideoEditorPayload>;
        };
        deleteMany: {
          args: Prisma.VideoEditorDeleteManyArgs<ExtArgs>;
          result: BatchPayload;
        };
        updateMany: {
          args: Prisma.VideoEditorUpdateManyArgs<ExtArgs>;
          result: BatchPayload;
        };
        updateManyAndReturn: {
          args: Prisma.VideoEditorUpdateManyAndReturnArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VideoEditorPayload>[];
        };
        upsert: {
          args: Prisma.VideoEditorUpsertArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VideoEditorPayload>;
        };
        aggregate: {
          args: Prisma.VideoEditorAggregateArgs<ExtArgs>;
          result: runtime.Types.Utils.Optional<Prisma.AggregateVideoEditor>;
        };
        groupBy: {
          args: Prisma.VideoEditorGroupByArgs<ExtArgs>;
          result: runtime.Types.Utils.Optional<Prisma.VideoEditorGroupByOutputType>[];
        };
        count: {
          args: Prisma.VideoEditorCountArgs<ExtArgs>;
          result:
            | runtime.Types.Utils.Optional<Prisma.VideoEditorCountAggregateOutputType>
            | number;
        };
      };
    };
    Invite: {
      payload: Prisma.$InvitePayload<ExtArgs>;
      fields: Prisma.InviteFieldRefs;
      operations: {
        findUnique: {
          args: Prisma.InviteFindUniqueArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitePayload> | null;
        };
        findUniqueOrThrow: {
          args: Prisma.InviteFindUniqueOrThrowArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitePayload>;
        };
        findFirst: {
          args: Prisma.InviteFindFirstArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitePayload> | null;
        };
        findFirstOrThrow: {
          args: Prisma.InviteFindFirstOrThrowArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitePayload>;
        };
        findMany: {
          args: Prisma.InviteFindManyArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitePayload>[];
        };
        create: {
          args: Prisma.InviteCreateArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitePayload>;
        };
        createMany: {
          args: Prisma.InviteCreateManyArgs<ExtArgs>;
          result: BatchPayload;
        };
        createManyAndReturn: {
          args: Prisma.InviteCreateManyAndReturnArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitePayload>[];
        };
        delete: {
          args: Prisma.InviteDeleteArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitePayload>;
        };
        update: {
          args: Prisma.InviteUpdateArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitePayload>;
        };
        deleteMany: {
          args: Prisma.InviteDeleteManyArgs<ExtArgs>;
          result: BatchPayload;
        };
        updateMany: {
          args: Prisma.InviteUpdateManyArgs<ExtArgs>;
          result: BatchPayload;
        };
        updateManyAndReturn: {
          args: Prisma.InviteUpdateManyAndReturnArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitePayload>[];
        };
        upsert: {
          args: Prisma.InviteUpsertArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$InvitePayload>;
        };
        aggregate: {
          args: Prisma.InviteAggregateArgs<ExtArgs>;
          result: runtime.Types.Utils.Optional<Prisma.AggregateInvite>;
        };
        groupBy: {
          args: Prisma.InviteGroupByArgs<ExtArgs>;
          result: runtime.Types.Utils.Optional<Prisma.InviteGroupByOutputType>[];
        };
        count: {
          args: Prisma.InviteCountArgs<ExtArgs>;
          result:
            | runtime.Types.Utils.Optional<Prisma.InviteCountAggregateOutputType>
            | number;
        };
      };
    };
    Session: {
      payload: Prisma.$SessionPayload<ExtArgs>;
      fields: Prisma.SessionFieldRefs;
      operations: {
        findUnique: {
          args: Prisma.SessionFindUniqueArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload> | null;
        };
        findUniqueOrThrow: {
          args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
        };
        findFirst: {
          args: Prisma.SessionFindFirstArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload> | null;
        };
        findFirstOrThrow: {
          args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
        };
        findMany: {
          args: Prisma.SessionFindManyArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
        };
        create: {
          args: Prisma.SessionCreateArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
        };
        createMany: {
          args: Prisma.SessionCreateManyArgs<ExtArgs>;
          result: BatchPayload;
        };
        createManyAndReturn: {
          args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
        };
        delete: {
          args: Prisma.SessionDeleteArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
        };
        update: {
          args: Prisma.SessionUpdateArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
        };
        deleteMany: {
          args: Prisma.SessionDeleteManyArgs<ExtArgs>;
          result: BatchPayload;
        };
        updateMany: {
          args: Prisma.SessionUpdateManyArgs<ExtArgs>;
          result: BatchPayload;
        };
        updateManyAndReturn: {
          args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
        };
        upsert: {
          args: Prisma.SessionUpsertArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
        };
        aggregate: {
          args: Prisma.SessionAggregateArgs<ExtArgs>;
          result: runtime.Types.Utils.Optional<Prisma.AggregateSession>;
        };
        groupBy: {
          args: Prisma.SessionGroupByArgs<ExtArgs>;
          result: runtime.Types.Utils.Optional<Prisma.SessionGroupByOutputType>[];
        };
        count: {
          args: Prisma.SessionCountArgs<ExtArgs>;
          result:
            | runtime.Types.Utils.Optional<Prisma.SessionCountAggregateOutputType>
            | number;
        };
      };
    };
    Account: {
      payload: Prisma.$AccountPayload<ExtArgs>;
      fields: Prisma.AccountFieldRefs;
      operations: {
        findUnique: {
          args: Prisma.AccountFindUniqueArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload> | null;
        };
        findUniqueOrThrow: {
          args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
        };
        findFirst: {
          args: Prisma.AccountFindFirstArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload> | null;
        };
        findFirstOrThrow: {
          args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
        };
        findMany: {
          args: Prisma.AccountFindManyArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>[];
        };
        create: {
          args: Prisma.AccountCreateArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
        };
        createMany: {
          args: Prisma.AccountCreateManyArgs<ExtArgs>;
          result: BatchPayload;
        };
        createManyAndReturn: {
          args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>[];
        };
        delete: {
          args: Prisma.AccountDeleteArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
        };
        update: {
          args: Prisma.AccountUpdateArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
        };
        deleteMany: {
          args: Prisma.AccountDeleteManyArgs<ExtArgs>;
          result: BatchPayload;
        };
        updateMany: {
          args: Prisma.AccountUpdateManyArgs<ExtArgs>;
          result: BatchPayload;
        };
        updateManyAndReturn: {
          args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>[];
        };
        upsert: {
          args: Prisma.AccountUpsertArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
        };
        aggregate: {
          args: Prisma.AccountAggregateArgs<ExtArgs>;
          result: runtime.Types.Utils.Optional<Prisma.AggregateAccount>;
        };
        groupBy: {
          args: Prisma.AccountGroupByArgs<ExtArgs>;
          result: runtime.Types.Utils.Optional<Prisma.AccountGroupByOutputType>[];
        };
        count: {
          args: Prisma.AccountCountArgs<ExtArgs>;
          result:
            | runtime.Types.Utils.Optional<Prisma.AccountCountAggregateOutputType>
            | number;
        };
      };
    };
    Verification: {
      payload: Prisma.$VerificationPayload<ExtArgs>;
      fields: Prisma.VerificationFieldRefs;
      operations: {
        findUnique: {
          args: Prisma.VerificationFindUniqueArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload> | null;
        };
        findUniqueOrThrow: {
          args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
        };
        findFirst: {
          args: Prisma.VerificationFindFirstArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload> | null;
        };
        findFirstOrThrow: {
          args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
        };
        findMany: {
          args: Prisma.VerificationFindManyArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>[];
        };
        create: {
          args: Prisma.VerificationCreateArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
        };
        createMany: {
          args: Prisma.VerificationCreateManyArgs<ExtArgs>;
          result: BatchPayload;
        };
        createManyAndReturn: {
          args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>[];
        };
        delete: {
          args: Prisma.VerificationDeleteArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
        };
        update: {
          args: Prisma.VerificationUpdateArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
        };
        deleteMany: {
          args: Prisma.VerificationDeleteManyArgs<ExtArgs>;
          result: BatchPayload;
        };
        updateMany: {
          args: Prisma.VerificationUpdateManyArgs<ExtArgs>;
          result: BatchPayload;
        };
        updateManyAndReturn: {
          args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>[];
        };
        upsert: {
          args: Prisma.VerificationUpsertArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationPayload>;
        };
        aggregate: {
          args: Prisma.VerificationAggregateArgs<ExtArgs>;
          result: runtime.Types.Utils.Optional<Prisma.AggregateVerification>;
        };
        groupBy: {
          args: Prisma.VerificationGroupByArgs<ExtArgs>;
          result: runtime.Types.Utils.Optional<Prisma.VerificationGroupByOutputType>[];
        };
        count: {
          args: Prisma.VerificationCountArgs<ExtArgs>;
          result:
            | runtime.Types.Utils.Optional<Prisma.VerificationCountAggregateOutputType>
            | number;
        };
      };
    };
    Subscription: {
      payload: Prisma.$SubscriptionPayload<ExtArgs>;
      fields: Prisma.SubscriptionFieldRefs;
      operations: {
        findUnique: {
          args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null;
        };
        findUniqueOrThrow: {
          args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
        };
        findFirst: {
          args: Prisma.SubscriptionFindFirstArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null;
        };
        findFirstOrThrow: {
          args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
        };
        findMany: {
          args: Prisma.SubscriptionFindManyArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>[];
        };
        create: {
          args: Prisma.SubscriptionCreateArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
        };
        createMany: {
          args: Prisma.SubscriptionCreateManyArgs<ExtArgs>;
          result: BatchPayload;
        };
        createManyAndReturn: {
          args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>[];
        };
        delete: {
          args: Prisma.SubscriptionDeleteArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
        };
        update: {
          args: Prisma.SubscriptionUpdateArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
        };
        deleteMany: {
          args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>;
          result: BatchPayload;
        };
        updateMany: {
          args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>;
          result: BatchPayload;
        };
        updateManyAndReturn: {
          args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>[];
        };
        upsert: {
          args: Prisma.SubscriptionUpsertArgs<ExtArgs>;
          result: runtime.Types.Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
        };
        aggregate: {
          args: Prisma.SubscriptionAggregateArgs<ExtArgs>;
          result: runtime.Types.Utils.Optional<Prisma.AggregateSubscription>;
        };
        groupBy: {
          args: Prisma.SubscriptionGroupByArgs<ExtArgs>;
          result: runtime.Types.Utils.Optional<Prisma.SubscriptionGroupByOutputType>[];
        };
        count: {
          args: Prisma.SubscriptionCountArgs<ExtArgs>;
          result:
            | runtime.Types.Utils.Optional<Prisma.SubscriptionCountAggregateOutputType>
            | number;
        };
      };
    };
  };
} & {
  other: {
    payload: any;
    operations: {
      $executeRaw: {
        args: [query: TemplateStringsArray | Sql, ...values: any[]];
        result: any;
      };
      $executeRawUnsafe: {
        args: [query: string, ...values: any[]];
        result: any;
      };
      $queryRaw: {
        args: [query: TemplateStringsArray | Sql, ...values: any[]];
        result: any;
      };
      $queryRawUnsafe: {
        args: [query: string, ...values: any[]];
        result: any;
      };
    };
  };
};
/**
 * Enums
 */
export declare const TransactionIsolationLevel: {
  readonly ReadUncommitted: "ReadUncommitted";
  readonly ReadCommitted: "ReadCommitted";
  readonly RepeatableRead: "RepeatableRead";
  readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel =
  (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
  readonly id: "id";
  readonly email: "email";
  readonly name: "name";
  readonly image: "image";
  readonly emailVerified: "emailVerified";
  readonly role: "role";
  readonly plan: "plan";
  readonly trialEndAt: "trialEndAt";
  readonly createdAt: "createdAt";
  readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum =
  (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const CreatorEditorScalarFieldEnum: {
  readonly creatorId: "creatorId";
  readonly editorId: "editorId";
  readonly assignedAt: "assignedAt";
};
export type CreatorEditorScalarFieldEnum =
  (typeof CreatorEditorScalarFieldEnum)[keyof typeof CreatorEditorScalarFieldEnum];
export declare const VideoScalarFieldEnum: {
  readonly id: "id";
  readonly gDriveId: "gDriveId";
  readonly title: "title";
  readonly description: "description";
  readonly duration: "duration";
  readonly thumbnailUrl: "thumbnailUrl";
  readonly scheduledAt: "scheduledAt";
  readonly videoStatus: "videoStatus";
  readonly privacyStatus: "privacyStatus";
  readonly playlistIds: "playlistIds";
  readonly tags: "tags";
  readonly categoryId: "categoryId";
  readonly ownerId: "ownerId";
  readonly importedById: "importedById";
  readonly channelId: "channelId";
  readonly createdAt: "createdAt";
};
export type VideoScalarFieldEnum =
  (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum];
export declare const ChannelScalarFieldEnum: {
  readonly id: "id";
  readonly userId: "userId";
  readonly name: "name";
  readonly ytChannelId: "ytChannelId";
  readonly logoUrl: "logoUrl";
  readonly description: "description";
  readonly refresh_token: "refresh_token";
  readonly access_token: "access_token";
};
export type ChannelScalarFieldEnum =
  (typeof ChannelScalarFieldEnum)[keyof typeof ChannelScalarFieldEnum];
export declare const VideoEditorScalarFieldEnum: {
  readonly videoId: "videoId";
  readonly editorEmail: "editorEmail";
  readonly assignedAt: "assignedAt";
};
export type VideoEditorScalarFieldEnum =
  (typeof VideoEditorScalarFieldEnum)[keyof typeof VideoEditorScalarFieldEnum];
export declare const InviteScalarFieldEnum: {
  readonly id: "id";
  readonly creatorId: "creatorId";
  readonly editorId: "editorId";
  readonly editorEmail: "editorEmail";
  readonly status: "status";
  readonly createdAt: "createdAt";
  readonly expiresAt: "expiresAt";
};
export type InviteScalarFieldEnum =
  (typeof InviteScalarFieldEnum)[keyof typeof InviteScalarFieldEnum];
export declare const SessionScalarFieldEnum: {
  readonly id: "id";
  readonly expiresAt: "expiresAt";
  readonly token: "token";
  readonly createdAt: "createdAt";
  readonly updatedAt: "updatedAt";
  readonly ipAddress: "ipAddress";
  readonly userAgent: "userAgent";
  readonly userId: "userId";
};
export type SessionScalarFieldEnum =
  (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum];
export declare const AccountScalarFieldEnum: {
  readonly id: "id";
  readonly accountId: "accountId";
  readonly providerId: "providerId";
  readonly userId: "userId";
  readonly accessToken: "accessToken";
  readonly refreshToken: "refreshToken";
  readonly idToken: "idToken";
  readonly accessTokenExpiresAt: "accessTokenExpiresAt";
  readonly refreshTokenExpiresAt: "refreshTokenExpiresAt";
  readonly scope: "scope";
  readonly password: "password";
  readonly createdAt: "createdAt";
  readonly updatedAt: "updatedAt";
};
export type AccountScalarFieldEnum =
  (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum];
export declare const VerificationScalarFieldEnum: {
  readonly id: "id";
  readonly identifier: "identifier";
  readonly value: "value";
  readonly expiresAt: "expiresAt";
  readonly createdAt: "createdAt";
  readonly updatedAt: "updatedAt";
};
export type VerificationScalarFieldEnum =
  (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum];
export declare const SubscriptionScalarFieldEnum: {
  readonly id: "id";
  readonly razorpaySubId: "razorpaySubId";
  readonly razorpayCustId: "razorpayCustId";
  readonly status: "status";
  readonly userId: "userId";
  readonly createdAt: "createdAt";
  readonly updatedAt: "updatedAt";
};
export type SubscriptionScalarFieldEnum =
  (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum];
export declare const SortOrder: {
  readonly asc: "asc";
  readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
  readonly DbNull: {
    "__#2@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
  };
  readonly JsonNull: {
    "__#3@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
  };
};
export type NullableJsonNullValueInput =
  (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
  readonly JsonNull: {
    "__#3@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
  };
};
export type JsonNullValueInput =
  (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
  readonly default: "default";
  readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const JsonNullValueFilter: {
  readonly DbNull: {
    "__#2@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
  };
  readonly JsonNull: {
    "__#3@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
  };
  readonly AnyNull: {
    "__#1@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
  };
};
export type JsonNullValueFilter =
  (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export declare const NullsOrder: {
  readonly first: "first";
  readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
  $PrismaModel,
  "String"
>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
  $PrismaModel,
  "String[]"
>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
  $PrismaModel,
  "Boolean"
>;
/**
 * Reference to a field of type 'Role'
 */
export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
  $PrismaModel,
  "Role"
>;
/**
 * Reference to a field of type 'Role[]'
 */
export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
  $PrismaModel,
  "Role[]"
>;
/**
 * Reference to a field of type 'PlanType'
 */
export type EnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
  $PrismaModel,
  "PlanType"
>;
/**
 * Reference to a field of type 'PlanType[]'
 */
export type ListEnumPlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
  $PrismaModel,
  "PlanType[]"
>;
/**
 * Reference to a field of type 'Json'
 */
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<
  $PrismaModel,
  "Json"
>;
/**
 * Reference to a field of type 'QueryMode'
 */
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<
  $PrismaModel,
  "QueryMode"
>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
  $PrismaModel,
  "Int"
>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
  $PrismaModel,
  "Int[]"
>;
/**
 * Reference to a field of type 'VideoStatus'
 */
export type EnumVideoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
  $PrismaModel,
  "VideoStatus"
>;
/**
 * Reference to a field of type 'VideoStatus[]'
 */
export type ListEnumVideoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
  $PrismaModel,
  "VideoStatus[]"
>;
/**
 * Reference to a field of type 'PrivacyStatus'
 */
export type EnumPrivacyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
  $PrismaModel,
  "PrivacyStatus"
>;
/**
 * Reference to a field of type 'PrivacyStatus[]'
 */
export type ListEnumPrivacyStatusFieldRefInput<$PrismaModel> =
  FieldRefInputType<$PrismaModel, "PrivacyStatus[]">;
/**
 * Reference to a field of type 'InviteStatus'
 */
export type EnumInviteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
  $PrismaModel,
  "InviteStatus"
>;
/**
 * Reference to a field of type 'InviteStatus[]'
 */
export type ListEnumInviteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
  $PrismaModel,
  "InviteStatus[]"
>;
/**
 * Reference to a field of type 'subscriptionStatus'
 */
export type EnumsubscriptionStatusFieldRefInput<$PrismaModel> =
  FieldRefInputType<$PrismaModel, "subscriptionStatus">;
/**
 * Reference to a field of type 'subscriptionStatus[]'
 */
export type ListEnumsubscriptionStatusFieldRefInput<$PrismaModel> =
  FieldRefInputType<$PrismaModel, "subscriptionStatus[]">;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
  $PrismaModel,
  "DateTime"
>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
  $PrismaModel,
  "DateTime[]"
>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
  $PrismaModel,
  "Float"
>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
  $PrismaModel,
  "Float[]"
>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
  count: number;
};
export type Datasource = {
  url?: string;
};
export type Datasources = {
  db?: Datasource;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<
  "define",
  TypeMapCb,
  runtime.Types.Extensions.DefaultArgs
>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = "pretty" | "colorless" | "minimal";
export interface PrismaClientOptions {
  /**
   * Overwrites the datasource url from your schema.prisma file
   */
  datasources?: Datasources;
  /**
   * Overwrites the datasource url from your schema.prisma file
   */
  datasourceUrl?: string;
  /**
   * @default "colorless"
   */
  errorFormat?: ErrorFormat;
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
  log?: (LogLevel | LogDefinition)[];
  /**
   * The default values for transactionOptions
   * maxWait ?= 2000
   * timeout ?= 5000
   */
  transactionOptions?: {
    maxWait?: number;
    timeout?: number;
    isolationLevel?: TransactionIsolationLevel;
  };
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
  omit?: GlobalOmitConfig;
}
export type GlobalOmitConfig = {
  user?: Prisma.UserOmit;
  creatorEditor?: Prisma.CreatorEditorOmit;
  video?: Prisma.VideoOmit;
  channel?: Prisma.ChannelOmit;
  videoEditor?: Prisma.VideoEditorOmit;
  invite?: Prisma.InviteOmit;
  session?: Prisma.SessionOmit;
  account?: Prisma.AccountOmit;
  verification?: Prisma.VerificationOmit;
  subscription?: Prisma.SubscriptionOmit;
};
export type LogLevel = "info" | "query" | "warn" | "error";
export type LogDefinition = {
  level: LogLevel;
  emit: "stdout" | "event";
};
export type GetLogType<T extends LogLevel | LogDefinition> =
  T extends LogDefinition
    ? T["emit"] extends "event"
      ? T["level"]
      : never
    : never;
export type GetEvents<T extends any> =
  T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;
export type QueryEvent = {
  timestamp: Date;
  query: string;
  params: string;
  duration: number;
  target: string;
};
export type LogEvent = {
  timestamp: Date;
  message: string;
  target: string;
};
export type PrismaAction =
  | "findUnique"
  | "findUniqueOrThrow"
  | "findMany"
  | "findFirst"
  | "findFirstOrThrow"
  | "create"
  | "createMany"
  | "createManyAndReturn"
  | "update"
  | "updateMany"
  | "updateManyAndReturn"
  | "upsert"
  | "delete"
  | "deleteMany"
  | "executeRaw"
  | "queryRaw"
  | "aggregate"
  | "count"
  | "runCommandRaw"
  | "findRaw"
  | "groupBy";
/**
 * These options are being passed into the middleware as "params"
 */
export type MiddlewareParams = {
  model?: ModelName;
  action: PrismaAction;
  args: any;
  dataPath: string[];
  runInTransaction: boolean;
};
/**
 * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
 */
export type Middleware<T = any> = (
  params: MiddlewareParams,
  next: (params: MiddlewareParams) => runtime.Types.Utils.JsPromise<T>,
) => runtime.Types.Utils.JsPromise<T>;
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<
  DefaultPrismaClient,
  runtime.ITXClientDenyList
>;
//# sourceMappingURL=prismaNamespace.d.ts.map
