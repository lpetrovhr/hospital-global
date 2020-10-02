import { Reducer } from 'redux';
import { UserActionTypes, User } from '../store/types';

export const initialState: User = {
  userName: null,
  token: null,
  patients: null,
  count: 0,
};

const reducer: Reducer<User> = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.FETCH_DATA_SUCCESS: {
      return {
        ...state,
        userName: action.data.userName,
        token: action.data.token,
        patients: action.data.patients,
      };
    }
    case 'INCREASE_COUNT': {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as UserReducer };
