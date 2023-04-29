import { z } from 'zod';

export const searchByCepParamsSchema = z.object({
	cep: z.string().length(9),
});
