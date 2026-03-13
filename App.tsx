import { Image, ImageBackground, Text, TextInput, View } from 'react-native';
import './global.css';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import HerosGrid from 'components/heroes-grid';

const image = require('./assets/img/background.webp');

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="my-4 flex-1 bg-[#0f2023] px-5">
        <View>
          <View>
            <Text className="text-2xl text-white">Dota 2 Heroes</Text>
          </View>
          <TextInput
            className="border-1  w-full rounded-lg border bg-white  px-4"
            placeholder="Busca Tu Heroe"
          />
        </View>

        <HerosGrid />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
