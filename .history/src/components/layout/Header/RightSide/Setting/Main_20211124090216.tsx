import React, { useContext, useEffect } from 'react';
import SettingContext from './Context';
import styled from 'styled-components';
import Second from './Second';

const Container = styled.div`
  padding: 10px 20px;
`;

const Header = styled.div`
  display: flex;
  > img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
`;

const Main = () => {
  const context = useContext(SettingContext);

  const onClick = () => {
    if (context !== null) context(<Second />, 'from-right');
  };

  return (
    <Container>
      <Header>
        <img src="https://avatars.githubusercontent.com/u/44487221?v=4" />
      </Header>
    </Container>
  );
};

export default Main;
