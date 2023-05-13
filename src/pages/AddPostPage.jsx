import React from 'react';
import AddPost from "../components/AddPost/AddPost";
import Menu from "../components/Menu/Menu";

function AddPostPage() {
  return (
    <>
      <AddPost />
      <Menu page="post"/>
    </>
  )
};

export default AddPostPage;