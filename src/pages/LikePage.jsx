import React from 'react';

import Menu from "../components/Menu/Menu";
import Margin from "../components/Margin/Margin";
import HeadComponent from '../components/HeadComponent/HeadComponent';
import PostList from "../components/PostList/PostList";

function LikePage() {
  return (
    <>
      <HeadComponent/>
      <PostList/>
      <Margin />
      <Menu page="like" />
    </>
  );
};

export default LikePage;