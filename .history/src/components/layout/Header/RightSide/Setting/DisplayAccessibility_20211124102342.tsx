import React, { useContext, useEffect } from 'react';
import SettingContext from './Context';
import styled from 'styled-components';
import Second from './Second';
import { Divider } from '@/components/Popover/Container';
import { Action, ActionContent, ActionIcon, NavigationHeader, NavigationIcon } from '@/components/MenuAction';
import {
  FaEnvelope,
  FaCog,
  FaChevronRight,
  FaQuestion,
  FaMoon,
  FaSignOutAlt,
  FaArrowLeft,
} from 'react-icons/fa';
import Setting from './Setting';
import HelpAndSupport from './HelpAndSupport';
import Main from './Main';

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

const DisplayAccessibility = () => {
  const context = useContext(SettingContext);

  const onBack = () => {
    if (context !== null) context(<Main />, 'from-left');
  };


  const onSetting = () => {
    context(<Setting />, 'from-right');
  };

  const onHelpAndSupport = () => {
    context(<HelpAndSupport />, 'from-right');
  };

  return (
    <Container>
      <NavigationHeader>
        <NavigationIcon onClick={onBack}>
          <FaArrowLeft />
        </NavigationIcon>
        <h2>Help & Support</h2>
      </NavigationHeader>

      <Action>
        <ActionIcon>
          <FaEnvelope />
        </ActionIcon>

        <ActionContent>
          <p>Give us feedback</p>
          <span>Help us improve the new Facebook</span>
        </ActionContent>
      </Action>

      <Action onClick={onSetting}>
        <ActionIcon>
          <FaCog />
        </ActionIcon>

        <ActionContent>
          <p>Setting & Privacy</p>
        </ActionContent>

        <ActionGoto>
          <FaChevronRight />
        </ActionGoto>
      </Action>

      <Action onClick={onHelpAndSupport}>
        <ActionIcon>
          <FaQuestion />
        </ActionIcon>

        <ActionContent>
          <p>Help & Support</p>
        </ActionContent>

        <ActionGoto>
          <FaChevronRight />
        </ActionGoto>
      </Action>

      <Action>
        <ActionIcon>
          <FaMoon />
        </ActionIcon>

        <ActionContent>
          <p>Display & Accessibility</p>
        </ActionContent>

        <ActionGoto>
          <FaChevronRight />
        </ActionGoto>
      </Action>

      <Action>
        <ActionIcon>
          <FaSignOutAlt />
        </ActionIcon>

        <ActionContent>
          <p>Logout</p>
        </ActionContent>
      </Action>
    </Container>
  );
};

export default DisplayAccessibility;
