import type { Address, Prisma, User } from '@prisma/client';

import type { CreateAddressRequest } from './address';

export type CreateUserRequest = Pick<Prisma.UserCreateInput, 'name' | 'email'>;

export type CreateUserResponse = CreateUserRequest;

export type RegisterUseCaseRequest = CreateUserRequest & {
	password: string;
	address: CreateAddressRequest;
};

export interface RegisterUseCaseResponse {
	user: User & { address: Omit<Address, 'user_id'> };
}
