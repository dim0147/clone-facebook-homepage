import React, { useContext, useEffect } from 'react';
import SettingContext from './Context';
import styled from 'styled-components';
import Second from './Second';
import { Divider } from '@/components/Popover/Container';
import { Action, ActionContent, ActionIcon } from '@/components/MenuAction';
import { FaEnvelope, FaCog, FaArrowRight } from 'react-icons/fa';

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
  align-self: flex-end;
`;

const Main = () => {
  const context = useContext(SettingContext);

  const onClick = () => {
    if (context !== null) context(<Second />, 'from-right');
  };

  return (
    <Container>
      <Header>
        <img src="https://avatars.githubusercontent.com/u/44487221?v=4" />
        <HeaderRight>
          <h4>Ham Tru Van</h4>
          <p>See your profile</p>
        </HeaderRight>
      </Header>

      <Divider style={{ margin: '10px 0px', borderWidth: 2 }} />

      <Action>
        <ActionIcon>
          <FaEnvelope />
        </ActionIcon>

        <ActionContent>
          <p>Give us feedback</p>
          <span>Help us improve the new Facebook</span>
        </ActionContent>
      </Action>

      <Divider style={{ margin: '10px 0px', borderWidth: 2 }} />

      <Action>
        <ActionIcon>
          <FaCog />
        </ActionIcon>

        <ActionContent>
          <p>Setting</p>
        </ActionContent>

        <ActionGoto>
        <FaArrowRight />
        </ActionGoto>
      </Action>
    </Container>
  );
};

export default Main;
