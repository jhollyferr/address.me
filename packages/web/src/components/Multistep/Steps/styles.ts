/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const StepsFormsContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`;

export const SubmitButton = styled.button`
	width: 5.125rem;
	height: 2.0625rem;
	border-radius: 10px;
	background-color: ${({ theme }) => theme['indigo-600']};
	border: 1px solid transparent;
	color: ${({ theme }) => theme['white']};

	&:disabled {
		opacity: 0.4;
		background-color: ${({ theme }) => theme['indigo-400']};
	}
`;

export const NavigateButton = styled.button`
	height: 2.0625rem;
	width: 2.0625rem;
	border-radius: 10px;
	border: 1px solid ${({ theme }) => theme['indigo-300']};
	background-color: ${({ theme }) => theme['white']};
	color: ${({ theme }) => theme['indigo-600']};
	line-height: 0;

	&:disabled {
		opacity: 0.4;
	}

	&:not(:disabled):hover {
		background-color: ${({ theme }) => theme['indigo-600']};
		color: ${({ theme }) => theme['white']};
	}
`;

export const ButtonGroup = styled.div`
	display: flex;
	gap: 0.2rem;
	flex: 1;
	justify-content: flex-end;
`;
