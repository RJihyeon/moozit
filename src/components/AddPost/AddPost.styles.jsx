import { Placeholder } from "@aws-amplify/ui-react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Photo = styled.div ``;

const PostForm = styled.form`
  width: 100%;
  padding: 0 1rem;
  margin-top: 1rem;
  display; flex;
  flex-direction: column;
  align-items: flex-start;
  
`;

const Label = styled.label`
  width: 100%;
  margin-bottom: 0.5em;
  font-weight: 700;
  font-size: 1rem;
`;

const CustomInput = styled.input`
  width: 100%;
  border-radius: 32px;
  font-weight: 700;
  font-size: 1rem;
  height: 3rem;
`;

const CustomTextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 9rem;
  line-height: 1.2rem;
  margin-bottom: 0.5rem;
  padding: 1rem;
  border-radius : 15px;

`;

const SelectType = styled.input `
width: 100%;
font-weight: 700;
font-size: 1rem;
height: 3rem;
border-radius : 15px;
`;


const SubmitButton = styled.button`
  width: 100%;
  height: 3.5rem;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 800;
  color: white;
  background-color: blue;
  border-radius: 12px;

`;



export { 
  Wrapper, 
  PostForm, 
  Label,
  Photo,
  CustomInput,
  CustomTextArea,
  SelectType,
  SubmitButton,
};