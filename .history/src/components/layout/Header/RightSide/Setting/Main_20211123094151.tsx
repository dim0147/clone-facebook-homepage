import React, { useContext } from 'react';
import SettingContext from './Context';
import styled from 'styled-components';

const Container = styled.div`
  height: 100px;
  text-align: center;
`;

const Main = () => {
  const context = useContext(SettingContext);

  return (
    <Container>
      <h1>Main page</h1>
    </Container>
  );
};

export default Main;
