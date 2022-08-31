import { FC } from 'react';
import { AiFillHome } from 'react-icons/ai';

import { ActiveLink } from '../ActiveLink';

export const HomeButton: FC = () => (
    <div title="홈 버튼">
        <ActiveLink href="/" ariaLabel="홈으로 이동">
            <AiFillHome />
        </ActiveLink>
    </div>
);
