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
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const RoleSelection = () => {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        {/* Top Banner */}
        <LinearGradient colors={['#FFA500', '#f0ce8fff']} style={styles.banner}>
          <Text style={styles.appTitle}>Galwala.lk</Text>
          <Text style={styles.heading}>
            Your Hardware{'\n'}Marketplace{'\n'}On Mobile
          </Text>
        </LinearGradient>

        {/* Role Selection */}
        <View style={styles.contentWrapper}>
          <Text style={styles.text1}>How Do You Want to Use {'\n'}Galwala.lk ?</Text>
          <Text style={styles.appTitle}>Select Your Role</Text>

          {/* Role Buttons */}

          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={styles.roleButton}
              onPress={() => router.push('/(auth)/buyer-login')}
            >
              <View style={styles.innerButton}>
                <AntDesign name="user" size={24} color="#4A4A4A" />
                <Text style={styles.btnText}>Continue as Buyer</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
            style={[styles.roleButton, { }]} // Add light pink background
            onPress={() => router.push('/(auth)/seller-login')}
          >
            <View style={styles.innerButton}>
              <AntDesign name="shoppingcart" size={24} color="#4A4A4A" />
              <Text style={styles.btnText}>Continue as Seller</Text>
            </View>
          </TouchableOpacity>

          </View>
        </View>
      </KeyboardAvoidingView>
      <Text style={styles.versionText}>Version 1.0.0</Text>
    </ScrollView>
  );
};

export default RoleSelection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  banner: {
    height: 380,
    borderBottomRightRadius: 100,
    paddingHorizontal: 24,
    paddingTop: 60,
    justifyContent: 'center',
  },
  appTitle: {
    color: '#000',
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 20,
  },
  heading: {
    color: '#000',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 40,
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
  },
  text1: {
    fontSize: 19,
    color: '#222',
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  buttonWrapper: {
    marginTop: 20,
    width: '100%',
    gap: 30,
  },
  roleButton: {
    borderRadius: 15,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderColor: '#000',
    borderWidth: 1,
  },
  innerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  btnText: {
    fontSize: 18,
    color: '#333',
    fontWeight: '600',
  },
  versionText: {
    textAlign: 'center',
    color: '#888',
    fontSize: 14,
    marginTop: 40,
  marginBottom: 20,
 },

});
