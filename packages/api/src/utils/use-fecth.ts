/* eslint-disable no-undef */
import { Env } from '~/env';

export async function useFetch<T = unknown>(
	input: RequestInfo | URL,
	init?: RequestInit | undefined,
): Promise<T | null> {
	const data = await fetch(`${Env.CEP_API_URL}/${input}`, init);

	const json = await data.json();

	if (json.erro) return null;

	return json as T;
}
