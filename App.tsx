import { Image, ImageBackground, Text, TextInput, View } from 'react-native';
import './global.css';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import HerosGrid from 'components/heroes-grid';

const image = require('./assets/img/background.webp');

export default function App() {
  return (
    <SafeAreaProvider>
      <ImageBackground source={image} resizeMode="cover" className="flex-1 justify-center">
        <SafeAreaView className="flex-1">
          <View className="flex-1 items-center  ">
            <Image
              source={require('./assets/img/Dota-2-logo.webp')}
              resizeMode="cover"
              className="size-12"
            />
            <View className="w-full px-10">
              <TextInput
                className="border-1  w-full rounded-lg border bg-white  px-4"
                placeholder="Busca Tu Heroe"
              />
            </View>
            <HerosGrid />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}
