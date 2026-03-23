import {  ImageBackground } from 'expo-image';
import { View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function HeroItem({ hero }) {
  return (
    <Link href={{pathname: "/hero/[heroId]",params: {heroId: hero.id}}} asChild>
      <Pressable>
    <View className="my-2 h-56 w-48 overflow-hidden rounded-xl ">
      <ImageBackground style={{width: "100%",height: "100%"}} source={`https://cdn.cloudflare.steamstatic.com/${hero?.img}`} contentFit='cover' contentPosition={"right"}>
        <View className="flex-1 flex-row items-end p-3 ">
        <View className="justify-between ">
          <Text className="text-xl text-white font-bold">{hero?.localized_name}</Text>
          <Text className="text-white/60 ">Melee | Agility</Text>
        </View>
        {/* <Zap color={'green'} fill={'green'} size={20} /> */}
      </View>
      </ImageBackground>
      
    </View>

     </Pressable>
</Link>
  );
}
