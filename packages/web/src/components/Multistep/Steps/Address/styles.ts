/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, { css } from 'styled-components';

export const AddressStepContainer = styled.div`
	flex: 1;
	display: flex;
	gap: 1rem;
	width: 100%;
`;

export const InputFormControl = styled.div<{ error: boolean }>`
	flex: 1;
	width: inherit;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	input {
		border: 1px solid transparent;
		box-shadow: 0 0 0 1px ${({ theme }) => theme['indigo-400']};
		border-radius: 12px;
		width: 100%;
		height: 2.5rem;
		padding-left: 1rem;
	}

	${({ error }) =>
		error &&
		css`
			input {
				box-shadow: 0 0 0 1px ${({ theme }) => theme['red-400']};
			}

			label,
			span {
				color: ${({ theme }) => theme['red-400']};
			}
		`}
`;

export const Box = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
