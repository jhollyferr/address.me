import type { AxiosResponse } from 'axios';

import { API } from '..';

import type { SearchAddressType } from '~/schemas/form';

export async function searchAddress(
	cep: string,
): Promise<AxiosResponse<SearchAddressType>> {
	const response = await API.get(`/address/${cep}`);

	return response;
}
