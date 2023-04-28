import { PrismaUsersRepository } from '~api/repositories/prisma/prisma-users-repository';

import { RegisterUseCase } from '../users/register';

export function makeRegisterUseCase(): RegisterUseCase {
	const usersRepository = new PrismaUsersRepository();
	const useCase = new RegisterUseCase(usersRepository);

	return useCase;
}
