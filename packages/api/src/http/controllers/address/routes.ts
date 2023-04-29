import type { FastifyInstance } from 'fastify';

import { searchByCep } from './search-by-cep';

export async function addressRoutes(app: FastifyInstance): Promise<void> {
	app.get('/address/:cep', searchByCep);
}
