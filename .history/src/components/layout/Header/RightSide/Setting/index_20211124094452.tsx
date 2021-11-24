import Container from '@/components/Popover/Container';
import { useState } from 'react';
import Main from './Main';

import SettingContext from './Context';

import styled, { keyframes } from 'styled-components';

const FromRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const FromLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
`;

export interface DivProps {
  direction?: 'from-left' | 'from-right';
}

const Div = styled.div`
  height: autos;
  transition: all 0.5s ease;
  animation: ${(props: DivProps) =>
      !props.direction
        ? 'unset'
        : props.direction === 'from-left'
        ? FromLeft
        : FromRight}
    0.5s ease;
`;

const Index = () => {
  const [screen, setScreen] = useState<JSX.Element>(<Main />);
  const [direction, setDirection] = useState<DivProps['direction']>();
  const setNewScreen = (screen: any, direction: DivProps['direction']) => {
    setScreen(screen);
    setDirection(direction);
  };

  return (
    <SettingContext.Provider value={setNewScreen}>
      <Container>
        <Div direction={direction}>{screen}</Div>
      </Container>
    </SettingContext.Provider>
  );
};

export default Index;
