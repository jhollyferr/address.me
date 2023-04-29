/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-unused-vars */
import type { ReactElement } from 'react';
import { useCallback, useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import MaskedInput from 'react-text-mask';

import { AddressStepContainer, Box, InputFormControl } from './styles';

import type { UserRegisterFormType } from '~/schemas/form';
import { AddressService } from '~/services';
import { CEP_MASK, UF_MASK } from '~/utils/Mask';

type PasswordInputType = Pick<
	UserRegisterFormType,
	'confirm_password' | 'password'
>;

type VisibleInputType = { [P in keyof PasswordInputType]: boolean };

type VisibleInputKeyType = keyof VisibleInputType;

export function AddressStep(): ReactElement {
	const {
		register,
		control,
		getFieldState,
		getValues,
		setValue,
		formState: { errors },
		setError,
	} = useFormContext<UserRegisterFormType>();

	const zip = getValues('address.zip');

	const getAddress = useCallback(
		async (zip: string): Promise<void> => {
			try {
				const {
					data: { address },
				} = await AddressService.searchAddress(zip);

				setValue('address', address);
			} catch (error) {
				setError('address.zip', { message: 'CEP inválido!' });
				console.log(error);
			}
		},
		[setError, setValue],
	);

	useEffect(() => {
		if (zip && zip.length === 9) getAddress(zip);
	}, [zip, getAddress]);

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
								mask={CEP_MASK}
								guide={false}
								showMask={true}
								placeholder="00000-000"
								value={field.value}
								onChange={field.onChange}
							/>
						)}
					/>
					{errors.address?.zip?.message && (
						<span>* {errors.address?.zip?.message}</span>
					)}
				</InputFormControl>
				<InputFormControl error={Boolean(errors?.address?.street?.message)}>
					<label htmlFor="street">Rua</label>
					<input
						id="street"
						type="text"
						placeholder="Park Avenue."
						{...register('address.street')}
					/>
					{errors.address?.street?.message && (
						<span>* {errors.address?.street?.message}</span>
					)}
				</InputFormControl>
				<InputFormControl>
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
						placeholder="Manhattan"
						{...register('address.neighborhood')}
					/>
					{errors.address?.neighborhood?.message && (
						<span>* {errors.address?.neighborhood?.message}</span>
					)}
				</InputFormControl>
				<InputFormControl error={Boolean(errors?.address?.location?.message)}>
					<label htmlFor="location">Cidade</label>
					<input
						id="location"
						type="text"
						placeholder="New York"
						{...register('address.location')}
					/>
					{errors.address?.location?.message && (
						<span>* {errors.address?.location?.message}</span>
					)}
				</InputFormControl>
				<InputFormControl error={Boolean(errors?.address?.uf?.message)}>
					<label htmlFor="uf">UF</label>
					<Controller
						name="address.uf"
						control={control}
						render={({ field }) => (
							<MaskedInput
								mask={UF_MASK}
								guide={false}
								showMask={true}
								value={field.value?.toUpperCase()}
								onChange={field.onChange}
								placeholder="US"
							/>
						)}
					/>
					{errors.address?.uf?.message && (
						<span>* {errors.address?.uf?.message}</span>
					)}
				</InputFormControl>
			</Box>
		</AddressStepContainer>
	);
}
