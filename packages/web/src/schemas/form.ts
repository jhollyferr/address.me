import { z } from 'zod';

export const AddressFormSchema = z.object({
	zip: z.string().length(9, {
		message: 'CEP deve conter 8 dígitos com hífen',
	}),
	street: z.string().min(1, { message: 'Preencha este campo' }),
	complement: z.string().optional(),
	neighborhood: z.string().min(1, { message: 'Preencha este campo' }),
	location: z.string().min(1, { message: 'Preencha este campo' }),
	uf: z.string().length(2, {
		message: 'UF deve conter 2 caracteres',
	}),
});

export const UserRegisterFormSchema = z
	.object({
		name: z.string().min(1, { message: 'Informe seu nome' }),
		email: z.string().email({ message: 'Deve ser um email válido' }),
		password: z.string().min(6, {
			message: 'Senha deve ter no mínimo 6 caracteres',
		}),
		confirm_password: z.string().min(6, {
			message: 'Deve ter no mínimo 6 caracteres',
		}),
		address: AddressFormSchema,
	})
	.refine((fields) => fields.password === fields.confirm_password, {
		path: ['confirm_password'],
		message: 'Senhas não conferem',
	});

export type UserRegisterFormType = z.infer<typeof UserRegisterFormSchema>;

export type SearchAddressType = Pick<UserRegisterFormType, 'address'>;
