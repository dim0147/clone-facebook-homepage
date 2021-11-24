import React, { useContext, useEffect } from 'react';
import SettingContext from './Context';
import styled from 'styled-components';
import Second from './Second';
import { Divider } from '@/components/Popover/Container';
import { Action, ActionContent, ActionIcon } from '@/components/MenuAction';
import {
  FaLock,
  FaCog,
  FaChevronRight,
  FaQuestion,
  FaMoon,
  FaSignOutAlt,
} from 'react-icons/fa';

const Container = styled.div`
  padding: 10px 15px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  > img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  :hover {
    background: #f2f2f2;
    cursor: pointer;
  }
`;

const HeaderRight = styled.div`
  margin-left: 15px;
  > p {
    color: #929495;
  }
`;

const ActionGoto = styled.div`
  padding-left: 5px;
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
