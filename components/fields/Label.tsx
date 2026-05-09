import { TextProps, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Text } from '../Text';

interface Props extends TextProps {
  required: boolean;
}

export const Label = ({ required, children, ...props }: Props) => {
  return (
    <View style={styles.container}>
      <Text variant="text-sm-medium" style={styles.text} {...props}>
        {children}
      </Text>
      {required && <Text style={styles.required}>*</Text>}
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
    paddingBottom: 4,
  },
  text: {
    color: theme.colors['gray-700'],
  },
  required: {
    color: theme.colors['mint-500'],
  },
}));
