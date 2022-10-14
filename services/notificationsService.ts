import { client } from '../graphql/client';
import { ReadNotificationsRequestPayload } from '../actions/notification/read-notifications.interface';
import { MUTATION_READ_NOTIFICATIONS } from '../graphql/mutation/notification/read-notifications';
import { GetNotificationsRequestPayload } from '../actions/notification/get-notifications.interface';
import { GET_NOTIFICATIONS } from '../graphql/query/notification/notifications';

export function readNotifications(payload: ReadNotificationsRequestPayload) {
    return client.request(MUTATION_READ_NOTIFICATIONS, payload);
}

export function getNotifications(payload: GetNotificationsRequestPayload) {
    return client.request(GET_NOTIFICATIONS, payload);
}
