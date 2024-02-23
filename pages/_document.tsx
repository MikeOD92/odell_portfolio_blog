import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Oxygen&family=Raleway:wght@100;200;300;400;600&family=UnifrakturCook:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
