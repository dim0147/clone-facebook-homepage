import React, { useContext } from 'react';
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
      <h1 onClick={onClick}>Main page</h1>

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

export default Main;
