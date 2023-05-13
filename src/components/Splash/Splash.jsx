import axios from "axios";
import React, { useEffect, useState, } from "react";
import { Auth } from "aws-amplify";

import { saveAccessToken } from "../../utils/token";

import { Wrapper, SplashImage, StartButton, } from "./Splash.styles";

function Splash() {
  const [accessToken, setAccessToken] = useState('');
  const [email, setEmail] = useState('');

  async function getAccessToken() {
    try {
      const session = await Auth.currentSession();
      setAccessToken(session.getAccessToken().getJwtToken());
      const user = await Auth.currentAuthenticatedUser();
      setEmail(user.attributes.email);
      console.log(accessToken, email);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAccessToken();
    saveAccessToken(accessToken);
  }, []);

  const addToken = async () => {
    try {
      const id = accessToken;
      const url = `https://ccm0e7duj5.execute-api.ap-northeast-2.amazonaws.com/dev/add-token/${id}`;
      const data = await axios.post(url, {email});
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  

  return (
    <>
      <Wrapper>
        <h2>
          스플래시
        </h2>
        <StartButton
          type="button"
          onClick={() => addToken()}
        >
          시작하기
        </StartButton>
      </Wrapper>
    </>
  )
};

export default Splash;