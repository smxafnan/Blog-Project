// src/routes/users.ts

import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { User } from '../crud-types/user';

let users: User[] = [];
let idCounter = 1;

export async function userRoutes(fastify: FastifyInstance) {
  // Create User
  fastify.post('/users', async (request, reply) => {
    const schema = z.object({
      name: z.string().min(1),
      age: z.number().min(0),
    });

    const parsed = schema.safeParse(request.body);
    if (!parsed.success) {
      return reply.status(400).send(parsed.error.format());
    }

    const newUser: User = {
      id: idCounter++,
      name: parsed.data.name,
      age: parsed.data.age,
    };

    users.push(newUser);
    return reply.status(201).send(newUser);
  });

  // Read All Users
  fastify.get('/users', async () => users);

  // Read One User
  fastify.get('/users/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    const user = users.find(u => u.id === parseInt(id));
    if (!user) return reply.status(404).send({ error: 'User not found' });
    return user;
  });

  // Update User
  fastify.put('/users/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    const userIndex = users.findIndex(u => u.id === parseInt(id));
    if (userIndex === -1) return reply.status(404).send({ error: 'User not found' });

    const schema = z.object({
      name: z.string().min(1),
      age: z.number().min(0),
    });

    const parsed = schema.safeParse(request.body);
    if (!parsed.success) {
      return reply.status(400).send(parsed.error.format());
    }

    users[userIndex] = { id: parseInt(id), ...parsed.data };
    return users[userIndex];
  });

  // Delete User
  fastify.delete('/users/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    const userIndex = users.findIndex(u => u.id === parseInt(id));
    if (userIndex === -1) return reply.status(404).send({ error: 'User not found' });

    users.splice(userIndex, 1);
    return reply.status(204).send();
  });
}
