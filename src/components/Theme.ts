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
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.text};
        transition: all 0.5s linear;
        font-family: "Segoe UI Historic", "Segoe UI", Helvetica, Arial, sans-serif;
    }

    input {
        font-family: "Segoe UI Historic", "Segoe UI", Helvetica, Arial, sans-serif; 
    }
`;
