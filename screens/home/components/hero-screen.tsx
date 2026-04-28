import { View, Text, Pressable } from 'react-native';
import { Image } from 'expo-image';

import { Search, LucideBookOpen, BookA, ShieldX } from 'lucide-react-native';

import HeroHorizontalCard from './hero-card-horizontal';
import Navbar from '@/components/navbar';
import CardContainer from '@/components/card-container';
import { imageHero } from '@/util/imagesUrl';
import Typography from '@/components/common/typography';
import { Link } from 'expo-router';

export default function HeroScreen() {
  return (
    <View className="pt-2">
      <Navbar />
      <View className="my-2 ">
        <HeroHorizontalCard />
        <View>
          <Typography variant="title" color="gray">
            ACCESO RAPIDO
          </Typography>
          <View className="my-10 flex-row items-center  justify-center gap-2 ">
            <Link href={'/search'} asChild>
              <Pressable className="flex-1 items-center  gap-2">
                <Search color={'gold'} />

                <Typography variant="title" className="text-wrap text-center ">
                  Buscar Heroes
                </Typography>
              </Pressable>
            </Link>

            <Link href={'/glosario'} asChild>
              <Pressable className=" h-full flex-1 items-center gap-2">
                <BookA color={'gold'} />
                <Typography variant="title" className="text-wrap text-center ">
                  Glosario
                </Typography>
              </Pressable>
            </Link>
            <Link href={'./guide'} asChild>
              <Pressable className=" h-full flex-1 items-center gap-2">
                <LucideBookOpen color={'gold'} />

                <Typography variant="title" className="text-wrap text-center ">
                  Guia
                </Typography>
              </Pressable>
            </Link>

            <Link href={'/fails'} asChild>
              <Pressable className="h-full flex-1 items-center gap-2  ">
                <ShieldX color={'gold'} />
                <Typography variant="title" className="text-wrap text-center ">
                  Errores Comunes
                </Typography>
              </Pressable>
            </Link>
          </View>
          <View>
            <Typography variant="title" color="gray">
              TU PROGRESO
            </Typography>
            <View className="flex-row justify-between gap-2 ">
              <CardContainer>
                <Typography>Racha De aprendizaje</Typography>
                <Typography variant="title" className="font-semibold">
                  7 dias
                </Typography>
                <Text className="text-white">barra de progreso</Text>
              </CardContainer>
              <CardContainer>
                <Typography>Guías Completadas</Typography>
                <Typography variant="title" className="font-semibold">
                  12 / 24
                </Typography>

                <Text className="text-white">barra de progreso</Text>
              </CardContainer>
            </View>
          </View>
          <View className="my-6 h-36 ">
            <CardContainer className=" flex-row items-center">
              <View className="gap-2">
                <Typography>ARTÍCULO DEL DÍA</Typography>
                <Typography className="text-md font-semibold ">
                  3 Errores que te hacen perder la linea
                </Typography>
                <Typography>Evitalos y mejora desde el minuto 0</Typography>
              </View>
              <View className="mx-auto">
                <Image
                  style={{ width: 60, height: 60 }}
                  contentFit="cover"
                  source={imageHero('/apps/dota2/images/dota_react/heroes/mars.png?')}
                />
              </View>
            </CardContainer>
          </View>
        </View>
      </View>
    </View>
  );
}
