import type { AppProps } from "next/app";

import "../styles/globals.scss";

import { ChakraProvider } from "@chakra-ui/react";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <NextNProgress color="#5A00FE" options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
