import { GraphQLClient } from 'graphql-request';

import { getCookie } from '../../lib/cookie/cookie.client';
import { COOKIE_TOKEN_KEY } from '../../lib/cookie/cookie.key';

const GRAPHQL_ENDPOINT = `${process.env.BACKEND_ROOT}/graphql`;

export function updateClientHeader() {
    const token = getCookie(COOKIE_TOKEN_KEY);

    client.setHeader('authorization', `Bearer ${token}`);
}

export const client = new GraphQLClient(GRAPHQL_ENDPOINT);

if (typeof window !== 'undefined') {
    updateClientHeader();
}
