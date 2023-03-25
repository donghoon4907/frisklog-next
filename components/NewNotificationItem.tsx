import type { FC } from 'react';

import * as StyledNewNotificationItem from './NewNotificationItem.style';
import { Notification } from '../interfaces/notification';
import { timeForToday } from '../lib/date/time-for-today';
import { useMutation } from '../hooks/use-mutation';
import { readNotificationsRequest } from '../actions/notification/read-notifications.action';
import { RemoveNotificationButton } from './button/RemoveNotification';
import { useRoute } from '../hooks/use-route';
import { Avatar } from './avatar';

interface Props extends Notification {}

export const NewNotificationItem: FC<Props> = ({
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
        <StyledNewNotificationItem.Container>
            <StyledNewNotificationItem.Link
                role="link"
                aria-label="알림 페이지로 가기"
                onClick={handleClick}
                isActive={!!readedAt}
            >
                <StyledNewNotificationItem.Body>
                    <StyledNewNotificationItem.Avatar>
                        <Avatar
                            src={from.avatar}
                            alt="Avatar"
                            width={50}
                            height={50}
                            borderRadius="4px"
                        />
                    </StyledNewNotificationItem.Avatar>
                    <StyledNewNotificationItem.Meta>
                        <div>
                            <StyledNewNotificationItem.Name>
                                {from.nickname}
                            </StyledNewNotificationItem.Name>
                            <span>
                                {`님의 ${content} 소식을 전해드립니다.`}
                            </span>
                        </div>

                        <StyledNewNotificationItem.Description>
                            <span>{timeForToday(createdAt)}</span>
                        </StyledNewNotificationItem.Description>
                    </StyledNewNotificationItem.Meta>
                </StyledNewNotificationItem.Body>
            </StyledNewNotificationItem.Link>
            <StyledNewNotificationItem.Toolbar>
                <RemoveNotificationButton id={id} />
            </StyledNewNotificationItem.Toolbar>
        </StyledNewNotificationItem.Container>
    );
};
