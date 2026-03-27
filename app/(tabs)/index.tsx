import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeroScreen from '../../screens/home/components/hero-screen';
export default function Page() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <HeroScreen></HeroScreen>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
