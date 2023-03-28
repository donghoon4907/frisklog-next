import { FC } from 'react';
import { SiNaver } from 'react-icons/si';

import { Button } from '.';

export const NaverLoginButton: FC = () => {
    const handleClick = async () => {
        const url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${
            process.env.NAVER_CLIENTID
        }&redirect_uri=${encodeURIComponent(
            'http://127.0.0.1:3000/',
        )}&state=naver`;

        window.location.assign(url);
    };

    return (
        <Button type="button" onClick={handleClick} colorType="naver">
            <SiNaver size={20} />
            <span>네이버 로그인</span>
        </Button>
    );
};
