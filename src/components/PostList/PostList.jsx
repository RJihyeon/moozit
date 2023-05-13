import React from 'react';

import { Wrapper, Board, } from "./PostList.styles";

import PostCard from "./PostCard";


function PostList() {

  return (
    <>
      <Wrapper>
        <Board>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </Board>
      </Wrapper>
    </>
  )
};

export default PostList;