import type { FastifyListenOptions } from 'fastify';

import { app } from './app';
import { Env } from './env';

const listenOptions: FastifyListenOptions = {
	host: '0.0.0.0',
	port: Env.PORT,
};

app
	.listen(listenOptions)
	.then(() =>
		console.log({ message: '🚀️ HTTP Server running!', ...listenOptions }),
	);
