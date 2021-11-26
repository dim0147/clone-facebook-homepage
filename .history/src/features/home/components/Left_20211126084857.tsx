import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px 5px;
`;

const Action = styled.div`
  cursor: pointer;
  border-radius: 16px;
  :hover{
    background-color: #e4e6e9;  
  } 

  > img {
      width: 28px;
      height: 28px;
      border-radius: 50%;
  }

`;

export const Left = () => {
  return <Container>Left</Container>;
};
