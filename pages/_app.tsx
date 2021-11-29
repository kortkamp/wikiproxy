import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';

import GlobalStyle from '../styles/global';
import {lightTheme, darkTheme} from '../styles/theme';

import { DataProvider } from '../hooks/useData';

function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false)
  const darkmode = useDarkMode();

  useEffect(() => {
    setIsMounted(true)
    
  }, [])
  return (
    <DataProvider>
      <ThemeProvider theme={darkmode.value ? darkTheme : lightTheme} >
        <GlobalStyle />
        {isMounted &&  
          <Component {...pageProps} />
        }
      </ThemeProvider>
    </DataProvider>
  )
}

export default MyApp
