import { View, Text, TextInput } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import HeroFilter from '../../screens/home/components/hero-filter';
import { useHero } from '@/screens/overview/hooks/useHeroes';
import HeroItem from '@/screens/home/components/hero-item';
import Typography from '@/components/common/typography';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';

export default function Search() {
  const [heroName, setHeroName] = useState('');
  const [value] = useDebounce(heroName, 700);

  const { data: heroes, isLoading: isHeroLoading } = useHero();
  const [isActive, setIsActive] = useState<'todos' | 'str' | 'agi' | 'int' | 'all'>('todos');

  if (isHeroLoading) return <Text className="text-white">Loading...</Text>;
  let heroFilter = heroes.filter(hero =>
    isActive === 'todos' ? hero : hero.primary_attr === isActive
  );

  if (heroName) {
    heroFilter = heroes.filter(hero =>
      hero.localized_name.toLowerCase().includes(value.toLowerCase())
    );
  }
  const handleHeroSearch = e => {
    setHeroName(e);
  };

  return (
    <FlashList
      data={heroFilter}
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
        <SafeAreaView>
          <View className="my-5  gap-5 px-5 ">
            <View className="flex-row items-center  justify-center">
              <Typography variant="title" className="text-2xl">
                Buscar Héroe
              </Typography>
            </View>
            <View className=" overflow-hidden  rounded-2xl border border-white/20 bg-white/10">
              <TextInput
                className="w-full px-4 text-white"
                placeholder="Escribe el nombre del heroe.."
                placeholderTextColor={'gray'}
                onChangeText={handleHeroSearch}
              />
            </View>
            <Typography>Este es el value: {value}</Typography>
            <HeroFilter isActive={isActive} setIsActive={setIsActive} />
          </View>
        </SafeAreaView>
      }
    />
  );
}
