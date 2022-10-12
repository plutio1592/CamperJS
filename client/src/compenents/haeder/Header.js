import styled from "styled-components";
import { MdList,MdAccountCircle } from "react-icons/md";
const CLIENT_ID = process.env.REACT_APP_KAKAO_REST_API_KEY
const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI
const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
const GOOGLE_URL = process.env.REACT_APP_GOOGLE_CLIENT_CALLBACK_URL

export const HeaderItemContainer = styled.div`

    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    padding: 0 5% 0 5%;
    background-color: white;
    @media screen and (max-width: 1200px) {

    }
    @media screen and (max-width: 992px) {

    }
    @media screen and (max-width: 768px) {

    }
    @media screen and (max-width: 576px) {

    }
    @media screen and (max-width: 0px) {

    }

`;

export const Logo = styled.button`
    border : 0px solid black;
    background: white;
    width: 15%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    cursor: pointer;

    @media screen and (max-width: 1200px) {

    }
    @media screen and (max-width: 992px) {

    }
    @media screen and (max-width: 768px) {
        display: none;
    }
    @media screen and (max-width: 576px) {
        display: none;
    }
    @media screen and (max-width: 0px) {
        display: none;
    }
`;

export const SearchContainer = styled.div`
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1200px) {

    }
    @media screen and (max-width: 992px) {

    }
    @media screen and (max-width: 768px) {
        width: 100%;
    }
    @media screen and (max-width: 576px) {
        width: 100%;
    }
    @media screen and (max-width: 0px) {
        width: 100%;
    }
`;

export const UserContainer = styled.div`
    width: 15%;
    display: flex;
    justify-content: end;
    align-items: center;
    @media screen and (max-width: 1200px) {

    }
    @media screen and (max-width: 992px) {

    }
    @media screen and (max-width: 768px) {
        display: none;
    }
    @media screen and (max-width: 576px) {
        display: none;
    }
    @media screen and (max-width: 0px) {
        display: none;
    }
`;

export const LogoImg = styled.img`
  display: block;
  width: 4.5rem;
  display: none;
    @media screen and (max-width: 1200px) {
        display: none;
    }
    @media screen and (max-width: 992px) {
        display: block;
    }
    @media screen and (max-width: 768px) {

    }
    @media screen and (max-width: 576px) {

    }
    @media screen and (max-width: 0px) {

    }
`;

export const LogoImg2 = styled.img`
  display: block;
  width: 4.5rem;
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const LogoTitle = styled.img`
  display: block;
  width: 4.5rem;
  margin-left: 0.5rem;
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const SearchBar = styled.button`
    width: 450px;
    display: flex;
    background: white;
    justify-content: space-around;
    align-items: center;
    border:0px solid gray;
    padding: 10px;
    border-radius: 15px;
    box-shadow: 0.5px 0.5px 0.5px 0.5px gray;
    cursor: pointer;
    &:hover{
        box-shadow: 2px 2px gray;
        transition: 0.2s;
    }
`;

export const UserLogin = styled.button`
  display: flex;
  width: 6rem;
  background: white;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  border: 0px solid;
  padding:1px;
  border-radius: 15px;
  box-shadow: 0.5px 0.5px 0.5px 0.5px gray;
  &:hover{
    box-shadow: 2px 2px gray;
    transition: 0.2s;
}
`;

function Header(resetCondition) {
    const mainpage = ()=>{
        // 새창으로 띄우기
        // window.open("http://localhost:3000/")
        // 기존창 홈페이지로 보내기
        window.location.assign(process.env.REACT_APP_CAMPER_HOME)
        resetCondition()
    }
    
    return (
        
        <HeaderItemContainer>
<a id="kakao" href={KAKAO_URL} class="btn">카카오톡 로그인</a>
<a id="google" href={GOOGLE_URL} class="btnn">구글 로그인</a>
            <Logo onClick={mainpage}>
                    <LogoImg src='../별보러가자.ico' alt='logo' />
                    <LogoImg2 src='../별보러가자2.ico' alt='logo' />
                    <LogoTitle src="../logotitle.ico" alt="LogoTitle" />
            </Logo>
            <SearchContainer>
                <SearchBar>
                    <div>어디든지</div>
                    <div>주말에</div>
                    <div>게스트추가</div>
                    <img src="../searchBtn.svg" alt="search" />
                </SearchBar>
            </SearchContainer>
            <UserContainer>
                <UserLogin>
                    <MdList size="30"color="gray"/>
                    <MdAccountCircle size="40"color="gray"/>
                </UserLogin>
            </UserContainer>
        </HeaderItemContainer>
    )
};

export default Header;