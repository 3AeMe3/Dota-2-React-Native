import { imageHero } from '@/util/imagesUrl';
import { View } from 'react-native';
import CardContainer from './card-container';
import Typography from './common/typography';
import { Image } from 'expo-image';

type ArticleProps = {
  title: string;
  shortDescrip: string;
  img: string;
};

export default function Article({ title, shortDescrip, img }: ArticleProps) {
  return (
    <View className="my-2  px-5 ">
      <CardContainer className=" flex-row justify-between">
        <View className="min-h-[100px] gap-2 ">
          <Typography variant="title" className="text-xl">
            {title}
          </Typography>
          <Typography color="gray" className="text-md font-semibold ">
            {shortDescrip}
          </Typography>
        </View>
        <View className="">
          <Image style={{ width: 80, height: 80 }} contentFit="cover" source={imageHero(img)} />
        </View>
      </CardContainer>
    </View>
  );
}
