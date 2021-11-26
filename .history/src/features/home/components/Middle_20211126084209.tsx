import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
  max-width: 800px;
  background-color: red;
`;

export const Middle = () => {
    return (
        <Container>
            <span>Mid</span>
        </Container>
    )
}
