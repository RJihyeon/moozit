import React from 'react';

import { 
  CardWrapper, 
  CardTitle,
  Profile,
  CardPic,
  TextContainer,
  CardPictureContainer,
} from "./PostCard.styles";
import { BsPersonCircle, BsSlack } from "react-icons/bs";

function PostCard({ nickname, title, content, url, post }) {

  return (
    <>
      <CardWrapper>
        <Profile>
          <li><BsPersonCircle size={30} color='#c4bbb7'/></li>
          <li>{nickname}</li>
        </Profile>
        <CardPictureContainer>
          <CardPic src={url} alt="사진"/>
        </CardPictureContainer>
        <TextContainer>
          <TextContainer>
            <CardTitle>
              {title}
            </CardTitle>
          </TextContainer>
        </TextContainer>
      </CardWrapper>
    </>
  )
};

export default PostCard;