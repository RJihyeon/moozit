import React from 'react';

import { CardWrapper, CardTitle, CardContent } from "./PostCard.styles";

function PostCard({ email, title, content }) {


  return (
    <>
      <CardWrapper>
        <CardTitle>
          {title}
        </CardTitle>
        <CardContent>
          {content}
        </CardContent>
      </CardWrapper>
    </>
  )
};

export default PostCard;