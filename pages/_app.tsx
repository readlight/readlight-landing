import * as React from 'react';
import Head from 'next/head';
import App from 'next/app';
import '../styles/global.scss';

import { ThemeProvider } from 'styled-components';

interface IAppProps {
  Component: React.ReactNode;
  pageProps: any;
}

const theme = {
  colors: {
    header: '#3B4048',
    subHeader: '#C6C6C6',
    lightGray: '#F7F8FA',
    pureWhite: '#FFFFFF',
    pureBlack: '#000000',
    pointBlue: '#0E62FF',
  },
};

export default class CustomApp extends App<IAppProps> {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>리드라이트 | 택배로 빌리는 무제한 종이책</title>
          <meta
            name="description"
            content="월 9,900원 구독으로 원하는 종이책을 마음껏 빌려봐요"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
