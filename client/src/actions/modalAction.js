import {
  SET_LOGIN_MODAL, 
  SET_SIGNUP_MODAL,
  SET_ISLOGIN_FALSE_OR_TRUE,
  SET_EMAIL_CHECK_MODAL,
} from './types';

export const setLoginModal = (trueOrFalse) => ({
  type: SET_LOGIN_MODAL,
  payload: {
    isOpenLogin: trueOrFalse,
  },
});

export const setSignUpModal = (trueOrFalse) => ({
  type: SET_SIGNUP_MODAL,
  payload: {
    inOpenSignup: trueOrFalse,
  },
});

export const setIsLogin = (trueOrFalse) => ({
  type: SET_ISLOGIN_FALSE_OR_TRUE,
  payload: {
    isLoginTrueOrFalse: trueOrFalse,
  },
});

export const setEmailCheckModal = (trueOrFalse) => ({
  type: SET_EMAIL_CHECK_MODAL,
  payload: {
    isOpenEmailCheck: trueOrFalse,
  },
});