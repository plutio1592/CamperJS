
import React from "react";
import styled from "styled-components";


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
    color: rgba(0,0,0,0);
    background-image: linear-gradient(270deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.1));
    background-size: 400% 100%;
    animation: skeleton-loading 8s ease-in-out infinite;
}
@keyframes skeleton-loading {
    0% {
        background-position: 200% 0;
    }
    100% {
        background-position: -200% 0;
    }
}
`;
export const Br = styled.div`
width: 10%;
height: 5%;
`
export const Text = styled.div`
width: 10%;
height: 20%;
margin : 0 1rem 0 0;
color: rgba(0,0,0,0);
background-image: linear-gradient(270deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.1));
background-size: 400% 100%;
animation: skeleton-loading 8s ease-in-out infinite;
@keyframes skeleton-loading {
0% {
    background-position: 200% 0;
}
100% {
    background-position: -200% 0;
}
`

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

const Skeleton = () => {
  return (
    <Wrapper>
        <img></img>
        <Description>
            <Br></Br>
            <Text> </Text>  
            <Br></Br>
            <Text> </Text>
            <Br></Br>  
            <Text> </Text>  
            </Description>      
    </Wrapper>
  );
};

export default Skeleton;