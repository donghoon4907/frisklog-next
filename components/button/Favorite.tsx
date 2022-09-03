import { useRouter } from 'next/router';
import { FC } from 'react';
import { BsFillStarFill } from 'react-icons/bs';

import { useAuthenticate } from '../../hooks/use-authenticate';
import { IconWrapper } from './IconWrapper';

export const FavoriteButton: FC = () => {
    const router = useRouter();

    const { validateToken } = useAuthenticate();

    const handleClick = () => {
        const token = validateToken();

        if (token !== null) {
            router.push('/follow');
        }
    };

    return (
        <IconWrapper ariaLabel="팔로잉" onClick={handleClick}>
            <BsFillStarFill />
        </IconWrapper>
    );
};
