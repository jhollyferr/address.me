import request from 'supertest';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

import { app } from '~/app';

describe('Register (e2e)', () => {
	beforeAll(async () => {
		await app.ready();
	});

	afterAll(async () => {
		await app.close();
	});

	it('should be able to register', async () => {
		const response = await request(app.server)
			.post('/users')
			.send({
				name: 'Jhollyfer',
				email: 'jhollyfer.fr@gmail.com',
				password: '123456',
				address: {
					complement: 'de 2637 a 3261 - lado ímpar',
					location: 'Itacoatiara',
					neighborhood: 'Santa Luzia',
					street: 'Rua Nossa Senhora do Rosário',
					uf: 'AM',
					zip: '69104-015',
				},
			});

		expect(response.statusCode).toEqual(201);
	});
});
