import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setSignUpModal } from '../actions/modalAction';
import SignUpModal from './modal/SignUpModal';

function Nav() {
  const dispatch = useDispatch();
  // const userState = useSelector((state) => state.userReducer);
  const modalState = useSelector((state) => state.modalReducer);
  const { isOpenSignUp } = modalState;

  return (
    <>
      {isOpenSignUp? <SignUpModal /> : null}
      <div className='nav'>
        <button
          type='button'
          aria-hidden='true'
          onClick={() => dispatch(setSignUpModal(true))}
          className='signup'
        >
          회원가입
        </button>
      </div>
    </>
  );
}

export default Nav;