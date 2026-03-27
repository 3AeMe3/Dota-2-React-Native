import { ImageBackground } from 'expo-image';
import { View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { getPrimaryAttributeMeta } from '@/util/formatter';

export default function HeroItem({ hero }) {
  const { label, Icon, color: iconColor } = getPrimaryAttributeMeta(hero?.primary_attr);

  return (
    <Link href={{ pathname: '/hero/[heroId]', params: { heroId: hero.id } }} asChild>
      <Pressable>
        <View className="my-2 h-56 w-48 overflow-hidden rounded-xl ">
          <ImageBackground
            style={{ width: '100%', height: '100%' }}
            source={`https://cdn.cloudflare.steamstatic.com/${hero?.img}`}
            contentFit="cover"
            contentPosition={'right'}>
            <View className="m-3 self-end rounded-3xl bg-black p-2">
              <Icon size={18} color={iconColor} strokeWidth={2} />
            </View>
            <View className="flex-1 flex-row items-end p-3 ">
              <View className="justify-between ">
                <Text className="text-xl font-bold text-white">{hero?.localized_name}</Text>
                <Text className="text-white/60 ">
                  {hero?.attack_type} | {label}
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </Pressable>
    </Link>
  );
}
