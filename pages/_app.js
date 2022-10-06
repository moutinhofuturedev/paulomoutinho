import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  semanticTokens: {
    colors: {
      bodyText: { _light: 'gray.700', _dark: 'gray.400' },
      headingText: { _light: 'gray.700', _dark: 'white' },

      cardBackground: { _light: 'gray.200', _dark: 'gray.700' },
      cardText: { _light: 'gray.800', _dark: 'white' },
      mutedText: { _light: 'gray.600', _dark: 'gray.400' },

      blogIcon: { _light: 'gray.400', _dark: 'gray.600' },

      generalBackground: { _light: 'gray.50', _dark: 'gray.900' },
      highlight: { _light: 'teal.500', _dark: 'teal.300' },
      logoBackground: { _light: 'teal.500', _dark: 'teal.400' },
      buttonText: { _light: 'white', _dark: 'white' },
      buttonBackground: { _light: 'teal.500', _dark: 'teal.400' },
      icon: { _light: 'BlackAlpha 300', _dark: 'BlackAlpha 100' },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
