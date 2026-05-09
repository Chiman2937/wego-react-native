import { Pressable, View } from 'react-native';

// import IconBell from '@/assets/icons/icon-bell.svg';
import { Link, useRouter } from 'expo-router';
import { StyleSheet } from 'react-native-unistyles';
import { Logo } from './Logo';
import { Text } from './Text';

export const Header = () => {
  const router = useRouter();
  const onLogoPress = () => {
    router.push('/');
  };
  return (
    <View accessibilityRole="header" style={styles.container}>
      <Pressable onPress={onLogoPress}>
        <Logo variant="sm" />
      </Pressable>
      {/* <IconBell /> */}
      <Link href={'/signup'}>
        <Text variant="text-sm-semibold" style={styles.text}>
          로그인
        </Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: {
    backgroundColor: theme.colors['mono-white'],
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: 'space-between',
  },
  text: {
    color: theme.colors['gray-500'],
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
}));
