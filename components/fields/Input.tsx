import { useTheme } from '@/hooks/use-theme';
import { TextInputProps, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { TextInput } from '../TextInput';

interface Props extends TextInputProps {
  rightButton?: React.ReactElement;
}

export const Input = ({ rightButton, ...props }: Props) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        variant="text-md-medium"
        placeholderTextColor={theme['gray-500']}
        {...props}
      />
      {rightButton}
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: {
    borderWidth: 1,
    borderColor: theme.colors['gray-300'],
    borderRadius: 16,
    flexDirection: 'row',
    padding: 14,
    backgroundColor: theme.colors['mono-white'],
    gap: 4,
    minHeight: 56,
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
}));
