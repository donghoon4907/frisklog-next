import { FC } from 'react';

import { ActiveLink } from '../ActiveLink';
import { ReadonlyButtonBody, ReadonlyButtonContainer } from './Readonly.style';

interface Props {
    category: string;
    postCount: number;
}

export const LinkCategoryButton: FC<Props> = ({ category, postCount }) => (
    <ReadonlyButtonContainer>
        <ReadonlyButtonBody>
            <ActiveLink
                href={`/category/${category}`}
                aria-label={`'${category}' 카테고리 검색`}
            >
                {`${category}(${postCount})`}
            </ActiveLink>
        </ReadonlyButtonBody>
    </ReadonlyButtonContainer>
);
