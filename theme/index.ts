import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import '@fontsource/inter';

const config: ThemeConfig = {
  initialColorMode: 'dark'
};

const theme = {
  fonts: {
    body: 'Inter',
    heading: 'Inter'
  },
  config
};

export default extendTheme(theme);
