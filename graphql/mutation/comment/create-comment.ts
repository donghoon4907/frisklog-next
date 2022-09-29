import { gql } from 'graphql-request';

import { CORE_COMMENT_FIELDS } from '../../fragment/comment';

export const MUTATION_CREATE_COMMENT = gql`
    ${CORE_COMMENT_FIELDS}
    mutation AddComment($content: String!, $postId: String!) {
        addComment(input: { content: $content, postId: $postId }) {
            ...CoreCommentFields
        }
    }
`;
