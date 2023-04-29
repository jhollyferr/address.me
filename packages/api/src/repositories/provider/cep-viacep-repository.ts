import type { CepAddressResponse } from '~/dtos/address';
import { useFetch } from '~/utils/use-fecth';

import type { CepRepository } from '../cep-repository';

export class ViaCepProviderRepository implements CepRepository {
	async search(cep: string): Promise<CepAddressResponse | null> {
		const data = await useFetch<CepAddressResponse>(`${cep}/json`, {
			method: 'GET',
		});

		return data;
	}
}
