import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const UserTypeSelectionScreen = ({ navigation }: any) => {
  const [selectedRole, setSelectedRole] = useState<'buyer' | 'seller' | null>(null);

  const handleSelection = (role: 'buyer' | 'seller') => {
    setSelectedRole(role);
    if (role === 'buyer') {
      navigation.navigate('RegisterScreen');
    } else {
      navigation.navigate('SellerRegistration');
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/images/background.jpg')} // 👈 Use your uploaded image here
      style={styles.background}
      resizeMode="cover"
    >
      
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.overlay} />
      <Image
        source={require('../../assets/images/applogo.png')}
        style={styles.logo}
        resizeMode="contain"
       />

      <View style={styles.content}>
        <Text style={styles.title}>Let’s Get Started</Text>
        <Text style={styles.subtitle}>Select your role to continue</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSelection('buyer')}
        >
          <MaterialCommunityIcons name="cart-outline" size={22} color="#000" />
          <Text style={styles.buttonText}>Continue as Buyer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSelection('seller')}
        >
          <MaterialCommunityIcons name="toolbox-outline" size={22} color="#000" />
          <Text style={styles.buttonText}>Continue as Seller</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default UserTypeSelectionScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width,
    height,
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.99)', // Dark overlay for readability
  },
  logo: {
    width: 150,
    height: 80,
    alignSelf: 'center',
    marginBottom: 30,
  },
  content: {
    paddingHorizontal: 30,
    paddingBottom: 80,
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: '#000',
    fontSize: 16,
    marginBottom: 40,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#FFA500',
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 15,
    gap: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },

});
