import { SwitchAction } from '..';

export interface LoginModalShowAction extends SwitchAction {}

export interface LoginModalHideAction extends SwitchAction {}

export type LoginModalAction = LoginModalShowAction | LoginModalHideAction;
