import FilterOptions from '@/components/filter-options';
import HeaderScreen from '@/components/header-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Article from '@/components/article';
import { ChessRook, Eye, LayoutGrid, LineSquiggle, Swords } from 'lucide-react-native';

export default function Fails() {
  const tags = [
    { name: 'General', icon: LayoutGrid },
    { name: 'Lineas', icon: LineSquiggle },
    { name: 'Mapa', icon: Eye },
    { name: 'Objetivos', icon: ChessRook },

    { name: 'Combate', icon: Swords },
  ];

  return (
    <SafeAreaView>
      <HeaderScreen title="Errores Comunes" />
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
