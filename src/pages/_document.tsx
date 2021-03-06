import Document, { Html, Head, Main, NextScript } from 'next/document';
import Footer from '../components/Footer';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
          <script
            async
            defer
            src="https://static.cdn.prismic.io/prismic.js?new=true&repo=spacetraveling02"
          ></script>
        </body>

        {/* <Footer /> */}
      </Html>
    );
  }
}
