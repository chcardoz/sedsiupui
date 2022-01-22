import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import colors from './colors';
import '@fontsource/inter';
import '@fontsource/nunito-sans';

const config: ThemeConfig = {
  initialColorMode: 'dark'
};

const overrides = {
  colors,
  fonts: {
    body: 'Inter',
    heading: 'Nunito Sans'
  },
  config
};

export default extendTheme(overrides);
