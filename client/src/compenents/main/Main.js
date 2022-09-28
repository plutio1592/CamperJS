import styled from "styled-components";
import Camping from "../camping/camping";
const Wrapper = styled.div`
  width: 100%;
  height: 60rem;
  padding: 0;
  /* background-color: #f2d29b; */
  
  /* padding: 0.5em; */
  border: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  top: 20rem;
  overflow-y: auto;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;

function findImg(camping,contentIdImg){
  let url =  contentIdImg.find(el => el.contentId===`${camping.contentId}`)
  if (!url) {return "img/image1.webp"}
  else {return url[`group_concat(imageUrl)`]}
}

function Main({contentId,contentIdImg}) {
  
  if (!contentId) {
    return (
      <div>
        <h1>campingdata roding...</h1>
      </div>
    );
  } else {
    return(
      <Wrapper>
        {contentId.map((camping) => (
          <Camping key={camping.contentId} camping = {camping} campingImg ={findImg(camping,contentIdImg)} />
        ))}
      
      </Wrapper>

)
}
};

export default Main;