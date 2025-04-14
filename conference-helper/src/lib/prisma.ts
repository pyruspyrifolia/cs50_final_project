// src/lib/prisma.ts  
import { PrismaClient } from '../generated/prisma';

  
// Extend the global object to include the Prisma client instance  
declare global {  
  // Allow global `var` prisma to avoid multiple instances in development  
  // eslint-disable-next-line no-var  
  var prisma: PrismaClient | undefined;  
}  
  
// Initialize the Prisma Client instance  
export const prisma = global.prisma || new PrismaClient({  
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],  
});  
  
// In development, attach the Prisma client instance to the global object  
// to prevent multiple instances being created  
if (process.env.NODE_ENV !== 'production') {  
  global.prisma = prisma;  
}  