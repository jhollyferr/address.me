import { hash } from 'bcryptjs';
import type { FastifyInstance } from 'fastify';
import request from 'supertest';

import { prisma } from '~/lib/prisma';

interface AuthResponse {
	token: string;
}

export async function createAndAuthenticateUser(
	app: FastifyInstance,
): Promise<AuthResponse> {
	await prisma.user.create({
		data: {
			name: 'John Doe',
			email: 'johndoe@example.com',
			password_hash: await hash('123456', 6),
		},
	});

	const authResponse = await request(app.server).post('/sessions').send({
		email: 'johndoe@example.com',
		password: '123456',
	});

	const { token } = authResponse.body as AuthResponse;

	return {
		token,
	};
}
