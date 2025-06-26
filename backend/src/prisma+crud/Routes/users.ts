// src/routes/users.ts

import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

// We'll pass the prisma instance from index.ts to ensure a single instance is used.
// For now, let's keep it here for clarity, but this will be refined later.
// If you want to refine now, remove this line:
const prisma = new PrismaClient();

export async function userRoutes(fastify: FastifyInstance) {

  // Schema for creating/updating a user
  const userSchema = z.object({
    name: z.string().min(1, "Name is required"),
    age: z.number().int().min(0, "Age must be a non-negative integer"),
  });

  // GET all users (Read)
  fastify.get('/users', async (request, reply) => {
    try {
      const users = await prisma.user.findMany();
      fastify.log.info('Fetched all users from DB:', users);
      return users;
    } catch (error) {
      fastify.log.error('Error fetching all users:', error);
      return reply.status(500).send({ error: 'Could not fetch users' });
    }
  });

  // GET a single user by ID (Read)
  fastify.get('/users/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    const userId = parseInt(id);

    if (isNaN(userId)) {
      return reply.status(400).send({ error: 'Invalid user ID' });
    }

    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });

      if (!user) {
        return reply.status(404).send({ error: 'User not found' });
      }
      fastify.log.info('Fetched single user from DB:', user);
      return user;
    } catch (error) {
      fastify.log.error(`Error fetching user with ID ${userId}:`, error);
      return reply.status(500).send({ error: 'Could not fetch user' });
    }
  });

  // POST create new user (Create)
  fastify.post('/users', async (request, reply) => {
    const parseResult = userSchema.safeParse(request.body);

    if (!parseResult.success) {
      return reply.status(400).send({
        error: 'Validation failed',
        issues: parseResult.error.issues,
      });
    }

    try {
      const newUser = await prisma.user.create({
        data: parseResult.data,
      });
      fastify.log.info('User created in DB:', newUser);
      return reply.status(201).send(newUser);
    } catch (error) {
      fastify.log.error('Error creating user:', error);
      return reply.status(500).send({ error: 'Could not create user' });
    }
  });

  // PUT update user by ID (Update)
  fastify.put('/users/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    const userId = parseInt(id);

    if (isNaN(userId)) {
      return reply.status(400).send({ error: 'Invalid user ID' });
    }

    const parseResult = userSchema.safeParse(request.body);

    if (!parseResult.success) {
      return reply.status(400).send({
        error: 'Validation failed',
        issues: parseResult.error.issues,
      });
    }

    try {
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: parseResult.data,
      });
      fastify.log.info('User updated in DB:', updatedUser);
      return updatedUser;
    } catch (error: any) {
      if (error.code === 'P2025') { // Prisma error code for record not found
        return reply.status(404).send({ error: 'User not found' });
      }
      fastify.log.error(`Error updating user with ID ${userId}:`, error);
      return reply.status(500).send({ error: 'Could not update user' });
    }
  });

  // DELETE user by ID (Delete)
  fastify.delete('/users/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    const userId = parseInt(id);

    if (isNaN(userId)) {
      return reply.status(400).send({ error: 'Invalid user ID' });
    }

    try {
      await prisma.user.delete({
        where: { id: userId },
      });
      fastify.log.info(`User with ID ${userId} deleted from DB.`);
      return reply.status(204).send(); // 204 No Content for successful deletion
    } catch (error: any) {
      if (error.code === 'P2025') { // Prisma error code for record not found
        return reply.status(404).send({ error: 'User not found' });
      }
      fastify.log.error(`Error deleting user with ID ${userId}:`, error);
      return reply.status(500).send({ error: 'Could not delete user' });
    }
  });

}