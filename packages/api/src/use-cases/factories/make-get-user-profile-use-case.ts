import { PrismaUsersRepository } from '~api/repositories/prisma/prisma-users-repository';

import { GetUserProfileUseCase } from '../users/get-user-profile';

export function makeGetUseProfileUseCase(): GetUserProfileUseCase {
	const usersRepository = new PrismaUsersRepository();
	const useCase = new GetUserProfileUseCase(usersRepository);

	return useCase;
}
