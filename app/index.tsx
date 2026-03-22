import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Navbar from 'components/hero/navbar';
import Hero from 'components/hero/hero';

export default function Page() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Navbar />
      <Hero />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
