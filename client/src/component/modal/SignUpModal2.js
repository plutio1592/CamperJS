import React, { useCallback, useState } from 'react'
import { Modal, Button, Form, Container, Col } from 'react-bootstrap'
import axios from 'axios';

const SignUpModal = ({ show, onHide }) => {

  const [userId, setUserId] = useState("");
  const [userIdError, setUserIdError] = useState(false);
  // const [userIdCheck, setUserIdCheck] = useState("");
  // const [userIdCheckError, setUserIdCheckError] = useState(false);
  const [userPwd, setUserPwd] = useState("");
  const [userPwdError, setUserPwdError] = useState(false);
  const [userPwdCheck, setUserPwdCheck] = useState("");
  const [userPwdCheckError, setUserPwdCheckError] = useState(false);
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userEmailError, setUserEmailError] = useState(false);
  const [userPhone, setUserPhone] = useState("");
  const [userPhoneError, setUserPhoneError] = useState(false);

  // // 아이디 중복 확인
  // const idCheck = axios.get('회원가입 정보있는 주소', {
  //   params: { id: userId },
  // });

  // if (!idCheck.data.result) {
  //   setUserId(false);
  //   return;
  // };


  const onChangeUserId = (e) => {
      const userIdRegex = /^[a-zA-Z0-9]{4,20}$/;
      if ((!e.target.value || (userIdRegex.test(e.target.value)))) setUserIdError(false);
      else setUserIdError(true);
      setUserId(e.target.value);
  };

//   const onChangeUserIdCheck = (e) => {
//     if (!idCheck.data.result) setUserIdCheckError(false);
//     else setUserIdCheckError(true);
// };


  const onChangeUserPwd = (e) => {
    const userPwdRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()])[A-Za-z\d~!@#$%^&*()+|=]{8,20}$/;
    if ((!e.target.value || (userPwdRegex.test(e.target.value)))) setUserPwdError(false);
    else setUserPwdError(true);
    setUserPwd(e.target.value);
  };

  const onChangeUserPwdCheck = (e) => {
    const userPwdRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()])[A-Za-z\d~!@#$%^&*()+|=]{8,20}$/;
    if ((!e.target.value || (userPwdRegex.test(e.target.value)))) setUserPwdCheckError(false);
    else setUserPwdCheckError(true);
    setUserPwdCheck(e.target.value);
  };

  const onChangeUserName = (e) => {
    const userNameRegex = /^[a-zA-Zㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,16}$/;
    if ((!e.target.value || (userNameRegex.test(e.target.value)))) setUserNameError(false);
    else setUserNameError(true);
    setUserName(e.target.value);
  };

  const onChangeUserEmail = (e) => {
    const userEmailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if ((!e.target.value || (userEmailRegex.test(e.target.value)))) setUserEmailError(false);
    else setUserEmailError(true);
    setUserEmail(e.target.value);
  };

  const onChangeUserPhone = (e) => {
    const userPhoneRegex = /^[0-9]{12}$/;
    if ((!e.target.value || (userPhoneRegex.test(e.target.value)))) setUserPhoneError(false);
    else setUserPhoneError(true);
    setUserPhone(e.target.value);
};

// 회원가입 구현

axios.post(`주소/user/signup`,
      {
        username: userId,
        password: userPwd,
        name : userName,
        email : userEmail,
        phone : userPhone
      })
      .then(function (response) {
        if(response.data.code === 201){
          window.open("회원가입이 완료되었습니다")
        } else {
          let message = response.data.message;
          if (response.data.code === 409) {
            message = "이미 사용중인 아이디입니다."
          }
        }
      }).catch(function (error) {
        console.log(error);
      })

  return (
    <Modal
      show = {show}
      onHide = {onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicId">
              <Col>
                  <Form.Label>아이디</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="영문, 숫자가능. 4자 이상, 최대 20자" 
                    maxLength={20}
                    value={userId}
                    onChange={onChangeUserId}/>
                    {userIdError && <div class="invalid-input">영문혹은 숫자를 이용하여 4자 이상, 최대 20자로 입력해주세요</div>}
                </Col>
              </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Col>
                <Form.Label>비밀번호</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="숫자, 영문, 특수문자 포함  8~20자" 
                  value={userPwd}
                  onChange={onChangeUserPwd}/>
                  {userPwdError && <div class="invalid-input">숫자, 영문, 특수문자 포함  8~20자를 입력해주세요.</div>}
              </Col>  
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Col>
                <Form.Label>비밀번호 확인</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="비밀번호를 한번 더 입력해주세요"
                  value={userPwdCheck}
                  onChange={onChangeUserPwdCheck}/>
                  {(userPwdCheckError && !(userPwd === userPwdCheck)) && <div class="invalid-input">입력하신 비밀번호와 일치하지 않습니다</div>}
              </Col>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Col>
                <Form.Label>이름</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="한글 or 영어 2~16자" 
                  value={userName}
                  onChange={onChangeUserName}/>
                  {userNameError && <div class="invalid-input">한글이나 영어만 사용하여 2~16글자로 입력해주세요.</div>}
              </Col>  
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Col>
                <Form.Label>이메일</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="유효한 메일주소를 입력해주세요" 
                  value={userEmail}
                  onChange={onChangeUserEmail}/>
                  {userEmailError && <div class="invalid-input">올바른 형식의 메일주소를 입력해주세요.</div>}
              </Col>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Col>
                <Form.Label>연락처</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="숫자만 입력해주세요" 
                  value={userPhone}
                  onChange={onChangeUserPhone}/>
                  {userPhoneError && <div class="invalid-input">총 11자리의 숫자를 입력해주세요.</div>}
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button block variant="info" type="button">
              회원가입
          </Button>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Container>
    </Modal>
  )
}

export default SignUpModal;