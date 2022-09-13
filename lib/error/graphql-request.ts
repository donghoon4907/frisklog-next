import { ErrorPayload } from '../../interfaces/error';

export function getErrorPayload(error: any): ErrorPayload {
    const [{ extensions, message }] = error.response.errors;

    const { response } = extensions;

    if (response) {
        return getRefuseErrorResponse(response);
    } else {
        return getServerErrorResponse(message);
    }
}

export function getRefuseErrorResponse(response: any) {
    const { message, statusCode } = response;

    return { message, statusCode };
}

export function getServerErrorResponse(message: string) {
    const statusCode = 500;

    return { message, statusCode };
}
