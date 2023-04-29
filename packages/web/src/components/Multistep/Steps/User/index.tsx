/* eslint-disable no-unused-vars */
import { Eye, EyeSlash } from 'phosphor-react';
import type { ReactElement } from 'react';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { InputFormControl, UserStepContainer, ViewInputBox } from './styles';

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
					placeholder="Don Joe"
					{...register('name')}
				/>
				{errors.name?.message && <span>* {errors.name?.message}</span>}
			</InputFormControl>
			<InputFormControl error={Boolean(errors.email?.message)}>
				<label htmlFor="email">E-mail</label>
				<input
					type="email"
					id="email"
					placeholder="mail@example.com"
					{...register('email')}
				/>
				{errors.email?.message && <span>* {errors.email?.message}</span>}
			</InputFormControl>

			<InputFormControl error={Boolean(errors.password?.message)}>
				<label htmlFor="password">Senha</label>
				<ViewInputBox>
					<input
						type={visibleInputs.password ? 'text' : 'password'}
						id="password"
						placeholder="******"
						{...register('password')}
					/>

					{!visibleInputs.password ? (
						<Eye
							size={24}
							onClick={(): void => handleVisibility('password')}
						/>
					) : (
						<EyeSlash
							size={24}
							onClick={(): void => handleVisibility('password')}
						/>
					)}
				</ViewInputBox>
				{errors.password?.message && <span>* {errors.password?.message}</span>}
			</InputFormControl>

			<InputFormControl error={Boolean(errors.confirm_password?.message)}>
				<label htmlFor="confirm_password">Confirmar senha</label>

				<ViewInputBox>
					<input
						type={visibleInputs.confirm_password ? 'text' : 'password'}
						id="confirm_password"
						placeholder="******"
						{...register('confirm_password')}
					/>

					{!visibleInputs.confirm_password ? (
						<Eye
							size={24}
							onClick={(): void => handleVisibility('confirm_password')}
						/>
					) : (
						<EyeSlash
							size={24}
							onClick={(): void => handleVisibility('confirm_password')}
						/>
					)}
				</ViewInputBox>

				{errors.confirm_password?.message && (
					<span>* {errors.confirm_password?.message}</span>
				)}
			</InputFormControl>
		</UserStepContainer>
	);
}
