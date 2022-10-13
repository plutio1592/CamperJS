
import React, { useState } from "react"
import { Modal, Button, Form, Container, Col } from "react-bootstrap"
import axios from "axios"
axios.defaults.withCredentials = true;

const LoginModal = ({ show, onHide, setlogin }) => {

  const [userId, setUserId] = useState("");
  const [userIdError, setUserIdError] = useState(false);
  const [userPwd, setUserPwd] = useState("");
  const [userPwdError, setUserPwdError] = useState(false);

  const onChangeUserId = (e) => {
    if ((!e.target.value)) setUserIdError(false);
    else setUserIdError(true)
    setUserId(e.target.value);
};

  const onChangeUserPwd = (e) => {
    if ((!e.target.value )) setUserPwdError(false);
    else setUserPwdError(true);
    setUserPwd(e.target.value);
  };

  const logIn = () => {
    return axios
                .post(`${process.env.REACT_APP_CAMPER_SERVER}/auth/login`,
                  { 
                    username: userId, 
                    password: userPwd
                  }, 
                  // {withCredentials: true}
                  ) 
                  .then((response) => {
                    console.log("🚀 ~ file: LoginModal.js ~ line 35 ~ .then ~ response", response.data)
                    if (response.data) {
                      //유저정보가 변한것이 마이페이지에 보여야된다
                      localStorage.setItem('user', response.data)
                      alert("로그인 완료")
                      window.location.reload(process.env.REACT_APP_CAMPER_HOME)
                    }
                  })
                  .catch((err) => {
                    if (err) {
                    }
                  });
                };
                // alert("이메일과 패스워드를 확인해주세요!");

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
                  value={userId}
                  onChange={onChangeUserId}/>
              </Col>
              </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Col>
                <Form.Label>비밀번호</Form.Label>
                <Form.Control 
                  type="password" 
                  value={userPwd}
                  onChange={onChangeUserPwd} />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={logIn} variant="info" type="button">
              로그인
          </Button>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Container>
    </Modal>
  )
}

export default LoginModal;