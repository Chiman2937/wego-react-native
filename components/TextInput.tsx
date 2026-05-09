import { Typography, TypographyVariant } from '@/styles/theme';
import { TextInput as RNTextInput, TextInputProps } from 'react-native';

interface Props extends TextInputProps {
  variant?: TypographyVariant;
}

export const TextInput = ({ variant, style, ...props }: Props) => {
  // ios 에서 lineHeight 깨지는 현상에 의해 lineHeight 제거
  const variantStyle = variant
    ? { ...Typography[variant], lineHeight: undefined }
    : undefined;

  return (
    <RNTextInput
      style={[{ fontFamily: 'Pretendard' }, variantStyle, style]}
      allowFontScaling={false}
      autoCapitalize="none"
      {...props}
    />
  );
};
