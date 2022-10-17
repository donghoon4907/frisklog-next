import { gql } from 'graphql-request';

export const MUTATION_UPDATE_SETTING = gql`
    mutation UpdateSetting($receivePostNotification: Boolean) {
        updateSetting(
            input: { receivePostNotification: $receivePostNotification }
        ) {
            receivePostNotification
        }
    }
`;
