import React from "react";
import { useNavigate } from "react-router-dom";
import { HeadContainer, HeadImg, HeadIcon, Button, } from "./HeadComponent.styles";
import Logo from './logo.png';
import { GoPlus } from "react-icons/go";

function HeadComponent() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/addpost');
  };

  return (
    <>
      <HeadContainer>
        <HeadImg src={Logo} />
        <HeadIcon>
          <li>
            <Button
              type="button"
              onClick={() => handleClick()}
            >
              <GoPlus size={30}
                color="#323232"
              />
            </Button>
          </li>
        </HeadIcon>
      </HeadContainer>
    </>
  );
};

export default HeadComponent;