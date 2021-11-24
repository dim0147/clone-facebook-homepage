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
  FaKeyboard,
  FaStarAndCrescent,
} from 'react-icons/fa';
import Setting from './Setting';
import HelpAndSupport from './HelpAndSupport';
import Main from './Main';
import DisplayAccessibility from './DisplayAccessibility';

interface CheckboxLabelProps {
  isActive?: boolean;
}

const Container = styled.div`
  padding: 10px 15px;
`;

const CheckboxSection = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px 0px;
`;

const CheckboxContainer = styled.div`
  border-radius: 5px;
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  :hover {
    background-color: #e4e6eb;
  }
`;

const CheckboxLabel = styled.label`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid
    ${(props: CheckboxLabelProps) => (props.isActive ? ' #1172E2' : '#8B9096')};
  padding: 2px;
  input {
    display: none;
  }
  div {
    display: ${(props: CheckboxLabelProps) =>
      props.isActive ? ' block' : 'none'};
    width: 100%;
    height: 100%;
    background-color: #056be1;
    border-radius: 50%;
  }
`;

const ActionGoto = styled.div`
  padding-left: 5px;
`;

const KeyboardSetting = () => {
  const context = useContext(SettingContext);

  const onBack = () => {
    if (context !== null) context(<DisplayAccessibility />, 'from-left');
  };

  return (
    <Container>
      <NavigationHeader>
        <NavigationIcon onClick={onBack}>
          <FaArrowLeft />
        </NavigationIcon>
        <h2>Keyboard</h2>
      </NavigationHeader>

      <Action>
        <ActionIcon>
          <FaMoon />
        </ActionIcon>

        <ActionContent>
          <p>See All Keyboard Shortcuts</p>
        </ActionContent>
      </Action>

      <Action noBackground>
        <ActionIcon noCenter>
          <FaStarAndCrescent />
        </ActionIcon>

        <ActionContent>
          <p>Use Single-Character Keyboard Shortcuts</p>
          <span>Use single-character shortcuts to perform common actions.</span>
          <CheckboxSection>
            <CheckboxContainer>
              <h5>Off</h5>
              <CheckboxLabel isActive>
                <input type="checkbox" />
                <div></div>
              </CheckboxLabel>
            </CheckboxContainer>

            <CheckboxContainer>
              <h5>On</h5>
              <CheckboxLabel>
                <input type="checkbox" />
                <div></div>
              </CheckboxLabel>
            </CheckboxContainer>
          </CheckboxSection>
        </ActionContent>
      </Action>
    </Container>
  );
};

export default KeyboardSetting;
