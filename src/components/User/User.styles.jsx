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
  padding-top: 4rem;
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
  font-size: 1.5rem;
  font-weight: 800;
`;

const DateText = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color : #9a8f8f;
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
  background-color: #e7dddd;
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

const CategoryContainer = styled.div`
  padding: 1rem 2rem;
  padding-top: 3rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CategoryButton = styled.button`
  font-size: 1.4rem;
  font-weight: 700;
  background-color: #fefafa;
  border-bottom: 3px solid #591823;
  color : #591823;
`;

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem 2rem;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow-x: auto;
  gap: 1rem;
`;

const DrinkImageContainer = styled.div`
  width: 120px;
  height: 120px;
`;

const DrinkImage = styled.div`
  padding: 1rem 1rem;
  border-radius: 12px;
  border: 1px solid #591823;
  background-size: contain;
  width: 120px;
  height: 120px;
`;

const DrinkText = styled.div`
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
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
  CategoryContainer,
  CategoryButton,
  GridContainer,
  Grid,
  DrinkImageContainer,
  DrinkImage,
  DrinkText,
};