import React from 'react';

import User from "../components/User/User";
import Menu from "../components/Menu/Menu";

function UserPage() {
  return (
    <>
      <User/>
      <Menu page="user" />
    </>
  );
};

export default UserPage;