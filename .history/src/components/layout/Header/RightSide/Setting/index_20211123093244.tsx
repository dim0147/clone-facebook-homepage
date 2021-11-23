import Container from '@/components/Popover/Container';
import { useState } from 'react';

const Index = () => {
  const [screen, setScreen] = useState<any>();

  return <Container>{screen}</Container>;
};

export default Index;
