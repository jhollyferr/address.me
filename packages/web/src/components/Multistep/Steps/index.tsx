import { CaretLeft, CaretRight } from 'phosphor-react';
import type { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';

import { AddressStep } from './Address';
import {
	ButtonGroup,
	NavigateButton,
	StepsFormsContainer,
	SubmitButton,
} from './styles';
import { UserStep } from './User';

import type { UserRegisterFormType } from '~/schemas/form';

interface StepsFormsProps {
	step: number;
	handleBack: () => void;
	handleNext: () => void;
}

export function StepsForms({
	handleBack,
	handleNext,
	step,
}: StepsFormsProps): ReactElement {
	const {
		formState: { isValid, isSubmitting },
	} = useFormContext<UserRegisterFormType>();

	return (
		<StepsFormsContainer>
			{step === 0 && <UserStep />}
			{step === 1 && <AddressStep />}
			{step === 2 && <h1>step3</h1>}

			<ButtonGroup>
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
			</ButtonGroup>
		</StepsFormsContainer>
	);
}
