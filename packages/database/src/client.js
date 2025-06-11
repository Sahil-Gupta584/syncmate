import { PrismaClient } from "../generated/client/index.js";
const globalForPrisma = globalThis;
export const prisma = globalForPrisma.prisma ?? new PrismaClient({ log: ["error", "warn"] });
// Prevent multiple instances of Prisma Client in development
if (process.env.NODE_ENV !== "production")
    globalForPrisma.prisma = prisma;
