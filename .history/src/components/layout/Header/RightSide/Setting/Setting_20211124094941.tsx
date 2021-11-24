import {
  Action,
  ActionContent,
  ActionIcon,
  NavigationHeader,
  NavigationIcon,
} from '@/components/MenuAction';
import React, { useContext } from 'react';
import { FaCog, FaLock, FaArrowLeft } from 'react-icons/fa';
import styled from 'styled-components';
import SettingContext from './Context';
import Main from './Main';
import Second from './Second';

const Container = styled.div`
  transition: all 1s ease;
  padding: 10px 15px;
`;

const Setting = () => {
  const context = useContext(SettingContext);

  const onBack = () => {
    if (context !== null) context(<Main />, 'from-left');
  };

  return (
    <Container>
      <NavigationHeader>
        <NavigationIcon onClick={onBack}>
          <FaArrowLeft />
        </NavigationIcon>
        <h2>Settings & Privacy</h2>
      </NavigationHeader>

      <Action>
        <ActionIcon>
          <FaCog />
        </ActionIcon>

        <ActionContent>
          <p>Settings</p>
        </ActionContent>
      </Action>

      <Action>
        <ActionIcon>
          <FaLock />
        </ActionIcon>

        <ActionContent>
          <p>Privacy Checkup</p>
        </ActionContent>
      </Action>
    </Container>
  );
};

export default Setting;
