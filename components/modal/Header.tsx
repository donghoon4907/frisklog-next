import { FC } from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { DefaultProps } from '../../interfaces/default';
import { IState } from '../../reducers';
import { ICommonState } from '../../reducers/common';

interface Props extends DefaultProps {}

export const ModalHeader: FC<Props> = ({ children }) => {
    const { mode } = useSelector<IState, ICommonState>(state => state.common);

    return (
        <Modal.Header
            closeButton
            closeVariant={mode === 'dark' ? 'white' : 'dark'}
        >
            {children}
        </Modal.Header>
    );
};
