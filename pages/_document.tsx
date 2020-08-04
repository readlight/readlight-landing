import Document, {
  Main,
  NextScript,
  Html,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet, injectGlobal } from 'styled-components';

injectGlobal`
 html {
   font-size: 10px;
 }
 body {
   font-family: "Merriweather", serif;
   font-size: 1.6em;
   line-height: 1.6;
 }
`;

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="kr">
        <head>
          <style />
        </head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
