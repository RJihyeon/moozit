import React from 'react';

import drink from '../../drinkData.json';
import { BsPersonCircle } from "react-icons/bs";

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

  return (
    <>
      <Wrapper>
        <ProfileWrapper>
          <NameContainer>
            <NameText>
              mooziT
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