import axios from "axios";
import React, { useEffect, useState, } from "react";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";

import { saveAccessToken } from "../../utils/token";

import Margin from "../Margin/Margin";
import Modal from "./Modal";

import { Wrapper, SplashImage, StartButton, WrapperImg, BrandLogo} from "./Splash.styles";
import companyLogo from './logo.png';
import brandLogo from './brandlogo.png';


function Splash() {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState('');
  const [email, setEmail] = useState('');
  const [ nickname, setNickname ] = useState('');
  const [isOpened, setIsOpened] = useState(false);

  async function getAccessToken() {
    try {
      const session = await Auth.currentSession();
      setAccessToken(session.getAccessToken().getJwtToken());
      const user = await Auth.currentAuthenticatedUser();
      setEmail(user.attributes.email);
      saveAccessToken(accessToken);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAccessToken();
    console.log('왜', accessToken, email, );
  }, [accessToken, email]);

  const addToken = async () => {
    try {
      const id = accessToken;
      const url = `https://ccm0e7duj5.execute-api.ap-northeast-2.amazonaws.com/dev/add-token/${id}`;
      const data = await axios.post(url, {email, nickname});
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick = async () => {
    setIsOpened(true);
  }

  return (
    <>
      <Wrapper>
        <WrapperImg>
          <SplashImage src={companyLogo}/>
        </WrapperImg>
        <WrapperImg>
          <BrandLogo src={brandLogo}/>
        </WrapperImg>
        <StartButton
          type="button"
          onClick={() => handleClick()}>
          Explore
        </StartButton>
        <Margin />
      </Wrapper>
      {isOpened && <>
        <Modal 
          nickname={nickname }
          addToken={addToken}
          navigate={navigate}
          setNickname={setNickname}
        />
      </>}
    </>
  )
};

export default Splash;