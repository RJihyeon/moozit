import React, { useEffect, useState, } from 'react';
import { Auth } from 'aws-amplify';

import { Wrapper, SplashImage } from "./Splash.styles";

function Splash() {

  async function getAccessToken() {
    try {
      const session = await Auth.currentSession();
      const accessToken = session.getAccessToken().getJwtToken();
      console.log(accessToken);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAccessToken();
  }, []);

  return (
    <>
      <Wrapper>
        <h2>
          스플래시
        </h2>
      </Wrapper>
    </>
  )
};

export default Splash;