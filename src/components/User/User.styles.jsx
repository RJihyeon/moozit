import styled from "styled-components";

const Wrapper = styled.div`
  background-color : #fefafa;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  height: calc(100vh - 4rem);
`;

const ProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 1rem 2rem;
  padding-top: 3rem;
  justify-content: space-between;
  align-items: center;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NameText = styled.h2`
  font-size: 2rem;
  font-weight: 800;
`;

const DateText = styled.h3`
  font-size: 1rem;
  font-weight: 500;
`;

const ProfileImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50rem;
  background-color: #42e24f;
`;

const FollowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const FollowText = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;

const UserInfo = styled.ul`
  width: 80%;
  display : flex;
  margin: 10px ;
  padding : 5px;
  flex-direction : column;
  justify-content: center; //좌우정렬
  align-items: center; 
  border : 1px solid red;
  list-style : none;

  li {
    border : 1px solid blue ;
    width: 100%;
    display: flex;
    flex-direction: row; //가로배열
    justify-content: space-between; //좌우정렬
    align-items: center; //위아래 정렬
    list-style: none; //닷 없애기
    padding : 10px;
  }
`;

export {
  Wrapper,
  ProfileWrapper, 
  ProfileImageContainer, 
  ProfileImage,
  NameContainer,
  NameText,
  DateText,
  FollowContainer,
  FollowText,
};