import React from "react";
import { useState, useRef } from "react";
import AircoverModal from "../aircoverModal/AircoverModal";
import styled from "styled-components";
import { GiButterflyFlower, GiMountains, GiRiver } from "react-icons/gi";
import { TbToolsKitchen, TbWifi } from "react-icons/tb";
import { useLocation } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  display: flex;
  flex-direction: column;
  /* border: 5px solid blue; */
  /* box-shadow: 0.1rem 0.1rem 0.2rem  gray; */
  /* transition: transform 0.3s ease-out; */
  /* font-family: "EarlyFontDiary"; */
`;

export const Description = styled.div`
  margin: 5rem 0 0 0;
  padding: 1rem 0 0 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: black;
  background-color: #ffffff;
  /* border: 5px solid green; */
`;

export const TitleContainer = styled.div`
  & > div > b {
    margin: 1rem 0 0 0;
    font-size: x-large;
  }
  & > div {
    margin: 1rem;
    font-size: small;
  }
`;

export const PotoContainer = styled.div`
  margin: 1rem;
  & > img {
    width: 100%;
  }
`;

export const AirCoverContainer = styled.div`
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1rem;

  & > img {
    width: 25%;
    border-radius: 10%;
  }
  & > nav > h1 {
    color: red;
  }
`;

const DetailMain = ({ aircoverModalHandler }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useLocation();
  const {campingName, intro} = state
  console.log("🚀 ~ file: DetailMain.js ~ line 68 ~ DetailMain ~ state", state)
  // const openModalHandler = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <Wrapper>
      <Description>
        <TitleContainer>
          <div className="title">
            <b>{campingName}</b>
          </div>
          <div className="rating">
            ⭐ 4.97 · 후기 470개 · 슈퍼호스트 · Gimsatgat-myeon, Yeongweol,
            강원도, 한국
          </div>
        </TitleContainer>
        <PotoContainer>
          <img className="image1" alt="image1" src="img/image1.webp" />
          {/* <img className="image2" alt="image2" src="img/image2.webp" />
          <img className="image3" alt="image3" src="img/image3.webp" />
          <img className="image4" alt="image4" src="img/image4.webp" /> */}
        </PotoContainer>
        <AirCoverContainer>
          <div>
            흔치 않은 기회입니다.Jeong Im님의 에어비앤비 숙소는 보통 예약이 가득
            차 있습니다.
          </div>
        </AirCoverContainer>
        <AirCoverContainer>
          <nav className="navigation-bar">
            <h1 className="aircover-logo">에어커버</h1>
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
          <AircoverModal aircoverModalHandler={aircoverModalHandler} />
        </AirCoverContainer>
        <AirCoverContainer>
          <div>
          {intro}
          </div>
          <button>더보기 > </button>
        </AirCoverContainer>
        <AirCoverContainer>
          <h2>숙박장소</h2>
          <img className="image1" alt="image1" src="img/image1.webp" />
          <div>
            침실 <br></br> 퀸사이즈 침대 1개, 소파 1개
          </div>
        </AirCoverContainer>
        <AirCoverContainer>
          <h2>숙소 편의시설</h2>
          <div>
            <GiButterflyFlower size={30} />
            정원 전망
          </div>
          <div>
            <GiMountains size={30} />산 전망
          </div>
          <div>
            <GiRiver size={30} />
            호수나 강과 인접
          </div>
          <div>
            <TbToolsKitchen size={30} />
            주방
          </div>
          <div>
            <TbWifi size={30} />
            무선 인터넷
          </div>
          <button>편의시설 46개 모두 보기</button>
        </AirCoverContainer>
      </Description>
      {/* <img src="https://gocamping.or.kr/upload/camp/4/thumb/thumb_720_4548WQ5JCsRSkbHrBAaZylrQ.jpg"></img> */}
    </Wrapper>
  );
};

export default DetailMain;
