import Badge from 'components/common/badge';
import { ImageBackground } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

export default function HeroHorizontalCard() {
  return (
    <View className="my-5">
      <ImageBackground
        source={{
          uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmoewalls.com%2Fwp-content%2Fuploads%2F2022%2F05%2Fjuggernaut-dota-2-thumb-364x205.jpg&f=1&nofb=1&ipt=35c5b47c464453d5faa36de180cc20a731d3fdf253f6c2e9c1a2cba38ae9cbeb',
        }}
        style={styles.imagebackground}>
        <View className=" flex-1 justify-end gap-2 px-5 py-3 ">
          <View className="flex-row items-center gap-2">
            <Badge>CORE</Badge>
            <Badge>MELEE</Badge>
          </View>
          <Text className="text-3xl font-bold text-white">Juggernaut</Text>
          <Text className="text-gray-300 ">Agility Hero | 68% winrate</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  imagebackground: {
    height: 200,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
