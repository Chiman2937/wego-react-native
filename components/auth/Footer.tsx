import { Pressable, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Text } from '../Text';

interface Props {
  title: string;
  rightButtonText: string;
  onPress: () => void;
}

export const Footer = ({ title, rightButtonText, onPress }: Props) => {
  return (
    <View style={styles.container}>
      <Text variant="text-sm-medium" style={styles.title}>
        {title}
      </Text>
      <Pressable onPress={onPress}>
        <Text variant="text-sm-semibold" style={styles.rightButtonText}>
          {rightButtonText}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: {
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: theme.colors['mono-white'],
    borderColor: theme.colors['gray-200'],
    flexDirection: 'row',
    gap: 4,
  },
  title: {
    color: theme.colors['gray-600'],
  },
  rightButtonText: {
    color: theme.colors['mint-600'],
  },
}));
