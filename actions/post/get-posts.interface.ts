import { OffsetLimitRequestPayload } from '../../interfaces/request';

export interface GetPostsRequestPayload extends OffsetLimitRequestPayload {
    searchKeyword?: string;
    order?: string[][];
    userId?: string;
}
