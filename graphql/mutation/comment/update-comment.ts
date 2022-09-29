import { gql } from 'graphql-request';

import { CORE_COMMENT_FIELDS } from '../../fragment/comment';

export const MUTATION_UPDATE_COMMENT = gql`
    ${CORE_COMMENT_FIELDS}
    mutation UpdateComment($id: String!, $content: String!) {
        updateComment(input: { id: $id, data: { content: $content } }) {
            ...CoreCommentFields
        }
    }
`;
