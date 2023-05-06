import { client } from '../graphql/client';
import { GetSearchKeywordsRequestPayload } from '../actions/search-keyword/get-search-keywords.interface';
import { GET_SEARCH_KEYWORDS } from '../graphql/query/search-keyword/search-keywords';

export function getSearchKeywords(payload: GetSearchKeywordsRequestPayload) {
    return client.request(GET_SEARCH_KEYWORDS, payload);
}
