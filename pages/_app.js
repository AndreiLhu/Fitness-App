import MobileNavbar from '@/components/MobileNavbar';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#333',
    background: '#f8f8f8',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
  },
  fontSizes: {
    small: '1rem',
    medium: '1.2rem',
    large: '1.5rem',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
};

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <MobileNavbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
