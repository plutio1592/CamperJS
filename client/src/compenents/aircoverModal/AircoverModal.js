import React from "react";
import { useState, useRef } from "react";
import styled from "styled-components";
// import { AirCoverContainer } from "../detailmain/DetailMain";

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

const AircoverModal = ({ aircoverModalHandler }) => {
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
            <h1>에어커버</h1>
            <h2>에어커버는 모든 예약에 적용되는 포괄적인 보호 장치입니다.</h2>
            <AirCoverContainer>
              <h3>예약 지원 보장</h3>
              <h4>
                드물지만 체크인까지 30일 이내로 남은 시점에 호스트가 예약을
                취소하는 경우, 에어비앤비에서 기존 숙소와 비슷한 숙소 또는 더
                나은 숙소를 찾아드리거나 요금을 환불해 드립니다.
              </h4>
              <h3>체크인 지원 보장</h3>
              <h4>
                숙소에 체크인할 수 없으며 호스트가 문제를 해결할 수 없는 경우,
                예약한 기간 동안 머물 수 있도록 기존 숙소와 비슷한 숙소 또는 더
                나은 숙소를 찾아드리거나 요금을 환불해 드립니다.
              </h4>
              <h3>숙소 정확도 보장</h3>
              <h4>
                냉장고가 고장 났는데 호스트가 쉽게 고칠 수 없는 경우, 침실 수가
                숙소 페이지에 표시된 것보다 적은 경우 등 숙박 중 언제라도 실제
                숙소가 숙소 페이지 설명과 다른 것을 알게 될 경우, 문제 발견
                시점으로부터 3일 이내에 신고해주세요. 에어비앤비에서 비슷한 숙소
                또는 더 나은 숙소를 찾아드리거나 요금을 환불해드립니다.
              </h4>
              <h3>24시간 안전 지원 라인</h3>
              <h4>
                안전하지 않다고 느낄 경우, 24시간 언제든 특별 교육을 받은 안전
                전문 상담원의 신속한 지원을 받으실 수 있습니다.
              </h4>
            </AirCoverContainer>
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

export default AircoverModal;
