import { FC } from 'react';
import { CgDanger } from 'react-icons/cg';
import styled from 'styled-components';

import { mixinBox } from './theme/mixins';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
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

export const NotFoundCategory: FC = () => (
    <Container>
        <CgDanger />
        <h3>검색 결과가 존재하지 않습니다</h3>
    </Container>
);
