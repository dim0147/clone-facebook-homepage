import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
  min-width: 744px;
  max-width: 800px;
  background-color: red;
  justify-self: center;
  height: 1150px;
`;

export const Middle = () => {
    return (
        <Container>
            <span>Mid</span>
        </Container>
    )
}
