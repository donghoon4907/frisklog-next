import produce from 'immer';

import { UserAction } from '../../actions/user';
import { userActionTypes } from '../../actions/user/user.action';
import { SetUserRequestAction } from '../../actions/user/set-user.interface';
import { RecommendUser } from '../../interfaces/user';
import { recommendUsersActionTypes } from '../../actions/user/recommend-users.action';
import { RecommendUsersSuccessAction } from '../../actions/user/recommend-users.interface';

export interface UserState {
    id: string | null;
    nickname: string | null;
    avatar: string | null;
    isMaster: boolean | null;
    recommendUsers: RecommendUser[];
}

const initialState: UserState = {
    id: null,
    nickname: null,
    avatar: null,
    isMaster: null,
    recommendUsers: [],
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
            case recommendUsersActionTypes.SUCCESS: {
                const { payload } = action as RecommendUsersSuccessAction;

                draft.recommendUsers = draft.recommendUsers.concat(
                    payload.nodes,
                );
                break;
            }
            default: {
                return state;
            }
        }
    });
