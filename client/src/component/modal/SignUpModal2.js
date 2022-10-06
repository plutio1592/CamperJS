import React from 'react'
import { Modal, Button, Form, Container } from 'react-bootstrap'

const SignUpModal = ({ show, onHide }) => {
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
                <Form.Label>아이디</Form.Label>
                <Form.Control type="text" placeholder="영문, 숫자가능. 4자 이상, 최대 20자" />
              </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control type="password" placeholder="숫자, 영문, 특수문자 포함  8~20자" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>비밀번호 확인</Form.Label>
              <Form.Control type="password" placeholder="비밀번호를 한번 더 입력해주세요" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>이름</Form.Label>
              <Form.Control type="text" placeholder="한글 or 영어 2~16자" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>이메일</Form.Label>
              <Form.Control type="email" placeholder="유효한 메일주소를 입력해주세요" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>연락처</Form.Label>
              <Form.Control type="text" placeholder="숫자만 입력해주세요" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" type="button">
              회원가입
          </Button>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Container>
    </Modal>
  )
}

export default SignUpModal;