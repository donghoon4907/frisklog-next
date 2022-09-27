import { OffsetLimitRequestPayload } from '../../interfaces/request';

export interface GetUsersRequestPayload extends OffsetLimitRequestPayload {
    nickname?: string;
    order?: string[][];
}
