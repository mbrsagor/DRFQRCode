import { combineReducers } from 'redux';
import authReducer from './authReducer';
import typeReducer from './typeReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    typereducer: typeReducer
})

export default rootReducer;
