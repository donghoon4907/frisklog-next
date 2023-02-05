import { FC } from 'react';
import { AiFillHome } from 'react-icons/ai';

import { ActiveLink } from '../ActiveLink';

export const HomeButton: FC = () => (
    <ActiveLink aria-label="홈" className="active-icon">
        <AiFillHome />
    </ActiveLink>
);
