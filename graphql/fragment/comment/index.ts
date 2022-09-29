import { gql } from 'graphql-request';

import { CORE_USER_FIELDS } from '../user';

export const CORE_COMMENT_FIELDS = gql`
    ${CORE_USER_FIELDS}
    fragment CoreCommentFields on Comment {
        id
        content
        createdAt
        updatedAt

        user {
            ...CoreUserFields
        }
    }
`;
