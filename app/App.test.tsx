import React from 'react';
import App from './App';
import { render, screen, userEvent } from './test/utils';

describe('Simple working test', () => {
    it('the title is visible', () => {
        render(<App />);
        expect(screen.getByText(/Hello B.A.S.S. App/i)).toBeInTheDocument();
    });

    it('should increment count on click', async () => {
        render(<App />);
        userEvent.click(screen.getByRole('button'));
        expect(await screen.findByText(/count is 1/i)).toBeInTheDocument();
    });
});
