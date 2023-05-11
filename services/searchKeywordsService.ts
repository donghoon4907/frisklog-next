import type { SearchKeywordsRequestPayload } from '../actions/search-keyword/search-keywords.interface';
import type { SearchLogsRequestPayload } from '../actions/search-keyword/search-logs.interface';
import { client } from '../graphql/client';
import { GET_SEARCH_KEYWORDS } from '../graphql/query/search-keyword/search-keywords';
import { GET_SEARCH_LOGS } from '../graphql/query/search-keyword/search-logs';

export function getSearchKeywords(payload: SearchKeywordsRequestPayload) {
    return client.request(GET_SEARCH_KEYWORDS, payload);
}

export function getSearchLogs(payload: SearchLogsRequestPayload) {
    return client.request(GET_SEARCH_LOGS, payload);
}
