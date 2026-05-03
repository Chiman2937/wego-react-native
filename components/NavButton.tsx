import { NavRouteType } from '@/app/(tabs)/_layout';
import { Pressable } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Icon, IconType } from './Icon';

const iconIdMap: Record<NavRouteType, Record<'true' | 'false', IconType>> = {
  index: {
    false: 'home-default',
    true: 'home-active',
  },
  schedules: {
    false: 'calendar-default',
    true: 'calendar-active',
  },
  post: {
    false: 'post',
    true: 'post',
  },
  messages: {
    false: 'message-default',
    true: 'message-active',
  },
  mypage: {
    false: 'user-1-default',
    true: 'user-1-active',
  },
};

interface NavButtonProps {
  isFocused: boolean;
  route: NavRouteType;
  onPress: () => void;
}

export const NavButton = ({ isFocused, route, onPress }: NavButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Icon id={iconIdMap[route][`${isFocused}`]} />
    </Pressable>
  );
};

const styles = StyleSheet.create((theme) => ({
  button: {
    flex: 1,
    height: 57,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
