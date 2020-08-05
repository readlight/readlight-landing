import React from 'react';
import App from 'next/app';
import '../styles/global.scss';

import { ThemeProvider } from 'styled-components';

type AppProps = {
  Component: React.ReactNode;
  pageProps: any;
};

const theme = {
  colors: {
    header: '#3B4048',
    lightGray: '#F7F8FA',
    pureWhite: '#FFFFFF',
  },
};

export default class CustomApp extends App<AppProps> {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
