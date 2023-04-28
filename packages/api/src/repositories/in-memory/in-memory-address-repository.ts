import type { Address } from '@prisma/client';
import { randomUUID } from 'crypto';

import type { CreateUserAddress } from '~/dtos/address';

import type { AddressRepository } from '../address-repository';

export class InMemoryAddressRepository implements AddressRepository {
	public items: Address[] = [];

	async create(data: CreateUserAddress): Promise<Address> {
		const address: Address = {
			...data,
			id: randomUUID(),
			created_at: new Date(),
			updated_at: new Date(),
		};

		this.items.push(address);

		return address;
	}
}
