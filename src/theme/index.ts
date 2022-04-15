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
    '50': '#FFE6EA',
    '100': '#FEB9C5',
    '200': '#ef233c',
    '300': '#ef233c',
    '400': '#ef233c',
    '500': '#ef233c',
    '600': '#C80426',
    '700': '#96031C',
    '800': '#640213',
    '900': '#320109'
  },
  background: '#011627'
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
