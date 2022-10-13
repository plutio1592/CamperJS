import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  MdAccountCircle,
  MdFavoriteBorder,
  MdOutlineSearch,
} from "react-icons/md";

export const FooterItemContainer = styled.div`
  width: 30rem;
  height: 3.625rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Gmarket Sans TTF";
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 992px) {
  }
  @media screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
  @media screen and (max-width: 576px) {
  }
  @media screen and (max-width: 0px) {
  }
`;

export const FooterTitle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 30px;
  line-height: 22px;
  .contact {
    box-sizing: border-box;
    height: 24px;
    line-height: 22px;
    color: #2d2d2d;
    font-size: 1rem;
    cursor: pointer;
    :hover {
      border-bottom: 0.313rem solid #fede8a;
    }
  }
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 992px) {
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 576px) {
  }
  @media screen and (max-width: 0px) {
  }
`;

export const GitHubContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 1.5rem;
  }
  a {
    margin-left: 0.625rem;
    color: #2d2d2d;
    font-size: 1rem;
    cursor: pointer;
    height: 24px;
    text-decoration: none;
    color: #2d2d2d;
    box-sizing: border-box;
    :hover {
      border-bottom: 0.313rem solid #fede8a;
    }
  }
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 992px) {
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 576px) {
  }
  @media screen and (max-width: 0px) {
  }
`;

export const TeamMemberContainer = styled.div`
  border: 2px soild;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 992px) {
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 576px) {
  }
  @media screen and (max-width: 0px) {
  }
`;

export const TeamMember = styled.span`
  a {
    font-weight: 100;
    font-size: 0.875rem;
    cursor: pointer;
    text-decoration: none;
    color: #2d2d2d;
    :hover {
      border-bottom: 0.313rem solid #fede8a;
    }
  }
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 992px) {
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 576px) {
  }
  @media screen and (max-width: 0px) {
  }
`;

export const LookAround = styled.button`
  width: 5rem;
  display: none;
  cursor: pointer;
  background: white;
  border: 0px solid;
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 992px) {
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
  @media screen and (max-width: 576px) {
  }
  @media screen and (max-width: 0px) {
  }
`;

export const PickList = styled.button`
  width: 5rem;
  display: none;
  cursor: pointer;
  background: white;
  border: 0px solid;
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 992px) {
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
  @media screen and (max-width: 576px) {
  }
  @media screen and (max-width: 0px) {
  }
`;

export const Login = styled.button`
  width: 5rem;
  display: none;
  cursor: pointer;
  background: white;
  border: 0px solid;
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 992px) {
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
  @media screen and (max-width: 576px) {
  }
  @media screen and (max-width: 0px) {
  }
`;

/////////////////////////////////////////////////////////////////////////////////

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <FooterItemContainer>
      <FooterTitle>
        <GitHubContainer>
          <Link to="/" style={{ textDecoration: "none", borderBottom: "none" }}>
            <img
              src="./githubLogo.svg"
              alt="GitImg"
              onClick={() => {
                scrollToTop();
              }}
            />
          </Link>
          <a
            href="https://github.com/plutio1592/Camper"
            target="_blank"
            rel="noopener noreferrer"
          >
            Camper
          </a>
          <a
            href="https://github.com/plutio1592/Camper/wiki"
            target="_blank"
            rel="noopener noreferrer"
          >
            정배홍이
          </a>
        </GitHubContainer>
      </FooterTitle>
      <TeamMemberContainer>
        <TeamMember>
          <a
            href="https://github.com/ProjectBYH"
            target="_blank"
            rel="noopener noreferrer"
          >
            배윤호
          </a>
        </TeamMember>
        <TeamMember>
          <a
            href="https://github.com/code920309"
            target="_blank"
            rel="noopener noreferrer"
          >
            이동규
          </a>
        </TeamMember>
        <TeamMember>
          <a
            href="https://github.com/bonnibel200"
            target="_blank"
            rel="noopener noreferrer"
          >
            이창석
          </a>
        </TeamMember>
        <TeamMember>
          <a
            href="https://github.com/sowookim"
            target="_blank"
            rel="noopener noreferrer"
          >
            정다희
          </a>
        </TeamMember>
        <TeamMember>
          <a
            href="https://github.com/plutio1592"
            target="_blank"
            rel="noopener noreferrer"
          >
            정무공
          </a>
        </TeamMember>
        <TeamMember>
          <a
            href="https://github.com/hongsuwon"
            target="_blank"
            rel="noopener noreferrer"
          >
            홍은지
          </a>
        </TeamMember>
      </TeamMemberContainer>
      <LookAround>
        <MdOutlineSearch size="30" color="red" />
        <div>둘러보기</div>
      </LookAround>
      <PickList>
        <MdFavoriteBorder size="30" color="gray" />
        <div>위시리스트</div>
      </PickList>
      <Login>
        <MdAccountCircle size="30" color="gray" />
        <div>로그인</div>
      </Login>
    </FooterItemContainer>
  );
}

export default Footer;
