import { useSelector } from 'react-redux';

import { useMutation } from '../../../hooks/use-mutation';
import { AppState } from '../../../reducers';
import { NotificationState } from '../../../reducers/notification';
import { Button } from '../../button';
import { NewNotificationItem } from '../../NewNotificationItem';
import * as StyledManageNotification from './ManageNotification.style';
import { deleteNotificationsRequest } from '../../../actions/notification/delete-notifications.action';
import { getNotificationsRequest } from '../../../actions/notification/get-notifications.action';

export const ManageNotification = () => {
    const { notifications } = useSelector<AppState, NotificationState>(
        (state) => state.notification,
    );

    const [getNotifications] = useMutation(getNotificationsRequest, {
        useAuth: true,
    });

    const [deleteNotifications] = useMutation(deleteNotificationsRequest, {
        useAuth: true,
    });

    const { nodes, pageInfo } = notifications;

    const isActiveFooter = pageInfo && pageInfo.lastPage > 1;

    const handlePage = (pageNo: number) => {
        getNotifications({
            limit: 3,
            offset: 3 * (pageNo - 1),
        });
    };

    const handleDelete = () => {
        const tf = confirm('알림을 모두 삭제하시겠습니까?');

        if (tf) {
            deleteNotifications(
                {
                    notifications: nodes.map((noti) => noti.id),
                },
                () => {
                    handlePage(1);
                },
            );
        }
    };

    return (
        <StyledManageNotification.Container>
            <StyledManageNotification.Header>
                <div>
                    <StyledManageNotification.Button>
                        <Button
                            type="button"
                            colorType="danger"
                            onClick={handleDelete}
                        >
                            전체 삭제
                        </Button>
                    </StyledManageNotification.Button>
                </div>
            </StyledManageNotification.Header>
            <StyledManageNotification.Body>
                {nodes.length === 0 && (
                    <StyledManageNotification.Empty>
                        검색 결과가 없습니다.
                    </StyledManageNotification.Empty>
                )}
                {nodes.map((noti, idx) => (
                    <NewNotificationItem key={`noti${idx}`} {...noti} />
                ))}
            </StyledManageNotification.Body>
            {isActiveFooter && (
                <StyledManageNotification.Footer>
                    <div>
                        <StyledManageNotification.Button>
                            <Button
                                type="button"
                                colorType="info"
                                disabled={pageInfo.currentPage === 1}
                                onClick={() =>
                                    handlePage(pageInfo.currentPage - 1)
                                }
                            >
                                이전
                            </Button>
                        </StyledManageNotification.Button>
                    </div>
                    <div>
                        <StyledManageNotification.Button>
                            <Button
                                type="button"
                                colorType="info"
                                disabled={
                                    pageInfo.currentPage === pageInfo.lastPage
                                }
                                onClick={() =>
                                    handlePage(pageInfo.currentPage + 1)
                                }
                            >
                                다음
                            </Button>
                        </StyledManageNotification.Button>
                    </div>
                </StyledManageNotification.Footer>
            )}
        </StyledManageNotification.Container>
    );
};
