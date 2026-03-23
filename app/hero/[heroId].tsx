
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HeroDetail(){
  
  const {heroId} = useLocalSearchParams();
  console.log(heroId)
  return( 
    <SafeAreaView>   
    <View>
    <Text className="text-white">Hellow</Text>
    </View>
  </SafeAreaView>
  )
}
