import { combineReducers } from 'redux';
import { UserReducer } from './user';

const rootReducer = combineReducers({
  userData: UserReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;
export default rootReducer;
