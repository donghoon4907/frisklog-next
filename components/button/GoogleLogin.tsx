import { FC } from 'react';
import { FcGoogle } from 'react-icons/fc';

import { Button } from '.';

export const GoogleLoginButton: FC = () => {
    const handleClick = async () => {
        const url = `https://accounts.google.com/o/oauth2/auth?client_id=${process.env.GOOGLE_CLIENTID}&redirect_uri=${process.env.REDIRECT_URI}&response_type=token&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`;

        window.location.assign(url);
    };

    return (
        <Button type="button" onClick={handleClick} colorType="google">
            <FcGoogle size={20} />
            <span>구글 로그인</span>
        </Button>
    );
};
