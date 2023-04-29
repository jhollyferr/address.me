import type { AxiosResponse } from 'axios';

import { API } from '..';

export async function searchAddress(cep: string): Promise<AxiosResponse<any>> {
	const response = await API.get(`/address/${cep}`);

	return response;
}
