import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 96%;
  height: 20rem;

  border-radius: 0.5rem;
  overflow-y: auto;
  padding: 0.5rem;
  margin: 0.5rem;
  box-shadow: 0.1rem 0.1rem 0.3rem gray; ;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 6rem;
  border: none;
  resize: none;
  margin-top: 1rem;
  border-radius: 0.3rem;
  padding: 1rem;
  background-color: #efefefcf;
`;

const Controllers = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  /* margin: 1rem; */

  background-color: #1161c9;
  color: white;
  border: none;
  height: 2.5rem;
  border-radius: 0.3rem;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.5rem;

  cursor: pointer;
  outline: inherit;
  transition: transform 0.2s ease-out;
  &:hover {
    transition: transform 0.2s ease-out;
    transform: translateY(-5%);
  }
  &:active {
    color: #6cf7a6;
  }
`;

const ReviewWrite = () => {
  return (
    <Wrapper>
      <h2>리뷰작성하기</h2>
      <Textarea
        // value={content}
        // onChange={handleContent}
        placeholder="후기를 남겨주세요."
      ></Textarea>
      <Controllers>
        {/* <Rating howmany={rating} handleRating={handleRating} />
        <ErrorMessage ref={errorMessage} />
        <Button onClick={handleSubmit}>올리기</Button> */}
        <Button>올리기</Button>
      </Controllers>
    </Wrapper>
  );
};

export default ReviewWrite;
