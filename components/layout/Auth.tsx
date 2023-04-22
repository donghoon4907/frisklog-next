import type { FC } from 'react';
import styled from 'styled-components';

import type { DefaultProps } from '../../interfaces/default';

const Container = styled.div`
    height: 100%;

    &:before {
        display: inline-block;
        height: 100%;
        vertical-align: middle;
        content: '';
    }

    ${({ theme }) => theme.breakPoints.sm} {
        width: 100%;

        &:before {
            display: none !important;
        }
    }
`;

const InnerContainer = styled.div`
    display: inline-block;
    overflow-x: hidden;
    width: 100%;
    vertical-align: middle;

    ${({ theme }) => theme.breakPoints.sm} {
        display: flex;
        flex-direction: column;
        min-width: 320px;
        height: 100%;
    }
`;

const Body = styled.main`
    ${({ theme }) => theme.breakPoints.sm} {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
`;

const TitleWrapper = styled.div`
    padding-top: 50px;
`;

const Title = styled.h1`
    display: block;

    & > span {
        display: block;
        width: 88px;
        height: 27px;
        margin: 0 auto;
        font-size: 32px;
        line-height: 27px;
        text-align: center;
        vertical-align: top;
    }
`;

const Article = styled.article`
    width: 550px;
    height: 100%;
    margin: 20px auto 42px;
    padding: 0 69px;
    border: 1px solid ${({ theme }) => theme.dividerColor};
    font-size: 12px;
    border-radius: 4px;
    background: ${({ theme }) => theme.boxBgColor};

    ${({ theme }) => theme.breakPoints.sm} {
        padding: 0 16px;
        width: 100%;
        border: none !important;
        background: none !important;
    }
`;

const Content = styled.div`
    position: relative;
    height: 100%;
    padding: 50px 0;
`;

interface Props extends DefaultProps {}

export const AuthLayout: FC<Props> = ({ children }) => {
    return (
        <Container>
            <InnerContainer>
                <Body>
                    <TitleWrapper>
                        <Title>
                            <span>Frisklog</span>
                        </Title>
                    </TitleWrapper>
                    <Article>
                        <Content>{children}</Content>
                    </Article>
                </Body>
                <footer></footer>
            </InnerContainer>
        </Container>
    );
};
