import { SwitchAction } from '..';

export interface PostModalShowAction extends SwitchAction {}

export interface PostModalHideAction extends SwitchAction {}

export type PostModalAction = PostModalShowAction | PostModalHideAction;
