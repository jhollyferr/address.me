import { compare } from 'bcryptjs';
import { beforeEach, describe, expect, it } from 'vitest';

import type { RegisterUseCaseRequest } from '~/dtos/users';
import { UserAlreadyExistsError } from '~/errors/users/user-already-exists-error';
import { InMemoryAddressRepository } from '~/repositories/in-memory/in-memory-address-repository';
import { InMemoryUsersRepository } from '~/repositories/in-memory/in-memory-users-repository';

import { RegisterUseCase } from './register';

let usersRepository: InMemoryUsersRepository;
let addressRepository: InMemoryAddressRepository;
let sut: RegisterUseCase;

const UserData: RegisterUseCaseRequest = {
	email: 'envkt@example.com',
	password: '123456',
	name: 'John Doe',
	address: {
		complement: '123 Main St',
		location: 'Portland, Oregon',
		neighborhood: 'Washington DC',
		street: '123 Main St',
		uf: 'PR',
		zip: '12345',
	},
};

describe('Register User Use Case', () => {
	beforeEach(() => {
		usersRepository = new InMemoryUsersRepository();
		addressRepository = new InMemoryAddressRepository();
		sut = new RegisterUseCase(usersRepository, addressRepository);
	});

	it('shold be able to register user with address', async () => {
		const { user } = await sut.execute(UserData);

		expect(user).toHaveProperty('id');
		expect(user.address).toHaveProperty('id');
	});

	it('shold hash user password upon registration', async () => {
		const { user } = await sut.execute(UserData);

		const isPasswordCorrectlyHashed = await compare(
			UserData.password,
			user.password_hash,
		);

		expect(isPasswordCorrectlyHashed).toBe(true);
	});

	it('shold not be able to register with same email twice', async () => {
		await sut.execute(UserData);

		await expect(() => sut.execute(UserData)).rejects.toBeInstanceOf(
			UserAlreadyExistsError,
		);
	});
});
