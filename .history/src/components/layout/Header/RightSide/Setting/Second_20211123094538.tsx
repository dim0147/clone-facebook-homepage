import React, { useContext } from 'react';

import styled from 'styled-components';
import SettingContext from './Context';

const Container = styled.div`
  height: 100px;
  text-align: center;
`;

const Second = () => {
  const context = useContext(SettingContext);

  const onClick = () => {
    if (context !== null) context(<Second />);
  };
  
  return <Container>

      <h1 onClick={onClick}>Second page</h1>
  </Container>;
};

export default Second;
