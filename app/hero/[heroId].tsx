import Badge from 'components/common/badge';
import { ImageBackground } from 'expo-image';
import { useLocalSearchParams } from 'expo-router';
import HeroAttributeCard from '@/screens/overview/components/hero-attribute-card';
import HeroStatsTable from '@/screens/overview/components/hero-stats-table';

import { useHero, useLore } from '@/screens/overview/hooks/useHeroes';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import imageHero from 'util/imageHero';

export default function HeroDetail() {
  const { heroId } = useLocalSearchParams();
  const { data, isLoading: heroLoading } = useHero();
  const { data: lore, isLoading: loreLoading } = useLore();

  const hero = data.find((h) => h.id === Number(heroId));

  if (loreLoading) {
    return <Text>Loading Lore...</Text>;
  }
  const loreName = hero.name.split('_')[3];

  return (
    <SafeAreaView>
      <ImageBackground
        source={imageHero(hero?.img)}
        style={{ height: 235, width: '100%' }}
        contentFit="contain">
        <View className="flex-1 flex-col justify-end p-3 ">
          <Text className=" text-lg font-semibold text-green-300">Agility Hero | Melee</Text>
          <Text className="text-3xl font-semibold text-white">{hero.localized_name}</Text>
          <View className="mt-2 flex-row gap-4">
            <Badge>Carry</Badge>
            <Badge>Carry</Badge>
            <Badge>Carry</Badge>
          </View>
        </View>
      </ImageBackground>
      <View className="px-5">
        <View className="mt-5 h-24 w-full flex-row gap-5 ">
          <View className="h-full flex-1 items-center justify-center rounded-lg bg-[#15151a]">
            <Text className="text-gray-400/80">Winrate</Text>
            <Text className="text-xl text-green-400">45%</Text>
          </View>
          <View className="h-full flex-1 items-center justify-center rounded-lg bg-[#15151a]">
            <Text className="text-gray-400/80">Pick Rate</Text>
            <Text className="text-xl text-red-600">12%</Text>
          </View>
          <View className="h-full  flex-1  items-center justify-center rounded-lg bg-[#15151a]">
            <Text className="text-gray-400/80">Dificultad</Text>
            <Text className="text-xl text-red-400">Medio</Text>
          </View>
        </View>

        <View className="my-5">
          <Text className="mb-3 text-xl text-white">OverView</Text>
          <Text className="text-gray-400/70">{lore[loreName].slice(0, 200)}</Text>
        </View>

        <HeroAttributeCard heroData={hero} />
        <HeroStatsTable heroData={hero} />
      </View>
    </SafeAreaView>
  );
}
