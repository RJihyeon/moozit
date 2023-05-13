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

  const handleClick = (ID, email, title, content) => {
    navigate(`../postdetail/${ID}`, { state: { nickname: email, title: title, content: content }})
  }

  return (
    <>
      <Wrapper>
        <Board>
          {allPost ? allPost.map((post) => (
            <Button
              type="button"
              onClick={() => navigate(`../postdetail/${post.ID}`, { state: { nickname: post.nickname, title: post.title, content: post.content, url: post.url, drink: post.drink }})}
            >
              <PostCard
                key={post.ID}
                email={post.email}
                title={post.title}
                content={post.content}
                url={post.url}
                nickname={post.nickname}
              />
            </Button>
          )) : <></>}
        </Board>
      </Wrapper>
    </>
  )
};

export default PostList;