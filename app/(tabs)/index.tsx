import { ListCard } from '@/components/groups/ListCard';
import { SearchInput } from '@/components/groups/SearchInput';
import { PageLayout } from '@/components/PageLayout';
import { Text } from '@/components/Text';
import { mockGroups } from '@/mock/groups';
import { useLocalSearchParams, useRouter } from 'expo-router';
import debounce from 'lodash.debounce';
import { useCallback, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export default function Tab() {
  const { search: searchParam } = useLocalSearchParams<{ search: string }>();
  const router = useRouter();
  const [search, setSearch] = useState(searchParam ?? '');

  const debouncedSetParams = useCallback(
    debounce((t: string) => {
      router.setParams({ search: t });
    }, 300),
    [],
  );

  useEffect(() => {
    setSearch(searchParam ?? '');
  }, [searchParam]);

  const handleSearchChange = (t: string) => {
    setSearch(t);
    debouncedSetParams(t);
  };

  const nextGroups = mockGroups.filter((group) =>
    group.title.includes(searchParam ?? ''),
  );

  return (
    <PageLayout>
      <SearchInput onChangeText={(t) => handleSearchChange(t)} value={search} />
      {searchParam && (
        <View style={styles.searchResultContainer}>
          <Text style={styles.searchResultCaption}>{`검색결과`}</Text>
          <Text style={styles.searchResultValue}>
            {nextGroups.length}
            <Text style={styles.searchResultCaption}>개</Text>
          </Text>
        </View>
      )}
      <FlatList
        style={styles.ListContainer}
        contentContainerStyle={styles.ListContent}
        data={nextGroups}
        renderItem={({ item }) => <ListCard group={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </PageLayout>
  );
}

const styles = StyleSheet.create((theme) => ({
  page: {
    flex: 1,
  },
  ListContainer: {
    padding: 16,
    flex: 1,
  },
  searchResultContainer: {
    paddingBottom: 12,
    gap: 4,
    flexDirection: 'row',
  },
  searchResultCaption: {
    color: theme.colors['gray-800'],
  },
  searchResultValue: {
    color: theme.colors['mint-600'],
  },
  ListContent: {
    gap: 16,
    paddingBottom: 16,
  },
}));
