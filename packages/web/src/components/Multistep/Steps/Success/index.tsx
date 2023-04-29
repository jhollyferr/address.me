import type { ReactElement } from 'react';

import { SucessContainer } from './styles';

export function SuccessStep(): ReactElement {
	return (
		<SucessContainer>
			<h1>Cadastro concluído com sucesso!</h1>
		</SucessContainer>
	);
}
