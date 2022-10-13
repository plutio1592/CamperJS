import React from "react";
import { useState } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  & > button {
    outline: none;
    border: none;
    background-color: #d35555;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: 5px;
    margin-bottom: 15px;

    /* 크기 */
    height: 2rem;
    width: 8rem;
    font-size: 1rem;
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalView = styled.div`
  border-radius: 10px;
  background-color: white;
  box-sizing: border-box;
  padding: 1rem;
  width: 75rem;
  height: 75vh;
  & > h1 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  & > h2 {
    font-size: medium;
  }
`;

export const AirCoverContainer = styled.div`
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0 3% 0 3%;

  & > h3 {
    font-size: medium;
  }
  & > h4 {
    font-weight: normal;
    margin-bottom: 0;
  }
`;

const CancelControl = styled.div`
  display: relative;
  text-align: center;
  button {
    /* 공통 스타일 */
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;

    /* 크기 */
    height: 2rem;
    width: 6.5rem;
    font-size: 1rem;

    background-color: #d35555;
  }
`;

const MoreInfoModal = ({ moreInfoModalHandler, intro }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ModalContainer>
      <button onClick={openModalHandler}>더 알아보기</button>
      {isOpen ? (
        <ModalBackdrop onClick={openModalHandler}>
          <ModalView
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h1>숙소 설명</h1>
            {intro}
            <CancelControl>
              <button className="close-btn" onClick={openModalHandler}>
                취소하기
              </button>
            </CancelControl>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </ModalContainer>
  );
};

export default MoreInfoModal;
