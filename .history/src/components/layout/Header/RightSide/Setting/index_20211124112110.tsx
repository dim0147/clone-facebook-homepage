import Container from '@/components/Popover/Container';
import { useEffect, useRef, useState } from 'react';
import Main from './Main';
import AnimateHeight from 'react-animate-height';

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
      !props.direction
        ? 'unset'
        : props.direction === 'from-left'
        ? FromLeft
        : FromRight}
    0.5s ease;
`;

const Index = () => {
  const divRef = useRef<any>(undefined);
  const [screen, setScreen] = useState<JSX.Element>(<Main />);
  const [randomNum, setRandom] = useState<number>(1);
  const [height, setHeight] = useState<number | 'auto'>('auto');
  const [direction, setDirection] = useState<DivProps['direction']>();
  const setNewScreen = (screen: any, direction: DivProps['direction']) => {
    setScreen(screen);
    setDirection(direction);
  };

  useEffect(() => {
    setRandom(Math.random());
    const height = divRef.current?.offsetHeight;
    if (height) setHeight(height);
  }, [screen]);

  

  return (
    <SettingContext.Provider value={setNewScreen}>
      <Container>
        <AnimateHeight height={height}>
          <Div key={randomNum} ref={divRef} direction={direction}>
            {screen}
          </Div>
        </AnimateHeight>
      </Container>
    </SettingContext.Provider>
  );
};

export default Index;
