import React from 'react';
import {Body, Wrapper,UserInfo} from "./User.styles";

function User() {
  return (
    <Body>
    <Wrapper>
      <UserInfo>
        <li>
          <span>이메일</span>
          <span>03x2_18@yonsei.ac.kr</span>
        </li>
        <li>
          <span>닉네임</span>
          <span>홍길동</span>
        </li>
        <li>
          <span>비밀번호</span>
          <button type="button">변경하기</button>
        </li>
        <li>
          <span>생년월일</span>
          <span>2000-01-01</span>
        </li>
        <li>
          <span>포인트</span>
          <span>100,000$</span>
        </li>
      </UserInfo>
    </Wrapper>
    </Body>
  )
};

export default User;