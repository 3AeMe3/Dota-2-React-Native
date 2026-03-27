import { View, Text } from 'react-native';
import { HeroStatsItemProps } from '../types/hero-stats-item.type';

export default function HeroStatsItem({ title, content, footer }: HeroStatsItemProps) {
  return (
    <View className="flex  gap-2">
      <Text className="text-center text-gray-400/70">{title || ''}</Text>
      <Text className="text-center font-semibold text-white">{content}</Text>
      <Text className="text-center text-sm text-gray-400/70">{footer}</Text>
    </View>
  );
}
