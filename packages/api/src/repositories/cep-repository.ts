/* eslint-disable no-unused-vars */
import type { CepAddressResponse } from '~/dtos/address';

export interface CepRepository {
	search(cep: string): Promise<CepAddressResponse | null>;
}
