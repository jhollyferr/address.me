import type { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

import 'rsuite/dist/rsuite-no-reset.min.css';

import { Multistep } from './components/Multistep';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App(): ReactElement {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Multistep />
			<GlobalStyle />
		</ThemeProvider>
	);
}
