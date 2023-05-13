import React from 'react';

import HeadComponent from "../components/HeadComponent/HeadComponent";
import PostList from "../components/PostList/PostList";
import Margin from "../components/Margin/Margin";
import Menu from "../components/Menu/Menu";

function PostListPage() {
  return (
    <>
      <HeadComponent />
      <PostList />
      <Margin />
      <Menu page="post" />
    </>
  )
};

export default PostListPage;