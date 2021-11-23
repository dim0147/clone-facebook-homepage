import Container from '@/components/Popover/Container';
import { useState } from 'react';
import Main from './Main';

const Index = () => {
  const [screen, setScreen] = useState<any>(<Main />);

  return <Container>{screen}</Container>;
};

export default Index;
