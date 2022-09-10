import produce from 'immer';

import { UserAction } from '../../actions/user';
import { userActionTypes } from '../../actions/user/user.action';
import { SetUserRequestAction } from '../../actions/user/set-user.interface';

export interface UserState {
    id: string | null;
    nickname: string | null;
    avatar: string | null;
    isMaster: boolean | null;
}

const initialState: UserState = {
    id: null,
    nickname: null,
    avatar: null,
    isMaster: null,
};

export default (state = initialState, action: UserAction) =>
    produce(state, (draft) => {
        switch (action.type) {
            // Load
            case userActionTypes.SET: {
                const { payload } = action as SetUserRequestAction;

                draft.id = payload.id;

                draft.nickname = payload.nickname;

                draft.avatar = payload.avatar;

                draft.isMaster = payload.isMaster;
                break;
            }
            case userActionTypes.INIT: {
                draft.id = null;

                draft.nickname = null;

                draft.avatar = null;

                draft.isMaster = null;
                break;
            }
            default: {
                return state;
            }
        }
    });
