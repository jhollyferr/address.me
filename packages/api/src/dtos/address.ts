import type { Address } from '@prisma/client';

export type CreateUserAddress = Omit<
	Address,
	'id' | 'created_at' | 'updated_at'
>;

export type CreateAddressRequest = Omit<CreateUserAddress, 'user_id'>;

export type CepAddressResponse = {
	cep: string;
	logradouro: string;
	complemento: string;
	bairro: string;
	localidade: string;
	uf: string;
};

export type AddressResponse = CreateAddressRequest;
