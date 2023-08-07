import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";

import "../app/globals.css";

export default function MyApp({ Component, pageProps }: AppProps){
  const AnyComponent = Component as any;
  return (
    <>
      <AnyComponent {...pageProps} />;
      <Analytics />
    </>
  );
};
