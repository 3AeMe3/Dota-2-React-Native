import { View } from 'react-native';

type CardContainerProps = {
  children: React.ReactNode;
  className?: string;
  container?: boolean;
};

export default function CardContainer({
  children,
  className,
  container = true,
}: CardContainerProps) {
  return (
    <View
      className={` gap-3 rounded-lg  p-5  ${className} ${container ? ' border border-white/10 bg-[#0e0e10]' : ''}   `}>
      {children}
    </View>
  );
}
