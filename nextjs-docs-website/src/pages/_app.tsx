import { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../styles/globals.css';
import { ThemeProvider } from '../utils/theme';
import { AuthProvider } from '../utils/auth';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Any global side effects can be handled here
  }, []);

  return (
    <AuthProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;