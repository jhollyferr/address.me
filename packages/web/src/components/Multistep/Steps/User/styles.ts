/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, { css } from 'styled-components';

export const UserStepContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const InputFormControl = styled.div<{ error: boolean }>`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	position: relative;

	input {
		border: 1px solid transparent;
		box-shadow: 0 0 0 1px ${({ theme }) => theme['indigo-400']};
		border-radius: 12px;
		width: 100%;
		height: 2.5rem;
		padding-left: 1rem;

		&::placeholder {
			color: ${({ theme }) => theme['gray-400']};
		}
	}

	span {
		font-size: 0.8rem;
	}

	${({ error }) =>
		error &&
		css`
			input {
				box-shadow: 0 0 0 1px ${({ theme }) => theme['red-400']};
			}

			span {
				color: ${({ theme }) => theme['red-400']};
			}
		`}
`;

export const ViewInputBox = styled.div`
	position: relative;
	flex: 1;

	svg {
		position: absolute;
		right: 1rem;
		top: 0.5rem;
		cursor: pointer;
	}
`;
