import { ImageBackground, Pressable, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Typography from '@/components/common/typography';

export default function HeroHorizontalCard() {
  return (
    <LinearGradient
      colors={['#391211', '#1d5435']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="my-5  rounded-2xl p-0.5">
      <View className="overflow-hidden  rounded-xl bg-[#0B0F14]">
        <ImageBackground
          source={{
            uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmoewalls.com%2Fwp-content%2Fuploads%2F2022%2F05%2Fjuggernaut-dota-2-thumb-364x205.jpg&f=1&nofb=1&ipt=35c5b47c464453d5faa36de180cc20a731d3fdf253f6c2e9c1a2cba38ae9cbeb',
          }}
          className="min-h-[180px] justify-center"
          imageStyle={{ borderRadius: 14, opacity: 0.85 }}>
          <View className="flex-1 justify-between gap-2 px-5 py-3">
            <View className="flex-row items-center gap-2">
              <Typography>SIGUE APRENDIENDO</Typography>
            </View>

            <View className="flex-row items-center gap-4">
              <Typography>icon</Typography>

              <View className="gap-2">
                <Typography variant="title" className="text-xl">
                  Juggernaut
                </Typography>
                <View className="flex-row gap-2">
                  <Typography color="gray">Fácil</Typography>
                  <Typography color="gray">Fuerza</Typography>
                  <Typography color="gray">Carry</Typography>
                </View>
              </View>
            </View>

            <Pressable className="mr-auto rounded-lg border border-[#991B1B] bg-[rgba(153,27,27,0.25)] px-5 py-1">
              <Typography>Ver Guía</Typography>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
    </LinearGradient>
  );
}
