import Badge from 'components/common/badge';
import { ImageBackground } from 'expo-image';
import { Link, useLocalSearchParams } from 'expo-router';
import HeroAttributeCard from '@/screens/overview/components/hero-attribute-card';
import HeroStatsTable from '@/screens/overview/components/hero-stats-table';

import { useHero, useLore, useMatchups } from '@/screens/overview/hooks/useHeroes';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { imageHero } from '@/util/imagesUrl';
import Typography from '@/components/common/typography';

export default function HeroDetail() {
  const { heroId } = useLocalSearchParams<{ heroId: string }>();
  const { data = [], isLoading: heroLoading } = useHero();
  const { data: lore = {}, isLoading: loreLoading } = useLore();
  // const { data: matchups, isLoading: matchupsLoading } = useMatchups(Number(heroId));
  const hero = data.find((h: any) => h.id === Number(heroId));

  if (heroLoading || loreLoading) {
    return <Text>Loading...</Text>;
  }

  if (!hero) {
    return <Text>Hero not found</Text>;
  }

  const loreName = hero.name.split('_')[3];
  const overview = lore?.[loreName]?.slice(0, 200) ?? 'No lore available';

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={imageHero(hero.img)}
          style={{ height: 235, width: '100%' }}
          contentFit="contain">
          <View className="flex-1 flex-col justify-end p-3">
            <Typography variant="body" color="gray">
              Agility Hero | Melee
            </Typography>

            <Typography variant="title" className="text-3xl">
              {hero.localized_name}
            </Typography>

            <View className="mt-2 flex-row gap-4">
              {hero?.roles.map((role: string) => (
                <Badge key={role}>{role}</Badge>
              ))}
            </View>
          </View>
        </ImageBackground>

        <View className="px-5">
          <View className="mt-5 h-24 w-full flex-row gap-5">
            <View className="h-full flex-1 items-center justify-center rounded-lg bg-[#15151a]">
              <Typography variant="body" color="gray">
                Winrate
              </Typography>
              <Typography variant="body" color="green">
                45%
              </Typography>
            </View>

            <View className="h-full flex-1 items-center justify-center rounded-lg bg-[#15151a]">
              <Typography variant="body" color="gray">
                Pick Rate
              </Typography>
              <Typography variant="body" color="cyan">
                12%
              </Typography>
            </View>

            <View className="h-full flex-1 items-center justify-center rounded-lg bg-[#15151a]">
              <Typography variant="body" color="gray">
                Dificultad
              </Typography>
              <Typography variant="body" color="red" className="text-xl">
                Medio
              </Typography>
            </View>
          </View>

          <View className="my-5">
            <Typography variant="title" className="text-xl">
              OverView
            </Typography>
            <Typography variant="body" color="gray">
              {overview}
            </Typography>
          </View>

          <HeroAttributeCard heroData={hero} />
          <HeroStatsTable heroData={hero} />

          <Link href={{ pathname: '/builds/[heroId]', params: { heroId: hero.id } }} asChild>
            <Pressable className=" mx-auto my-5 w-3/4 items-center justify-center rounded-xl bg-red-600 px-4">
              <Text className="  my-5   px-5 py-2 font-semibold text-white">Explora Builds</Text>
            </Pressable>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
