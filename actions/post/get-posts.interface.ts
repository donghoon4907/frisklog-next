export interface GetPostsRequestPayload {
    offset?: number;
    limit: number;
    searchKeyword?: string;
    order?: string[][];
    userId?: string;
}
