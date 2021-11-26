import styled from 'styled-components';
import { Left } from './Left';
import { Middle } from './Middle';
import { Right } from './Right';

const MainGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: #F0F2F5;
    height: 100vh;
    justify-items: center;
`;

export const Screen = () => {
    return (
        <MainGrid>
            <Left />
            <Middle />
            <Right />
        </MainGrid>
    )
}
