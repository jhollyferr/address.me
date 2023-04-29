import { CepAddressResponse } from '~/dtos/address';
import { CepRepository } from '../cep-repository';

export class InMemoryCepRepository implements CepRepository {
	public items: CepAddressResponse[] = [
		{
			bairro: 'Santa Luzia',
			cep: '69104-015',
			complemento: 'Apto A',
			localidade: 'Itacoatiara',
			logradouro: 'Rua Nossa Senhora do Rosário',
			uf: 'AM',
		},
	];

	async search(cep: string): Promise<CepAddressResponse | null> {
		return this.items.find((address) => address.cep === cep) ?? null;
	}
}
