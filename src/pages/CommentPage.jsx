import React from 'react';

import HeadComponent from '../components/HeadComponent/HeadComponent';
import Menu from "../components/Menu/Menu";
import Comment from '../components/Comment/Comment';
import Margin from "../components/Margin/Margin";

function CommentPage (){

  return(
    <>
      <HeadComponent/>
      <Comment/>
      <Margin />
      <Menu/>
    </>
  );
};

export default CommentPage ; 
