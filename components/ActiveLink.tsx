import { useRouter } from 'next/router';
import { AnchorHTMLAttributes, FC, MouseEvent } from 'react';

import { DefaultProps } from '../interfaces/default';

interface Props extends DefaultProps, AnchorHTMLAttributes<HTMLAnchorElement> {}

export const ActiveLink: FC<Props> = ({ children, href, ...another }) => {
    const router = useRouter();

    const handleClick = (evt: MouseEvent<HTMLAnchorElement>) => {
        evt.preventDefault();

        router.push(href ? href : '/');
    };

    return (
        <a
            href={href ? process.env.FRONTEND_ROOT + href : '/'}
            onClick={handleClick}
            {...another}
        >
            {children}
        </a>
    );
};
