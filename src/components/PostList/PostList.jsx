import axios from "axios";
import React, { useEffect, useState } from "react";

import { Wrapper, Board, } from "./PostList.styles";
import PostCard from "./PostCard";


function PostList() {
  const [allPost, setAllPost] = useState();

  useEffect(() => {
    getAllPost();
  }, []);

  const getAllPost = async () => {
    try {
      const config = {
        headers: {
          'X-Amz-Security-Token': '0001'
        }
      };
      const data = await axios.get("https://ccm0e7duj5.execute-api.ap-northeast-2.amazonaws.com/dev/get-post-all", config);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

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