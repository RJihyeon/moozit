import React from 'react';

import Title from "../components/Title/Title";
import PostList from "../components/PostList/PostList";
import Margin from "../components/Margin/Margin";
import Menu from "../components/Menu/Menu";

function PostListPage() {
  return (
    <>
      <Title text="게시" />
      <PostList />
      <Margin />
      <Menu page="post" />
    </>
  )
};

export default PostListPage;