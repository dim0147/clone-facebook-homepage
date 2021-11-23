import Container from '@/components/Popover/Container';
import { useState } from 'react';
import Main from './Main';

import SettingContext from './Context';

import { Animate, AnimateKeyframes, AnimateGroup } from 'react-simple-animate';
import styled from 'styled-components';

const Appear = styled.animate`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const Div = styled.div`
  animation: ${Appear} 2s ease infinite;
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
