import 'dotenv/config';

import { z } from 'zod';

const envSchema = z.object({
	NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
	JWT_SECRET: z.string(),
	PORT: z.coerce.number().default(3333),

	POSTGRESQL_USERNAME: z.string().optional(),
	POSTGRESQL_PASSWORD: z.string().optional(),
	POSTGRESQL_DATABASE: z.string().optional(),
	POSTGRESQL_PORT: z.coerce.number().default(5432),

	CEP_API_URL: z.string().url(),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
	console.error('❌️ Invalid environment variables', _env.error.format());

	throw new Error('Invalid environment variables.');
}

export const Env = _env.data;
