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
        <Animate duration={2000} play start={{ opacity: 0 }} end={{ opacity: 1 }}>
          {screen}
        </Animate>
      </Container>
    </SettingContext.Provider>
  );
};

export default Index;
