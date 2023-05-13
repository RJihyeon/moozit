import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 1.2rem;
  background-color: #fff;
  border-radius: 1rem;
  align-items: left;
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

const CardPic = styled.div `
background-color : #e7dddd ; 
width : 100%; 
height : 8rem ; 
`;

const Title = styled.p`
font-size : 1rem ;
font-weight : 800;
margin-top : 10px;
`;


const PostWrapper = styled.div `
width: 100%;
margin-bottom: 1rem;
display: flex;
flex-direction: column;
padding: 1rem 1.2rem;
background-color: #fff;
border-radius: 1rem;
align-items: left;
border: 2px solid #c7b0b3;
height : 150px ; 
margin-top : 10px;

p{
font-weight : 800;
color : #383636;

};
`;

const Alcohol=styled.ul`
display : flex ;
display-flex : row ; 
gap : 10px ; 
margin-bottom : 15px; 
li{
  background-color : #c8b3b7;
  font-weight : 800;
  font-size : 15px;
  border-radius : 8px ; 
  padding : 5px 10px ; 
}

`;

const AddComment=styled.ul`
display : flex; 
display - flex : row ; 
gap : 10px ; 


li{
  padding-top : 10px ; 
}

input{
  height : 50px;
  width : 100% ;
  background-color : #f3eeee;
  border : none ; 
  border-radius : 6px ; 
};

button {
  font-weight : 900;
  border-radius : 6px ;
  background-color : #591823;
  color : white ; 
  height : 50px;
  padding : 3px 20px ;
};

`;



export {AddComment,CardWrapper,Profile,CardPic,Title,PostWrapper,Alcohol};