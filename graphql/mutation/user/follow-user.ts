import { gql } from 'graphql-request';

import { CORE_USER_FIELDS } from '../../fragment/user';

export const MUTATION_FOLLOW_USER = gql`
    ${CORE_USER_FIELDS}
    mutation FollowUser($id: String!) {
        follow(id: $id) {
            ...CoreUserFields
        }
    }
`;
