import React from 'react';

import Title from "../components/Title/Title";
import PostList from "../components/PostList/PostList";

function PostListPage() {
  return (
    <>
      <Title text="게시글" />
      <PostList />
    </>
  )
};

export default PostListPage;