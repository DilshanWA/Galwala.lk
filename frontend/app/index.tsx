import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const RoleSelectionScreen = ({ navigation }: any) => {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#0f0c29', '#302b63', '#24243e']}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Select Your Role</Text>

        <View style={styles.cardContainer}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push('/(auth)/buyer-login')}
          >
            
            <Text style={styles.cardText}>Buyer</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push('/(auth)/seller-login')}
          >
            
            <Text style={styles.cardText}>Seller</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default RoleSelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  cardContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    width: width * 0.8,
    height: width * 0.2,
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: 20,
    padding: 20,
    alignItems: 'center',
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ffffff30',
  },
  cardText: {
    color: '#fff',
    marginTop: 10,
    fontSize: 18,
    fontWeight: '600',
  },
});
