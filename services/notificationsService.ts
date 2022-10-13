import { client } from '../graphql/client';
import { ReadNotificationsRequestPayload } from '../actions/notification/read-notifications.interface';
import { MUTATION_READ_NOTIFICATIONS } from '../graphql/mutation/notification/read-notifications';

export function readNotifications(payload: ReadNotificationsRequestPayload) {
    return client.request(MUTATION_READ_NOTIFICATIONS, payload);
}
