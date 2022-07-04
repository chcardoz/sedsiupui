import Head from 'next/head';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>SEDS at IUPUI</title>
      </Head>
      <Component {...pageProps}/>
    </>
  );
}

export default MyApp;
