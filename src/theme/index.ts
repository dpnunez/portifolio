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
  background: '#121214',
  backgroundAlpha: '#121214D9',
  'slate-dark': '#454f62'
};

const styles = {
  global: {
    'html, body': {
      background: 'background',
      color: 'gray.100',
      'scroll-behavior': 'smooth',
      '&::-webkit-scrollbar': {
        width: '12px'
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'slate-dark',
        border: '3px solid',
        borderColor: 'background',
        borderRadius: '10px'
      }
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

const menuHeight = '70px';

const sizes = {
  'menu-height': menuHeight
};

const space = {
  'menu-height': menuHeight
};

const theme = {
  config,
  colors,
  styles,
  fonts,
  components,
  sizes,
  space
};

const animations = {
  onScreen: {
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: 'beforeChildren'
      }
    },
    out: {
      opacity: 0,
      y: 40,
      transition: {
        duration: 0.5
      }
    }
  }
};

export { theme, animations };
