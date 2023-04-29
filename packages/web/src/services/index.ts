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
