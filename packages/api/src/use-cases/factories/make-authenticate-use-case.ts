import { PrismaUsersRepository } from '~/repositories/prisma/prisma-users-repository';

import { AuthenticateUseCase } from '../users/authenticate';

export function makeAuthenticateUseCase(): AuthenticateUseCase {
	const usersRepository = new PrismaUsersRepository();
	const useCase = new AuthenticateUseCase(usersRepository);

	return useCase;
}
