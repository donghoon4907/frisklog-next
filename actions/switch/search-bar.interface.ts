import { SwitchAction } from '..';

export interface SearchBarShowAction extends SwitchAction {}

export interface SearchBarHideAction extends SwitchAction {}

export type SearchBarAction = SearchBarShowAction | SearchBarHideAction;
