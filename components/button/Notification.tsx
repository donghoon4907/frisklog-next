import { FC } from 'react';
import { FaBell } from 'react-icons/fa';
import styled from 'styled-components';

import { Popover } from 'antd';
import { IconWrapper } from './IconWrapper';
import { useSelector } from 'react-redux';
import { AppState } from '../../reducers';
import { NotificationItem } from '../NotificationItem';
import { NewNotificationItem } from '../NewNotificationItem';
import { NotificationState } from '../../reducers/notification';
import * as StyledSearchFollowing from '../partitial/aside/SearchFollowing.style';
import { Button } from '.';

const PopoverContainer = styled.div`
    padding: ${({ theme }) => theme.padding.sm};
    width: 400px;
    max-height: 300px;
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
                        <StyledSearchFollowing.Container>
                            <StyledSearchFollowing.Header>
                                <div>
                                    <StyledSearchFollowing.Button>
                                        <Button
                                            type="button"
                                            colorType="primary"
                                        >
                                            전체 삭제
                                        </Button>
                                    </StyledSearchFollowing.Button>
                                </div>
                            </StyledSearchFollowing.Header>
                            <StyledSearchFollowing.Body>
                                {notifications.length === 0 && (
                                    <span>알림이 없습니다.</span>
                                )}
                                {notifications.map((noti, index) => (
                                    <NewNotificationItem
                                        key={`myNoti${index}`}
                                        {...noti}
                                    />
                                ))}
                            </StyledSearchFollowing.Body>
                        </StyledSearchFollowing.Container>
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
