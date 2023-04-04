import { SwitchAction } from '..';

export interface PhotoPopupShowAction extends SwitchAction {}

export interface PhotoPopupHideAction extends SwitchAction {}

export type PhotoPopupAction = PhotoPopupShowAction | PhotoPopupHideAction;
