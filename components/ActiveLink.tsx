import { AnchorHTMLAttributes, FC, MouseEvent } from 'react';

import { DefaultProps } from '../interfaces/default';
import { useRoute } from '../hooks/use-route';

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
        <a
            href={href === '/' ? href : process.env.FRONTEND_ROOT + href}
            onClick={handleClick}
            {...another}
        >
            {children}
        </a>
    );
};
