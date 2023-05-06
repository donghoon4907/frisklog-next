import produce from 'immer';

import { SearchKeywordAction } from '../../actions/search-keyword';
import { searchKeywordsActionTypes } from '../../actions/search-keyword/search-keywords.action';
import { SearchKeywordsSuccessAction } from '../../actions/search-keyword/search-keywords.interface';
import { SearchKeyword } from '../../interfaces/search-keyword';

export interface SearchKeywordState {
    searchKeywords: SearchKeyword[];
}

const initialState: SearchKeywordState = {
    searchKeywords: [],
};

export default (state = initialState, action: SearchKeywordAction) =>
    produce(state, (draft) => {
        switch (action.type) {
            case searchKeywordsActionTypes.SUCCESS: {
                const { payload } = action as SearchKeywordsSuccessAction;

                draft.searchKeywords = payload;
                break;
            }

            default: {
                return state;
            }
        }
    });
