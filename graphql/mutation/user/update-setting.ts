import { gql } from 'graphql-request';

export const MUTATION_UPDATE_SETTING = gql`
    mutation UpdateSetting(
        $receivePostNotification: Boolean
        $receiveLikeNotification: Boolean
    ) {
        updateSetting(
            input: {
                receivePostNotification: $receivePostNotification
                receiveLikeNotification: $receiveLikeNotification
            }
        ) {
            receivePostNotification
            receiveLikeNotification
        }
    }
`;
