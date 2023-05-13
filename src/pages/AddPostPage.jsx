import React from 'react';

import Title from "../components/Title/Title";
import AddPost from "../components/AddPost/AddPost";

function AddPostPage() {
  return (
    <>
      <Title text="게시글 등록하기" />
      <AddPost />
    </>
  )
};

export default AddPostPage;