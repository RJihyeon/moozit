import styled from "styled-components";

const CardWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 1.2rem;
  background-color: #fff;
  border-radius: 1rem;
  
  align-items: center;
  border: 2px solid #c7b0b3;
`;

const Profile = styled.ul`
width: 100%;
display : flex;
flex-direction : row;
justify-content: left;
align-items: left;

gap : 1rem ; 

 li{
  color : black ; 
  font-weight : 800;

 }
`;

const CardTitle = styled.p`
  width : 100%
  border: 1px solid red;
  padding-right: 1rem;
  margin-bottom: 0.2rem;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.2rem;
`;



export { 
  CardWrapper, 
  CardTitle, 
  Profile,
};