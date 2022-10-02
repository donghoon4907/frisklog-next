import { gql } from 'graphql-request';

import { CORE_USER_FIELDS } from '../user';

export const CORE_POST_FIELDS = gql`
    fragment CorePostFields on Post {
        id
        content
        link
        createdAt
        updatedAt
        likeCount
        commentCount
    }
`;

export const POST_ITEM_FIELDS = gql`
    ${CORE_POST_FIELDS}
    ${CORE_USER_FIELDS}
    fragment PostItemFields on Post {
        ...CorePostFields

        user {
            ...CoreUserFields
        }

        likers {
            id
        }

        categories {
            content
        }
    }
`;
