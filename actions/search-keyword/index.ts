import type { SearchKeywordsAction } from './search-keywords.interface';
import type { SearchLogsAction } from './search-logs.interface';

export type SearchKeywordAction = SearchKeywordsAction | SearchLogsAction;
