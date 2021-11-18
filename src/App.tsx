import Header from '@/components/layout/Header/index';
import ThemeProvider from '@/providers/ThemeProvider';

const App = () => (
  <ThemeProvider>
    <Header />
  </ThemeProvider>
);

export default App;
