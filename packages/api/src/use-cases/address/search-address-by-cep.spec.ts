import { beforeEach, describe, expect, it } from 'vitest';

import { InvalidCepError } from '~/errors/address/invalid-cep-error';
import { InMemoryCepRepository } from '~/repositories/in-memory/in-memory-cep-repository';
import { SearchAddressByCepUseCase } from './search-address-by-cep';

let cepRepository: InMemoryCepRepository;
let sut: SearchAddressByCepUseCase;

describe('Register User Use Case', () => {
	beforeEach(() => {
		cepRepository = new InMemoryCepRepository();
		sut = new SearchAddressByCepUseCase(cepRepository);
	});

	it('shold be able to search address by cep', async () => {
		const cep = '69104-015';

		const address = await sut.execute(cep);

		expect(address).toHaveProperty('zip');
	});

	it('shold not be able to invalid cep', async () => {
		const cep = '69104-014';

		await expect(() => sut.execute(cep)).rejects.toBeInstanceOf(
			InvalidCepError,
		);
	});
});
