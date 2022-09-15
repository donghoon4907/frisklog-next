export interface GetUsersRequestPayload {
    offset?: number;
    limit: number;
    nickname?: string;
    order?: string[][];
}
