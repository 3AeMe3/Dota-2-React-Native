import { View } from 'react-native';

type CardContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function CardContainer({ children, className }: CardContainerProps) {
  return (
    <View
      className={`flex-1 gap-3 rounded-lg border border-white/10 bg-[#0e0e10] p-5  ${className}   `}>
      {children}
    </View>
  );
}
