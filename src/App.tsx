import { Provider, useSelector } from 'react-redux';

import { RootState, store } from '@/stores/store';

import ThemeProvider from '@/providers/ThemeProvider';
import Header from '@/components/layout/Header';
import { ThemeState } from './features/theme/ThemeSlice';

function App() {
    return (
        <ThemeProvider>
            <Header />
        </ThemeProvider>
    );
}

export default App;
