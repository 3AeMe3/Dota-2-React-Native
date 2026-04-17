import { LucideIcon, ChevronLeft } from 'lucide-react-native';
import { View } from 'react-native';
import Typography from './common/typography';

type HeaderScreenProps = {
  title: string;
  icon?: LucideIcon;
  iconColor?: string;
  iconSize?: number;
};

export default function HeaderScreen({
  title,
  icon: Icon,
  iconColor = 'white',
  iconSize = 20,
}: HeaderScreenProps) {
  return (
    <View className=" flex-row items-center justify-between gap-6  py-4 ">
      <View className="rounded-full bg-[#1d1c1d] p-1">
        <ChevronLeft color={'white'} />
      </View>
      <Typography className="text-2xl" variant="title">
        {title}
      </Typography>
      {Icon ? <Icon color={iconColor} size={iconSize} /> : <View></View>}
    </View>
  );
}
