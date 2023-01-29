import { OffsetLimitRequestPayload } from '../../interfaces/request';

export interface GetCategoriesRequestPayload extends OffsetLimitRequestPayload {
    searchKeyword?: string;
}
