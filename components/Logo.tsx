import LogoLg from '@/assets/icons/icon-logo-large.svg';
import LogoSm from '@/assets/icons/icon-logo.svg';

const ICONS_MAP = {
  sm: LogoSm,
  lg: LogoLg,
} as const;

type Variant = keyof typeof ICONS_MAP;

interface Props {
  variant: Variant;
}

export const Logo = ({ variant }: Props) => {
  const LogoComponent = ICONS_MAP[variant];
  return <LogoComponent />;
};
