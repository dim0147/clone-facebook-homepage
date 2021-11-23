import React, { useContext } from 'react';
import SettingContext from './Context';
import styled from 'styled-components';
import Second from './Second';

import { Animate, AnimateKeyframes, AnimateGroup } from 'react-simple-animate';

const Container = styled.div`
  height: 100px;
  text-align: center;
`;

const Main = () => {
  const context = useContext(SettingContext);

  const onClick = () => {
    if (context !== null) context(<Second />);
  };

  return (
    <Container>
      <h1 onClick={onClick}>Main page</h1>
    </Container>
  );
};

export default Main;
