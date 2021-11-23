import Container from '@/components/Popover/Container';
import { useState } from 'react';
import Main from './Main';

import SettingContext from './Context';

const Index = () => {
  const [screen, setScreen] = useState<any>(<Main />);

  return (
    <SettingContext.Provider value={setScreen}>
      {' '}
      <Container>{screen}</Container>
    </SettingContext.Provider>
  );
};

export default Index;
