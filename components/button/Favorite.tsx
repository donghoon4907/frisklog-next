import { useRouter } from 'next/router';
import { FC } from 'react';
import { BsFillStarFill } from 'react-icons/bs';

import { useAuthenticate } from '../../hooks/use-authenticate';

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
        <div title="팔로잉 버튼">
            <button type="button" aria-label="팔로잉" onClick={handleClick}>
                <BsFillStarFill />
            </button>
        </div>
    );
};
