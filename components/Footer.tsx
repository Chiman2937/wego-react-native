import { NavRouteType } from '@/app/(tabs)/_layout';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { NavButton } from './NavButton';

export const Footer = ({ state, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const routeName = route.name as NavRouteType;
        return (
          <NavButton
            key={route.key}
            route={routeName}
            isFocused={isFocused}
            onPress={() => navigation.navigate(route.name)}
          ></NavButton>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  container: {
    paddingBottom: 16,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
}));
