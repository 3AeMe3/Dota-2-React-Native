import CardContainer from '@/components/card-container';
import Typography from '@/components/common/typography';
import { LucideIcon } from 'lucide-react-native';
import { Pressable, View } from 'react-native';

type SettingItemProps = {
  icon: LucideIcon;
  title: string;
  description?: string;
  onHandleClick?: () => void;
};

export default function SettingItem({
  icon: Icon,
  title,
  description,
  onHandleClick,
}: SettingItemProps) {
  return (
    <Pressable onPress={onHandleClick}>
      <CardContainer className="flex-row items-center gap-5">
        <Icon color={'gold'} />
        <View>
          <Typography variant="title" className="text-lg">
            {title}
          </Typography>
          <Typography color="gray">{description}</Typography>
        </View>
      </CardContainer>
    </Pressable>
  );
}
