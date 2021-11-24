import {
    Action,
    ActionContent,
    ActionIcon,
    NavigationHeader,
    NavigationIcon,
  } from '@/components/MenuAction';
  import React, { useContext } from 'react';
  import { FaCog, FaLock, FaArrowLeft, FaList, FaLanguage } from 'react-icons/fa';
  import styled from 'styled-components';
  import SettingContext from './Context';
  import Main from './Main';
  import Second from './Second';
  
  const Container = styled.div`
    padding: 10px 15px;
  `;
  
  const HelpAndSupport = () => {
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
  
        <Action>
          <ActionIcon>
            <FaList />
          </ActionIcon>
  
          <ActionContent>
            <p>Activity Log</p>
          </ActionContent>
        </Action>
  
        
        <Action>
          <ActionIcon>
            <FaLanguage />
          </ActionIcon>
  
          <ActionContent>
            <p>Language</p>
          </ActionContent>
        </Action>
  
  
      </Container>
    );
  };
  
  export default HelpAndSupport;
  