import { Text } from '@/components/Text';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export default function Tab() {
  return (
    <View style={styles.container}>
      <Text>Tab Messages</Text>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
