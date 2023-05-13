import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegEnvelope, FaUserAlt, FaSearch, FaPen } from 'react-icons/fa';
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
          <FaPen size={22} color={page === 'select' ? '#006FFD' : '#71727A'} />
          파티 모집
        </li>
        <li onClick={() => handleClick('/partyList')} onKeyUp={() => handleClick('/select')}>
          <FaSearch size={22} color={page === 'partyList' ? '#006FFD' : '#71727A'} />
          파티 찾기
        </li>
        <li onClick={() => handleClick('/mypage')} onKeyUp={() => handleClick('/select')}>
          <FaUserAlt size={22} color={page === 'mypage' ? '#006FFD' : '#71727A'} />
          마이 페이지
        </li>
      </MenuList>
    </MenuWrapper>
  );
};

export default Menu;