import styled from 'styled-components';
import { StoryContainer } from './Middle/StoryContainer';

const Container = styled.div`
  min-width: 744px;
  max-width: 800px;
  justify-self: center;
  display: flex;
  justify-content: center;
`;

export const Middle = () => {
  return (
    <Container>
      <StoryContainer />
      <h1>cmn?</h1>
    </Container>
  );
};
