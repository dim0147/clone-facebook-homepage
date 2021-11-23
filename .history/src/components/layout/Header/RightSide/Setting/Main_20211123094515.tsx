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
      <Animate play start={{ opacity: 0 }} end={{ opacity: 1 }}>
        <h1 onClick={onClick}>Main page</h1>
      </Animate>
    </Container>
  );
};

export default Main;
