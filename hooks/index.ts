import { useDispatch } from 'react-redux';

import { LoginModalAction } from '../actions/switch/login-modal';
import { getCookie } from '../lib/cookie/cookie.client';
import { COOKIE_TOKEN_KEY } from '../lib/cookie/cookie.key';

export const useAuthenticate = () => {
    const dispatch = useDispatch();

    const validateToken = () => {
        const token = getCookie(COOKIE_TOKEN_KEY);

        if (token === null) {
            dispatch({
                type: LoginModalAction.SHOW,
            });
        }

        return token;
    };

    return { validateToken };
};
