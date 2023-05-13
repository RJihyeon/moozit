import React from 'react';

import Title from "../components/Title/Title";
import PostList from "../components/PostList/PostList";
import Menu from "../components/Menu/Menu";

function PostListPage() {
  return (
    <>
      <Title text="게시글" />
      <PostList />
      <Menu page="post" />
    </>
  )
};

export default PostListPage;