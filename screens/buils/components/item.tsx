import { View, Text } from 'react-native';

type ItemProps = {
  title: string;
  description: string;
  img: string;
};
export default function Item({
  title = 'title',
  description = 'description',
  img = 'img',
}: ItemProps) {
  return (
    <View className="m-1 flex-row items-center gap-2 overflow-hidden rounded-3xl bg-white/10 p-4 ">
      <View className=" p-3">
        <Text className="text-white">{img}</Text>
      </View>
      <View>
        <Text className="font-semibold text-white">{title}</Text>
        <Text className="text-white/40">{description}</Text>
      </View>
    </View>
  );
}
