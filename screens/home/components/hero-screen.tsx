import { Text, View } from 'react-native';
import HeroHorizontalCard from './hero-card-horizontal';
import HeroFilter from './hero-filter';
import { FlashList } from '@shopify/flash-list';
import HeroItem from './hero-item';
import Navbar from '../../../components/navbar';
import { useHero } from '@/screens/overview/hooks/useHeroes';

export default function HeroScreen() {
  const { data: heroes, isLoading: isHeroLoading } = useHero();

  if (isHeroLoading) return <Text className="text-white">Loading...</Text>;

  return (
    <FlashList
      data={heroes}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <View className="m-2 flex-1  ">
          <HeroItem hero={item} />
        </View>
      )}
      numColumns={2}
      estimatedItemSize={220}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 40 }}
      ListHeaderComponent={
        <View className="pt-2">
          <Navbar />

          <View className="my-5 ">
            <View className="flex-row items-center justify-between ">
              <Text className="text-xl font-bold text-white">Continua Aprendiendo</Text>
              <Text className="text-red-400">View Guide</Text>
            </View>

            <HeroHorizontalCard />
            <HeroFilter />

            <Text className=" mt-5 text-xl font-bold text-white">Heroes Roster</Text>
          </View>
        </View>
      }
    />
  );
}
