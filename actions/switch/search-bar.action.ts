import {
    SearchBarHideAction,
    SearchBarShowAction,
} from './search-bar.interface';

const REQUEST_NAME = 'SEARCH_BAR';

export const searchBarActionTypes = {
    SHOW: `SHOW_${REQUEST_NAME}`,
    HIDE: `HIDE_${REQUEST_NAME}`,
};

export function showSearchBar(): SearchBarShowAction {
    return {
        type: searchBarActionTypes.SHOW,
    };
}

export function hideSearchBar(): SearchBarHideAction {
    return {
        type: searchBarActionTypes.HIDE,
    };
}
