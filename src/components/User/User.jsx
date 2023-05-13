import React from 'react';
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
} from "./User.styles";

function User() {
  return (
    <>
      <Wrapper>
        <ProfileWrapper>
          <NameContainer>
            <NameText>
              닉네임
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
      </Wrapper>
    </>
  )
};

export default User;