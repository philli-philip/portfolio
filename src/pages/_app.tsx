import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";
import Head from "next/head";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps}>
      <Head>
        <title>About Philip</title>
        <meta name="description" content="Philip's CV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Component>
  );
};

export default MyApp;
