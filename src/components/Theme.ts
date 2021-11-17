import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
    background: '#ffffff',
    text: '#000000',
};

export const darkTheme: DefaultTheme = {
    background: '#000000',
    text: '#ffffff',
};

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.text};
        transition: all 0.5s linear;
    }
`;
