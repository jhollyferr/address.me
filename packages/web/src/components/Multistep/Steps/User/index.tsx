/* eslint-disable no-unused-vars */
import type { ReactElement } from 'react';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { InputFormControl, UserStepContainer } from './styles';

import type { UserRegisterFormType } from '~/schemas/form';

type PasswordInputType = Pick<
	UserRegisterFormType,
	'confirm_password' | 'password'
>;

type VisibleInputType = { [P in keyof PasswordInputType]: boolean };

type VisibleInputKeyType = keyof VisibleInputType;

export function UserStep(): ReactElement {
	const {
		register,
		formState: { errors },
	} = useFormContext<UserRegisterFormType>();

	const [visibleInputs, setVisibleInputs] = useState<VisibleInputType>({
		confirm_password: false,
		password: false,
	});

	function handleVisibility(target: VisibleInputKeyType): void {
		setVisibleInputs((state) => ({
			...state,
			[target]: !state[target],
		}));
	}
	return (
		<UserStepContainer>
			<InputFormControl error={Boolean(errors.name?.message)}>
				<label htmlFor="name">Nome</label>
				<input
					type="text"
					id="name"
					{...register('name')}
				/>
			</InputFormControl>
			<InputFormControl error={Boolean(errors.email?.message)}>
				<label htmlFor="email">E-mail</label>
				<input
					type="email"
					id="email"
					{...register('email')}
				/>
			</InputFormControl>

			<InputFormControl error={Boolean(errors.password?.message)}>
				<label htmlFor="password">Senha</label>
				<input
					type="password"
					id="password"
					{...register('password')}
				/>
			</InputFormControl>

			<InputFormControl error={Boolean(errors.confirm_password?.message)}>
				<label htmlFor="confirm_password">Confirmar senha</label>
				<input
					type="password"
					// id="confirm_password"
					{...register('confirm_password')}
				/>
			</InputFormControl>
		</UserStepContainer>
	);
}
