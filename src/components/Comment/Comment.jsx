import React from "react";
import { AddComment, Alcohol, CardWrapper,Profile,CardPic,Title,PostWrapper } from "./Comment.styles";
import { BsPersonCircle, BsSlack } from "react-icons/bs";
import { SlHeart } from "react-icons/sl";

function Comment(){
  return(
    <>
    <CardWrapper>
    <Profile>
          <li><BsPersonCircle size={40} color='#c4bbb7'/></li>
          <li>mooziT</li>
    </Profile>
    <CardPic>
    </CardPic>
    <Title>
      한남동 위스키 바 다녀왔습니다. 
    </Title>
    <PostWrapper>
      <p>
        게시물 설명
      </p>
    </PostWrapper>
    <Alcohol>
      <li>Blended Whiskey</li>
      <li>abcd</li>
    </Alcohol>
    <AddComment>
      <li><SlHeart size = {30}/></li>
      <li><input placeholder="Add a comment"></input></li>
      <li class="enterbutton"><button>Enter</button></li>
    </AddComment>
    </CardWrapper>
    </>
  );


};

export default Comment ; 