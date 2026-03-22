import { Image } from 'expo-image';
import { Zap } from 'lucide-react-native';
import { Text, View } from 'react-native';
export default function HerosGrid() {
  return (
    <View className="my-10 flex-1 flex-row flex-wrap justify-around gap-5">
      <View className="my-2 h-56 w-48 overflow-hidden rounded-xl border border-[#0e272c] bg-[#0e272c]">
        <Image
          style={{ width: '100%', height: '75%' }}
          className="h-full w-full bg-black"
          source="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.goodfon.com%2Foriginal%2F320x400%2F5%2Fee%2Fdota-2-anti-mage-hero-geroi-personazh-antimag.jpg&f=1&nofb=1&ipt=6a9f7296779fb91c94046e1e995ea79325791ad217d5f0aeeb7b45606d7b8dfa"
          contentFit="cover"
        />
        <View className="flex-1 flex-row items-center justify-between px-3 py-2 ">
          <View className="justify-between ">
            <Text className="text-xl text-white">Anti-Mage</Text>
            <Text className="text-white/40 ">Melee | Agility</Text>
          </View>
          <Zap color={'green'} fill={'green'} size={20} />
        </View>
      </View>

      <View className="h-52 w-48 bg-white"></View>
      <View className="h-52 w-48 bg-white"></View>
      <View className="h-52 w-48 bg-white"></View>
    </View>
  );
}
