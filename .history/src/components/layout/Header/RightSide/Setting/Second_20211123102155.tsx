import React, { useContext } from 'react';

import styled from 'styled-components';
import SettingContext from './Context';
import Main from './Main';

const Container = styled.div`
  height: 100px;
  text-align: center;
`;

const Second = () => {
  const context = useContext(SettingContext);

  const onClick = () => {
    if (context !== null) context(<Main />, 'from-left');
  };

  return (
    <p>
      <h1 onClick={onClick}>Second page</h1>

      <p>Some text</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, vero
        quam, sint repudiandae laboriosam cum numquam dignissimos tenetur,
        aliquam dolore tempora. Dicta officia, nulla voluptatibus voluptatum
        recusandae corrupti sunt maiores!
      </p>
    </>
  );
};

export default Second;
