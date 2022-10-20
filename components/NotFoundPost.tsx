import { FC } from 'react';
import { CgDanger } from 'react-icons/cg';
import styled from 'styled-components';

import { mixinBox } from './theme/mixins';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
    flex-direction: column;

    ${mixinBox}

    & > svg {
        width: 50px;
        height: 50px;
    }

    & > h3 {
        line-height: 1.5;
        font-size: 2rem;
    }

    & > p {
        font-size: 1.5rem;
    }
`;

export const NotFoundPost: FC = () => (
    <Container>
        <CgDanger />
        <h3>컨텐츠가 존재하지 않습니다</h3>

        <p>새로운 포스트를 작성해보세요.</p>
    </Container>
);
