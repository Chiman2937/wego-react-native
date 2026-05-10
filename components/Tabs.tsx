import { createContext, useContext, useEffect, useState } from 'react';
import { LayoutRectangle, Pressable, View } from 'react-native';
import Animated, {
  Easing,
  createAnimatedComponent,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Text } from './Text';
import { useTheme } from '@/hooks/use-theme';

const AnimatedText = createAnimatedComponent(Text);

interface TabsContextType {
  selectedValue: string;
  onValueChange: (value: string) => void;
  registerTab: (value: string, layout: LayoutRectangle) => void;
  tabLayouts: Record<string, LayoutRectangle>;
}

const TabsContext = createContext<TabsContextType | null>(null);

const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('TabsContext must be used in Tabs Component');
  }
  return context;
};

interface TabsProviderProps {
  children: React.ReactNode;
  value: string;
  onValueChange: (value: string) => void;
}

export const Tabs = ({ children, value, onValueChange }: TabsProviderProps) => {
  const [tabLayouts, setTabLayouts] = useState<Record<string, LayoutRectangle>>(
    {},
  );

  const registerTab = (tabValue: string, layout: LayoutRectangle) => {
    setTabLayouts((prev) => ({ ...prev, [tabValue]: layout }));
  };

  return (
    <TabsContext.Provider
      value={{ selectedValue: value, onValueChange, registerTab, tabLayouts }}
    >
      {children}
    </TabsContext.Provider>
  );
};

interface ListProps {
  children: React.ReactNode;
}

const timing = (toValue: number) =>
  withTiming(toValue, { duration: 220, easing: Easing.out(Easing.cubic) });

const TabsList = ({ children }: ListProps) => {
  const theme = useTheme();
  const { selectedValue, tabLayouts } = useTabs();

  const translateX = useSharedValue(0);
  const indicatorWidth = useSharedValue(0);

  const layout = tabLayouts[selectedValue];
  if (layout) {
    translateX.value = timing(layout.x);
    indicatorWidth.value = timing(layout.width);
  }

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
    width: indicatorWidth.value,
  }));

  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: theme['gray-200'],
      }}
    >
      {children}
      <Animated.View
        style={[
          {
            position: 'absolute',
            bottom: -2,
            height: 2,
            backgroundColor: theme['mint-500'],
          },
          indicatorStyle,
        ]}
      />
    </View>
  );
};

interface ItemProps {
  children: React.ReactNode;
  value: string;
}

const TabsItem = ({ children, value }: ItemProps) => {
  const theme = useTheme();
  const { onValueChange, selectedValue, registerTab } = useTabs();
  const isSelected = selectedValue === value;

  const progress = useSharedValue(isSelected ? 1 : 0);

  useEffect(() => {
    progress.value = withTiming(isSelected ? 1 : 0, { duration: 220 });
  }, [isSelected]);

  const textStyle = useAnimatedStyle(() => ({
    color: interpolateColor(
      progress.value,
      [0, 1],
      [theme['gray-600'], theme['mint-600']],
    ),
  }));

  return (
    <Pressable
      style={{
        flex: 1,
        paddingVertical: 10,
        backgroundColor: theme['mono-white'],
      }}
      onLayout={(e) => registerTab(value, e.nativeEvent.layout)}
      onPress={() => onValueChange(value)}
    >
      <AnimatedText
        variant="text-sm-semibold"
        style={[{ textAlign: 'center' }, textStyle]}
      >
        {children}
      </AnimatedText>
    </Pressable>
  );
};

Tabs.list = TabsList;
Tabs.item = TabsItem;
