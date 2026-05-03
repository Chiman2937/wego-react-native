import { StyleSheet } from 'react-native-unistyles';

const lightTheme = {
  colors: {
    'mono-white': '#ffffff',
    'mono-black': '#000000',
    'gray-50': '#f8f9fb',
    'gray-100': '#f2f4f7',
    'gray-200': '#e8ecef',
    'gray-300': '#dee1e6',
    'gray-400': '#cfd4da',
    'gray-500': '#a5afb6',
    'gray-600': '#7c868f',
    'gray-700': '#495058',
    'gray-800': '#353A40',
    'gray-900': '#212429',
    'gray-950': '#1a1d21',
    'mint-50': '#ecfdff',
    'mint-100': '#cff9fe',
    'mint-200': '#a5f0fc',
    'mint-300': '#67e3f9',
    'mint-400': '#22d3ee',
    'mint-500': '#00c9ec',
    'mint-600': '#049bc9',
    'mint-700': '#0e7090',
    'mint-800': '#155b75',
    'mint-900': '#164c63',
    'mint-950': '#0d2d3a',
    error: '#f04438',
  },
};

const darkTheme = {
  colors: {
    'mono-white': '#ffffff',
    'mono-black': '#000000',
    'gray-50': '#f8f9fb',
    'gray-100': '#f2f4f7',
    'gray-200': '#e8ecef',
    'gray-300': '#dee1e6',
    'gray-400': '#cfd4da',
    'gray-500': '#a5afb6',
    'gray-600': '#7c868f',
    'gray-700': '#495058',
    'gray-800': '#353A40',
    'gray-900': '#212429',
    'gray-950': '#1a1d21',
    'mint-50': '#ecfdff',
    'mint-100': '#cff9fe',
    'mint-200': '#a5f0fc',
    'mint-300': '#67e3f9',
    'mint-400': '#22d3ee',
    'mint-500': '#00c9ec',
    'mint-600': '#049bc9',
    'mint-700': '#0e7090',
    'mint-800': '#155b75',
    'mint-900': '#164c63',
    'mint-950': '#0d2d3a',
    error: '#f04438',
  },
};

const appThemes = { light: lightTheme, dark: darkTheme };

export const Colors = {
  light: lightTheme.colors,
  dark: darkTheme.colors,
};

export type AppThemes = typeof appThemes;

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}

StyleSheet.configure({
  themes: appThemes,
  settings: {
    initialTheme: 'light',
  },
});
