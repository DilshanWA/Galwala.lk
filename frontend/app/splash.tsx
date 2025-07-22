import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const Splash = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/');
    }, 2000); // Navigate after 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [router]);
  

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
});
