import React, { useContext, useEffect } from 'react';
import SettingContext from './Context';
import styled from 'styled-components';
import Second from './Second';

const Container = styled.div`
  padding: 10px 15px;
`;

const Header = styled.div`
  display: flex;
  > img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
`;

const HeaderRight = styled.div`
  margin-left: 10px;
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
        <HeaderRight>
          <h4>Ham Tru Van</h4>
          <p>See your profile</p>
        </HeaderRight>
      </Header>
    </Container>
  );
};

export default Main;
