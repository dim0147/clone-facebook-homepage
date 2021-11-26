import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px 5px;
`;

const Action = styled.div`
  display: flex;
  gap: 0px 8px;
  align-items: center;
  cursor: pointer;
  border-radius: 16px;
  :hover {
    background-color: #e4e6e9;
  }

  > img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
`;

export const Left = () => {
  return (
    <Container>
      <Action>
        <img
          src="https://avatars.githubusercontent.com/u/44487221?v=4"
          alt=""
        />
        <p>Dim</p>
      </Action>
    </Container>
  );
};
