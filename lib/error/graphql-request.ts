import { ErrorPayload } from '../../interfaces/error';

export function getErrorPayload(error: any): ErrorPayload {
    const [{ extensions }] = error.response.errors;

    const { message, statusCode } = extensions.response;

    return { message, statusCode };
}
