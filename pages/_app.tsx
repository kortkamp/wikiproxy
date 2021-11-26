import { useState } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';

import GlobalStyle from '../styles/global';
import {lightTheme, darkTheme} from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const darkmode = useDarkMode(true);

 
  return (
    <>
    <ThemeProvider theme={darkmode.value ? darkTheme : lightTheme} >
      
      <Component {...pageProps} />
      <GlobalStyle />

    </ThemeProvider>
    </>
  )
}

export default MyApp
