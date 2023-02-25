import { FC } from 'react';
import { BsFillStarFill } from 'react-icons/bs';

import { ActiveLink } from '../ActiveLink';

export const FavoriteButton: FC = () => {
    return (
        <ActiveLink
            href="/follow"
            className="active-icon"
            aria-label="팔로잉"
            activeAuthRoute
        >
            <BsFillStarFill />
        </ActiveLink>
    );
};
