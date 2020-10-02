import { ActionCreator, Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

import { ApplicationState } from '../reducers';
import { User, UserActionTypes } from '../store/types';
import { API_URL } from '../constants/api';

export type AppThunk = ActionCreator<
  ThunkAction<void, ApplicationState, null, Action<string>>
>;

export const fetchDataSuccess = (data: User) => ({
  type: UserActionTypes.FETCH_DATA_SUCCESS,
  data,
});
export const fetchDataError = () => ({
  type: UserActionTypes.FETCH_DATA_ERROR,
});

export const fetchDataRequest: AppThunk = () => (dispatch: Dispatch) => {
  dispatch({ type: UserActionTypes.FETCH_DATA_REQUEST });
  axios
    .get(API_URL, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
    .then((res) => res.data)
    .then((data) => {
      // localStorage.setItem('token', JSON.stringify(data?.token));
      dispatch(fetchDataSuccess(data));
    })
    .catch(() => dispatch(fetchDataError()));
};

export const increaseCount = () => ({
  type: 'INCREASE_COUNT',
});
