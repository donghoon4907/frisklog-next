export enum UploadImageAction {
    REQUEST = 'UPLOAD_IMAGE_REQUEST',
    SUCCESS = 'UPLOAD_IMAGE_SUCCESS',
    FAILURE = 'UPLOAD_IMAGE_FAILURE',
}

export interface UploadImagePayload {
    formData: FormData;
    callbackFunc: (fileName: string) => void;
}
