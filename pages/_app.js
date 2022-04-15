import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import favicon from '../public/img/logoib1rtc.ico'

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Welcome to BRI Internet Banking</title>
        <link rel="shortcut icon" src={favicon} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp