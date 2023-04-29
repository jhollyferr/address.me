import type { Address, Prisma, User } from '@prisma/client';
import type { z } from 'zod';

import type { registerBodySchema } from '~/schemas/register';

export type CreateUserRequest = Pick<Prisma.UserCreateInput, 'name' | 'email'>;

export type CreateUserResponse = CreateUserRequest;

export type RegisterUseCaseRequest = z.infer<typeof registerBodySchema>;

export interface RegisterUseCaseResponse {
	user: User & { address: Omit<Address, 'user_id'> };
}
