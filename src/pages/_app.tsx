import { Analytics } from "@vercel/analytics/react";
import { AppProps } from "next/app";

import "../app/globals.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps){
  return (
    <>
      <Component {...pageProps}>
        <Head>
          <title>About Philip</title>
          <meta name="description" content="Philip's CV" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </Component>
      <Analytics />
    </>
  );
};
