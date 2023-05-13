import React from 'react';
import Splash from "../components/Splash/Splash";

function SplashPage({ signOut }) {

  return (
    <>
      <Splash />
      <button onClick={signOut}>
        로그아웃
      </button>
    </>
  )
};

export default SplashPage;