import React, { useState, useEffect } from 'react';
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
        <SubmitButton type="submit">
          등록하기
        </SubmitButton>
      </PostForm>
    </Wrapper>
  );
};

export default AddPost;