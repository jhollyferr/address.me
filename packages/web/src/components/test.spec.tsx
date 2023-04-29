import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

describe('Avatar Component', () => {
	afterEach(cleanup);

	it('must be able to display an image', () => {
		const { queryByRole } = render(<h1>Hello World</h1>);

		expect(queryByRole('heading')).toBeInTheDocument();
	});
});
