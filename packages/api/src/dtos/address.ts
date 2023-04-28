import type { Address } from '@prisma/client';

export type CreateUserAddress = Omit<
	Address,
	'id' | 'created_at' | 'updated_at'
>;
