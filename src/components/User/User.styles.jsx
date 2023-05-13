import styled from "styled-components";


const Body = styled.body`
background-color: #fefafa;

`;

const Wrapper = styled.div`
  background-color : #fefafa;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 4rem);
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

export {Body, Wrapper, UserInfo};