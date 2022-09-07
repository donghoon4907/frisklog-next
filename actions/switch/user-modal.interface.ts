import { SwitchAction } from '..';

export interface UserModalShowAction extends SwitchAction {}

export interface UserModalHideAction extends SwitchAction {}

export type UserModalAction = UserModalShowAction | UserModalHideAction;
