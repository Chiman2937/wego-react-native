import ImageEmpty from '@/assets/images/image-empty-1.png';
import { ListCard } from '@/components/groups/ListCard';
import { SearchInput } from '@/components/groups/SearchInput';
import { PageLayout } from '@/components/PageLayout';
import { Text } from '@/components/Text';
import { mockGroups } from '@/mock/groups';
import { Image } from 'expo-image';
import { useLocalSearchParams } from 'expo-router';
import { FlatList, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
export default function Tab() {
  const { search: searchParam } = useLocalSearchParams<{ search: string }>();

  const nextGroups = mockGroups.filter((group) =>
    group.title.includes(searchParam ?? ''),
  );

  return (
    <PageLayout>
      <SearchInput searchParam={searchParam} />
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
      {nextGroups.length === 0 && (
        <View style={styles.emptyContainer}>
          <Image source={ImageEmpty} style={{ width: 140, height: 140 }} />
          <Text variant="text-sm-medium" style={styles.emptyText}>
            검색 결과가 없어요.
          </Text>
        </View>
      )}
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
    padding: 16,
    paddingBottom: 0,
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
  emptyContainer: {
    position: 'absolute',
    inset: 0,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  emptyText: {
    color: theme.colors['gray-600'],
  },
}));
