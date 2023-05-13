import React from "react";
import { HeadContainer, HeadImg, HeadIcon } from "./HeadComponent.styles";
import Logo from './logo.png';
import { SlMagnifier } from "react-icons/sl";
import { AiOutlineMenu } from "react-icons/ai";

function HeadComponent() {
  return (
    <>
      <HeadContainer>
        <HeadImg src={Logo} />
        <HeadIcon>
          <li><SlMagnifier size={30} /></li>
          <li><AiOutlineMenu size={30} /></li>
        </HeadIcon>
      </HeadContainer>
    </>
  );
};

export default HeadComponent;