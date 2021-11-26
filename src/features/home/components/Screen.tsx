import styled from 'styled-components';
import { Left } from './Left';
import { Middle } from './Middle';
import { Right } from './Right';

const MainGrid = styled.div`
    display: grid;
    grid-template-columns: 360px 1fr 360px;
    background-color: #F0F2F5;
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
