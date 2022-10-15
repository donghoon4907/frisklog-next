import { useRouter } from 'next/router';
import { FC } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { SquareAvatar } from './SquareAvatar';
import * as StyledNewNotificationItem from './NewNotificationItem.style';
import { Notification } from '../interfaces/notification';
import { timeForToday } from '../lib/date/time-for-today';
import { useMutation } from '../hooks/use-mutation';
import { readNotificationsRequest } from '../actions/notification/read-notifications.action';

interface Props extends Notification {}

export const NewNotificationItem: FC<Props> = ({
    id,
    content,
    from,
    url,
    createdAt,
    readedAt,
}) => {
    const router = useRouter();

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
                    router.push(url);
                },
            );
        } else {
            router.push(url);
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
                        <SquareAvatar src={from.avatar} alt="Avatar" />
                    </StyledNewNotificationItem.Avatar>
                    <StyledNewNotificationItem.Meta>
                        <StyledNewNotificationItem.Name>
                            <span>{from.nickname}</span>
                        </StyledNewNotificationItem.Name>
                        <StyledNewNotificationItem.Description>
                            <span>{timeForToday(createdAt)}</span>
                        </StyledNewNotificationItem.Description>
                    </StyledNewNotificationItem.Meta>
                </StyledNewNotificationItem.Body>
            </StyledNewNotificationItem.Link>
            <StyledNewNotificationItem.Toolbar>
                <AiOutlineClose />
            </StyledNewNotificationItem.Toolbar>
        </StyledNewNotificationItem.Container>
    );
};
