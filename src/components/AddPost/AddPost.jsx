import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Auth } from 'aws-amplify';

import { 
  Wrapper, 
  PostForm, 
  Label,
  CustomInput, 
  CustomTextArea,
  SubmitButton,
} from "./AddPost.styles";


function AddPost() {

  const initialValues = {
    title: '',
    content: '',
  };

  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  const submitForm = async () => {
    try {
      const userInfo = await Auth.currentUserInfo();
      const formValuesWithEmail = {
        ...formValues,
        email: userInfo.attributes.email,
      };
      const id = Math.floor(Math.random() * 1000);
      const url = `https://ccm0e7duj5.execute-api.ap-northeast-2.amazonaws.com/dev/create-post/${id}`;
      const data = await axios.post(url, formValuesWithEmail);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  
  return (
    <Wrapper>
      <PostForm>
        <Label htmlFor="title">
          제목
        </Label>
        <CustomInput
          type="text"
          name="title"
          defaultValue={formValues.title}
          onChange={handleChange}
        />
        <Label htmlFor="content">
          내용
        </Label>
        <CustomTextArea
          name="content"
          defaultValue={formValues.content}
          onChange={handleChange}
        />
        <SubmitButton type="submit" onClick={() => submitForm()}>
          등록하기
        </SubmitButton>
      </PostForm>
    </Wrapper>
  );
};

export default AddPost;