import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  background: '#ffffff',
  text: '#000000',
  bgMenuHover: '#f2f2f2',
};

export const darkTheme: DefaultTheme = {
  background: '#000000',
  text: '#ffffff',
  bgMenuHover: '#f2f2f2',
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
        transition: background 0.5s linear,
                    color 0.5s ease;
        font-family: "Segoe UI Historic", "Segoe UI", Helvetica, Arial, sans-serif;
    }

    input {
        font-family: "Segoe UI Historic", "Segoe UI", Helvetica, Arial, sans-serif; 
    }
`;
