import { ErrorAction, Payload, PayloadAction } from '..';
import { OffsetPageInfo } from '../../interfaces/page-info';
import { CategoryPost } from '../../interfaces/post';
import { GetPostsRequestPayload } from './get-posts.interface';

export interface CategoryPostsRequestPayload
    extends Pick<GetPostsRequestPayload, 'offset' | 'limit'>,
        Payload {
    category: string;
}

export interface CategoryPostsSuccessPayload {
    nodes: CategoryPost[];
    pageInfo: OffsetPageInfo;
}

export interface CategoryPostsRequestAction
    extends PayloadAction<CategoryPostsRequestPayload> {}

export interface CategoryPostsSuccessAction
    extends PayloadAction<CategoryPostsSuccessPayload> {}

export interface CategoryPostsFailureAction extends ErrorAction {}

export type CategoryPostsAction =
    | CategoryPostsRequestAction
    | CategoryPostsSuccessAction
    | CategoryPostsFailureAction;
