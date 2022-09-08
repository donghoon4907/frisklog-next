import {
    ActivePostCleanUpAction,
    ActivePostRequestAction,
    ActivePostRequestPayload,
} from './active-post.interface';

const REQUEST_NAME = 'ACTIVE_POST';

export const activePostActionTypes = {
    REQUEST: `${REQUEST_NAME}_REQUEST`,
    CLEANUP: `${REQUEST_NAME}_CLEANUP`,
};

export function activePostRequest(
    payload: ActivePostRequestPayload,
): ActivePostRequestAction {
    return {
        type: activePostActionTypes.REQUEST,
        payload,
    };
}

export function activePostCleanUp(): ActivePostCleanUpAction {
    return {
        type: activePostActionTypes.CLEANUP,
    };
}
