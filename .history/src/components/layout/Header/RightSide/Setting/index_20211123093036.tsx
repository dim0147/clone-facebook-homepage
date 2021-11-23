import { useState } from 'react';

const Index = () => {
  const [screen, setScreen] = useState<any>();

  return <div>{screen}</div>;
};

export default Index;
