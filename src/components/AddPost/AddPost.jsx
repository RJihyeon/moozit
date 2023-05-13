import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Auth } from 'aws-amplify';

import { 
  Wrapper, 
  PostForm, 
  Label,
  Photo,
  CustomInput, 
  CustomTextArea,
  SelectType,
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
      <PostForm
        onSubmit={handleSubmit}
      >
         <Label htmlFor="title">
          Photo
        </Label>
        <Photo>

        </Photo>

        <Label htmlFor="title">
          Title
        </Label>
        <CustomInput
          type="text"
          name="title"
          defaultValue={formValues.title}
          onChange={handleChange}
        />
        <Label htmlFor="content">
          Description
        </Label>
        <CustomTextArea
          name="content"
          defaultValue={formValues.content}
          onChange={handleChange}
        />
        <Label htmlFor="content">
          Alcohol Types
        </Label>
        <SelectType ></SelectType>

        <SubmitButton type="submit" onClick={submitForm}>
          Upload Post
        </SubmitButton>
      </PostForm>
    </Wrapper>
  );
};

export default AddPost;