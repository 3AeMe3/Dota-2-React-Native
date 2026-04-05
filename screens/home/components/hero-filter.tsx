import Button from 'components/common/button';
import { ScrollView, View } from 'react-native';

export default function HeroFilter() {
  return (
    <View className="h-30 my-4 w-full flex-row items-center justify-between  rounded-lg  px-4 py-2">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Button>All Heroes</Button>
        <Button>Carry</Button>
        <Button>Mid</Button>
        <Button>Offlaner</Button>
        <Button>Support</Button>
        <Button>Hard Support</Button>
      </ScrollView>
    </View>
  );
}
