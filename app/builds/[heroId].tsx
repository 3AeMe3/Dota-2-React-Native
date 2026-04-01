import { useLocalSearchParams } from 'expo-router';
import { Settings, Sparkle, Undo2 } from 'lucide-react-native';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Item from '@/screens/buils/components/item';
import { useItems } from '@/screens/buils/queries/useItems';

export default function Builds() {
  const { heroId } = useLocalSearchParams<{ heroId: string }>();
  const { data: item, isLoading: itemLoading } = useItems(Number(heroId));
  if (itemLoading) {
    return <Text>Loading item..</Text>;
  }
  //tengo los id de items ahora necesti encotrar su respecto item en dotaconstans/build/items.id
  //creo que esta organizado de la siguiente manera : mientras mas alto el numero mas "comprado" o "popular" es
  console.log(item);
  return (
    <SafeAreaView className="flex-1 px-4">
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

      <View>
        <View className="flex-row items-center justify-between">
          <Text className="text-xl font-semibold text-white">Starting Items</Text>
          <Text className="text-white">640 Gold</Text>
        </View>
        <View className="my-2 gap-3">
          <Item title="title" description="description" img="img" />

          <Item title="title" description="description" img="img" />
        </View>
      </View>
    </SafeAreaView>
  );
}
