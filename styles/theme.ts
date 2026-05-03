/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform, TextStyle } from 'react-native';

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;

const typobase = {
  'display-lg': {
    fontSize: 48,
    lineHeight: 60,
    letterSpacing: -0.02,
  },
  'display-md': {
    fontSize: 36,
    lineHeight: 44,
    letterSpacing: -0.02,
  },
  'display-sm': {
    fontSize: 30,
    lineHeight: 38,
  },
  'display-xs': {
    fontSize: 24,
    lineHeight: 32,
  },
  'text-xl': {
    fontSize: 20,
    lineHeight: 30,
  },
  'text-lg': {
    fontSize: 18,
    lineHeight: 28,
  },
  'text-md': {
    fontSize: 16,
    lineHeight: 24,
  },
  'text-sm': {
    fontSize: 14,
    lineHeight: 20,
  },
  'text-xs': {
    fontSize: 12,
    lineHeight: 18,
  },
  'text-2xs': {
    fontSize: 10,
    lineHeight: 14,
  },
} satisfies Record<string, TextStyle>;

const weights = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const satisfies Record<string, TextStyle['fontWeight']>;

type BaseKey = keyof typeof typobase;
type WeightKey = keyof typeof weights;
export type TypographyVariant = `${BaseKey}-${WeightKey}`;

function generateTypography(
  base: Record<string, TextStyle>,
  weights: Record<string, TextStyle['fontWeight']>,
): Record<string, TextStyle> {
  return Object.fromEntries(
    Object.entries(base).flatMap(([baseKey, style]) =>
      Object.entries(weights).map(([weightKey, fontWeight]) => [
        `${baseKey}-${weightKey}`,
        { ...style, fontWeight },
      ]),
    ),
  );
}

export const Typography = generateTypography(typobase, weights) as Record<
  TypographyVariant,
  TextStyle
>;
