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

const CheckboxSection = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px 0px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CheckboxLabel = styled.label`
  width: 20px;
  height: 20px;
  input {
    display: none;
  }
  div {
    width: 100%;
    height: 100%;
    background: blue;
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
        <ActionIcon noCenter>
          <FaMoon />
        </ActionIcon>

        <ActionContent>
          <p>Dark Mode</p>
          <span>
            Adjust the appearance of Facebook to reduce glare and give your eyes
            a break.
          </span>

          <CheckboxSection>
            <CheckboxContainer>
              <h4>Off</h4>
              <CheckboxLabel>
                <input type="checkbox" />
                <div></div>
              </CheckboxLabel>
            </CheckboxContainer>

            <CheckboxContainer>
              <h4>On</h4>
              <CheckboxLabel>
                <input type="checkbox" />
                <div></div>
              </CheckboxLabel>
            </CheckboxContainer>
          </CheckboxSection>
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
