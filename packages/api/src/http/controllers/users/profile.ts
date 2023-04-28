import type { FastifyReply, FastifyRequest } from 'fastify';

import { makeGetUseProfileUseCase } from '~api/use-cases/factories/make-get-user-profile-use-case';

export async function profile(
	request: FastifyRequest,
	reply: FastifyReply,
): Promise<FastifyReply> {
	const getUserProfile = makeGetUseProfileUseCase();

	const { user } = await getUserProfile.execute({
		userId: request.user.sub,
	});

	return reply.status(200).send({
		user: {
			...user,
			password_hash: undefined,
		},
	});
}
