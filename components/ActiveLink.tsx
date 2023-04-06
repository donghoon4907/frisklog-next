import type { AnchorHTMLAttributes, FC, MouseEvent } from 'react';
import styled from 'styled-components';

import type { DefaultProps } from '../interfaces/default';
import { useRoute } from '../hooks/use-route';

const Container = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

    & svg {
        width: 20px;
        height: 20px;
        fill: ${({ theme }) => theme.iconColor};

        &:hover {
            fill: ${({ theme }) => theme.hoverColor};
        }
    }
`;

interface Props extends DefaultProps, AnchorHTMLAttributes<HTMLAnchorElement> {
    activeAuthRoute?: boolean;
}

export const ActiveLink: FC<Props> = ({
    children,
    href = '/',
    onClick,
    activeAuthRoute = false,
    ...another
}) => {
    const route = useRoute();

    const handleClick = (evt: MouseEvent<HTMLAnchorElement>) => {
        evt.preventDefault();

        if (activeAuthRoute) {
            route.authMove(href);
        } else {
            route.move(href);
        }
    };

    return (
        <Container href={href} onClick={handleClick} {...another}>
            {children}
        </Container>
    );
};
