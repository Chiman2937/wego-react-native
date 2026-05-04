import { ListCard } from '@/components/groups/ListCard';
import { mockGroups } from '@/mock/groups';
import { FlatList } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export default function Tab() {
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      data={mockGroups}
      renderItem={({ item }) => <ListCard group={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
    gap: 16,
  },
}));
