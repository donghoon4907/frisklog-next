import { FC, useEffect, useState } from 'react';
import { FaBell } from 'react-icons/fa';
import styled from 'styled-components';

import { Popover } from 'antd';
import { IconWrapper } from './IconWrapper';
import { ManageNotification } from '../partitial/popover/ManageNotification';
import { useMutation } from '../../hooks/use-mutation';
import { getNotificationsRequest } from '../../actions/notification/get-notifications.action';
import { useSelector } from 'react-redux';
import { AppState } from '../../reducers';
import { NotificationState } from '../../reducers/notification';

const PopoverContainer = styled.div`
    padding: ${({ theme }) => theme.padding.sm};
    width: 400px;
`;

export const NotificationButton: FC = () => {
    const { notifications } = useSelector<AppState, NotificationState>(
        (state) => state.notification,
    );

    const [getNotifications] = useMutation(getNotificationsRequest, {
        useAuth: true,
    });

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        if (notifications.pageInfo === null) {
            getNotifications({ limit: 3 });
        }
    };

    const handleVisibleChange = (newOpen: boolean) => {
        setOpen(newOpen);
    };

    useEffect(() => {
        if (notifications.pageInfo) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [notifications]);

    return (
        <IconWrapper ariaLabel="알림" onClick={handleClick}>
            <Popover
                placement="bottomRight"
                title="알림"
                content={
                    <PopoverContainer>
                        <ManageNotification />
                    </PopoverContainer>
                }
                trigger="click"
                showArrow={false}
                visible={open}
                onVisibleChange={handleVisibleChange}
            >
                <FaBell />
            </Popover>
        </IconWrapper>
    );
};
