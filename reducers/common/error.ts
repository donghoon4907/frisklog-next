import { ErrorAction } from '../../actions';

export interface ErrorState {
    [key: string]: null | Error | string;
}

const getErrorMatches = (actionType: string) =>
    /(.*)_(REQUEST|ERROR)/.exec(actionType);

const errorReducer = (state: ErrorState = {}, action: ErrorAction) => {
    const matches = getErrorMatches(action.type);

    if (!matches) {
        return state;
    }

    const [, requestName, requestStatus] = matches;

    return {
        ...state,
        message: requestStatus === 'ERROR' ? action.error.message : null,
        statusCode: requestStatus === 'ERROR' ? action.error.statusCode : null,
    };
};

export default errorReducer;
