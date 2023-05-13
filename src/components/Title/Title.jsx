import React from "react";
import { TitleContainer, TitleText } from "./Title.styles";

function Title({text}) {
  return (
    <>
    <TitleContainer>
      <TitleText>
        {text} 
      </TitleText>
    </TitleContainer>
    </>
  );
};

export default Title;