import styled from 'styled-components';
import { StoryCard } from './StoryCard';

const Container = styled.div`
  margin-top: 40px;
  display: flex;
`;

export const StoryContainer = () => {
  return (
    <Container>
      <StoryCard></StoryCard>
    </Container>
  );
};
