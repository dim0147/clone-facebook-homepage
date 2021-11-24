import React, { useContext, useEffect } from 'react';
import SettingContext from './Context';
import styled from 'styled-components';
import Second from './Second';
import { Divider } from '@/components/Popover/Container';
import {
  Action,
  ActionContent,
  ActionIcon,
  NavigationHeader,
  NavigationIcon,
} from '@/components/MenuAction';
import {
  FaEnvelope,
  FaCog,
  FaChevronRight,
  FaQuestion,
  FaMoon,
  FaSignOutAlt,
  FaArrowLeft,
  FaCompactDisc,
} from 'react-icons/fa';
import Setting from './Setting';
import HelpAndSupport from './HelpAndSupport';
import Main from './Main';

const Container = styled.div`
  padding: 10px 15px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CheckboxLabel = styled.label`
  width: 20px;
  height: 20px;
  background: blue;
  input {
    display: none;
  }
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
        <h2>Display & Accessibility</h2>
      </NavigationHeader>

      <Action noBackground>
        <ActionIcon>
          <FaMoon />
        </ActionIcon>

        <ActionContent>
          <p>Dark Mode</p>
          <span>
            Adjust the appearance of Facebook to reduce glare and give your eyes
            a break.
          </span>
          <CheckboxContainer>
            <CheckboxLabel>
              <input type="checkbox" />
              <span></span>
            </CheckboxLabel>
          </CheckboxContainer>
        </ActionContent>
      </Action>

      <Action noBackground>
        <ActionIcon>
          <FaCompactDisc />
        </ActionIcon>

        <ActionContent>
          <p>Compact Mode</p>
          <span>
            Make your font size smaller so more content can fit on the screen.
          </span>
        </ActionContent>
      </Action>
    </Container>
  );
};

export default DisplayAccessibility;
