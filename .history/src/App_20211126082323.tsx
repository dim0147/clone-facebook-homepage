import Header from '@/components/layout/Header/index';
import { Screen } from '@/features/home/index';
import ThemeProvider from '@/providers/ThemeProvider';

const App = () => (
  <ThemeProvider>
    <Header />
    <Screen />
  </ThemeProvider>
);

export default App;
