import { FC } from 'react';
import { FaBell } from 'react-icons/fa';
import styled from 'styled-components';

import { Popover } from 'antd';
import { IconWrapper } from './IconWrapper';
import { useSelector } from 'react-redux';
import { AppState } from '../../reducers';
import { NotificationItem } from '../NotificationItem';
import { NotificationState } from '../../reducers/notification';

const PopoverContainer = styled.div`
    padding: ${({ theme }) => theme.padding.sm};
    max-height: 300px;
    overflow-y: scroll;
`;

export const NotificationButton: FC = () => {
    const { notifications } = useSelector<AppState, NotificationState>(
        (state) => state.notification,
    );

    return (
        <IconWrapper ariaLabel="알림" onClick={() => {}}>
            <Popover
                placement="bottomRight"
                title={`알림(${notifications.length})`}
                content={
                    <PopoverContainer id="popover">
                        {notifications.length === 0 && (
                            <span>알림이 없습니다.</span>
                        )}
                        {notifications.map((noti, index) => (
                            <NotificationItem
                                key={`myNoti${index}`}
                                {...noti}
                            />
                        ))}
                    </PopoverContainer>
                }
                trigger="click"
                showArrow={false}
            >
                <FaBell />
            </Popover>
        </IconWrapper>
    );
};
