import { Footer } from '@/components/Footer';
import { Tabs } from 'expo-router';

const navRouteList = [
  'index',
  'schedules',
  'post',
  'messages',
  'mypage',
] as const;
export type NavRouteType = (typeof navRouteList)[number];

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{ tabBarActiveTintColor: 'black', headerShown: false }}
      tabBar={(props) => <Footer {...props} />}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="schedules" />
      <Tabs.Screen name="post" />
      <Tabs.Screen name="messages" />
      <Tabs.Screen name="mypage" />
    </Tabs>
  );
}
