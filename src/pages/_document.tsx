import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-Br">
      <Head>
        {/* <title>Nowne</title> */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
