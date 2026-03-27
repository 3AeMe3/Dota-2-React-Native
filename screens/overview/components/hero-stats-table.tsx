import { View, Text } from 'react-native';
import HeroStatsItem from './hero-stats-item';
import { getAttributeDamage } from '../util/getAttributeDamage';
export default function HeroStatsTable({ heroData }) {
  const attributeDamage = getAttributeDamage(heroData);

  const minDamage = heroData?.base_attack_min + attributeDamage;
  const maxDamage = heroData?.base_attack_max + attributeDamage;

  return (
    <View className="min-h-48 flex-col flex-wrap justify-between  rounded-lg bg-[#15151a] p-3">
      <View className=" flex-row items-center justify-between border border-white  ">
        <View className="flex-row gap-5">
          <HeroStatsItem title="Attack" content={`${minDamage} - ${maxDamage}`} footer="Damage" />
          <HeroStatsItem content={heroData?.attack_rate} footer="Attack Rate" />
        </View>
        <View className="flex-row gap-5">
          <View>
            <Text></Text>
            <Text className="text-white">5.7</Text>
            <Text className="text-gray-400/70">Armor</Text>
          </View>
          <View>
            <Text className="text-gray-400/70">Defense</Text>
            <Text className="text-white">30%</Text>
            <Text className="text-gray-400/70">Magic Res</Text>
          </View>
        </View>
      </View>

      <View className=" flex-row bg-red-100">
        <View className="bg-red-100">
          <View>
            <Text>Attack</Text>
            <Text>50 - 54</Text>
            <Text>Daño</Text>
          </View>
          <View>
            <Text>1.7</Text>
            <Text>Base Attack</Text>
          </View>
        </View>
        <View className="bg-red-100">
          <View>
            <Text>Attack</Text>
            <Text>50 - 54</Text>
            <Text>Daño</Text>
          </View>
          <View>
            <Text>1.7</Text>
            <Text>Base Attack</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
