import React, { useContext, useEffect } from 'react';
import SettingContext from './Context';
import styled from 'styled-components';
import Second from './Second';

const Container = styled.div`
  height: 100px;
  text-align: center;
`;

const Main = () => {
  const context = useContext(SettingContext);

  const onClick = () => {
    if (context !== null) context(<Second />, 'from-right');
  };

  return (
    <>
      
    </>
  );
};

export default Main;
