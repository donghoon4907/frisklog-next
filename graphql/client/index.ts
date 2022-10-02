import { GraphQLClient } from 'graphql-request';

import { getCookie } from '../../lib/cookie/cookie.client';
import { COOKIE_TOKEN_KEY } from '../../lib/cookie/cookie.key';

const GRAPHQL_ENDPOINT = `${process.env.BACKEND_ROOT}/graphql`;

interface UpdateClientHeaderOptions {
    token?: string | null;
}

export function updateClientHeader(options: UpdateClientHeaderOptions) {
    const { token } = options;

    if (token) {
        client.setHeader('authorization', `Bearer ${token}`);
    } else {
        client.setHeader('authorization', `Non-login`);
    }
}

export const client = new GraphQLClient(GRAPHQL_ENDPOINT);

if (typeof window !== 'undefined') {
    const token = getCookie(COOKIE_TOKEN_KEY);

    updateClientHeader({ token });
}
