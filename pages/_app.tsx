import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import '../styles/global.scss';

import { ThemeProvider } from 'styled-components';

type AppProps = {
  Component: React.ReactNode;
  pageProps: any;
};

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default class CustomApp extends App<AppProps> {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>리드라이트 | 택배로 빌리는 무제한 종이책</title>
          <meta name="description" content="디스크립션을 적는 곳입니다" />
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
