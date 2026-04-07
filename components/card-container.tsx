import { Image } from 'expo-image';
import { View } from 'react-native';
import { imageHero } from '../util/imagesUrl';

type CartContainerProps = {
  children: React.ReactNode;
  className?: string;
  imageUrl?: string;
  size?: number;
};

export default function CardContainer({ children, className, imageUrl, size }: CartContainerProps) {
  return (
    <View
      className={`w-full  items-center gap-6 rounded-lg border border-white/10 bg-[#0e0e10]  ${className} ${imageUrl && 'flex-row'}  `}>
      <View className=" gap-2 ">{children}</View>
      {imageUrl && (
        <View>
          <Image
            contentFit="cover"
            className="flex-1 "
            source={imageHero(imageUrl)}
            style={{ height: size, width: size }}
          />
        </View>
      )}
    </View>
  );
}
