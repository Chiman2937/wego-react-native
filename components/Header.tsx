import { View } from 'react-native';

// import IconBell from '@/assets/icons/icon-bell.svg';
import IconLogo from '@/assets/icons/icon-logo.svg';
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native-unistyles';
import { Text } from './Text';

export const Header = () => {
  return (
    <View accessibilityRole="header" style={styles.container}>
      <IconLogo />
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
