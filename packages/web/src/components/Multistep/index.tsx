/* eslint-disable no-unused-vars */
import { zodResolver } from '@hookform/resolvers/zod';
import type { ReactElement } from 'react';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Steps } from 'rsuite';

import { StepsForms } from './Steps';
import { Form, MultiStepContainer } from './styles';

import type { UserRegisterFormType } from '~/schemas/form';
import { UserRegisterFormSchema } from '~/schemas/form';

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

	async function handleRegister(data: UserRegisterFormType): Promise<void> {
		try {
			console.log(data);
		} catch (error) {
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
					/>
				</Form>
			</FormProvider>
		</MultiStepContainer>
	);
}
