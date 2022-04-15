import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Welcome to BRI Internet Banking</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp