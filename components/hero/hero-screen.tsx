import { Text, View } from 'react-native';
import HeroHorizontalCard from './hero-card-horizontal';
import HeroFilter from './hero-filter';
import {FlashList} from "@shopify/flash-list"
import HeroItem from 'components/hero-item';
import Navbar from './navbar';
import { useHero } from 'hook/useHero';

export default function HeroScreen() {
const { data: heroes, isLoading: isHeroLoading } = useHero();

  if (isHeroLoading) return <Text className="text-white">Loading...</Text>;

  return (
   <FlashList
      data={heroes}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <View style={{ flex: 1, margin: 8 }}>
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

          <View className="my-10">
            <View className="flex-row justify-between">
              <Text className="text-xl font-bold text-white">
                Continua Aprendiendo
              </Text>
              <Text className="text-red-400">View Guide</Text>
            </View>

            <HeroHorizontalCard />
            <HeroFilter />

            <Text className="mt-8 mb-4 text-xl font-bold text-white">
              Heroes Roster
            </Text>
          </View>
        </View>
      }
    />
  );}
