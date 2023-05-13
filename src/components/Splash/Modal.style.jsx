import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  max-width: 600px;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transform: translateX(-50%);
`;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  position: absolute;
  max-width: 600px;
  width: 80%;
  padding: 1rem;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
`;

const Question = styled.h1`
  font-size: 1.4rem;
  font-weight: 800;
`;

const AnswerInput = styled.input`
  border-radius: 1rem;

`;

const SubmitButton = styled.button`
  border-radius: 1rem;
`;

export {
  Wrapper,
  Container,
  Question,
  AnswerInput,
  SubmitButton,
}