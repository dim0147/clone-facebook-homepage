import { ThemeProvider } from 'styled-components';

import { darkTheme, GlobalStyles, lightTheme } from '@/components/Theme';
import { useAppSelector } from '@/stores/store';

interface Props {
    children: any;
}

export default function AppThemeProvider({ children }: Props) {
    const themeState = useAppSelector((state) => state.theme);

    const theme = themeState.value === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    );
}
