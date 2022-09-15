import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 23em;
  padding: 0.2em;
  margin: 0.5rem;
  border: none;
  display: flex;
  flex-direction: column;
  /* box-shadow: 0.1rem 0.1rem 0.2rem  gray; */
  /* transition: transform 0.3s ease-out; */
  /* font-family: "EarlyFontDiary"; */
`;

export const Description = styled.div`
  /* text-align: start;
  height: 7rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  color: black;
  background-color: #ffffff;

  & > div {
    width: 80%;
    text-align: start;
    padding-left: 0.5rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    & > b {
      color: #00000;
      font-size: large;
    }
  } */
`;

function DetailMain() {
  return (
    <Wrapper>
      <Description>
        <div className="title">
          <b>별이 보이는 감성충만 프라이빗 복층 Cosmos Room</b>
        </div>
        <div>
          ⭐ 4.97 · 후기 470개 · 슈퍼호스트 · Gimsatgat-myeon, Yeongweol,
          강원도, 한국
        </div>
        <div>
          흔치 않은 기회입니다.Jeong Im님의 에어비앤비 숙소는 보통 예약이 가득
          차 있습니다.
        </div>
        <nav className="navigation-bar">
          <h1 className="webucks-logo">에어커버</h1>
          <div>
            모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지 않은
            경우 또는 체크인에 문제가 있는 상황에 대비한 무료 보호 프로그램이
            포함됩니다.
          </div>
          <ul className="menu-bar">
            <li className="menu-list">예약 지원 보장</li>
            <li className="menu-list">체크인 지원 보장</li>
            <li className="menu-list">숙소 정확도 보장</li>
            <li className="menu-list">24시간 안전 지원 라인</li>
          </ul>
        </nav>
      </Description>
      {/* <img src="https://gocamping.or.kr/upload/camp/4/thumb/thumb_720_4548WQ5JCsRSkbHrBAaZylrQ.jpg"></img> */}
    </Wrapper>
  );
}

export default DetailMain;
