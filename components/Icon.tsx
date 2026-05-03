import IconCalendarActive from '@/assets/icons/icon-calendar-1-active.svg';
import IconCalendarDefault from '@/assets/icons/icon-calendar-1-default.svg';
import IconHomeActive from '@/assets/icons/icon-home-active.svg';
import IconHomeDefault from '@/assets/icons/icon-home-default.svg';
import IconMessageActive from '@/assets/icons/icon-message-active.svg';
import IconMessageDefault from '@/assets/icons/icon-message-default.svg';
import IconPost from '@/assets/icons/icon-plus-circle.svg';
import IconUserOneActive from '@/assets/icons/icon-user-1-active.svg';
import IconUserOneDefault from '@/assets/icons/icon-user-1-default.svg';

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
};

export type IconType = keyof typeof ICONS_MAP;

interface IconProps {
  id: IconType;
}

export const Icon = ({ id }: IconProps) => {
  const IconComponent = ICONS_MAP[id];
  return <IconComponent style={{ aspectRatio: 1, width: 24 }} />;
};
