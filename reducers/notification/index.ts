import produce from 'immer';

import { Notification } from '../../interfaces/notification';
import {
    NotificationAction,
    notificationActionTypes,
} from '../../actions/notification';
// import { readNotificationsActionTypes } from '../../actions/notification/read-notifications.action';
// import { ReadNotificationsSuccessAction } from '../../actions/notification/read-notifications.interface';
import { getNotificationsActionTypes } from '../../actions/notification/get-notifications.action';
import { GetNotificationsSuccessAction } from '../../actions/notification/get-notifications.interface';
// import { deleteNotificationsActionTypes } from '../../actions/notification/delete-notifications.action';
// import { DeleteNotificationsSuccessAction } from '../../actions/notification/delete-notifications.interface';
import { OffsetPageInfo } from '../../interfaces/page-info';

export interface NotificationState {
    notifications: {
        nodes: Notification[];
        pageInfo: OffsetPageInfo | null;
    };
}

const initialState: NotificationState = {
    notifications: {
        nodes: [],
        pageInfo: null,
    },
};

export default (state = initialState, action: NotificationAction) =>
    produce(state, (draft) => {
        switch (action.type) {
            case notificationActionTypes.INIT: {
                draft.notifications.nodes = [];
                break;
            }
            case getNotificationsActionTypes.SUCCESS: {
                const { payload } = action as GetNotificationsSuccessAction;

                draft.notifications.nodes = payload.nodes;

                draft.notifications.pageInfo = payload.pageInfo;
                break;
            }
            case getNotificationsActionTypes.CLEANUP: {
                draft.notifications.nodes = [];

                draft.notifications.pageInfo = null;
                break;
            }
            // case readNotificationsActionTypes.SUCCESS: {
            //     const { payload } = action as ReadNotificationsSuccessAction;

            //     for (let i = 0; i < draft.notifications.nodes.length; i++) {
            //         inner: for (let j = 0; j < payload.length; j++) {
            //             if (draft.notifications.nodes[i].id === payload[j].id) {
            //                 draft.notifications.nodes[i].readedAt =
            //                     payload[j].readedAt;

            //                 break inner;
            //             }
            //         }
            //     }

            //     break;
            // }
            // case deleteNotificationsActionTypes.SUCCESS: {
            //     const { payload } = action as DeleteNotificationsSuccessAction;

            //     for (let i = 0; i < draft.notifications.nodes.length; i++) {
            //         inner: for (let j = 0; j < payload.length; j++) {
            //             if (draft.notifications.nodes[i].id === payload[j].id) {
            //                 draft.notifications.nodes.splice(i, 1);

            //                 break inner;
            //             }
            //         }
            //     }

            //     break;
            // }
            default: {
                return state;
            }
        }
    });
