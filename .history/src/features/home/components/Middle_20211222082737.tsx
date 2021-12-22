
import styled from 'styled-components';


const Container = styled.div`
  min-width: 744px;
  max-width: 800px;
  justify-self: center;
  height: 5150px;
`;

export const Middle = () => {
    return (
        <Container>
            <span>Mid</span>
        </Container>
    )
}
