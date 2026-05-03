import { View } from 'react-native';

import IconBell from '@/assets/icons/icon-bell.svg';
import IconLogo from '@/assets/icons/icon-logo.svg';
import { StyleSheet } from 'react-native-unistyles';

export const Header = () => {
  return (
    <View accessibilityRole="header" style={styles.container}>
      <IconLogo />
      <IconBell />
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: {
    backgroundColor: theme.colors['mono-white'],
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 16,
    justifyContent: 'space-between',
  },
}));
