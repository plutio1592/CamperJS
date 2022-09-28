import React from "react";
import styled from "styled-components";
import Footer from "../../compenents/footer/Footer";
import Header from "../../compenents/haeder/Header";
import DetailMain from "../../compenents/detailmain/DetailMain";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  flex-direction: column;
  /* border: 5px solid red; */
`;

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
  /* border: 2px solid blue; */
`;

export const DetailMainContainer = styled.div`
  top: 500rem;
  height: 90%;
  width: 100%;
  /* border: 5px solid black; */
`;

// export const FooterContainer = styled.div`
//   height: 5rem;
//   width: 100%;
//   background: #ffffff;
//   border-top: 0.063rem solid #e0dde1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   z-index: 4;
//   @media screen and (max-width: 768px) {
//     height: 4rem;
//   }
// `;

function Detailpage2() {
  return (
    <Wrapper>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <DetailMainContainer>
        {/* <div>asdadsfsd</div> */}
        <DetailMain />
      </DetailMainContainer>
    </Wrapper>
  );
}

export default Detailpage2;
