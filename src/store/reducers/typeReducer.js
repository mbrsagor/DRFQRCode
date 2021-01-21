import * as Type from "../actions/types";

const typeReducer = (state = [], action) => {
  switch (action.type) {
    case Type.LOAD_TYPE:
      return action.payload.types;
    case Type.CREATE_TYPE:
      let results = [...state];
      results.unshift(action.payload.types);
      return results;
    default:
      return state;
  }
};
export default typeReducer;
