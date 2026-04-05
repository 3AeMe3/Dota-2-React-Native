import { useLocalSearchParams } from 'expo-router';
import { Settings, Sparkle, Undo2 } from 'lucide-react-native';
import { Text, View, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

import Item from '@/screens/buils/components/item';
import { useFindItem, useItems } from '@/screens/buils/queries/useItems';
import { findItemByPhase } from '@/screens/buils/utils/findItemByPhase';
import { imageItem } from '@/util/imagesUrl';

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
        <View className=" flex-row items-center justify-between gap-6 border-b border-white/30 py-4 ">
          <Undo2 color={'white'} />
          <View className=" mr-auto">
            <Text className=" text-2xl font-semibold text-white">Juggernaut Builds {heroId}</Text>
            <Text className=" text-white opacity-35">Core Carry Build | Patch 7.35d</Text>
          </View>
          <Settings color={'white'} />
        </View>
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
            {startItems.map((item) => (
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
            {earlyItems.map((item) => (
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
            {midItems.map((item) => (
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
            {lateItems.map((item) => (
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
