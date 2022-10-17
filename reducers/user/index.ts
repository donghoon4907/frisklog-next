import produce from 'immer';

import { UserAction } from '../../actions/user';
import { userActionTypes } from '../../actions/user/user.action';
import { SetUserRequestAction } from '../../actions/user/set-user.interface';
import { RecommendUser, User } from '../../interfaces/user';
import { recommendUsersActionTypes } from '../../actions/user/recommend-users.action';
import { RecommendUsersSuccessAction } from '../../actions/user/recommend-users.interface';
import { getUserActionTypes } from '../../actions/user/get-user.action';
import { GetUserSuccessAction } from '../../actions/user/get-user.interface';
import { getFollowingsActionTypes } from '../../actions/user/get-followings.action';
import { GetFollowingsSuccessAction } from '../../actions/user/get-followings.interface';
import { OffsetPageInfo } from '../../interfaces/page-info';
import { searchUsersActionTypes } from '../../actions/user/search-users.action';
import { SearchUsersSuccessAction } from '../../actions/user/search-users.interface';
import { NotificationAction } from '../../actions/notification';

export interface UserState {
    id: string | null;
    nickname: string | null;
    avatar: string | null;
    isMaster: boolean | null;
    receivePostNotification: boolean | null;
    recommendUsers: RecommendUser[];
    userPageProfile: User | null;
    searchedFollowings: {
        pageInfo: OffsetPageInfo | null;
        nodes: User[];
    };
    searchUsers: {
        pageInfo: OffsetPageInfo | null;
        nodes: User[];
    };
}

const initialState: UserState = {
    id: null,
    nickname: null,
    avatar: null,
    isMaster: null,
    receivePostNotification: null,
    recommendUsers: [],
    userPageProfile: null,
    searchedFollowings: {
        pageInfo: null,
        nodes: [],
    },
    searchUsers: {
        pageInfo: null,
        nodes: [],
    },
};

export default (
    state = initialState,
    action: UserAction | NotificationAction,
) =>
    produce(state, (draft) => {
        switch (action.type) {
            // Load
            case userActionTypes.SET: {
                const { payload } = action as SetUserRequestAction;

                const {
                    id,
                    nickname,
                    avatar,
                    isMaster,
                    receivePostNotification,
                } = payload;

                draft.id = id ? id : draft.id;

                draft.nickname = nickname ? nickname : draft.nickname;

                draft.avatar = avatar ? avatar : draft.avatar;

                draft.isMaster =
                    typeof isMaster === 'boolean' ? isMaster : draft.isMaster;

                draft.receivePostNotification =
                    typeof receivePostNotification === 'boolean'
                        ? receivePostNotification
                        : draft.receivePostNotification;

                const isMypage =
                    draft.userPageProfile &&
                    draft.userPageProfile.id === draft.id;
                if (isMypage && nickname) {
                    draft.userPageProfile!.nickname = nickname;
                }
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
            case getFollowingsActionTypes.SUCCESS: {
                const { payload } = action as GetFollowingsSuccessAction;

                draft.searchedFollowings.pageInfo = payload.pageInfo;

                draft.searchedFollowings.nodes = payload.nodes;
                break;
            }
            case searchUsersActionTypes.SUCCESS: {
                const { payload } = action as SearchUsersSuccessAction;

                const { pageInfo, nodes } = payload;

                draft.searchUsers.pageInfo = pageInfo;

                const isFirst = pageInfo.currentPage === 1;
                if (isFirst) {
                    draft.searchUsers.nodes = nodes;
                } else {
                    draft.searchUsers.nodes =
                        draft.searchUsers.nodes.concat(nodes);
                }

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
