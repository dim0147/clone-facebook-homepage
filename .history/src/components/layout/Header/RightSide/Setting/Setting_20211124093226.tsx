import { Action, ActionContent, ActionIcon } from '@/components/MenuAction';
import React, { useContext } from 'react';
import { FaCog, FaLock } from 'react-icons/fa';
import styled from 'styled-components';
import SettingContext from './Context';
import Second from './Second';

const Container = styled.div`
  padding: 10px 15px;
`;

const Setting = () => {
  const context = useContext(SettingContext);

  const onClick = () => {
    if (context !== null) context(<Second />, 'from-right');
  };

  return (
    <Container>
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
