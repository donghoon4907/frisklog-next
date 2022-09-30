import { gql } from 'graphql-request';

import { CORE_USER_FIELDS } from '../../fragment/user';

export const MUTATION_UNFOLLOW_USER = gql`
    ${CORE_USER_FIELDS}
    mutation UnfollowUser($id: String!) {
        unfollow(id: $id) {
            ...CoreUserFields
        }
    }
`;
