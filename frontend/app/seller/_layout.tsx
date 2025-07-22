// app/seller/_layout.tsx
import { Stack } from 'expo-router';

export default function SellerStackLayout() {
  return (
    <Stack
      screenOptions={{
        animation: 'slide_from_right', 
      }}
    >
      {/* Hide header for tab group */}
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />

      {/* Show header only for this screen */}
      <Stack.Screen
        name="screens/addproduct"
        options={{
          presentation: 'modal',
          headerShown: true,
          headerTitle: 'Add Product',
          headerTitleAlign: 'center',
        }}
      />
    </Stack>
  );
}
