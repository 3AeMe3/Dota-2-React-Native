import { View, Text } from 'react-native';
import HeroHorizontalCard from './hero-card-horizontal';
import Navbar from '../../../components/navbar';
import { Search } from 'lucide-react-native';
import CardContainer from '@/components/card-container';

export default function HeroScreen() {
  return (
    <View className="pt-2">
      <Navbar />
      <View className="my-2 ">
        <HeroHorizontalCard />
        <View>
          <Text className="text-lg text-white/60">ACCESO RÁPIDO</Text>
          <View className="my-2 flex-row justify-between gap-3">
            <CardContainer className="h-32  items-center justify-center">
              <Search color={'gold'} />
              <Text className="text-wrap text-center text-white">Buscar Heroe</Text>
            </CardContainer>
            <CardContainer className="h-32  items-center justify-center">
              <Search color={'gold'} />
              <Text className="text-wrap text-center text-white">Guias</Text>
            </CardContainer>

            <CardContainer className=" h-32  flex-1 items-center justify-center rounded-lg bg-white/10 ">
              <Search color={'gold'} />
              <Text className="text-wrap text-center text-white">Glosario</Text>
            </CardContainer>
            <CardContainer className="h-32  items-center justify-center">
              <Search color={'gold'} />
              <Text className="text-wrap text-center text-white">Errores Comunes</Text>
            </CardContainer>
          </View>
          <View>
            <Text>Tu Progreso</Text>
            <View className="flex-row justify-between gap-2 ">
              <CardContainer>
                <Text className="text-white/60">Racha De aprendizaje</Text>
                <Text className="text-lg font-semibold text-white">7 dias</Text>
                <Text className="text-white">barra de progreso</Text>
              </CardContainer>
              <CardContainer>
                <Text className="text-white/60">Guias Completadas</Text>
                <Text className="text-lg font-semibold text-white ">12/24</Text>
                <Text className="text-white">barra de progreso</Text>
              </CardContainer>
            </View>
          </View>
          <View className="my-6 h-36 ">
            <CardContainer
              size={60}
              imageUrl="/apps/dota2/images/dota_react/heroes/skeleton_king.png?"
              className=" bg-gradient-to-r from-orange-500 to-pink-500">
              <Text className="font-semibold text-orange-300">ARTICULO DEL DIA </Text>
              <Text className="text-lg font-semibold text-white">
                3 Errores que te hacen perder la linea
              </Text>
              <Text className="text-white/60">Evitalos y mejora desde el minuto 0</Text>
            </CardContainer>
          </View>
        </View>
      </View>
    </View>
  );
}
