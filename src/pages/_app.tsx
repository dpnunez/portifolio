import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { theme as appTheme } from 'theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const theme = extendTheme(appTheme);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
