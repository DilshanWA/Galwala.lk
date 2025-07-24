import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const RoleSelection = () => {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        {/* Top Orange Section */}
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={styles.headerTitle1}>Welcome to {'\n'}Galwala.lk</Text>
            <Text style={{fontSize: 13}}>Hardware ai your Doorstep</Text>
          </View>
          <Image
            source={require('../assets/images/header_illustrator.png')}
            style={styles.headerImage}
            resizeMode="contain"
          />
        </View>

        {/* Bottom White Section */}
        <View style={styles.bottomSection}>
          <Text style={styles.mainTitle}>
            How do you want to use{"\n"}
            <Text style={styles.brand}>Galwala.lk</Text>?
          </Text>
          <Text style={styles.subTitle}>select your role to continue</Text>

          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={[styles.roleButton]}
              onPress={() => router.push('/(auth)/buyer-login')}
            >
              <View style={[styles.innerButton]}>
                <AntDesign name="user" size={24} color="#fff" />
                <Text style={styles.btnText}>Continue as Buyer</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
            style={[styles.roleButton, { backgroundColor: 'transperant'  }]} // Add light pink background
            onPress={() => router.push('/(auth)/seller-login')}
          >
            <View style={styles.innerButton}>
              <AntDesign name="shoppingcart" size={24} color="#000" />
              <Text style={[styles.btnText,{color: '#000'}]}>Continue as Seller</Text>
            </View>
          </TouchableOpacity>

          </View>

          <Text style={styles.version}>Version 1.0.0</Text>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default RoleSelection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA500',
  },
  header: {
    flexDirection: 'row',
    paddingTop: 60,
    paddingHorizontal: 24,
    height: 300,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    paddingRight: 0,
  },
  headerTitle1: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 2,
  },
  headerImage: {
    width: width * 0.8,
    height: width * 1,
    marginLeft: -52,
    top: 20
  },
  bottomSection: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 100,
    marginTop: -50,
    paddingHorizontal: 24,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 8,
  },
  brand: {
    color: '#000',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonWrapper: {
    marginTop: 20,
    width: '100%',
    gap: 30,
  },
  roleButton: {
    borderRadius: 10,
    paddingVertical: 13,
    paddingHorizontal: 20,
    backgroundColor: 'black',
    borderWidth: 1,
  },
  innerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  btnText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  version: {
    fontSize: 14,
    color: '#888',
    top: 100,
    marginBottom: 10,
  },
});
