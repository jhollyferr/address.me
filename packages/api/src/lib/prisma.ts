import { PrismaClient } from '@prisma/client';

import { Env } from '~api/env';

export const prisma = new PrismaClient({
	log: Env.NODE_ENV === 'dev' ? ['query'] : [],
});
