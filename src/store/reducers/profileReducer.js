import * as Type from "../actions/types";

const profileReducer = (state, action) => {
  switch (action.type) {
    case Type.SHOW_PROFILE:
      return action.payload.profile;
    case Type.ACTIVE_USER:
      return action.payload.user;
    default:
      return state;
  }
};

export default profileReducer;
