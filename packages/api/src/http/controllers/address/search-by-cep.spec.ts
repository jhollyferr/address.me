import request from 'supertest';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

import { app } from '~/app';

describe('Search by Cep (e2e)', () => {
	beforeAll(async () => {
		await app.ready();
	});

	afterAll(async () => {
		await app.close();
	});

	it('should be able search address by cep', async () => {
		const cep = '69105-015';

		const response = await request(app.server).get(`/address/${cep}`);

		expect(response.statusCode).toEqual(200);
	});
});
