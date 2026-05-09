import { useTheme } from '@/hooks/use-theme';
import { TypographyVariant } from '@/styles/theme';
import { Pressable, PressableProps, StyleProp, ViewStyle } from 'react-native';
import { Text } from './Text';

type Size = 'sm' | 'md';

type Variant = 'primary' | 'secondary' | 'tertiary';

type Status = 'default' | 'pressed' | 'disabled';

interface Props extends PressableProps {
  variant: Variant;
  size: Size;
  title: string;
}

export const Button = ({ variant, size, title, disabled, ...props }: Props) => {
  const theme = useTheme();

  const TitleVariantMap: Record<Size, TypographyVariant> = {
    sm: 'text-sm-bold',
    md: 'text-md-bold',
  };

  const ButtonStyleMap: Record<Size, StyleProp<ViewStyle>> = {
    sm: { paddingVertical: 10, paddingHorizontal: 25.5, borderRadius: 12 },
    md: { paddingVertical: 14, borderRadius: 16, alignItems: 'center' },
  };

  const ButtonBackgroundColorMap: Record<Variant, Record<Status, string>> = {
    primary: {
      default: theme['mint-500'],
      pressed: theme['mint-700'],
      disabled: theme['gray-400'],
    },
    secondary: {
      default: theme['mono-white'],
      pressed: theme['gray-100'],
      disabled: theme['mono-white'],
    },
    tertiary: {
      default: theme['mono-white'],
      pressed: theme['gray-100'],
      disabled: theme['mono-white'],
    },
  };

  const TitleColorMap: Record<Variant, Record<Status, string>> = {
    primary: {
      default: theme['mono-white'],
      pressed: theme['mono-white'],
      disabled: theme['mono-white'],
    },
    secondary: {
      default: theme['mint-500'],
      pressed: theme['mint-700'],
      disabled: theme['gray-400'],
    },
    tertiary: {
      default: theme['gray-600'],
      pressed: theme['gray-600'],
      disabled: theme['gray-400'],
    },
  };

  return (
    <Pressable
      style={({ pressed }) => {
        const status: Status = disabled
          ? 'disabled'
          : pressed
            ? 'pressed'
            : 'default';
        return [
          { backgroundColor: ButtonBackgroundColorMap[variant][status] },
          ButtonStyleMap[size],
        ];
      }}
      disabled={disabled}
      {...props}
    >
      {({ pressed }) => {
        const status: Status = disabled
          ? 'disabled'
          : pressed
            ? 'pressed'
            : 'default';
        return (
          <Text
            variant={TitleVariantMap[size]}
            style={{ color: TitleColorMap[variant][status] }}
          >
            {title}
          </Text>
        );
      }}
    </Pressable>
  );
};
