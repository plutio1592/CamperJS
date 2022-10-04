import {
  SET_LOGIN_STATE,
  SET_NAME,
} from './types';

export const setLoginState = (trueOrFalse) => ({
  type: SET_LOGIN_STATE,
  payload: {
    isLogin: trueOrFalse,
  },
});

export const SetName = (nameString) => ({
  type: SET_NAME,
  payload: {
    name: nameString,
  },
});
