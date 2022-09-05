import { FC } from 'react';
import { BsGithub } from 'react-icons/bs';

import { Button } from '.';

export const GithubLoginButton: FC = () => {
    const handleClick = async () => {
        const url = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENTID}`;

        window.location.assign(url);
    };

    return (
        <Button type="button" onClick={handleClick} colorType="github">
            <BsGithub size={20} />
            <span>Github 로그인</span>
        </Button>
    );
};
