import type { AxiosInstance } from 'axios';
import axios from 'axios';

export const API: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	headers: {
		'Access-Control-Allow-Origin': '*',
	},
});

export * as AddressService from './endpoints/Address';
export * as UserService from './endpoints/User';

export const FormRegisterStatusResponse = {
	409: 'Você já possui um cadastro.',
	201: 'Cadastro realizado com sucesso.',
};

export type SearchAddressStatusResponse = {
	409: 'CEP Inválido';
	200: 'Endereço encotrado';
};

export type FormRegisterStatusResponseStatus = 409 | 200;
