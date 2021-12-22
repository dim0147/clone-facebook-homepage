import styled from 'styled-components';
import { StoryContainer } from './Middle/StoryContainer';

const Container = styled.div`
  min-width: 744px;
  max-width: 800px;
  height: 5150px;
  justify-self: center;
`;

export const Middle = () => {
  return (
    <Container>
      <StoryContainer />
    </Container>
  );
};
