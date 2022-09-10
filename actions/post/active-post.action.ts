import {
    ActivePostCleanUpAction,
    ActivePostRequestAction,
    ActivePostRequestPayload,
} from './active-post.interface';

const REQUEST_NAME = 'ACTIVE_POST';

export const activePostActionTypes = {
    SET: `SET_${REQUEST_NAME}`,
    INIT: `INIT_${REQUEST_NAME}`,
};

export function setActivePost(
    payload: ActivePostRequestPayload,
): ActivePostRequestAction {
    return {
        type: activePostActionTypes.SET,
        payload,
    };
}

export function initActivePost(): ActivePostCleanUpAction {
    return {
        type: activePostActionTypes.INIT,
    };
}
