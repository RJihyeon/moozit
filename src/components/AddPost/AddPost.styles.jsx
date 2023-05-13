import { Placeholder } from "@aws-amplify/ui-react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fefafa;
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
  width: 100%;
  margin-bottom: 0.5em;
  font-weight: 700;
  font-size: 1rem;
  color : #999999;
`;

const CustomInput = styled.input`
  width: 100%;
  border-radius: 32px;
  font-weight: 700;
  font-size: 1rem;
  height: 3rem;
  background-color : #e7dddd;
  margin-bottom: 0.5rem;
  border : none;
`;

const CustomTextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 9rem;
  line-height: 1.2rem;
  margin-bottom: 0.5rem;
  padding: 1rem;
  border-radius : 15px;
  background-color : #e7dddd;
  border : none;

`;

const SelectType = styled.input `
width: 100%;
font-weight: 700;
font-size: 1rem;
height: 3rem;
border-radius : 15px;
background-color : #e7dddd;
border : none;
`;


const SubmitButton = styled.button`
width : 100%;
border-radius: 12px;
background-color: #591823;
color : white;
height : 58px;
margin-top : 30px;
font-weight : 800;
font-size : 1.4rem;

`;



export { 
  Wrapper, 
  PostForm, 
  Label,
  CustomInput,
  CustomTextArea,
  SelectType,
  SubmitButton,
};