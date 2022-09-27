import { OffsetLimitRequestPayload } from '../../interfaces/request';

export interface GetCommentsRequestPayload extends OffsetLimitRequestPayload {
    postId: string;
    order?: string[][];
}
