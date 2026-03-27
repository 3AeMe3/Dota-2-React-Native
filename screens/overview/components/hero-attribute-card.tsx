import { View, Text } from 'react-native';
import { Brain, Dumbbell, Zap } from 'lucide-react-native';

export default function HeroAttributeCard({ heroData }) {
  return (
    <View className="my-5  min-h-36 w-full flex-row gap-5 ">
      <View className="flex-1 items-center justify-center gap-2 rounded-lg bg-[#15151a]">
        <Dumbbell color={'red'} fill={'red'} />
        <Text className="text-white">
          {heroData?.base_str} + {heroData?.str_gain}
        </Text>
        <Text className="text-gray-400/80">FUERZA</Text>
      </View>
      <View className="flex-1  items-center justify-center gap-2 rounded-lg bg-[#15151a]">
        <Zap color={'green'} fill={'green'} />
        <Text className="text-white">
          {heroData?.base_agi} + {heroData?.agi_gain}
        </Text>
        <Text className="text-gray-400/80">AGILIDAD</Text>
      </View>
      <View className="  flex-1  items-center justify-center gap-2 rounded-lg bg-[#15151a]">
        <Brain color={'cyan'} fill={'cyan'} />
        <Text className="text-white">
          {heroData?.base_int} + {heroData?.int_gain}
        </Text>
        <Text className="text-gray-400/80">INTELIGENCIA</Text>
      </View>
    </View>
  );
}
