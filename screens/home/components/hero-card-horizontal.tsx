import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Badge from '@/components/common/badge';

export default function HeroHorizontalCard() {
  return (
    <LinearGradient
      colors={['#391211', '#1d5435']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradientBorder}>
      <View style={styles.innerCard}>
        <ImageBackground
          source={{
            uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmoewalls.com%2Fwp-content%2Fuploads%2F2022%2F05%2Fjuggernaut-dota-2-thumb-364x205.jpg&f=1&nofb=1&ipt=35c5b47c464453d5faa36de180cc20a731d3fdf253f6c2e9c1a2cba38ae9cbeb',
          }}
          style={styles.imagebackground}
          imageStyle={styles.imageStyle}>
          <View className="my-3 flex-1 justify-between gap-2 px-5 py-3">
            <View className="flex-row items-center gap-2">
              <Text className="text-orange-400">SIGUE APRENDIENDO</Text>
            </View>

            <View className="flex-row items-center gap-4">
              <Text className="text-white">icon</Text>

              <View className="gap-2">
                <Text className="text-xl font-semibold text-white">Juggernaut</Text>

                <View className="flex-row gap-2">
                  <Text className="text-white/60">Fácil</Text>
                  <Text className="text-white/60">Fuerza</Text>
                  <Text className="text-white/60">Carry</Text>
                </View>
              </View>
            </View>

            <Pressable className="mr-auto rounded-lg border border-red-800 bg-red-900/40 px-5 py-1">
              <Text className="text-white">Ver Guía</Text>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientBorder: {
    marginVertical: 20,
    borderRadius: 16,
    padding: 1.5,
  },
  innerCard: {
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: '#0B0F14',
  },
  imagebackground: {
    minHeight: 180,
    justifyContent: 'center',
  },
  imageStyle: {
    borderRadius: 14,
    opacity: 0.85,
  },
});
