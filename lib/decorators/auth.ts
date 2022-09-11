import { client } from '../../graphql/client';
import { getCookie } from '../cookie/cookie.client';
import { COOKIE_TOKEN_KEY } from '../cookie/cookie.key';

export function auth(fn: Function) {
    return function () {
        const token = getCookie(COOKIE_TOKEN_KEY);

        client.setHeader('authorization', `Bearer ${token}`);

        return fn();
    };
}
