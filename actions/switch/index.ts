import { PayloadAction } from '..';

import { LoginModalAction } from './login-modal';
import { PostModalAction } from './post-modal';
import { SearchBarAction } from './search-bar';
import { ThemeModeAction } from './theme-mode';
import { UserModalAction } from './user-modal';

export type SwitchActionTypes =
    | LoginModalAction
    | PostModalAction
    | UserModalAction
    | SearchBarAction
    | ThemeModeAction;

export type SwitchAction = PayloadAction<SwitchActionTypes>;
