import { type ThemeConfig } from '@chakra-ui/react';

import { Text } from './components/text';

const colors = {
  secondary: {
    '50': '#EFE9FC',
    '100': '#D1C1F5',
    '200': '#B399EF',
    '300': '#9672E9',
    '400': '#784AE3',
    '500': '#5B22DD',
    '600': '#491BB1',
    '700': '#361584',
    '800': '#240E58',
    '900': '#12072C'
  },
  primary: {
    '50': '#E6FFF1',
    '100': '#B9FED8',
    '200': '#8CFDBF',
    '300': '#5FFCA5',
    '400': '#32FB8C',
    '500': '#05FA73',
    '600': '#04C85C',
    '700': '#039645',
    '800': '#02642E',
    '900': '#013217'
  },
  background: '#121214'
};

const styles = {
  global: {
    'html, body': {
      background: 'background',
      color: 'gray.100'
    }
  }
};

const fonts = {
  heading: "'JetBrains Mono', monospace"
};

const config: ThemeConfig = {
  initialColorMode: 'dark'
};

const components = {
  Text
};

const sizes = {
  'menu-height': '6rem'
};

const theme = {
  config,
  colors,
  styles,
  fonts,
  components,
  sizes
};

export { theme };
