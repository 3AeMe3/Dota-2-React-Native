import { ScrollView, View } from 'react-native';
import Button from '@/components/common/button';
import { LucideIcon } from 'lucide-react-native';
import { useState } from 'react';

type Tag = {
  name: string;
  icon: LucideIcon;
};
type FilterOptionsProps = {
  tags: Tag[];
};

export default function FilterOptions({ tags }: FilterOptionsProps) {
  const [isActive, setIsActive] = useState('General');
  return (
    <View className="my-2">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {tags.map(tag => (
          <Button
            isActive={isActive === tag.name}
            key={tag.name}
            icon={tag.icon}
            iconColor="green"
            className="flex-row items-center gap-2"
            onPress={() => setIsActive(tag.name)}>
            {tag.name}
          </Button>
        ))}
      </ScrollView>
    </View>
  );
}
