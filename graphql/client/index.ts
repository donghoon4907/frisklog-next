import { GraphQLClient } from 'graphql-request';

const GRAPHQL_ENDPOINT = `${process.env.BACKEND_ROOT}/graphql`;

export const client = new GraphQLClient(GRAPHQL_ENDPOINT);
