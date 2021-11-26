import React from 'react';
import styled from 'styled-components';

import FriendImg from '@img/Friends.png';

const Container = styled.div`
  padding: 15px 7px;
`;

const Action = styled.div`
  display: flex;
  gap: 0px 8px;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  padding: 8px 12px;
  :hover {
    background-color: #e4e6e9;
  }

  > img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }

  > p {
    font-size: 15px;
    font-weight: 600;
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

      <Action>
        <img src={FriendImg} />
        <p>Friends</p>
      </Action>
    </Container>
  );
};
