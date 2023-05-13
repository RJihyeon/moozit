import React from "react";
import { HeadContainer, HeadImg, HeadIcon } from "./HeadComponent.styles";
import Logo from './logo.png';
import { GoPlus } from "react-icons/go";

function HeadComponent() {
  return (
    <>
      <HeadContainer>
        <HeadImg src={Logo} />
        <HeadIcon>
          <li><GoPlus size={30} /></li>
        </HeadIcon>
      </HeadContainer>
    </>
  );
};

export default HeadComponent;