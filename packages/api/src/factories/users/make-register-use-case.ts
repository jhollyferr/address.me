import { PrismaAddressRepository } from '~/repositories/prisma/prisma-address-repository';
import { PrismaUsersRepository } from '~/repositories/prisma/prisma-users-repository';
import { RegisterUseCase } from '~/use-cases/users/register';

export function makeRegisterUseCase(): RegisterUseCase {
	const usersRepository = new PrismaUsersRepository();
	const addressRepository = new PrismaAddressRepository();

	const useCase = new RegisterUseCase(usersRepository, addressRepository);

	return useCase;
}
