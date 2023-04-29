/* eslint-disable no-unused-vars */
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import type { ReactElement } from 'react';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Steps } from 'rsuite';

import { StepsForms } from './Steps';
import { Form, MultiStepContainer } from './styles';

import type { UserRegisterFormType } from '~/schemas/form';
import { UserRegisterFormSchema } from '~/schemas/form';
import { UserService } from '~/services';

export function Multistep(): ReactElement {
	const [step, setStep] = useState<number>(0);

	function handleNext(): void {
		setStep((state) => (state < 3 ? state + 1 : state));
	}

	function handleBack(): void {
		setStep((state) => (state > 0 ? state - 1 : state));
	}

	const FormStep = useForm<UserRegisterFormType>({
		mode: 'all',
		resolver: zodResolver(UserRegisterFormSchema),
	});

	const { reset } = FormStep;

	async function handleRegister(data: UserRegisterFormType): Promise<unknown> {
		try {
			await UserService.register(data);
			handleNext();
			reset();
		} catch (error) {
			if (error instanceof AxiosError) {
				if (error.response?.status === 409)
					return toast.error('E-mail já cadastrado.');

				toast.error('Houve um erro interno, tente novamente mais tarde!');
			}

			console.log(error);
		}
	}

	return (
		<MultiStepContainer>
			<Steps current={step}>
				<Steps.Item title="Usuário" />
				<Steps.Item title="Endereço" />
				<Steps.Item title="Finalizado" />
			</Steps>

			<FormProvider {...FormStep}>
				<Form onSubmit={FormStep.handleSubmit(handleRegister)}>
					<StepsForms
						handleBack={handleBack}
						handleNext={handleNext}
						step={step}
						setStep={setStep}
					/>
				</Form>
			</FormProvider>
		</MultiStepContainer>
	);
}
