import styled from 'styled-components';

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height : 4rem;
  background-color : #c7b0b3;
`;

const TitleText = styled.h1`
  font-size : 2rem;  
  font-weight : 900;
  color : #591823;

`;

export {TitleContainer, TitleText};