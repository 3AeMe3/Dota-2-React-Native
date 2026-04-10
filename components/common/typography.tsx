import { Text } from 'react-native';
type Variant = 'title' | 'body';
type Color = 'white' | 'orange' | 'gray' | 'green' | 'red' | 'cyan';

type TypographyProps = {
  children: React.ReactNode;
  variant?: Variant;
  color?: Color;
  className?: string;
};

const variantStyles: Record<Variant, string> = {
  title: 'font-sora-semibold ',
  body: 'font-inter ',
};

const colorStyles: Record<Color, string> = {
  white: 'text-white',
  gray: 'text-white/60',
  orange: 'text-orange-300',
  green: 'text-green-400',
  red: 'text-red-400',
  cyan: 'text-cyan-300',
};

export default function Typography({
  children,
  variant = 'body',
  color = 'white',
  className,
}: TypographyProps) {
  return (
    <Text className={`${variantStyles[variant]} ${colorStyles[color]} ${className}`}>
      {children}
    </Text>
  );
}
