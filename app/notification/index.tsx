import CardContainer from '@/components/card-container';
import HeaderScreen from '@/components/header-screen';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Typography from '@/components/common/typography';

export default function Notification() {
  return (
    <SafeAreaView className="flex-1 px-4">
      <HeaderScreen title="Notificaciones" />
      <View className="gap-5">
        <CardContainer className="flex-row items-center gap-4">
          <Typography className="text-white">imagen</Typography>
          <View>
            <Typography variant="title" className="text-lg">
              Titulo de la notificacion
            </Typography>
            <Typography variant="body" color="gray">
              Hace 2 horas
            </Typography>
          </View>
          <Typography variant="body" color="gray" className="ml-auto">
            fire
          </Typography>
        </CardContainer>
        <CardContainer className="flex-row items-center gap-4">
          <Typography className="text-white">imagen</Typography>
          <View>
            <Typography variant="title" className="text-lg">
              Titulo de la notificacion
            </Typography>
            <Typography variant="body" color="gray">
              Hace 2 horas
            </Typography>
          </View>
          <Typography variant="body" color="gray" className="ml-auto">
            fire
          </Typography>
        </CardContainer>
        <CardContainer className="flex-row items-center gap-4">
          <Typography className="text-white">imagen</Typography>
          <View>
            <Typography variant="title" className="text-lg">
              Titulo de la notificacion
            </Typography>
            <Typography variant="body" color="gray">
              Hace 2 horas
            </Typography>
          </View>
          <Typography variant="body" color="gray" className="ml-auto">
            fire
          </Typography>
        </CardContainer>
      </View>
    </SafeAreaView>
  );
}
