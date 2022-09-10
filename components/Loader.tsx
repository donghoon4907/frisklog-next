import { FC } from 'react';
import { TbLoader } from 'react-icons/tb';
import { LoaderContainer } from './Loader.style';

export const Loader: FC = () => (
    <LoaderContainer>
        <TbLoader size={30} />
    </LoaderContainer>
);
