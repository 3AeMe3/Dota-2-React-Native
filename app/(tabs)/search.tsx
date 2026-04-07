import { View, Text, TextInput } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import HeroFilter from '../../screens/home/components/hero-filter';
import { useHero } from '../../screens/overview/hooks/useHeroes';
import HeroItem from '../../screens/home/components/hero-item';

export default function Search() {
  const { data: heroes, isLoading: isHeroLoading } = useHero();

  if (isHeroLoading) return <Text className="text-white">Loading...</Text>;

  // const [heroName, setHeroName] = useState('');
  // const [value] = useDebounce(heroName, 700);
  return (
    <FlashList
      data={heroes}
      keyExtractor={(item: typeof heroes) => String(item.id)}
      renderItem={({ item }) => (
        <View className="m-2 flex-1   ">
          <HeroItem hero={item} />
        </View>
      )}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 40 }}
      ListHeaderComponent={
        <View className="mt-10 pt-2">
          <View className="my-5  gap-5 ">
            <View className="flex-row items-center  justify-center">
              <Text className="text-xl font-bold text-white">Buscar héroe</Text>
            </View>
            <View className="mx-auto w-3/4 overflow-hidden  rounded-2xl border border-white/20 bg-white/10">
              <TextInput
                className="w-full px-4 text-white"
                placeholder="Escribe el nombre del heroe.."
                placeholderTextColor={'gray'}
              />
            </View>
            <HeroFilter />
          </View>
        </View>
      }
    />
  );
}
