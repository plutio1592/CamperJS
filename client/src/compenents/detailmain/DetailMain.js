import React from "react";
import styled from "styled-components";

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
export const PotoContainer = styled.div`
  & > img {
    width: 20%;
  }
`;

export const AirCoverContainer = styled.div`
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1rem;

  & > img {
    width: 35%;
  }
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
        <PotoContainer>
          <img className="image1" alt="image1" src="img/image1.webp" />
          <img className="image2" alt="image2" src="img/image2.webp" />
          <img className="image3" alt="image3" src="img/image3.webp" />
          <img className="image4" alt="image4" src="img/image4.webp" />
        </PotoContainer>
        <AirCoverContainer>
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
        </AirCoverContainer>
        <AirCoverContainer>
          <div>
            영월의 스테이하우스는 커플이 프라이빗하게 쉬기 좋은 객실입니다. 복층
            구조로 되어있어 2층에 올라가면, 아늑하고 따뜻한 느낌의 객실에서
            편안하게 즐기실 수 있습니다. 창밖으로 들리는 계곡물소리와 지저귀는
            새소리 그리고 맑은 공기는 도시에서 지친 마음에 휴식을 주며 매일
            청결하게 관리하는 침구는 편안한 잠자리를 제공합니다.
          </div>
          <button>더보기 > </button>
        </AirCoverContainer>
        <AirCoverContainer>
          <div>숙박장소</div>
          <img className="image1" alt="image1" src="img/image1.webp" />
          <div>침실 퀸사이즈 침대 1개, 소파 1개</div>
        </AirCoverContainer>
        <AirCoverContainer>
          <div>숙소 편의시설</div>
          <div>🏡 정원 전망</div>
          <div>⛰️ 산 전망</div>
          <div>🚰 호수나 강과 인접</div>
          <div>🍳 주방</div>
          <div>💻 무선 인터넷</div>
          <button>편의시설 46개 모두 보기</button>
        </AirCoverContainer>
      </Description>
      {/* <img src="https://gocamping.or.kr/upload/camp/4/thumb/thumb_720_4548WQ5JCsRSkbHrBAaZylrQ.jpg"></img> */}
    </Wrapper>
  );
}

export default DetailMain;
