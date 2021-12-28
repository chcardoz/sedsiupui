import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import '@fontsource/inter';
import '@fontsource/nunito-sans';

const config: ThemeConfig = {
  initialColorMode: 'dark'
};

const theme = {
  fonts: {
    body: 'Inter',
    heading: 'Nunito Sans'
  },
  config
};

export default extendTheme(theme);
