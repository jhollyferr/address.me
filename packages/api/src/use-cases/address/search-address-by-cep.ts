/* eslint-disable no-unused-vars */

import type { AddressResponse } from '~/dtos/address';
import { InvalidCepError } from '~/errors/address/invalid-cep-error';
import type { CepRepository } from '~/repositories/cep-repository';

export class SearchAddressByCepUseCase {
	constructor(private cepRepository: CepRepository) {}

	async execute(cep: string): Promise<AddressResponse> {
		const address = await this.cepRepository.search(cep);

		if (!address) throw new InvalidCepError();

		return {
			complement: address.complemento,
			location: address.localidade,
			neighborhood: address.bairro,
			street: address.logradouro,
			uf: address.uf,
			zip: address.cep,
		};
	}
}
