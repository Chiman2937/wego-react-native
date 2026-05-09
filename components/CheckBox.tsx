import { Pressable } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Icon } from './Icon';
import { Text } from './Text';

interface Props {
  isChecked: boolean;
  onPress: () => void;
  title: string;
}

export const Checkbox = ({ isChecked, onPress, title }: Props) => {
  const iconId = isChecked ? 'check-active' : 'check-default';

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Icon id={iconId} />
      <Text variant="text-sm-medium" style={styles.title}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  title: {
    flex: 1,
    color: theme.colors['gray-700'],
  },
}));
