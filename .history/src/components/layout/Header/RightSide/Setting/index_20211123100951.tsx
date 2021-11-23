import Container from '@/components/Popover/Container';
import { useState } from 'react';
import Main from './Main';

import SettingContext from './Context';

import { Animate, AnimateKeyframes, AnimateGroup } from 'react-simple-animate';
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

interface DivProps {
  direction: 'from-left' | 'from-right';
}

const Div = styled.div`
  animation: ${(props: DivProps) =>
      props.direction === 'from-left' ? FromLeft : FromRight}
    0.5s ease;
`;

const Index = () => {
  const [screen, setScreen] = useState<any>(<Main />);

  return (
    <SettingContext.Provider value={setScreen}>
      <Container style={{ height: '100vh' }}>
        {/* <AnimateKeyframes
          play
          duration={10}
          iterationCount={10}
          //  / keyframes={['opacity: 0', 'opacity: 1']}
          keyframes={['background: red', 'background: blue']}
          // keyframes={[
          //   `transform: translateX(100%)`,
          //   `transform: translateX(0px)`,
          // ]}
        > */}
        <Div>{screen}</Div>
        {/* </AnimateKeyframes> */}
      </Container>
    </SettingContext.Provider>
  );
};

export default Index;
