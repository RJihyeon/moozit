import React from 'react';

import { 
  CardWrapper, 
  CardTitle,
  Profile,
  CardPic,
  TextContainer,
} from "./PostCard.styles";
import { BsPersonCircle, BsSlack } from "react-icons/bs";

function PostCard({ email, title, content }) {


  return (
    <>
      <CardWrapper>
        <Profile>
          <li><BsPersonCircle size={30} color='#c4bbb7'/></li>
          <li>mooziT</li>
        </Profile>
        <CardPic>
          임시 사진
        </CardPic>
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