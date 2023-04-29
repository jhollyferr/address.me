import type { Address } from '@prisma/client';

import type { CreateUserAddress } from '~/dtos/address';
import { prisma } from '~/lib/prisma';

import type { AddressRepository } from '../address-repository';

export class PrismaAddressRepository implements AddressRepository {
	async create(data: CreateUserAddress): Promise<Address> {
		return await prisma.address.create({
			data,
		});
	}
}
