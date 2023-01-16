import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Popover } from 'antd';
import styled from 'styled-components';
import { FaBell } from 'react-icons/fa';

import { IconWrapper } from './IconWrapper';
import { ManageNotification } from '../partitial/popover/ManageNotification';
import {
    getNotificationsCleanUp,
    getNotificationsRequest,
} from '../../actions/notification/get-notifications.action';
import { AppState } from '../../reducers';
import { NotificationState } from '../../reducers/notification';
import { hideNotificationFilter } from '../../actions/switch/notification-filter.action';
import { useMutation } from '../../hooks/use-mutation';

const PopoverContainer = styled.div`
    padding: ${({ theme }) => theme.padding.sm};
`;

export const NotificationButton: FC = () => {
    const dispatch = useDispatch();

    const { notifications } = useSelector<AppState, NotificationState>(
        (state) => state.notification,
    );

    const [getNotifications] = useMutation(getNotificationsRequest, {
        useAuth: true,
    });

    const handleVisibleChange = (newOpen: boolean) => {
        if (newOpen) {
            getNotifications({ limit: 3 });
        } else {
            dispatch(getNotificationsCleanUp());

            dispatch(hideNotificationFilter());
        }
    };

    return (
        <IconWrapper ariaLabel="알림">
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
                visible={notifications.pageInfo !== null}
                onVisibleChange={handleVisibleChange}
            >
                <FaBell />
            </Popover>
        </IconWrapper>
    );
};
