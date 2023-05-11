import produce from 'immer';

import type { SearchKeyword } from '../../interfaces/search-keyword';
import type { SearchKeywordAction } from '../../actions/search-keyword';
import type { SearchKeywordsSuccessAction } from '../../actions/search-keyword/search-keywords.interface';
import { searchKeywordsActionTypes } from '../../actions/search-keyword/search-keywords.action';
import { searchLogsActionTypes } from '../../actions/search-keyword/search-logs.action';
import { SearchLogsSuccessAction } from '../../actions/search-keyword/search-logs.interface';

export interface SearchKeywordState {
    searchKeywords: SearchKeyword[];
    searchLogs: SearchKeyword[];
}

const initialState: SearchKeywordState = {
    searchKeywords: [],
    searchLogs: [],
};

export default (state = initialState, action: SearchKeywordAction) =>
    produce(state, (draft) => {
        switch (action.type) {
            case searchKeywordsActionTypes.SUCCESS: {
                const { payload } = action as SearchKeywordsSuccessAction;

                draft.searchKeywords = payload;
                break;
            }
            case searchLogsActionTypes.SUCCESS: {
                const { payload } = action as SearchLogsSuccessAction;

                draft.searchLogs = payload.nodes;
                break;
            }

            default: {
                return state;
            }
        }
    });
