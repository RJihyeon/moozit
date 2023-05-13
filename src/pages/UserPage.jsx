import React from 'react';

import User from "../components/User/User";
import Menu from "../components/Menu/Menu";
import Margin from "../components/Margin/Margin";
import Title from "../components/Title/Title" ; 


function UserPage() {
  return (
    <>
      <Title text="My Profile"/>
      <User/>
      <Margin />
      <Menu page="user" />
    </>
  );
};

export default UserPage;