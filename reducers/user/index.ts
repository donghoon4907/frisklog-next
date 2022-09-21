import produce from 'immer';

import { UserAction } from '../../actions/user';
import { userActionTypes } from '../../actions/user/user.action';
import { SetUserRequestAction } from '../../actions/user/set-user.interface';
import { RecommendUser, User } from '../../interfaces/user';
import { recommendUsersActionTypes } from '../../actions/user/recommend-users.action';
import { RecommendUsersSuccessAction } from '../../actions/user/recommend-users.interface';
import { getUserActionTypes } from '../../actions/user/get-user.action';
import { GetUserSuccessAction } from '../../actions/user/get-user.interface';

export interface UserState {
    id: string | null;
    nickname: string | null;
    avatar: string | null;
    isMaster: boolean | null;
    recommendUsers: RecommendUser[];
    userPageProfile: User | null;
}

const initialState: UserState = {
    id: null,
    nickname: null,
    avatar: null,
    isMaster: null,
    recommendUsers: [],
    userPageProfile: null,
};

export default (state = initialState, action: UserAction) =>
    produce(state, (draft) => {
        switch (action.type) {
            // Load
            case userActionTypes.SET: {
                const { payload } = action as SetUserRequestAction;

                const { id, nickname, avatar, isMaster } = payload;

                draft.id = id ? id : draft.id;

                draft.nickname = nickname ? nickname : draft.nickname;

                draft.avatar = avatar ? avatar : draft.avatar;

                draft.isMaster = isMaster ? isMaster : draft.isMaster;
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
            case getUserActionTypes.SUCCESS: {
                const { payload } = action as GetUserSuccessAction;

                draft.userPageProfile = payload;
                break;
            }
            default: {
                return state;
            }
        }
    });
