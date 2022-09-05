import { PayloadAction } from '..';
import { UploadImageAction } from './upload-image';

export type CommonActionTypes = UploadImageAction;

export type CommonAction = PayloadAction<CommonActionTypes>;
