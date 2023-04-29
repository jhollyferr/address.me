import type { FastifyReply, FastifyRequest } from 'fastify';
import { InvalidCepError } from '~/errors/address/invalid-cep-error';

import { makeSearchByCepUseCase } from '~/factories/address/make-search-by-cep';
import { searchByCepParamsSchema } from '~/schemas/address';

export async function searchByCep(
	request: FastifyRequest,
	reply: FastifyReply,
): Promise<FastifyReply> {
	const { cep } = searchByCepParamsSchema.parse(request.params);

	try {
		const searchByCepUseCase = makeSearchByCepUseCase();

		const address = await searchByCepUseCase.execute(cep);

		return reply.status(200).send({ address });
	} catch (error) {
		if (error instanceof InvalidCepError)
			return reply.status(409).send({ message: error.message });

		throw error;
	}
}
