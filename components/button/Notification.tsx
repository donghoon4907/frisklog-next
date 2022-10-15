import { FC } from 'react';
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

    const handleClick = () => {
        if (notifications.pageInfo === null) {
            getNotifications({ limit: 3 });
        }
    };

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
                visible={!!notifications.pageInfo}
            >
                <FaBell />
            </Popover>
        </IconWrapper>
    );
};
