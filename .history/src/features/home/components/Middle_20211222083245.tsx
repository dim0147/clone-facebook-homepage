
import styled from 'styled-components';
import { StoryContainer } from './Middle/StoryContainer';


const Container = styled.div`
  min-width: 744px;
  max-width: 800px;
  justify-self: center;
  height: 5150px;
`;

export const Middle = () => {
    return (
        <Container>
            <StoryContainer />
        </Container>
    )
}
