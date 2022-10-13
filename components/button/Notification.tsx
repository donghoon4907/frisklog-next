import { FC } from 'react';
import { FaBell } from 'react-icons/fa';
import styled from 'styled-components';

import { Popover } from 'antd';
import { IconWrapper } from './IconWrapper';
import { useSelector } from 'react-redux';
import { AppState } from '../../reducers';
import { UserState } from '../../reducers/user';
import { NotificationItem } from '../NotificationItem';

const PopoverContainer = styled.div`
    padding: ${({ theme }) => theme.padding.sm};
    max-height: 300px;
    overflow-y: scroll;
`;

export const NotificationButton: FC = () => {
    const { notifications } = useSelector<AppState, UserState>(
        (state) => state.user,
    );

    return (
        <IconWrapper ariaLabel="알림" onClick={() => {}}>
            <Popover
                placement="bottomRight"
                title="알림"
                content={
                    <PopoverContainer>
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
