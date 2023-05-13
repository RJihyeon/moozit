import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #e7dddd;
`;

const WrapperImg = styled.div`

  margin :  100px 10px 10px ; 
  background-color: ##e7dddd;
  align-items : center ; 
  display : flex ; 
  justify-content : center ; 

`;


const SplashImage = styled.img`
  width: 100%;
  object-fit: cover ;

`;

const BrandLogo = styled.img`
  width: 100%
  object-fit : contain ; 
  
`;

const StartButton = styled.button`
  border-radius: 12px;
  background-color: #591823;
  color : white;
  height : 58px;
  margin : 80px 20px 0px 20px ; 
  font-weight : 800;
  font-size : 1.4rem;
`;

export { Wrapper, WrapperImg, SplashImage, StartButton, BrandLogo};