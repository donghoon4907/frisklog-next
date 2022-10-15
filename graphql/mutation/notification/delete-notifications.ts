import { gql } from 'graphql-request';

export const MUTATION_DELETE_NOTIFICATIONS = gql`
    mutation DeleteNotifications($notifications: [String!]!) {
        deleteNotifications(input: { notifications: $notifications }) {
            id
        }
    }
`;
