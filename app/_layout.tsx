import '../global.css';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

const queryClient = new QueryClient();
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Inter: require('../assets/fonts/Inter_28pt-Regular.otf'),
    Inter_Medium: require('../assets/fonts/Inter_28pt-Medium.otf'),
    Inter_SemiBold: require('../assets/fonts/Inter_28pt-SemiBold.otf'),
    Inter_Bold: require('../assets/fonts/Inter_28pt-Bold.otf'),

    Sora: require('../assets/fonts/Sora-Regular.otf'),
    Sora_Medium: require('../assets/fonts/Sora-Medium.otf'),
    Sora_SemiBold: require('../assets/fonts/Sora-SemiBold.otf'),
    Sora_Bold: require('../assets/fonts/Sora-Bold.otf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#000' } }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="hero/[heroId]" />
        <Stack.Screen name="builds/[heroId]" />
      </Stack>
    </QueryClientProvider>
  );
}
