import React, { useReducer, useState } from 'react';
// axios 설치함
import axios from 'axios';
import { useDispatch } from 'react-redux';
// import { setLoginState } from '../../actions/userAction';

// import {
//   setSignUpModal,
//   setLoginModal,
//   setEmailCheckModal,
// } from '../../actions/modalAction';

import {
  idValidator,
  passwordValidator,
  nameValidator,
  emailValidator,
  phoneValidator,
} from '../utils/validation';

// import Google from '../Google';
// import Kakao from '../Kakao';
// import Naver from '../Naver';

import '../styles/signUp/SignUp.css';

function SignUp ({ handleCloseSignUpModal }) {
  const dispatch = useDispatch();
  
  const inputId = useRef(null);
  const inputPassword = useRef(null);
  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputPhone = useRef(null);

  // 회원가입시 정보 입력 처리 핸들러
  const [ signUpForm, setSignUpForm ] = useState ({
    id: '',
    password: '',
    passwordCheck: '',
    name: '',
    email: '',
    phone: '',
  });
  // 회원가입시 정보 입력 틀렸을때 출력되는 메시지 핸들러
  const [ errMsg, setErrMsg ] = useState ({
    id: '',
    passwordCheck: '',
    name: '',
    email: '',
    phone: '',
  });
  // // 회원가입시 오류 처리 핸들러(흔들리는 효과 주고 싶을때 사용)
  // const [ isSignUpErr, setIsSignUpErr ] = useState({
  //   id: false,
  //   password: false,
  //   name: false,
  //   email: false,
  //   phone: false,
  // });

  // 유효성 검사 실패시 에러 메시지 출력
  const handleErrMsg = (target, msg) => {
    setErrMsg({
      ...errMsg,
      [target]: msg,
    });
  };
  
  // onChange 변화 감지 핸들러
  const handleFormChange = (e) => {
    setSignUpForm({
      ...signUpForm,
      [e.target.id]: e.target.value,
    });
    // 입력이 시작되면 에러메세지 지움
    handleErrMsg(e.target.name, '');
  };

  // 회원가입 정보 입력 핸들러
  const handleSignUp = async (e) => {
    e.preventDefaujlt();

    // 유효성 검사
    if (!signUpForm.id) {
      inputId.current.focus(); // focus() : 커서 깜박이는 효과
      handleErrMsg('id', '아이디를 입력해주세요');
      return;
    };

    if (!idValidator(signUpForm.id)) {
      inputId.current.focus();
      handleErrMsg('id', '잘못된 형식의 아이디입니다');
      return;
    }

    if (!signUpForm.password) {
      inputPassword.current.focus(); // focus() : 커서 깜박이는 효과
      handleErrMsg('passwordCheck', '영문,숫자,특수문자 포함 8글자를 입력해주세요');
      return;
    };

    if (!passwordValidator(signUpForm.id)) {
      inputId.current.focus();
      handleErrMsg('id', '잘못된 형식의 아이디입니다');
      return;
    }

    
  }
}
