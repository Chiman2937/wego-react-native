import { Text as RNText, TextProps } from 'react-native';

export const Text = ({ children, style, ...props }: TextProps) => {
  return (
    <RNText
      allowFontScaling={false}
      lineBreakStrategyIOS="hangul-word"
      style={[{ fontFamily: 'Pretendard' }, style]}
      {...props}
    >
      {children}
    </RNText>
  );
};
