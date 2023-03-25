import { SwitchAction } from '..';

export interface ThumbnailModalShowAction extends SwitchAction {}

export interface ThumbnailModalHideAction extends SwitchAction {}

export type ThumbnailModalAction =
    | ThumbnailModalShowAction
    | ThumbnailModalHideAction;
