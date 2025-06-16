/**
 * WARNING: This is an internal file that is subject to change!
 *
 * 🛑 Under no circumstances should you import this file directly! 🛑
 *
 * Please import the `PrismaClient` class from the `client.ts` file instead.
 */
import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "./prismaNamespace";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = "log" extends keyof ClientOptions ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions["log"]> : never : never;
export interface PrismaClientConstructor {
    /**
     * ## Prisma Client
     *
     * Type-safe database client for TypeScript
     * @example
     * ```
     * const prisma = new PrismaClient()
     * // Fetch zero or more Users
     * const users = await prisma.user.findMany()
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
     */
    new <ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, U = LogOptions<ClientOptions>, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>): PrismaClient<ClientOptions, U, ExtArgs>;
}
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export interface PrismaClient<ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, U = LogOptions<ClientOptions>, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>["other"];
    };
    $on<V extends U>(eventType: V, callback: (event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Add a middleware
     * @deprecated since 4.16.0. For new code, prefer client extensions instead.
     * @see https://pris.ly/d/extensions
     */
    $use(cb: Prisma.Middleware): void;
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
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
        extArgs: ExtArgs;
    }>>;
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
     * `prisma.creatorEditor`: Exposes CRUD operations for the **CreatorEditor** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more CreatorEditors
     * const creatorEditors = await prisma.creatorEditor.findMany()
     * ```
     */
    get creatorEditor(): Prisma.CreatorEditorDelegate<ExtArgs, ClientOptions>;
    /**
     * `prisma.video`: Exposes CRUD operations for the **Video** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Videos
     * const videos = await prisma.video.findMany()
     * ```
     */
    get video(): Prisma.VideoDelegate<ExtArgs, ClientOptions>;
    /**
     * `prisma.channel`: Exposes CRUD operations for the **Channel** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Channels
     * const channels = await prisma.channel.findMany()
     * ```
     */
    get channel(): Prisma.ChannelDelegate<ExtArgs, ClientOptions>;
    /**
     * `prisma.videoEditor`: Exposes CRUD operations for the **VideoEditor** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more VideoEditors
     * const videoEditors = await prisma.videoEditor.findMany()
     * ```
     */
    get videoEditor(): Prisma.VideoEditorDelegate<ExtArgs, ClientOptions>;
    /**
     * `prisma.invite`: Exposes CRUD operations for the **Invite** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Invites
     * const invites = await prisma.invite.findMany()
     * ```
     */
    get invite(): Prisma.InviteDelegate<ExtArgs, ClientOptions>;
    /**
     * `prisma.session`: Exposes CRUD operations for the **Session** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Sessions
     * const sessions = await prisma.session.findMany()
     * ```
     */
    get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;
    /**
     * `prisma.account`: Exposes CRUD operations for the **Account** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Accounts
     * const accounts = await prisma.account.findMany()
     * ```
     */
    get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;
    /**
     * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Verifications
     * const verifications = await prisma.verification.findMany()
     * ```
     */
    get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;
    /**
     * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
     * Example usage:
     * ```ts
     * // Fetch zero or more Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * ```
     */
    get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;
}
export declare function getPrismaClientClass(dirname: string): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map