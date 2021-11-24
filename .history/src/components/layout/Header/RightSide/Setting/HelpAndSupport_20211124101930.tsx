import {
    Action,
    ActionContent,
    ActionIcon,
    NavigationHeader,
    NavigationIcon,
  } from '@/components/MenuAction';
  import React, { useContext } from 'react';
  import { FaCog, FaLock, FaArrowLeft, FaList, FaLanguage, FaQuestion, FaMailchimp, FaWatchmanMonitoring } from 'react-icons/fa';
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
          <h2>Help & Support</h2>
        </NavigationHeader>
  
        <Action>
          <ActionIcon>
            <FaQuestion />
          </ActionIcon>
  
          <ActionContent>
            <p>Help Center</p>
          </ActionContent>
        </Action>
  
        <Action>
          <ActionIcon>
            <FaMailchimp />
          </ActionIcon>
  
          <ActionContent>
            <p>Support Inbox</p>
          </ActionContent>
        </Action>
  
        <Action>
          <ActionIcon>
            <FaWatchmanMonitoring />
          </ActionIcon>
  
          <ActionContent>
            <p>Report a Problem</p>
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
  