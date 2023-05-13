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
  border: 1px solid red;
`;

const CardTitle = styled.p`
  margin-bottom: 0.2rem;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.2rem;
`;

const CardContent = styled.p`
  width: 100%;
  padding-right: 1rem;
`;

export { 
  CardWrapper, 
  CardTitle, 
  CardContent 
};