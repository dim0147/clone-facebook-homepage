import styled from 'styled-components';
import { StoryCard } from './StoryCard';

const Container = styled.div`
  width: 590px;
  margin-top: 40px;
  display: flex;
  gap: 0 10px;
  overflow-x: hidden;
`;

export const StoryContainer = () => {
  return (
    <Container>
      <StoryCard />
   
    </Container>
  );
};
