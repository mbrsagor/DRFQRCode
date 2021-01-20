import * as Type from "../actions/types";

const typeReducer = (state = [], action) => {
  switch (action.type) {
    case Type.LOAD_TYPE:
      return action.payload.types;
    default:
      return state;
  }
};
export default typeReducer;
