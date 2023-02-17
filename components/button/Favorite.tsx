import { useRouter } from 'next/router';
import { FC, MouseEvent } from 'react';
import { BsFillStarFill } from 'react-icons/bs';

import { useAuthenticate } from '../../hooks/use-authenticate';
import { ActiveLink } from '../ActiveLink';

export const FavoriteButton: FC = () => {
    const router = useRouter();

    const { validateToken } = useAuthenticate();

    const handleClick = (evt: MouseEvent<HTMLAnchorElement>) => {
        evt.preventDefault();
        const token = validateToken();

        if (token !== null) {
            router.push('/follow');
        }
    };

    return (
        <ActiveLink
            href="/follow"
            className="active-icon"
            aria-label="팔로잉"
            onClick={handleClick}
        >
            <BsFillStarFill />
        </ActiveLink>
    );
};
