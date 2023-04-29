import type { AxiosResponse } from 'axios';

import { API } from '..';

import type { UserRegisterFormType } from '~/schemas/form';

type createUserWithAddress = Omit<UserRegisterFormType, 'confirm_password'>;

export async function register(
	data: createUserWithAddress,
): Promise<AxiosResponse<any>> {
	const response = await API.post('/users', data);
	return response;
}
