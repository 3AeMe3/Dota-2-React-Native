import { View, Text } from 'react-native';
import HeroStatsItem from './hero-stats-item';
import { getAttributeDamage } from '../util/getStatsHero';
export default function HeroStatsTable({ heroData }) {
  const attributeDamage = getAttributeDamage(heroData);

  const minDamage = heroData?.base_attack_min + attributeDamage;
  const maxDamage = heroData?.base_attack_max + attributeDamage;

  const grantsArmor = heroData?.base_agi * 0.167;
  const mainArmor = (grantsArmor + heroData?.base_armor).toFixed(1);
  const baseMagicRes = '25%';

  return (
    <View className="min-h-48 flex-col flex-wrap justify-between  rounded-lg bg-[#15151a] p-5">
      {/* first row */}
      <View className=" flex-row items-center justify-between border-b border-gray-200/30 pb-5   ">
        <View className="flex-row gap-5">
          <HeroStatsItem title="ATTACK" content={`${minDamage} - ${maxDamage}`} footer="Damage" />
          <HeroStatsItem content={heroData?.attack_rate} footer="Attack Rate" />
        </View>
        <View className="flex-row gap-5">
          <HeroStatsItem content={mainArmor} footer="Armor" />
          <HeroStatsItem title="DEFENSE" content={baseMagicRes} footer="Magic Res" />
        </View>
      </View>
      {/* Second row  */}
      <View className=" flex-row items-center justify-between  border-b border-gray-200/30 py-5  ">
        <View className="flex-row gap-5">
          <HeroStatsItem title="MOBILITY" content={heroData?.move_speed} footer="Move Speed" />
          <HeroStatsItem content={heroData?.attack_type} footer="Range" />
        </View>
        <View className="flex-row gap-5">
          <HeroStatsItem content={heroData?.day_vision} footer="Day" />
          <HeroStatsItem title="VISION" content={heroData?.night_vision} footer="Night" />
        </View>
      </View>
    </View>
  );
}
