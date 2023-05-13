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
        <li onClick={() => handleClick('/select')} onKeyUp={() => handleClick('/select')}>
          <SlHeart size={22} color={page === 'select' ? '#006FFD' : '#FFFFFF' } />
          
        </li>
        <li onClick={() => handleClick('/partyList')} onKeyUp={() => handleClick('/select')}>
          <SlHome size={22} color={page === 'partyList' ? '#006FFD' : '#FFFFFF'} />
          
        </li>
        <li onClick={() => handleClick('/mypage')} onKeyUp={() => handleClick('/select')}>
          <RxPerson size={22} color={page === 'mypage' ? '#006FFD' : '#FFFFFF'} />
          
        </li>
      </MenuList>
    </MenuWrapper>
  );
};

export default Menu;