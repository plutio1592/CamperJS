import styled from "styled-components";
import { useNavigate } from "react-router-dom";


export const Wrapper = styled.div`
width: 20em;
height: 23em;
padding: 0.2em;
margin: 0.5rem;
border: none;
display: flex;
flex-direction: column;
/* box-shadow: 0.1rem 0.1rem 0.2rem  gray; */
transition: transform 0.3s ease-out;
/* font-family: "EarlyFontDiary"; */
&:hover {
  .title>b {
    color: black;
  }
  transform: scale(1.01);
  & > div:nth-child(2) {
    color: black;
  }
}
& > img {
  object-fit: fill;
  width: 100%;
  height: 70%;
  border-radius: 3.5px 3.5px 0 0;
  box-shadow: 1px 0  2px gray; 
}
`;

export const Description = styled.div`
text-align: start;
height: 7rem;
display: flex;
flex-direction: column;
align-items: flex-start;
color: black;
background-color: #ffffff;
& > div {
  width: 80%;
  text-align: start;
  padding-left:0.5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  
  & > b{
    color: #00000;
    font-size :large;
  }
}
`;
function Camping({camping,campingImg}) {


  let navigate = useNavigate();
  
  const onClickMoveDVP = (contentId) => {
    navigate(`/Detailpage2/${contentId}`, { state: camping });
  };

      return(
        <Wrapper key={camping.contentId} onClick={()=>{onClickMoveDVP(camping.contentId)}}>
               <img src={campingImg.split(',')[0]} loading="lazy" alt={camping.campingName}/>             
              <Description>
              <div className="title">
              <b>{camping.campingName}</b>
              </div>
              <div>
              <div >{camping.doNm}</div>
              <div >{camping.addr1}</div>
              </div>
              </Description>
        </Wrapper>
        )
  };
  
  export default Camping;