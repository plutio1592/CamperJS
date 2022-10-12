import React from 'react'
import { Modal, Button, Form, Container } from 'react-bootstrap'

const LoginModal = ({ show, onHide }) => {
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" type="button">
              로그인
          </Button>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Container>
    </Modal>
  )
}

export default LoginModal;