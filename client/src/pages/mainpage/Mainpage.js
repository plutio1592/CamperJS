import styled from "styled-components";
import Footer from "../../compenents/footer/Footer";
import Header from "../../compenents/haeder/Header";
import Tags from "../../compenents/tags/Tags";
import Main from "../../compenents/main/Main";


export const MainPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
// display flex 적용
// 방향 설정 아래로
// 브라우저 100%설정

export const HeaderContainer = styled.div`
  width: 100%;
  height: 5rem;
  border-bottom: 0.063rem solid #e0dde1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
`;
//border-bottom: 0.063rem solid #e0dde1; 박스 그림자 효과
//justify-content: center; 가운데 정렬
//align-items: center; 아이템들 가운데 정렬
//  position: fixed; 고정된(fixed) 위치에 배치
//  z-index: 4; 앞 순서

export const TagContainer = styled.div`
  width: 100%;
  border-bottom: 0.063rem solid #e0dde1;
  height: 5rem;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 5rem;
  left: 0;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 10rem;
  left: 0;
  z-index: 3;
`;

export const FooterContainer = styled.div`
  height: 5rem;
  width: 100%;
  background: #ffffff;
  border-top: 0.063rem solid #e0dde1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 4;
  @media screen and (max-width: 768px) {
    height: 4rem;
  }
`;

export const TopButtonContainer = styled.div`

`
/////////////////////////////////////////////////////////////////////////////////

function Mainpage({isLoading,contentId}) {

  return (
    <MainPage>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <TagContainer>
        <Tags />
      </TagContainer>
      <MainContainer>
        <Main isLoading={isLoading} contentId={contentId} />
      </MainContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </MainPage>
  );
}

export default Mainpage;
