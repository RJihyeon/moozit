import React from 'react';

import User from "../components/User/User";
import Menu from "../components/Menu/Menu";
import Margin from "../components/Margin/Margin";

function UserPage() {
  return (
    <>
      <User/>
      <Margin />
      <Menu page="user" />
    </>
  );
};

export default UserPage;