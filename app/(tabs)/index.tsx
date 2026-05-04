import { ListCard } from '@/components/groups/ListCard';
import { SearchInput } from '@/components/groups/SearchInput';
import { mockGroups } from '@/mock/groups';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export default function Tab() {
  const { search: searchParam } = useLocalSearchParams<{ search: string }>();
  const router = useRouter();
  const [search, setSearch] = useState(searchParam ?? '');

  useEffect(() => {
    setSearch(searchParam ?? '');
  }, [searchParam]);

  const handleSearchChange = (t: string) => {
    setSearch(t);
    router.setParams({ search: t });
  };

  return (
    <>
      <SearchInput onChangeText={(t) => handleSearchChange(t)} value={search} />
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.content}
        data={mockGroups}
        renderItem={({ item }) => <ListCard group={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </>
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
