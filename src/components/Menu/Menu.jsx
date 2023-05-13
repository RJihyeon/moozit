import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SlHeart,SlHome } from "react-icons/sl";
import { RxPerson } from "react-icons/rx";
import { MenuWrapper, MenuList } from './Menu.styles';

const Menu = ({ page }) => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <MenuWrapper>
      <MenuList>
        <li onClick={() => handleClick('/like')} onKeyUp={() => handleClick('/like')}>
          <SlHeart size={22} color={page === 'like' ? '#006FFD' : '#FFFFFF' } />
          
        </li>
        <li onClick={() => handleClick('/postlist')} onKeyUp={() => handleClick('/postlist')}>
          <SlHome size={22} color={page === 'post' ? '#006FFD' : '#FFFFFF'} />
          
        </li>
        <li onClick={() => handleClick('/user')} onKeyUp={() => handleClick('/user')}>
          <RxPerson size={22} color={page === 'user' ? '#006FFD' : '#FFFFFF'} />
          
        </li>
      </MenuList>
    </MenuWrapper>
  );
};

export default Menu;