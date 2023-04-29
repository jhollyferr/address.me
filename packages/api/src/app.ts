import fastifyCookie from '@fastify/cookie';
import fastifyCors from '@fastify/cors';
import fastifyJwt from '@fastify/jwt';
import fastify from 'fastify';
import { ZodError } from 'zod';

import { Env } from './env';
import { addressRoutes } from './http/controllers/address/routes';
import { usersRoutes } from './http/controllers/users/routes';

export const app = fastify({ logger: true });

app.register(fastifyJwt, {
	secret: Env.JWT_SECRET,
	cookie: {
		cookieName: 'refreshToken',
		signed: false,
	},
	sign: {
		expiresIn: '10m',
	},
});

app.register(fastifyCors, {
	origin: '*',
	methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
});

app.register(fastifyCookie);
app.register(usersRoutes);
app.register(addressRoutes);

app.get('/', (request, reply) => {
	return reply.status(200).send({
		message: 'Welcome to Boilerplate Fastify API',
		version: '1.0.0',
	});
});

app.setErrorHandler((error, _, reply) => {
	if (error instanceof ZodError)
		return reply.status(400).send({
			message: 'Validation error',
			issues: error.format(),
		});

	if (!(Env.NODE_ENV === 'production')) console.error(error);

	return reply.status(500).send({
		message: 'Internal Server Error',
	});
});
