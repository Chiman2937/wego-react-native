import { useTheme } from '@/hooks/use-theme';
import { TextInputProps } from 'react-native';
import { View } from 'react-native-reanimated/lib/typescript/Animated';
import { StyleSheet } from 'react-native-unistyles';
import { TextInput } from '../TextInput';

interface Props extends TextInputProps {
  rightButton: React.ReactElement;
}

export const Input = ({ rightButton, ...props }: Props) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        variant="text-md-medium"
        placeholderTextColor={theme['gray-500']}
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
    padding: 16,
  },
}));
