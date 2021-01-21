import * as Type from "../actions/types";

const typeReducer = (state = [], action) => {
  switch (action.type) {
    case Type.LOAD_TYPE:
      return action.payload.types;
    case Type.CREATE_TYPE:
      let results = [...state];
      results.unshift(action.payload.types);
      return results;
    case Type.UPDATE_TYPE:
      let data_types = [...state]
      return data_types.map(dt => {
        if (dt.id === action.payload.types.id) {
          return action.payload.types
        }
        return dt
      })
    case Type.REMOVE_TYPE:
      let types = [...state]
      return types.filter(type => {
        return type.id !==action.payload.id
      })
    default:
      return state;
  }
};
export default typeReducer;
