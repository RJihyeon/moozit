import styled from 'styled-components';

const HeadContainer = styled.div`
  display: flex;
  width: 100%;
  height : 4rem;
  background-color : #c7b0b3;
  padding-left : 20px;
  gap : 10rem ; 
`;

const HeadImg = styled.img`
width: 40%;
object-fit: contain ;
`;

const HeadIcon = styled.ul `
display: flex ;
display : row ; 
align-items : center ; 
justify-content : center ; 

li{
  color : #591823;
}
`;


export {HeadContainer, HeadImg,HeadIcon};