import type { ReactElement } from 'react';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import 'rsuite/dist/rsuite-no-reset.min.css';

import { Multistep } from './components/Multistep';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App(): ReactElement {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Multistep />
			<GlobalStyle />
			<ToastContainer theme="colored" />
		</ThemeProvider>
	);
}
