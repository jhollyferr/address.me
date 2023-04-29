import { ViaCepProviderRepository } from '~/repositories/provider/cep-viacep-repository';
import { SearchAddressByCepUseCase } from '~/use-cases/address/search-address-by-cep';

export function makeSearchByCepUseCase(): SearchAddressByCepUseCase {
	const cepRepository = new ViaCepProviderRepository();

	const useCase = new SearchAddressByCepUseCase(cepRepository);

	return useCase;
}
