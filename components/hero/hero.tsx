import { Text, View } from 'react-native';
import HeroHorizontalCard from './hero-card-horizontal';
import HeroFilter from './hero-filter';

export default function Hero() {
  return (
    <View className="my-10 ">
      <View
        className="flex-row justify-between
      ">
        <Text className="text-xl font-bold text-white">Continua Aprendiendo</Text>
        <Text className="text-red-400"> View Guide</Text>
      </View>
      <HeroHorizontalCard />
      <HeroFilter />
    </View>
  );
}
