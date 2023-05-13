import React from 'react';
import AddPost from "../components/AddPost/AddPost";
import Margin from "../components/Margin/Margin";
import Menu from "../components/Menu/Menu";

function AddPostPage() {
  return (
    <>
      <AddPost />
      <Margin />
      <Menu page="post"/>
    </>
  )
};

export default AddPostPage;