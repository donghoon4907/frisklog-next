import produce from "immer";

import { UserActionTypes, UserAction } from "../../actions/user/user.interface";

const initialState: Record<string, any> = {
  isAddUserLoading: false,
  addUserErrorReason: ""
};

export default (state = initialState, action: UserAction) =>
  produce(state, draft => {
    switch (action.type) {
      case UserActionTypes.CREATE_REQUEST: {
        draft.isAddUserLoading = true;
        break;
      }
      case UserActionTypes.CREATE_SUCCESS: {
        draft.isAddUserLoading = false;
        break;
      }
      case UserActionTypes.CREATE_FAILURE: {
        draft.isAddUserLoading = false;

        draft.addUserErrorReason = action.error;
        break;
      }
      default: {
        return state;
      }
    }
  });
