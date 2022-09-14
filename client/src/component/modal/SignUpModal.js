import React, { useEffect } from 'react';
// react-redux, redux 설치함
import { useDispatch } from 'react-redux';
import SignUp from '../SignUp';
import { setSignUpModal } from '../../actions/modalAction';
import { stopScroll, clearStopScroll } from '../../utils/ModalScrollPrevent';

function SignUpModal() {
  const dispatch =  useDispatch();

  // 스크롤 방지
  useEffect(() => {
    stopScroll();
    return () => {
      clearStopScroll();
    };
  }, []);

  const handleCloseSignUpModal = () => {
    dispatch(setSignUpModal(false));
  };

  const LoginSignUpChange = (e) => {
    const login = document.getElementById('SignUpModal_Login_change');
    const signup = documet.getElementById('SignUpModal_SignUp_change');
  }
}

