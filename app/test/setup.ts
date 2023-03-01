import '@testing-library/jest-dom';

import { afterAll, afterEach, beforeAll } from 'vitest';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

const accountResp = {
    records: [
        {
            name: 'testing',
        },
    ],
};

// TODO: you'll need to add your own mock network handlers here
export const restHandlers = [
    rest.get('/services/data/v50.0/query', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(accountResp));
    }),
];

const server = setupServer(...restHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());
