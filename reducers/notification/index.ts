import produce from 'immer';

import { Notification } from '../../interfaces/notification';
import {
    NotificationAction,
    notificationActionTypes,
} from '../../actions/notification';
import { readNotificationsActionTypes } from '../../actions/notification/read-notifications.action';
import { ReadNotificationsSuccessAction } from '../../actions/notification/read-notifications.interface';
import { getNotificationsActionTypes } from '../../actions/notification/get-notifications.action';
import { GetNotificationsSuccessAction } from '../../actions/notification/get-notifications.interface';

export interface NotificationState {
    notifications: Notification[];
}

const initialState: NotificationState = {
    notifications: [],
};

export default (state = initialState, action: NotificationAction) =>
    produce(state, (draft) => {
        switch (action.type) {
            case notificationActionTypes.INIT: {
                draft.notifications = [];
                break;
            }
            case getNotificationsActionTypes.SUCCESS: {
                const { payload } = action as GetNotificationsSuccessAction;

                draft.notifications = draft.notifications.concat(payload.nodes);
                break;
            }
            case readNotificationsActionTypes.SUCCESS: {
                const { payload } = action as ReadNotificationsSuccessAction;

                for (let i = 0; i < draft.notifications.length; i++) {
                    inner: for (let j = 0; j < payload.length; j++) {
                        if (draft.notifications[i].id === payload[j].id) {
                            draft.notifications[i].readedAt =
                                payload[j].readedAt;

                            break inner;
                        }
                    }
                }

                break;
            }
            default: {
                return state;
            }
        }
    });
