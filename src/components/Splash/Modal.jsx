import React, { useState } from 'react';
import { 
  Wrapper, 
  Container, 
  Question, 
  AnswerInput, 
  SubmitButton, 
} from "./Modal.style";

function Modal({addToken, nickname, setNickname, navigate}) {

  const handleChange = (event) => {
    setNickname(event.target.value);
  };

  const handleSubmit = async () => {
    await addToken();
    navigate("/postlist");
  } 

  return (
    <>
      <Wrapper>
        <Container>
          <Question>
            닉네임을 적어주세용!
          </Question>
          <AnswerInput
            type="text"
            value={nickname}
            onChange={handleChange}
          />
          <SubmitButton
            type="button"
            onClick={() => handleSubmit()}
          >
            정말 시작하기
          </SubmitButton>
        </Container>
      </Wrapper>
    </>
  )
};

export default Modal;