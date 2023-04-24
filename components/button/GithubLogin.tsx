import { FC } from 'react';
import { BsGithub } from 'react-icons/bs';

import { Button } from '.';

export const GithubLoginButton: FC = () => {
    const handleClick = async () => {
        const url = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENTID}&redirect_uri=${process.env.REDIRECT_URI}`;

        window.location.assign(url);
    };

    return (
        <Button type="button" onClick={handleClick} colorType="github">
            <BsGithub size={20} />
            <span>깃허브 로그인</span>
        </Button>
    );
};
