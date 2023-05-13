import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

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
    toast.success(<h1>{nickname}님, 환영합니다! 😀</h1>, {
      position: 'top-center',
      autoClose: 1000,
    });
    setTimeout(() => {
      navigate("/postlist");
    }, 2000);
  } 

  return (
    <>
      <Wrapper>
        <ToastContainer />
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