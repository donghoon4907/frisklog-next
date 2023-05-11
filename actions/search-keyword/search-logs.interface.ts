import type { SearchKeyword } from '../../interfaces/search-keyword';
import type { GetSearchKeywordsRequestPayload } from './get-search-keywords.interface';
import type { ErrorAction, PayloadAction } from '..';
import type { OffsetPageInfo } from '../../interfaces/page-info';

export interface SearchLogsRequestPayload
    extends Pick<GetSearchKeywordsRequestPayload, 'offset' | 'limit'> {}

export type SearchLogsSuccessPayload = {
    nodes: SearchKeyword[];
    pageInfo: OffsetPageInfo;
};

export interface SearchLogsRequestAction
    extends PayloadAction<SearchLogsRequestPayload> {}

export interface SearchLogsSuccessAction
    extends PayloadAction<SearchLogsSuccessPayload> {}

export interface SearchLogsFailureAction extends ErrorAction {}

export type SearchLogsAction =
    | SearchLogsRequestAction
    | SearchLogsSuccessAction
    | SearchLogsFailureAction;
