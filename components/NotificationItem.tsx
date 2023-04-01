import type { FC } from 'react';

import { Notification } from '../interfaces/notification';
import { timeForToday } from '../lib/date/time-for-today';
import * as StyledNoti from './NotificationItem.style';
import { useMutation } from '../hooks/use-mutation';
import { readNotificationsRequest } from '../actions/notification/read-notifications.action';
import { useRoute } from '../hooks/use-route';
import { Avatar } from './avatar';

interface Props extends Notification {}

export const NotificationItem: FC<Props> = ({
    id,
    content,
    from,
    url,
    createdAt,
    readedAt,
}) => {
    const route = useRoute();

    const [readNotification] = useMutation(readNotificationsRequest, {
        useAuth: true,
    });

    const handleClick = () => {
        if (!readedAt) {
            readNotification(
                {
                    notifications: [id],
                },
                () => {
                    route.move(url);
                },
            );
        } else {
            route.move(url);
        }
    };

    return (
        <StyledNoti.Container
            onClick={handleClick}
            role="link"
            aria-label="알림 페이지로 가기"
            isActive={!!readedAt}
        >
            <StyledNoti.Header>
                <StyledNoti.AvatarWrapper>
                    <Avatar
                        src={from.avatar}
                        alt="Avatar"
                        style={{ width: 50, height: 50, borderRadius: 4 }}
                    />
                </StyledNoti.AvatarWrapper>
            </StyledNoti.Header>
            <StyledNoti.Body>
                <div>
                    <StyledNoti.Strong>{from.nickname}</StyledNoti.Strong>

                    {`님의 ${content} 소식을 전해드립니다.`}
                </div>
                <div>{timeForToday(createdAt)}</div>
            </StyledNoti.Body>
        </StyledNoti.Container>
    );
};
