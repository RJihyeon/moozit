import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import PostCard from "./PostCard";
import { getAccessToken } from "../../utils/token";

import { Wrapper, Board, Button, } from "./PostList.styles";

function PostList() {
  const accessToken = getAccessToken([]);
  const [allPost, setAllPost] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(accessToken, '왜');
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

  const handleClick = (ID) => {
    navigate(`postdetail/${ID}`)
  }

  return (
    <>
      <Wrapper>
        <Board>
          {allPost ? allPost.map((post) => (
            <Button
              type="button"
              onClick={() => handleClick(post.ID)}
            >
              <PostCard
                key={post.ID}
                email={post.email}
                title={post.title}
                content={post.content}
              />
            </Button>
          )) : <></>}
        </Board>
      </Wrapper>
    </>
  )
};

export default PostList;