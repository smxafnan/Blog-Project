// src/index.ts

import Fastify from 'fastify';
import dotenv from 'dotenv';
import { userRoutes } from './crud-routes/user';

dotenv.config();

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const fastify = Fastify({ logger: true });

fastify.get('/', async () => {
  const response = { message: 'Hello from Fastify with TypeScript and dotenv!' };
  fastify.log.info(response);
  return response;
});

fastify.register(userRoutes);

const start = async () => {
  try {
    await fastify.listen({ port: PORT });
    fastify.log.info(`Server running at http://localhost:${PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
