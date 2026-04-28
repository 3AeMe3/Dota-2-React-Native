import Typography from '@/components/common/typography';
import HeaderScreen from '@/components/header-screen';
import SettingItem from '@/screens/account/components/setting-item';
import {
  Bell,
  CircleQuestionMark,
  GlobeX,
  ImageUp,
  Languages,
  Mail,
  Moon,
  User,
} from 'lucide-react-native';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Account() {
  return (
    <SafeAreaView className="flex-1 px-2">
      <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}>
        <HeaderScreen title="Ajustes" />
        <View>
          <Typography color="gray" className="my-4 text-xl">
            Cuenta
          </Typography>
          <View>
            <SettingItem
              icon={User}
              title="Perfil"
              description="Gestiona tu informacion"
              onHandleClick={() => console.log('go perfil')}
            />
            <SettingItem icon={Bell} title="Notificaciones" description="Elige que recibir" />
            <SettingItem icon={Languages} title="Idioma" description="Español" />
            <SettingItem icon={Moon} title="Tema" description="Oscuro" />
          </View>
        </View>
        <View>
          <Typography color="gray" className="my-4 text-xl">
            PREFERENCIAS
          </Typography>
          <View>
            <SettingItem icon={GlobeX} title="Notificaciones" description="Solo Premium" />
            <SettingItem icon={ImageUp} title="Calidad de Imagenes" />
          </View>
        </View>
        <View>
          <Typography color="gray" className="my-4 text-xl">
            SOPORTE
          </Typography>
          <View>
            <SettingItem icon={CircleQuestionMark} title="Ayuda y preguntas frecuentes" />
            <SettingItem icon={Mail} title="Contáctanos" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
