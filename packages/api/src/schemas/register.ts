import { z } from 'zod';

export const userAddressBodySchema = z.object({
	zip: z.string().length(9, {
		message: `The value provided for 'cep' must have exactly 9 characters.`,
	}),
	street: z.string(),
	complement: z.string().nullable(),
	neighborhood: z.string(),
	location: z.string(),
	uf: z.string().length(2, {
		message: `The value provided for 'uf' must have exactly 2 characters.`,
	}),
});

export const registerBodySchema = z.object({
	name: z.string(),
	email: z.string().email(),
	password: z.string().min(6),
	address: userAddressBodySchema,
});
