import { IncomingMessage, ServerResponse } from 'http';
import Cookies from 'cookies';

import { CookieKey, CookieOutput } from './cookie.interface';

export class ServerCookie {
    private readonly cookies: Cookies;

    constructor(req: IncomingMessage, res: ServerResponse) {
        this.cookies = new Cookies(req, res);
    }

    getCookie(key: CookieKey): CookieOutput {
        return this.cookies.get(key) || null;
    }

    setCookie(key: CookieKey, value: any): Cookies {
        return this.cookies.set(key, value, { httpOnly: false });
    }

    deleteCookie(key: CookieKey): Cookies {
        return this.cookies.set(key);
    }
}
