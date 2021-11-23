import Container from '@/components/Popover/Container';
import { useState } from 'react';
import Main from './Main';

import SettingContext from './Context';

import { Animate, AnimateKeyframes, AnimateGroup } from 'react-simple-animate';

const Index = () => {
  const [screen, setScreen] = useState<any>(<Main />);

  return (
    <SettingContext.Provider value={setScreen}>
      <Container>
        <AnimateKeyframes
          play
          duration={10}
          iterationCount={1}
          keyframes={['opacity: 0', 'opacity: 1']}
          // keyframes={[
          //   `transform: translateX(100%)`,
          //   `transform: translateX(0px)`,

          // ]}
        >
          {screen}
        </AnimateKeyframes>
      </Container>
    </SettingContext.Provider>
  );
};

export default Index;
