import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import '@fontsource/inter';
import '@fontsource/cutive';

const config: ThemeConfig = {
  initialColorMode: 'dark'
};

const theme = {
  fonts: {
    body: 'Inter',
    heading: 'Cutive'
  },
  config
};

export default extendTheme(theme);
