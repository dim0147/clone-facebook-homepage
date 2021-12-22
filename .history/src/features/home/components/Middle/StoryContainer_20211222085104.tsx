import styled from 'styled-components';
import { StoryCard } from './StoryCard';

const Container = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 0 10px;
  overflow: hidden;
`;

export const StoryContainer = () => {
  return (
    <Container>
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
    </Container>
  );
};
