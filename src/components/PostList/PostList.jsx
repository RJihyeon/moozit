import axios from "axios";
import React, { useEffect, useState } from "react";

import PostCard from "./PostCard";
import { getAccessToken } from "../../utils/token";

import { Wrapper, Board, } from "./PostList.styles";

function PostList() {
  const accessToken = getAccessToken([]);
  const [allPost, setAllPost] = useState([]);

  useEffect(() => {
    getAllPost();
  }, []);

  const getAllPost = async () => {
    try {
      const config = {
        headers: {
          'X-Amz-Security-Token': accessToken
        }
      };
      const data = await axios.get("https://ccm0e7duj5.execute-api.ap-northeast-2.amazonaws.com/dev/get-post-all", config);
      setAllPost(data.data.posts);
      console.log(data.data.posts);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Wrapper>
        <Board>
          {allPost ? allPost.map((post) => (
            <PostCard
              key={post.ID}
              email={post.email}
              title={post.title}
              content={post.content}
            />
          )) : <></>}
        </Board>
      </Wrapper>
    </>
  )
};

export default PostList;