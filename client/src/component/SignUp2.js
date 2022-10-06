// import React, { useRef, useState } from 'react';
// // axios 설치함
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import {  setSignUpModal,
//           setLoginModal,
//           setEmailCheckModal,} 
//         from '../actions/modalAction';
// import { setLoginState } from '../actions/userAction'

// import {
//   idValidator,
//   passwordValidator,
//   nameValidator,
//   emailValidator,
//   phoneValidator,
// } from '../utils/Validation';

// // import Google from '../Google';
// // import Kakao from '../Kakao';
// // import Naver from '../Naver';

// import '../styles/signUp/SignUp.css';
// import CloseButton from './CloseButton';

// function SignUp2 (props) {
//   const dispatch = useDispatch();
  
//   const inputId = useRef(null);
//   const inputPassword = useRef(null);
//   const inputName = useRef(null);
//   const inputEmail = useRef(null);
//   const inputPhone = useRef(null);

//   // 회원가입시 정보 입력 처리 핸들러
//   const [ signUpForm, setSignUpForm ] = useState ({
//     id: '',
//     password: '',
//     passwordCheck: '',
//     name: '',
//     email: '',
//     phone: '',
//   });
//   // 회원가입시 정보 입력 틀렸을때 출력되는 메시지 핸들러
//   const [ errMsg, setErrMsg ] = useState ({
//     id: '',
//     passwordCheck: '',
//     name: '',
//     email: '',
//     phone: '',
//   });
//   // 회원가입시 오류 처리 핸들러
//   const [ isSignUpErr, setIsSignUpErr ] = useState({
//     id: false,
//     password: false,
//     name: false,
//     email: false,
//     phone: false,
//   });

//   // 유효성 검사 실패시 에러 메시지 출력
//   const handleErrMsg = (target, msg) => {
//     setErrMsg({
//       ...errMsg,
//       [target]: msg,
//     });
//   };
  
//   // onChange 변화 감지 핸들러
//   const handleFormChange = (e) => {
//     setSignUpForm({
//       ...signUpForm,
//       [e.target.id]: e.target.value,
//     });
//     // 입력이 시작되면 에러메세지 지움
//     handleErrMsg(e.target.name, '');
//   };

//   // 회원가입 정보 입력 핸들러
//   const handleSignUp = async (e) => {
//     e.preventDefault();

//     // 아이디 유효성 검사
//     if (!signUpForm.id) {
//       inputId.current.focus(); // focus() : 커서 깜박이는 효과
//       handleErrMsg('id', '아이디를 입력해주세요');
//       return;
//     };

//     if (!idValidator(signUpForm.id)) {
//       inputId.current.focus();
//       handleErrMsg('id', '잘못된 형식의 아이디입니다');
//       return;
//     }

//     // 아이디 중복 확인
//     const idCheck = await axios.get('회원가입 정보있는 주소', {
//       params: { id: signUpForm.id },
//     });

//     if (!idCheck.data.result) {
//       inputId.current.focus();
//       handleErrMsg('id', '사용중인 아이디입니다');
//       return;
//     };

//     // 비밀번호 유효성 검사
//     if (!passwordValidator(signUpForm.password)) {
//       inputPassword.current.focus();
//       handleErrMsg('passwordCheck', '영문,숫자,특수문자 포함 8글자를 입력해주세요');
//       return;
//     }

//     if (!(signUpForm.password && signUpForm.passwordCheck)) {
//       handleErrMsg('passwordCheck', '비밀번호를 모두 입력해주세요');
//       return;
//     };

//     if (signUpForm.password !== signUpForm.passwordCheck) {
//       handleErrMsg('passwordCheck', '비밀번호가 일치하지 않습니다');
//       return;
//     };
    
//     // 이름 유효성 검사
//     if (!nameValidator(signUpForm.name)) {
//       inputName.current.focus();
//       handleErrMsg('name', '한글 또는 영어 16글자 이내로 입렵해주세요');
//       return;
//     };

//     // 이메일 중복 확인
//     const emailCheck = await axios.get('회원가입 정보있는 주소', {
//       params: { email: signUpForm.email },
//     });

//     if (!emailCheck.data.result) {
//       inputEmail.current.focus();
//       handleErrMsg('email', '사용중인 이메일입니다');
//       return;
//     };
//     // 이메일 유효성 검사
//     if (!emailValidator(signUpForm.email)) {
//       inputEmail.current.focus();
//       handleErrMsg('email', '올바른 형식의 이메일을 입력해주세요');
//       return;
//     };

//     // 전화번호 유효성 검사
//     if (!phoneValidator(signUpForm.email)) {
//       inputPhone.current.focus();
//       handleErrMsg('phone', '전화번호 11자리를 입력해주세요');
//       return;
//     };
    
//     // 회원가입 API 요청
//     axios
//       .post('/users/signup', signUpForm, { loading: false })
//       .then(() => {
//         dispatch(setLoginState(true));
//         dispatch(setSignUpModal(false));
//         dispatch(setLoginModal(false));
//         dispatch(setEmailCheckModal(true));
//       })
//       .catch((err) => {
//         try {
//           const { status } = err.response;
//           if (status === 409) {
//             handleErrMsg(
//               'id', '존재하는 아이디입니다.',);

//             setTimeout(() => handleErrMsg(''), 5000);
//           } else if (status === 400) {
//             handleErrMsg('passwordCheck', '입력하신 정보들을 다시 한번 확인해주세요',);

//             setTimeout(() => setErrMsg({ 
//               id: '',
//               password: '',
//               name: '',
//               email: '',
//               phone: '',}), 5000);
//           } else {
//             handleErrMsg('passwrodCheck', '서버에 문제가 발생했습니다');
//           }
//         } catch (error) {
//           handleErrMsg('passwordCheck', '서버에 문제가 발생했습니다');
//         }
//       })
//   };

//   const handleEnterForm = (e) => {
//     if(e.key === 'Enter') {
//       handleSignUp(e);
//     }
//   };

//   const { isOpen, close } = props; 

//   return (
//     <>
//     { isOpen ? (
//       <div className='Signup_container'>
//         <div className='Signup_in'>
//           <CloseButton onClick={close} />
//           <div className='title'>회원가입</div>
//           <div className='input'>
//             <div className='id'>
//               <input className={
//                 !isSignUpErr.id
//                 ? 'Signup_input'
//                 : 'Signup_input input_change'
//               }
//               type='id'
//               placeholder='아이디 영문 혹은 숫자 4~20자'
//               name='id'
//               value={signUpForm.id}
//               onChange={handleFormChange}
//               onKeyUp={handleEnterForm}
//               ref={inputId} />
//             </div>
//             <div className='password'>
//               <input className={
//                 !isSignUpErr.password
//                 ? 'Signup_input'
//                 : 'Signup_input input_change'
//               }
//               type='password'
//               placeholder='영문,숫자,특수문자 포함 8~20자'
//               name='password'
//               value={signUpForm.password}
//               onChange={handleFormChange}
//               onKeyUp={handleEnterForm}
//               ref={inputPassword} />
//             </div>
//             <div className='passwordCheck'>
//             <input className={
//                 !isSignUpErr.password
//                 ? 'Signup_input'
//                 : 'Signup_input input_change'
//               }
//               type='password'
//               placeholder='비밀번호 확인'
//               name='passwordCheck'
//               value={signUpForm.passwordCheck}
//               onChange={handleFormChange}
//               onKeyUp={handleEnterForm} />
//             </div>
//             <div className='name'>
//               <input className={
//                 !isSignUpErr.name
//                 ? 'Signup_input'
//                 : 'Signup_input input_change'
//               }
//               type='text'
//               placeholder='한글 혹은 영어 2~16자'
//               name='password'
//               value={signUpForm.name}
//               onChange={handleFormChange}
//               onKeyUp={handleEnterForm}
//               ref={inputName} />
//             </div>
//             <div className='email'>
//               <input className={
//                 !isSignUpErr.email
//                 ? 'Signup_input'
//                 : 'Signup_input input_change'
//               }
//               type='email'
//               placeholder='유효한 이메일주소를 입력해주세요'
//               name='email'
//               value={signUpForm.email}
//               onChange={handleFormChange}
//               onKeyUp={handleEnterForm}
//               ref={inputEmail} />
//             </div>
//             <div className='phone'>
//               <input className={
//                 !isSignUpErr.phone
//                 ? 'Signup_input'
//                 : 'Signup_input input_change'
//               }
//               type='text'
//               placeholder='전화번호 11자리를 입력해주세요'
//               name='phone'
//               value={signUpForm.phone}
//               onChange={handleFormChange}
//               onKeyUp={handleEnterForm}
//               ref={inputPhone} />
//             </div>
//           </div>
//           <button type='button' className='signup_button' onClick={handleSignUp} >
//             회원가입
//           </button>
//         </div>
//       </div>) : null}
//       </>
//    );
//   }

// export default SignUp2;
