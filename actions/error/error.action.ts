import { ErrorPayload } from '../../interfaces/error';
import { SagaErrorAction } from './error.interface';

const REQUEST_NAME = 'COMMON_ERROR';

export const errorActionTypes = {
    ERROR: REQUEST_NAME,
};

export function sagaError(error: ErrorPayload): SagaErrorAction {
    return {
        type: errorActionTypes.ERROR,
        error,
    };
}
