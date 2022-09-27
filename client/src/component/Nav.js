import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setSignUpModal } from '../actions/modalAction';
import SignUpModal from './modal/SignUpModal';

function Nav() {
  const dispatch = useDispatch();
  // const userState = useSelector((state) => state.userReducer);
  const modalState = useSelector((state) => state.modalReducer);
  // const { isOpenSignUp } = modalState;
  const handleCloseSignUpModal = () => {
    dispatch(setSignUpModal(false));
  };

  return (
    <>
      {/*{isOpenSignUp? <SignUpModal /> : null}*/}
      <div className='nav'>
        <button
          type='button'
          aria-hidden='true'
          onClick={(handleCloseSignUpModal)}
          className='signup'
        >
          회원가입
        </button>
      </div>
    </>
  );
}

export default Nav;