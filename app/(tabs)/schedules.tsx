import { PageLayout } from '@/components/PageLayout';
import { ListCard } from '@/components/schedules/ListCard';
import { Tabs } from '@/components/Tabs';
import { mockGroups } from '@/mock/groups';
import { useMemo, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native-unistyles';

const TAB_LIST = [
  { label: '현재 모임', value: 'current' },
  { label: '나의 모임', value: 'my' },
  { label: '모임 이력', value: 'history' },
];

type TabValue = (typeof TAB_LIST)[number]['value'];

export default function Tab() {
  const [tabValue, setTabValue] = useState<TabValue>('current');
  const tabValues = TAB_LIST.map((t) => t.value);

  const swipe = Gesture.Pan()
    .runOnJS(true)
    .onEnd((e) => {
      const currentIndex = tabValues.indexOf(tabValue);
      if (e.translationX < -50 && currentIndex < tabValues.length - 1) {
        setTabValue(tabValues[currentIndex + 1] as TabValue);
      } else if (e.translationX > 50 && currentIndex > 0) {
        setTabValue(tabValues[currentIndex - 1] as TabValue);
      }
    });

  const GROUPS = useMemo(() => {
    switch (tabValue) {
      case 'current':
        return mockGroups.filter((_, i) => i <= 2);
      case 'my':
        return mockGroups.filter((_, i) => i >= 8);
      case 'history':
        return mockGroups.filter((_, i) => 2 < i && i < 8);
    }
    if (tabValue === 'my') {
    }
  }, [tabValue]);

  return (
    <PageLayout>
      <Tabs value={tabValue} onValueChange={setTabValue}>
        <Tabs.list>
          {TAB_LIST.map(({ label, value }) => (
            <Tabs.item key={value} value={value}>
              {label}
            </Tabs.item>
          ))}
        </Tabs.list>
      </Tabs>
      <GestureDetector gesture={swipe}>
        <FlatList
          data={GROUPS}
          renderItem={({ item }) => <ListCard group={item} />}
          keyExtractor={(item) => item.id.toString()}
          style={styles.listContainer}
          contentContainerStyle={styles.listContentContainer}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        />
      </GestureDetector>
    </PageLayout>
  );
}

const styles = StyleSheet.create((theme) => ({
  listContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  listContentContainer: {
    paddingBottom: 16,
  },
}));
