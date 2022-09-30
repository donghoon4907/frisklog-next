import produce from 'immer';

import { UserAction } from '../../actions/user';
import { userActionTypes } from '../../actions/user/user.action';
import { SetUserRequestAction } from '../../actions/user/set-user.interface';
import { RecommendUser, User } from '../../interfaces/user';
import { recommendUsersActionTypes } from '../../actions/user/recommend-users.action';
import { RecommendUsersSuccessAction } from '../../actions/user/recommend-users.interface';
import { getUserActionTypes } from '../../actions/user/get-user.action';
import { GetUserSuccessAction } from '../../actions/user/get-user.interface';
import { followUserActionTypes } from '../../actions/user/follow-user.action';
import { FollowUserSuccessAction } from '../../actions/user/follow-user.interface';
import { unfollowUserActionTypes } from '../../actions/user/unfollow-user.action';
import { UnfollowUserSuccessAction } from '../../actions/user/unfollow-user.interface';

export interface UserState {
    id: string | null;
    nickname: string | null;
    avatar: string | null;
    isMaster: boolean | null;
    followings: User[];
    recommendUsers: RecommendUser[];
    userPageProfile: User | null;
}

const initialState: UserState = {
    id: null,
    nickname: null,
    avatar: null,
    isMaster: null,
    followings: [],
    recommendUsers: [],
    userPageProfile: null,
};

export default (state = initialState, action: UserAction) =>
    produce(state, (draft) => {
        switch (action.type) {
            // Load
            case userActionTypes.SET: {
                const { payload } = action as SetUserRequestAction;

                const { id, nickname, avatar, isMaster, followings } = payload;

                draft.id = id ? id : draft.id;

                draft.nickname = nickname ? nickname : draft.nickname;

                draft.avatar = avatar ? avatar : draft.avatar;

                draft.isMaster = isMaster ? isMaster : draft.isMaster;

                draft.followings = followings ? followings : draft.followings;
                break;
            }
            case userActionTypes.INIT: {
                draft.id = null;

                draft.nickname = null;

                draft.avatar = null;

                draft.isMaster = null;

                draft.followings = [];
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
            case followUserActionTypes.SUCCESS: {
                const { payload } = action as FollowUserSuccessAction;

                draft.followings.push(payload);
                break;
            }
            case unfollowUserActionTypes.SUCCESS: {
                const { payload } = action as UnfollowUserSuccessAction;

                const findIndex = draft.followings.findIndex(
                    (user) => payload.id == user.id,
                );

                if (findIndex !== -1) {
                    draft.followings.splice(findIndex, 1);
                }
                break;
            }
            default: {
                return state;
            }
        }
    });
