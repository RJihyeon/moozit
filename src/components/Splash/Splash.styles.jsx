import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const WrapperImg = styled.div`
border : 1px solid blue;
margin :  100px 10px ; 

`;


const SplashImage = styled.img`
  width: 100%;
  object-fit: cover ;
  border : 1px solid red;
  
  
`;

const BrandLogo = styled.img``;

const StartButton = styled.button`
  border-radius: 12px;
  background-color: #591823;
  color : white;
  height : 58px;
  margin : 0 20px ; 
  font-weight : 800;
  font-size : 1.4rem;
`;

export { Wrapper, WrapperImg, SplashImage, StartButton, BrandLogo};