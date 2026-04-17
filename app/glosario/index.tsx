import InputText from '@/components/common/input-text';
import FilterOptions from '@/components/filter-options';
import HeaderScreen from '@/components/header-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Article from '@/components/article';

import { Languages, Sigma, Swords, Trophy } from 'lucide-react-native';
export default function Glosario() {
  const tags = [
    { name: 'General', icon: Languages },
    { name: 'Lineas', icon: Sigma },
    { name: 'Objetivos', icon: Trophy },
    { name: 'Combate', icon: Swords },
  ];

  return (
    <SafeAreaView>
      <HeaderScreen title="Glosario" />
      <InputText label="Buscar término..." />
      <FilterOptions tags={tags} />
      <Article
        title="Pull"
        shortDescrip="Tecnica para atraer los creeps"
        img="/apps/dota2/images/dota_react/heroes/mars.png?"
      />
      <Article
        title="Pull"
        shortDescrip="Tecnica para atraer los creeps"
        img="/apps/dota2/images/dota_react/heroes/mars.png?"
      />
      <Article
        title="Pull"
        shortDescrip="Tecnica para atraer los creeps"
        img="/apps/dota2/images/dota_react/heroes/mars.png?"
      />
    </SafeAreaView>
  );
}
