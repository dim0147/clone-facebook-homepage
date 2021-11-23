import React, { useContext } from 'react';
import SettingContext from './Context';
import styled from 'styled-components';
import Second from './Second';

import { Animate, AnimateKeyframes, AnimateGroup } from 'react-simple-animate';

const Container = styled.div`
  height: 100px;
  text-align: center;
`;

const Main = () => {
  const context = useContext(SettingContext);

  const onClick = () => {
    if (context !== null) context(<Second />);
  };

  return (
    <Container>
      <h1 onClick={onClick}>Main page</h1>

      <>
        {/* animate individual element. */}
        <Animate play start={{ opacity: 0 }} end={{ opacity: 1 }}>
          <h1>React simple animate</h1>
        </Animate>

        {/* animate keyframes with individual element. */}
        <AnimateKeyframes
          play
          duration={5}
          iterationCount={10}
          keyframes={['opacity: 0', 'opacity: 1']}
        >
          <h1>React simple animate with keyframes</h1>
        </AnimateKeyframes>

        {/* animate group of animation in sequences */}
        <AnimateGroup play>
          <Animate
            start={{ opacity: 0 }}
            end={{ opacity: 1 }}
            sequenceIndex={0}
          >
            first
          </Animate>
          <Animate
            start={{ opacity: 0 }}
            end={{ opacity: 1 }}
            sequenceIndex={1}
          >
            second
          </Animate>
          <Animate
            start={{ opacity: 0 }}
            end={{ opacity: 1 }}
            sequenceIndex={2}
          >
            third
          </Animate>
        </AnimateGroup>
      </>
    </Container>
  );
};

export default Main;
