import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Text } from '../components/Text';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text variant="display-lg-semibold">.</Text>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors['gray-100'],
    padding: 16,
  },
}));
