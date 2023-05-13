import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Auth } from 'aws-amplify';

import AddImage from "./AddImage";
import { getAccessToken } from "../../utils/token";

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
  const accessToken = getAccessToken([]);
  const [image, setImage ] = useState({
    imageFile: "",
    previewURL: "https://i.pinimg.com/736x/93/a6/8b/93a68b57a54e4bdc73d43d1d049b94b3.jpg",
  });

  const initialValues = {
    title: '',
    content: '',
    drink: '',
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
      const config = {
        headers: {
          'X-Amz-Security-Token': accessToken
        }
      };
      const userInfo = await Auth.currentUserInfo();
      const formValuesWithEmail = {
        ...formValues,
        email: userInfo.attributes.email,
      };
      const id = Math.floor(Math.random() * 1000);
      const url = `https://ccm0e7duj5.execute-api.ap-northeast-2.amazonaws.com/dev/create-post/${id}`;
      const data = await axios.post(url, formValuesWithEmail, config);
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
        <AddImage
          setImage={setImage} previewURL={image.previewURL}
        />
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
        <Label htmlFor="drink">
          Alcohol Types
        </Label>
        <SelectType
          type="text"
          name="drink"
          defaultValue={formValues.drink}
          onChange={handleChange}
        />
        <SubmitButton type="submit" onClick={submitForm}>
          Upload Post
        </SubmitButton>
      </PostForm>
    </Wrapper>
  );
};

export default AddPost;