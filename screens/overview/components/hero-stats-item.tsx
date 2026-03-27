import { View, Text } from 'react-native';
import { HeroStatsItemProps } from '../types/hero-stats-item.type';

export default function HeroStatsItem({ title, content, footer }: HeroStatsItemProps) {
  return (
    <View>
      <Text className="text-gray-400/70">{title || ''}</Text>
      <Text className="text-white">{content}</Text>
      <Text className="text-gray-400/70">{footer}</Text>
    </View>
  );
}
