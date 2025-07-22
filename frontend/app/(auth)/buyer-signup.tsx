import { View, TextInput, Button, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

export default function BuyerSignup() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" secureTextEntry />
      <Button title="Sign up" onPress={() => router.replace('/(buyer)/home')} />
    </SafeAreaView>
  );
}
