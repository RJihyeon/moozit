import React from "react";
import { useParams } from "react-router-dom";
import { AddComment, Alcohol, CardWrapper,Profile,CardPic,Title,PostWrapper } from "./Comment.styles";
import { BsPersonCircle, BsSlack } from "react-icons/bs";
import { SlHeart } from "react-icons/sl";

function Comment(post){

  const { id }  = useParams();

  console.log(post);

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
      <li><input type="text" placeholder="Add a comment"/></li>
      <li class="enterbutton"><button type="button">Enter</button></li>
    </AddComment>
    </CardWrapper>
    </>
  );


};

export default Comment ; 