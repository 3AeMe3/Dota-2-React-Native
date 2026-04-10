import { ScrollView, View } from 'react-native';
import Button from '@/components/common/button';
import { LayoutGrid, Zap, Dumbbell, Brain, Earth } from 'lucide-react-native';

export default function HeroFilter({ isActive, setIsActive }) {
  return (
    <View className="mt-2">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Button
          isActive={isActive === 'todos'}
          onPress={() => setIsActive('todos')}
          icon={LayoutGrid}
          className="flex-row items-center gap-2"
          iconColor="orange">
          Todos
        </Button>
        <Button
          isActive={isActive === 'str'}
          onPress={() => setIsActive('str')}
          icon={Dumbbell}
          className="flex-row items-center gap-2"
          iconColor="red">
          Fuerza
        </Button>
        <Button
          isActive={isActive === 'agi'}
          onPress={() => setIsActive('agi')}
          icon={Zap}
          className="flex-row items-center gap-2"
          iconColor="#00e978">
          Agilidad
        </Button>
        <Button
          isActive={isActive === 'int'}
          onPress={() => setIsActive('int')}
          icon={Brain}
          className="flex-row items-center gap-2"
          iconColor="cyan">
          Inteligencia
        </Button>
        <Button
          isActive={isActive === 'all'}
          onPress={() => setIsActive('all')}
          icon={Earth}
          className="flex-row items-center gap-2"
          iconColor="#9f56ff">
          Universal
        </Button>
      </ScrollView>
    </View>
  );
}
