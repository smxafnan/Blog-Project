// src/index.ts

import Fastify from 'fastify';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import { userRoutes } from './Routes/users'; // Import the new Prisma-based user routes

dotenv.config();

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const fastify = Fastify({ logger: true });

// Initialize Prisma Client
const prisma = new PrismaClient();

// Basic root route
fastify.get('/', async () => {
  const response = { message: 'Hello from Fastify with TypeScript and Prisma!' };
  fastify.log.info(response);
  return response;
});

// Register the Prisma-based user routes
// You can also pass the prisma instance to the routes for better dependency management:
// fastify.register(userRoutes, { prisma });
// But for simplicity, we'll stick to the current setup in userRoutes.ts for now.
fastify.register(userRoutes);


const start = async () => {
  try {
    // Connect Prisma to the database
    await prisma.$connect();
    fastify.log.info('Connected to PostgreSQL with Prisma');

    await fastify.listen({ port: PORT });
    fastify.log.info(`Server running at http://localhost:${PORT}`);
  } catch (err) {
    fastify.log.error('Server failed to start:', err);
    // Disconnect Prisma client on error
    await prisma.$disconnect();
    process.exit(1);
  }
};

// Disconnect Prisma Client when the Fastify server closes
fastify.addHook('onClose', async () => {
  await prisma.$disconnect();
  fastify.log.info('Disconnected from PostgreSQL with Prisma');
});

start();