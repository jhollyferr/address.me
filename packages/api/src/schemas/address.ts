import { z } from 'zod';

export const searchByCepParamsSchema = z.object({
	cep: z.string().length(9, {
		message: `The value provided for 'cep' must have exactly 9 characters.`,
	}),
});
