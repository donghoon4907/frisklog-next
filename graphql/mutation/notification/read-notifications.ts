import { gql } from 'graphql-request';

export const MUTATION_READ_NOTIFICATIONS = gql`
    mutation ReadNotifications($notifications: [String!]!) {
        readNotifications(input: { notifications: $notifications }) {
            id
            readedAt
        }
    }
`;
