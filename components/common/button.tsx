import { Pressable } from 'react-native';
import Typography from './typography';
import { LucideIcon } from 'lucide-react-native';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  icon?: LucideIcon;
  iconColor?: string;
  iconSize?: number;
  isActive?: boolean;
  onPress?: () => void;
};

export default function Button({
  children,
  className,
  icon: Icon,
  iconColor,
  iconSize = 20,
  isActive = false,
  onPress,
}: ButtonProps) {
  return (
    <Pressable
      onPress={isActive ? undefined : onPress}
      className={`mx-2 rounded-3xl   px-3 py-2 ${className} ${isActive ? 'border border-red-800 bg-red-900/40' : 'border border-white/20 bg-white/10'}`}>
      {Icon && <Icon color={iconColor} size={iconSize} />}

      <Typography color={isActive ? 'white' : 'gray'}>{children}</Typography>
    </Pressable>
  );
}
