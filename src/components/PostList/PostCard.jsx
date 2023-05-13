import React from 'react';

import { CardWrapper, CardTitle,Profile,CardPic } from "./PostCard.styles";
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
          
        </CardPic>
        <CardTitle>
          {title}
        </CardTitle>
        
      </CardWrapper>
    </>
  )
};

export default PostCard;