import { GraphQLClient } from "graphql-request";

const GRAPHQL_ENDPOINT = process.env.BACKEND_GRAPHQL || "Failed to load .env";

export const client = new GraphQLClient(GRAPHQL_ENDPOINT);
