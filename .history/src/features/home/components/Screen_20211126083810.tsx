import styled from 'styled-components';
import { Left } from './Left';
import { Middle } from './Middle';
import { Right } from './Right';

const MainGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 350px);
    background-color: #F0F2F5;
    height: 100vh;
    justify-content: space-between;
    /* justify-items: space-between; */
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
