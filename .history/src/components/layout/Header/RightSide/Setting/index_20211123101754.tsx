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
  animation: ${(props: DivProps) =>
      props.direction === 'from-left' ? FromLeft : FromRight}
    0.5s ease;
`;

const Index = () => {
  const [screen, setScreen] = useState<any>(<Main />);
  const [direction, setDirection] =
    useState<DivProps['direction']>('from-left');

  const setNewScreen = (screen: any, direction: DivProps['direction']) => {
    setScreen(screen);
    setDirection(direction);
  };

  return (
    <SettingContext.Provider value={setNewScreen}>
      <Container style={{ height: '100vh' }}>
        <Div direction={direction}>{screen}</Div>
        {/* </AnimateKeyframes> */}
      </Container>
    </SettingContext.Provider>
  );
};

export default Index;
