/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-unused-vars */
import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import MaskedInput from 'react-text-mask';

import { AddressStepContainer, Box, InputFormControl } from './styles';

import type { SearchAddressType, UserRegisterFormType } from '~/schemas/form';
import { AddressService } from '~/services';

type PasswordInputType = Pick<
	UserRegisterFormType,
	'confirm_password' | 'password'
>;

type VisibleInputType = { [P in keyof PasswordInputType]: boolean };

type VisibleInputKeyType = keyof VisibleInputType;

export function AddressStep(): ReactElement {
	const [address, setAddress] = useState<SearchAddressType | null>(null);

	const {
		register,
		control,
		getFieldState,
		getValues,
		formState: { errors },
	} = useFormContext<UserRegisterFormType>();

	const cepMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
	const ufMask = [/[A-Za-z]/, /[A-Za-z]/];

	const cep = getValues('address.zip');

	console.log(cep);

	async function getAddress(cep: string): Promise<void> {
		try {
			const response = await AddressService.searchAddress(cep);
			console.log({ response });
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		if (cep && cep.length === 9) getAddress(cep);
	}, [cep]);

	return (
		<AddressStepContainer>
			<Box>
				<InputFormControl error={Boolean(errors?.address?.zip?.message)}>
					<label htmlFor="zip">CEP</label>
					<Controller
						name="address.zip"
						control={control}
						render={({ field }) => (
							<MaskedInput
								mask={cepMask}
								guide={false}
								showMask={true}
								value={field.value}
								onChange={field.onChange}
							/>
						)}
					/>
				</InputFormControl>
				<InputFormControl error={Boolean(errors?.address?.street?.message)}>
					<label htmlFor="street">Rua</label>
					<input
						id="street"
						type="text"
						{...register('address.street')}
					/>
				</InputFormControl>
				<InputFormControl error={Boolean(errors?.address?.complement?.message)}>
					<label htmlFor="complement">Complemento</label>
					<input
						id="complement"
						type="text"
						{...register('address.complement')}
					/>
				</InputFormControl>
			</Box>

			<Box>
				<InputFormControl
					error={Boolean(errors?.address?.neighborhood?.message)}
				>
					<label htmlFor="neighborhood">Bairro</label>
					<input
						id="neighborhood"
						type="text"
						{...register('address.neighborhood')}
					/>
				</InputFormControl>
				<InputFormControl error={Boolean(errors?.address?.location?.message)}>
					<label htmlFor="location">Cidade</label>
					<input
						id="location"
						type="text"
						{...register('address.location')}
					/>
				</InputFormControl>
				<InputFormControl error={Boolean(errors?.address?.uf?.message)}>
					<label htmlFor="uf">UF</label>
					<Controller
						name="address.uf"
						control={control}
						render={({ field }) => (
							<MaskedInput
								mask={ufMask}
								guide={false}
								showMask={true}
								value={field?.value?.toUpperCase()}
								onChange={field.onChange}
							/>
						)}
					/>
				</InputFormControl>
			</Box>
		</AddressStepContainer>
	);
}
