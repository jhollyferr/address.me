/* eslint-disable no-unused-vars */
import { hash } from 'bcryptjs';

import type {
	RegisterUseCaseRequest,
	RegisterUseCaseResponse,
} from '~/dtos/users';
import { UserAlreadyExistsError } from '~/errors/users/user-already-exists-error';
import type { AddressRepository } from '~/repositories/address-repository';
import type { UsersRepository } from '~/repositories/users-repository';

export class RegisterUseCase {
	constructor(
		private usersRepository: UsersRepository,
		private addressRepository: AddressRepository,
	) {}

	async execute(
		data: RegisterUseCaseRequest,
	): Promise<RegisterUseCaseResponse> {
		const password_hash = await hash(data.password, 6);

		const userWithSameEmail = await this.usersRepository.findByEmail(
			data.email,
		);

		if (userWithSameEmail) throw new UserAlreadyExistsError();

		const user = await this.usersRepository.create({
			email: data.email,
			name: data.name,
			password_hash,
		});

		const address = await this.addressRepository.create({
			...data.address,
			user_id: user.id,
		});

		return {
			user: {
				...user,
				address,
			},
		};
	}
}
