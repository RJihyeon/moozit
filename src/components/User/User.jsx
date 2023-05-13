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
      </Wrapper>
    </>
  )
};

export default User;