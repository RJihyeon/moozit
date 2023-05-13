import React from 'react';
import AddPost from "../components/AddPost/AddPost";
import Margin from "../components/Margin/Margin";
import Menu from "../components/Menu/Menu";
import Title from "../components/Title/Title";

function AddPostPage() {
  return (
    <>
      <Title text="Create Post"/>
      <AddPost />
      <Margin />
      <Menu page="post"/>
   
    </>
  )
};

export default AddPostPage;