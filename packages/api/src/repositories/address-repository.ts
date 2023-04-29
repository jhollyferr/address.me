/* eslint-disable no-unused-vars */
import type { Address } from '@prisma/client';

import type { CreateUserAddress } from '~/dtos/address';

export interface AddressRepository {
	create(data: CreateUserAddress): Promise<Address>;
}
