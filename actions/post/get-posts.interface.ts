import { OffsetLimitRequestPayload } from '../../interfaces/request';
import { PostVisibility } from '../../types/visibility';

export interface GetPostsRequestPayload extends OffsetLimitRequestPayload {
    searchKeyword?: string;
    order?: string[][];
    userId?: string;
    visibility?: PostVisibility;
}
