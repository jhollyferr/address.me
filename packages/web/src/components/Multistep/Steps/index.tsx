/* eslint-disable no-unused-vars */
import { CaretLeft, CaretRight } from 'phosphor-react';
import type { ReactElement } from 'react';
import { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';

import { AddressStep } from './Address';
import {
	ButtonGroup,
	NavigateButton,
	StepsFormsContainer,
	SubmitButton,
} from './styles';
import { SuccessStep } from './Success';
import { UserStep } from './User';

import type { UserRegisterFormType } from '~/schemas/form';

interface StepsFormsProps {
	step: number;
	handleBack: () => void;
	handleNext: () => void;
	setStep: (step: number) => void;
}

export function StepsForms({
	handleBack,
	handleNext,
	setStep,
	step,
}: StepsFormsProps): ReactElement {
	const {
		formState: { isValid, isSubmitting },
	} = useFormContext<UserRegisterFormType>();

	return (
		<StepsFormsContainer>
			{step === 0 && <UserStep />}
			{step === 1 && <AddressStep />}
			{step === 2 && <SuccessStep />}

			<ButtonGroup>
				{!(step === 2) && (
					<Fragment>
						<NavigateButton
							type="button"
							onClick={handleBack}
							disabled={step === 0}
						>
							<CaretLeft size={20} />
						</NavigateButton>

						<NavigateButton
							type="button"
							onClick={handleNext}
							disabled={step === 1}
						>
							<CaretRight size={20} />
						</NavigateButton>

						<SubmitButton
							type="submit"
							disabled={!(step === 1) || !isValid || isSubmitting}
						>
							Cadastrar
						</SubmitButton>
					</Fragment>
				)}

				{step === 2 && (
					<SubmitButton
						type="button"
						onClick={(): void => setStep(0)}
					>
						Novo
					</SubmitButton>
				)}
			</ButtonGroup>
		</StepsFormsContainer>
	);
}
