import { useLocalSearchParams } from 'expo-router';
import { Settings, Sparkle, Undo2 } from 'lucide-react-native';
import { Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

import Item from '@/screens/buils/components/item';
import { useFindItem, useItems } from '@/screens/buils/queries/useItems';
import { findItemByPhase } from '@/screens/buils/utils/findItemByPhase';
import { imageItem } from '@/util/imagesUrl';
import HeaderScreen from '@/components/header-screen';

export default function Builds() {
  const { heroId } = useLocalSearchParams<{ heroId: string }>();
  const { data: item, isLoading: itemLoading } = useItems(Number(heroId));
  const { data: findItem, isLoading: findItemLoading } = useFindItem();

  if (itemLoading) {
    return <Text>Loading item..</Text>;
  }
  if (findItemLoading) {
    return <Text>Loading find item..</Text>;
  }
  const startItems = findItemByPhase({ item, findItem, phase: 'start_game_items' }).slice(0, 6);

  const earlyItems = findItemByPhase({ item, findItem, phase: 'early_game_items' }).slice(0, 6);
  const midItems = findItemByPhase({ item, findItem, phase: 'mid_game_items' }).slice(0, 6);
  const lateItems = findItemByPhase({ item, findItem, phase: 'late_game_items' }).slice(0, 6);

  return (
    <SafeAreaView className="flex-1 px-4">
      <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}>
        <HeaderScreen title={'Guia'} icon={Settings} />
        <View className="mx-auto my-5 w-full overflow-hidden rounded-3xl border border-[#911d05]  ">
          <LinearGradient
            start={[0, 0]}
            end={[1, 1]}
            dither={false}
            colors={['#911d00', '#111b3c']}
            className="flex-row items-center gap-2   p-4 ">
            <View className=" p-3">
              <Sparkle color={'white'} fill={'white'} />
            </View>
            <View>
              <Text className="font-semibold text-white">Pro-Meta Standard</Text>
              <Text className="text-white/40">Recomended for 90% of games</Text>
            </View>
          </LinearGradient>
        </View>

        <View className="my-5">
          <View className="flex-row items-center justify-between">
            <Text className="text-xl font-semibold text-white">Starting Items</Text>
            <Text className="text-white">640 Gold</Text>
          </View>
          <View className="mx-auto my-2 w-3/4 flex-row flex-wrap  items-center justify-center ">
            {startItems.map(item => (
              <Item
                key={item.name}
                title={item.name}
                description="description"
                img={imageItem(item.name)}
              />
            ))}
          </View>
        </View>
        <View className="my-5">
          <View className="flex-row items-center justify-between">
            <Text className="text-xl font-semibold text-white">Early Game</Text>
            <Text className="text-white">~10-15 Min</Text>
          </View>
          <View className="mx-auto my-2 w-3/4 flex-row flex-wrap  items-center justify-center ">
            {earlyItems.map(item => (
              <Item
                key={item.name}
                title={item.name}
                description="description"
                img={imageItem(item.name)}
              />
            ))}
          </View>
        </View>

        <View className="my-5">
          <View className="flex-row items-center justify-between">
            <Text className="text-xl font-semibold text-white">Mid Game</Text>
            <Text className="text-white">~30-35 Min</Text>
          </View>
          <View className="mx-auto my-2 w-3/4 flex-row flex-wrap  items-center justify-center ">
            {midItems.map(item => (
              <Item
                key={item.name}
                title={item.name}
                description="description"
                img={imageItem(item.name)}
              />
            ))}
          </View>
        </View>

        <View className="my-5">
          <View className="flex-row items-center justify-between">
            <Text className="text-xl font-semibold text-white">Late Game</Text>
            <Text className="text-white">~35+ Min</Text>
          </View>
          <View className="mx-auto my-2 w-3/4 flex-row flex-wrap  items-center justify-center ">
            {lateItems.map(item => (
              <Item
                key={item.name}
                title={item.name}
                description="description"
                img={imageItem(item.name)}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
