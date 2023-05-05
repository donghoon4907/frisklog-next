import type { SearchKeyword } from '../../interfaces/search-keyword';
import type { GetSearchKeywordsRequestPayload } from './get-search-keywords.interface';
import type { ErrorAction, PayloadAction } from '..';

export interface SearchKeywordsRequestPayload
    extends Pick<GetSearchKeywordsRequestPayload, 'offset' | 'limit'> {}

export type SearchKeywordsSuccessPayload = SearchKeyword[];

export interface SearchKeywordsRequestAction
    extends PayloadAction<SearchKeywordsRequestPayload> {}

export interface SearchKeywordsSuccessAction
    extends PayloadAction<SearchKeywordsSuccessPayload> {}

export interface SearchKeywordsFailureAction extends ErrorAction {}

export type SearchKeywordsAction =
    | SearchKeywordsRequestAction
    | SearchKeywordsSuccessAction
    | SearchKeywordsFailureAction;
