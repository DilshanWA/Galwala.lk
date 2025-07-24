import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const router = useRouter();
    
    router.push('/seller/(tabs)/dashboard')

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.subtitle}>Galwala.lk Seller Center</Text>

      <Text style={styles.label}>Log in or Register with mobile number</Text>

      <View style={styles.inputWrapper}>
        <View style={styles.phoneInputContainer}>
          <Text style={styles.flag}>🇱🇰</Text>
          <Text style={styles.callingCode}>+94</Text>
          <TextInput
            style={styles.phoneInput}
            placeholder="Enter mobile number"
            keyboardType="number-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            maxLength={9}
          />
        </View>

        <TextInput
          style={styles.passwordInput}
          placeholder="Enter password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        
      <TouchableOpacity>
        <Text style={styles.passwordLogin}>Forgot password?</Text>
      </TouchableOpacity>
      </View>

      <Text style={styles.terms}>
        By continuing, you agree to our{' '}
        <Text style={styles.link}>Terms of Usage</Text> and{' '}
        <Text style={styles.link}>Privacy Policy</Text>.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Signup or Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.SignUpLink}>Don't have and account?Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'left',
    marginTop: 50,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'left',
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    marginBottom: 10,
    color: '#333',
  },
  inputWrapper: {
    marginBottom: 20,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#FFA500',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  flag: {
    fontSize: 20,
    marginRight: 6,
  },
  callingCode: {
    fontWeight: '600',
    fontSize: 16,
    marginRight: 8,
  },
  phoneInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 12,
  },
  passwordInput: {
    borderColor: '#FFA500',
    borderWidth: 1,
    borderRadius: 12,
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  terms: {
    fontSize: 12,
    color: '#666',
    marginBottom: 20,
  },
  link: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#FFA500',
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  passwordLogin: {
    textAlign: 'right',
    marginTop: 5,
    color: '#FFA500',
    fontWeight: '600',
  },
  SignUpLink: {
    textAlign: 'center',
    marginTop: 5,
    color: '#FFA500',
    fontWeight: '600',
  }
});
