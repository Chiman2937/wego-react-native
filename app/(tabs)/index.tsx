import { ListCard } from '@/components/groups/ListCard';
import { mockGroups } from '@/mock/groups';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export default function Tab() {
  return (
    <View style={styles.container}>
      <ListCard group={mockGroups[0]} />
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
}));
