import { Text as RNText, TextProps } from 'react-native';
import { Typography, TypographyVariant } from '../styles/theme';

interface Props extends TextProps {
  variant?: TypographyVariant;
}

export const Text = ({ children, style, variant, ...props }: Props) => {
  return (
    <RNText
      allowFontScaling={false}
      lineBreakStrategyIOS="hangul-word"
      style={[
        { fontFamily: 'Pretendard' },
        variant && Typography[variant],
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
};
