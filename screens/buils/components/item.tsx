import { Image } from 'expo-image';
import { View } from 'react-native';

type ItemProps = {
  title: string;
  description: string;
  img: string;
};
export default function Item({ title, description, img }: ItemProps) {
  return (
    <View className="m-1  flex-row  items-center justify-center  overflow-hidden    ">
      <View className="overflow-hidden rounded-xl border border-white/30 p-1">
        <Image source={img} contentFit="contain" style={{ width: 50, height: 50 }} />
      </View>
    </View>
  );
}
