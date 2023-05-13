import axios from "axios";
import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Auth } from 'aws-amplify';
import { BsPersonCircle, BsSlack } from "react-icons/bs";
import { SlHeart } from "react-icons/sl";

import { getAccessToken } from "../../utils/token";

import { 
  AddComment, 
  Alcohol, 
  CardWrapper,
  Profile,
  CardPic,
  Title,
  PostWrapper,
  Picture,
  CommentContainer,
  CommentName,
  CommentText,
} from "./Comment.styles";

function Comment(state){
  const accessToken = getAccessToken([]);
  const [ comment, setComment ] = useState("");
  const { id }  = useParams();
  const location = useLocation();
  const { nickname, title, content, drink, url } = location.state;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setComment(value);
  };

  const submitComment = async () => {
    try {
      const config = {
        headers: {
          'X-Amz-Security-Token': accessToken
        }
      };
      const userInfo = await Auth.currentUserInfo();
      const formValuesWithEmail = {
        comment: comment,
        email: userInfo.attributes.email,
        nickname: userInfo.attributes.nickname,
      };
      const id = Math.floor(Math.random() * 1000);
      const data = await axios.post(`https://ccm0e7duj5.execute-api.ap-northeast-2.amazonaws.com/dev/create-comment/${id}`, formValuesWithEmail, config);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleComment = () => {
    submitComment();
  };

  return(
    <>
    <CardWrapper>
    <Profile>
          <li><BsPersonCircle size={40} color='#c4bbb7'/></li>
          <li>{nickname}</li>
    </Profile>
    <CardPic>
      <Picture src={url} alt="사진" />
    </CardPic>
    <Title>
      {title}
    </Title>
    <PostWrapper>
      <p>
        {content}
      </p>
    </PostWrapper>
    <Alcohol>
      <li>{drink}</li>
    </Alcohol>
    <AddComment>
      <li><SlHeart size = {30}/></li>
      <li><input type="text" name="댓글" defaultValue={comment} placeholder="Add a comment" onChange={handleChange} /></li>
      <li class="enterbutton"><button type="button" onClick={() => handleComment()}>Enter</button></li>
    </AddComment>
    <CommentContainer>
      <CommentName>
        닉네임
      </CommentName>
      <CommentText>
        댓글
      </CommentText>
    </CommentContainer>
    </CardWrapper>
    </>
  );


};

export default Comment ; 