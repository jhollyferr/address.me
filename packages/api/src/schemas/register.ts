import { z } from 'zod';

export const userAddressBodySchema = z.object({
	zip: z.string().length(9),
	street: z.string(),
	complement: z.string(),
	neighborhood: z.string(),
	location: z.string(),
	uf: z.string().length(2),
});

export const registerBodySchema = z.object({
	name: z.string(),
	email: z.string().email(),
	password: z.string().min(6),
	address: userAddressBodySchema,
});
