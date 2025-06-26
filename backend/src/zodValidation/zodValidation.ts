import Fastify from 'fastify';
import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const fastify = Fastify({ logger: true });

fastify.get('/', async (request, reply) => {
  fastify.log.info('GET / route was called');
  return { message: 'Hello from Fastify with TypeScript and dotenv!' };
});

// ✅ POST /echo — validates name and age
fastify.post('/echo', async (request, reply) => {
  const bodySchema = z.object({
    name: z.string().min(1, "Name is required").max(11, "Name must be less than 100 characters"),
    age: z.number().int().min(0).max(30),
  });

  const parseResult = bodySchema.safeParse(request.body);

  if (!parseResult.success) {
    fastify.log.warn('Validation failed:', parseResult.error.format());
    return reply.status(400).send({
      error: 'Validation failed',
      issues: parseResult.error.issues,
    });
  }

  const { name, age } = parseResult.data;

  // ✅ Create response
  const response = { message: `Hello ${name}, age ${age}` };

  // ✅ Print the request body and the response
  fastify.log.info('Received POST /echo with body:', request.body);
  fastify.log.info('Sending response:', response);

  return response;
});

const start = async () => {
  try {
    await fastify.listen({ port: PORT });
    fastify.log.info(`Server is running at http://localhost:${PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
