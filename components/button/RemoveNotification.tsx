import { FC } from 'react';
import { BsTrash } from 'react-icons/bs';

import { IconWrapper } from './IconWrapper';
import { useMutation } from '../../hooks/use-mutation';
import { deleteNotificationsRequest } from '../../actions/notification/delete-notifications.action';
import { useSelector } from 'react-redux';
import { AppState } from '../../reducers';
import { NotificationState } from '../../reducers/notification';
import { getNotificationsRequest } from '../../actions/notification/get-notifications.action';
import { useQuery } from '../../hooks/use-query';

interface Props {
    id: string;
}

export const RemoveNotificationButton: FC<Props> = ({ id }) => {
    const { notifications } = useSelector<AppState, NotificationState>(
        (state) => state.notification,
    );

    const [getNotifications] = useQuery(getNotificationsRequest);

    const [deleteNotification] = useMutation(deleteNotificationsRequest, {
        useAuth: true,
    });

    const handleClick = () => {
        const message = '알림을 삭제하시겠습니까?';

        const tf = confirm(message);

        if (tf) {
            deleteNotification(
                {
                    notifications: [id],
                },
                () => {
                    const { currentPage, lastPage } = notifications.pageInfo!;

                    if (currentPage < lastPage) {
                        getNotifications({
                            limit: 3,
                            offset: 3 * (currentPage - 1),
                        });
                    }
                },
            );
        }
    };

    return (
        <IconWrapper aria-label="알림 삭제" onClick={handleClick}>
            <BsTrash />
        </IconWrapper>
    );
};
