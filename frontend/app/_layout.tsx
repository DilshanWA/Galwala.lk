import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native';
import '@/globla.css';

export default function RootLayout() {



  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false, animation: 'fade_from_bottom' }}>
        <Stack.Screen name="splash" />
        <Stack.Screen name="index" />
      </Stack>
    </SafeAreaView>
  );
}
