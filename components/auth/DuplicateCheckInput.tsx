import { useTheme } from '@/hooks/use-theme';
import { AnyFieldApi } from '@tanstack/react-form';
import { Pressable, TextInputProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Input } from '../fields/Input';
import { Text } from '../Text';

interface Props extends TextInputProps {
  field: AnyFieldApi;
}

export const DuplicateCheckInput = ({ field, ...props }: Props) => {
  const theme = useTheme();
  const buttonDisabled =
    !field.state.meta.errors[0] && field.state.meta.isTouched;

  return (
    <Input
      value={field.state.value}
      onChangeText={field.handleChange}
      onBlur={field.handleBlur}
      rightButton={
        <Pressable style={styles.button}>
          <Text
            variant="text-xs-semibold"
            style={{
              color: buttonDisabled ? theme['gray-800'] : theme['gray-500'],
            }}
          >
            중복 확인
          </Text>
        </Pressable>
      }
      {...props}
    />
  );
};

const styles = StyleSheet.create((theme) => ({
  button: {
    backgroundColor: theme.colors['gray-100'],
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
}));
