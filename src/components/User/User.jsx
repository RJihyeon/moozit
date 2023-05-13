import axios from "axios";
import React, { useState, useEffect } from "react";

import drink from "../../drinkData.json";
import { getAccessToken } from "../../utils/token";
import {
  Wrapper,
  ProfileWrapper,
  ProfileImageContainer,
  ProfileImage,
  NameContainer,
  NameText,
  DateText,
  FollowContainer,
  FollowText,
  CategoryContainer,
  CategoryButton,
  GridContainer,
  Grid,
  DrinkImage,
  DrinkImageContainer,
  DrinkText,
} from "./User.styles";

function User() {
  console.log(drink);
  const accessToken = getAccessToken([]);
  const [ userInfo, setUserInfo ] = useState("닉네임");
  const [ isClicked, setIsClicked ] = useState(false);

  useEffect(() => {
    console.log(accessToken, '왜');
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    try {
      const config = {
        headers: {
          'X-Amz-Security-Token': accessToken
        }
      };
      const url = `https://ccm0e7duj5.execute-api.ap-northeast-2.amazonaws.com/dev/get-token-info/${accessToken}`;
      const data = await axios.get(url, config);
      setUserInfo(data.data.token.nickname);
      console.log(data.data.token.nickname);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Wrapper>
        <ProfileWrapper>
          <NameContainer>
            <NameText>
              {userInfo}
            </NameText>
            <DateText>
              Since 2023
            </DateText>
          </NameContainer>
          <ProfileImageContainer>
            <ProfileImage/>
          </ProfileImageContainer>
          <FollowContainer>
            <FollowText>
              Followers  382
            </FollowText>
            <FollowText>
              Following  500
            </FollowText>
          </FollowContainer>
        </ProfileWrapper>
        <CategoryContainer>
          <CategoryButton>
            Posted
          </CategoryButton>
          <CategoryButton>
            Collection
          </CategoryButton>
        </CategoryContainer>
        <GridContainer>
          <DrinkText>
            Whiskey
          </DrinkText>
          <Grid>
          {drink.whiskey.map((item, index) => (
            <DrinkImageContainer>
              <DrinkImage style={{ backgroundImage: `url(${item.link})` }}/>
            </DrinkImageContainer>
          ))}
          </Grid>
          <DrinkText>
            Beer
          </DrinkText>
          <Grid>
          {drink.beer.map((item, index) => (
            <DrinkImageContainer>
              <DrinkImage style={{ backgroundImage: `url(${item.link})` }}/>
            </DrinkImageContainer>
          ))}
          </Grid>
        </GridContainer>
      </Wrapper>
    </>
  )
};

export default User;