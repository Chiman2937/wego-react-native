import { AnyFieldApi } from '@tanstack/react-form';
import { TextInputProps, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Text } from '../Text';

interface Props extends TextInputProps {
  field: AnyFieldApi;
}

export const Hint = ({ field, ...props }: Props) => {
  const error = field.state.meta.errors[0]?.message;

  if (!error) return;

  return (
    <View style={styles.container}>
      <Text variant="text-sm-medium" style={styles.text} {...props}>
        {error}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: {
    paddingLeft: 8,
    paddingTop: 6,
  },
  text: {
    color: theme.colors['error'],
  },
}));
