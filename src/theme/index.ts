import { MantineThemeOverride } from '@mantine/core';

export const colors = {
  primary: {
    300: '#FFCC21',
    400: '#FF963C',
    500: '#EA6C00'
  },
  secondary: {
    300: '#8FE9D0'
  },
  dark: {
    500: '#414141',
    600: '#2E2E2E'
  },
  gray: {
    400: '#777777'
  }
}

const healthCareTheme: MantineThemeOverride = {
  fontFamily: 'Noto Sans JP, sans-serif',
  
  globalStyles: (theme) => ({
    body: {
      color: colors.dark[500],
      fontFamily: 'Noto Sans JP, sans-serif',
      fontWeight: 300,
      lineHeight: '1.4375rem'
    },
  }),
};

export default healthCareTheme;