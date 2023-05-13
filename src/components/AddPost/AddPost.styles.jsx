import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PostForm = styled.form`
  width: 100%;
  padding: 0 1rem;
  margin-top: 1rem;
  display; flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.label`
  margin-bottom: 0.5em;
  font-weight: 700;
  font-size: 1rem;
`;

const CustomInput = styled.input`
  border-radius: 40px;
`;

export { Wrapper, PostForm, Label, CustomInput };