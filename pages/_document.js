import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
        <link rel="icon" type="image/svg+xml" href="/assets/PM.svg" />
        <script
          defer
          data-domain='estheragbaje.dev'
          src='https://plausible.io/js/plausible.js'
        ></script>
        </Head>

        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
