import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="de" className="scroll-smooth">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-body">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
