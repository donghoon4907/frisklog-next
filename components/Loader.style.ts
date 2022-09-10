import styled from 'styled-components';

import { rotate } from './theme/keyframes';

export const LoaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;

    & > svg {
        animation: ${rotate} 3s linear infinite;
    }
`;
