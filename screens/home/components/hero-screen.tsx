import { View, Text } from 'react-native';
import { Image } from 'expo-image';

import { Search } from 'lucide-react-native';

import HeroHorizontalCard from './hero-card-horizontal';
import Navbar from '@/components/navbar';
import CardContainer from '@/components/card-container';
import { imageHero } from '@/util/imagesUrl';
import Typography from '@/components/common/typography';

export default function HeroScreen() {
  return (
    <View>
      <Navbar />
      <View className="my-2 ">
        <HeroHorizontalCard />
        <View>
          <Typography variant="title" color="gray">
            ACCESO RÁPIDO
          </Typography>
          <View className="my-2 flex-row justify-between gap-3">
            <CardContainer className="h-32  items-center justify-center">
              <Search color={'gold'} />
              <Typography color="gray" className="text-wrap text-center ">
                Buscar Heroe
              </Typography>
            </CardContainer>
            <CardContainer className="h-32  items-center justify-center">
              <Search color={'gold'} />
              <Typography color="gray" className="text-wrap text-center ">
                Guías
              </Typography>
            </CardContainer>

            <CardContainer className="h-32 items-center justify-center">
              <Search color={'gold'} />
              <Typography color="gray" className="text-wrap text-center ">
                Glosario
              </Typography>
            </CardContainer>

            <CardContainer className="h-32  items-center justify-center">
              <Search color={'gold'} />
              <Typography color="gray" className="text-wrap text-center ">
                Errores Comunes
              </Typography>
            </CardContainer>
          </View>
          <View>
            <Text>Tu Progreso</Text>
            <View className="flex-row justify-between gap-2 ">
              <CardContainer>
                <Typography color="gray">Racha De aprendizaje</Typography>
                <Typography className="font-inter-semibold text-xl">7 dias</Typography>
                <Text className="text-white">barra de progreso</Text>
              </CardContainer>
              <CardContainer>
                <Typography color="gray">Guías Completadas</Typography>

                <Typography className="font-inter-semibold text-xl">12 / 24</Typography>
                <Text className="text-white">barra de progreso</Text>
              </CardContainer>
            </View>
          </View>
          <View className="my-6 h-36 ">
            <CardContainer className=" flex-row items-center">
              <View className="gap-2">
                <Typography color="orange" variant="title">
                  ARTÍCULO DEL DÍA
                </Typography>
                <Typography className="text-md font-inter-semibold ">
                  3 Errores que te hacen perder la linea
                </Typography>
                <Typography color="gray">Evitalos y mejora desde el minuto 0</Typography>
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
