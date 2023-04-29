import type { FastifyReply, FastifyRequest } from 'fastify';

import { UserAlreadyExistsError } from '~/errors/users/user-already-exists-error';
import { makeRegisterUseCase } from '~/factories/users/make-register-use-case';
import { registerBodySchema } from '~/schemas/register';

export async function register(
	request: FastifyRequest,
	reply: FastifyReply,
): Promise<FastifyReply> {
	const data = registerBodySchema.parse(request.body);

	try {
		const registerUseCase = makeRegisterUseCase();

		await registerUseCase.execute(data);
	} catch (error) {
		if (error instanceof UserAlreadyExistsError)
			return reply.status(409).send({ message: error.message });

		throw error;
	}

	return reply.status(201).send();
}
