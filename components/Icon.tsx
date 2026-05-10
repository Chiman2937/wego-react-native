import IconCalendarActive from '@/assets/icons/icon-calendar-1-active.svg';
import IconCalendarDefault from '@/assets/icons/icon-calendar-1-default.svg';
import IconCalendarFour from '@/assets/icons/icon-calendar-4.svg';
import IconCheckActive from '@/assets/icons/icon-check-active.svg';
import IconCheckDefault from '@/assets/icons/icon-check-default.svg';
import IconHomeActive from '@/assets/icons/icon-home-active.svg';
import IconHomeDefault from '@/assets/icons/icon-home-default.svg';
import IconMapPinFive from '@/assets/icons/icon-map-pin-5.svg';
import IconMessageActive from '@/assets/icons/icon-message-active.svg';
import IconMessageDefault from '@/assets/icons/icon-message-default.svg';
import IconPost from '@/assets/icons/icon-plus-circle.svg';
import IconSearch from '@/assets/icons/icon-search.svg';
import IconUserOneActive from '@/assets/icons/icon-user-1-active.svg';
import IconUserOneDefault from '@/assets/icons/icon-user-1-default.svg';
import IconUserTwo from '@/assets/icons/icon-users-2.svg';
import IconHidden from '@/assets/icons/icon-visible-false.svg';
import IconVisible from '@/assets/icons/icon-visible-true.svg';
import IconX1 from '@/assets/icons/icon-x-1.svg';

import { StyleProp, ViewStyle } from 'react-native';

const ICONS_MAP = {
  'home-default': IconHomeDefault,
  'home-active': IconHomeActive,
  'calendar-default': IconCalendarDefault,
  'calendar-active': IconCalendarActive,
  post: IconPost,
  'message-default': IconMessageDefault,
  'message-active': IconMessageActive,
  'user-1-default': IconUserOneDefault,
  'user-1-active': IconUserOneActive,
  'user-2': IconUserTwo,
  'calendar-4': IconCalendarFour,
  'map-pin-5': IconMapPinFive,
  search: IconSearch,
  visible: IconVisible,
  hidden: IconHidden,
  'check-default': IconCheckDefault,
  'check-active': IconCheckActive,
  x1: IconX1,
};

export type IconType = keyof typeof ICONS_MAP;

interface IconProps {
  id: IconType;
  style?: StyleProp<ViewStyle>;
}

export const Icon = ({ id, style }: IconProps) => {
  const IconComponent = ICONS_MAP[id];
  return <IconComponent style={[{ aspectRatio: 1, width: 24 }, style]} />;
};
