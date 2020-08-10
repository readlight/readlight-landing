import * as React from 'react';
import { ServerStyleSheet } from 'styled-components';
import Document, {
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

type DocumentProps = {
  styleTags: Array<React.ReactElement<{}>>;
};

export default class CustomDocument extends Document<DocumentProps> {
  static async getInitialProps({ renderPage }: DocumentContext) {
    const sheet = new ServerStyleSheet();

    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  setGoogleTag() {
    return {
      __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-169802119-1')`,
    };
  }

  public render() {
    const { styleTags } = this.props;
    return (
      <html>
        <Head>{styleTags}</Head>
        <body>
          <div className="root">
            <Main />
          </div>
          <NextScript />
        </body>
      </html>
    );
  }
}
