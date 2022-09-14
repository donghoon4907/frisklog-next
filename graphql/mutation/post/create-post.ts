import { gql } from 'graphql-request';

export const MUTATION_CREATE_POST = gql`
    mutation AddPost($content: String!, $categories: [String!]!) {
        addPost(input: { content: $content, categories: $categories }) {
            id
            content
            createdAt
            likeCount

            user {
                id
                nickname
                avatar
                link
                status
                statusText
            }

            categories {
                content
            }
        }
    }
`;
