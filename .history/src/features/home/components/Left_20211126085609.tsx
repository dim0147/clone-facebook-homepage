import React from 'react';
import styled from 'styled-components';

import FriendIcon from '@icons/Friend';

const Container = styled.div`
  padding: 20px 15px;
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
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }

  > svg {
   fill: blue;
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
        <FriendIcon />
        <p>Friends</p>
      </Action>


    </Container>
  );
};
