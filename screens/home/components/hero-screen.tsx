import { View, Text } from 'react-native';
import { Image } from 'expo-image';

import { Book, BookA, Compass, Search, TriangleAlert } from 'lucide-react-native';

import HeroHorizontalCard from './hero-card-horizontal';
import Navbar from '@/components/navbar';
import CardContainer from '@/components/card-container';
import { imageHero } from '@/util/imagesUrl';
import Typography from '@/components/common/typography';

export default function HeroScreen() {
  return (
    <View className="pt-2">
      <Navbar />
      <View className="my-2">
        <HeroHorizontalCard />
        <View>
          <Typography color="gray">ACCESO RAPIDO</Typography>
          <View className="my-2 flex-row justify-between gap-3">
            <CardContainer container={false} className="h-32 items-center justify-center">
              <Search color="gold" />
              <Typography className="text-wrap text-center">Buscar </Typography>
            </CardContainer>
            <CardContainer container={false} className="h-32 items-center justify-center">
              <Compass color="gold" />
              <Typography className="text-wrap text-center">Guías</Typography>
            </CardContainer>
            <CardContainer container={false} className="h-32 items-center justify-center">
              <BookA color="gold" />
              <Typography className="text-wrap text-center">Glosario</Typography>
            </CardContainer>
            <CardContainer container={false} className="h-32 items-center justify-center">
              <TriangleAlert color="gold" />
              <Typography className="text-wrap text-center">Errores </Typography>
            </CardContainer>
          </View>
          <View>
            <Text>Tu Progreso</Text>
            <View className="flex-row justify-between gap-2">
              <CardContainer>
                <Typography color="gray">Racha De aprendizaje</Typography>
                <Typography variant="title" className="font-semibold">
                  7 dias
                </Typography>
                <Text className="text-white">barra de progreso</Text>
              </CardContainer>
              <CardContainer>
                <Typography color="gray">Guías Completadas</Typography>
                <Typography variant="title" className="font-semibold">
                  12 / 24
                </Typography>
                <Text className="text-white">barra de progreso</Text>
              </CardContainer>
            </View>
          </View>
          <View className="my-6 h-36">
            <CardContainer className="flex-row items-center">
              <View className="gap-2">
                <Typography variant="title">ARTÍCULO DEL DÍA</Typography>
                <Typography className="text-md font-semibold">
                  3 Errores que te hacen perder la linea
                </Typography>
                <Typography color="gray">Evitalos y mejora desde el minuto 0</Typography>
              </View>
              <View className="mx-auto">
                <Image
                  style={{ width: 60, height: 60 }}
                  contentFit="cover"
                  source={imageHero('/apps/dota2/images/dota_react/heroes/mars.png')}
                />
              </View>
            </CardContainer>
          </View>
        </View>
      </View>
    </View>
  );
}
