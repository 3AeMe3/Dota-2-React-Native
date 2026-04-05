import { ImageBackground } from 'expo-image';
import { View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { getPrimaryAttributeMeta } from '@/util/formatter';
import { LinearGradient } from 'expo-linear-gradient';

export default function HeroItem({ hero }: { hero: any }) {
  const { label, Icon, color: iconColor } = getPrimaryAttributeMeta(hero?.primary_attr);

  return (
    <Link href={{ pathname: '/hero/[heroId]', params: { heroId: hero.id } }} asChild>
      <Pressable>
        <View className="my-2 h-56 w-48 overflow-hidden rounded-xl ">
          <ImageBackground
            className="inset-5 bg-black opacity-35 shadow"
            style={{
              width: '100%',
              height: '100%',
            }}
            source={`https://cdn.cloudflare.steamstatic.com/${hero?.img}`}
            contentFit="cover"
            contentPosition={'center'}>
            <View className="absolute inset-0 bg-black/20"></View>
            <LinearGradient
              colors={['rgba(0,0,0,0.85)', 'transparent', 'rgba(0,0,0,0.9)']}
              locations={[0, 0.45, 1]}
              className="absolute inset-0"
            />

            {/* oscurece izquierda y derecha */}
            <LinearGradient
              colors={['rgba(0,0,0,0.6)', 'transparent', 'rgba(0,0,0,0.6)']}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              className="absolute inset-0"
            />
            <View className="absolute inset-0 rounded-3xl border border-cyan-200/10"></View>
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
