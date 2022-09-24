import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 20%;
  margin-top: 4rem;
  border: 1px solid black;
`;

const bill = () => {
  return (
    <Wrapper>
      <div className="cost"> ₩116,500박</div>
      <div className="star"> ⭐ 4.97 · 후기 470개</div>
      <button>예약하기</button>
      <div className="content">예약 확정 전에는 요금이 청구되지 않습니다</div>
      <div className="total">총 합계 ₩807,551</div>
    </Wrapper>
  );
};

export default bill;
