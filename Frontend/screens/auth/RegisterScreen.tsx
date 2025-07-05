import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  SafeAreaView,
  StatusBar,
  Image,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleLogin = () => {
    console.log('Logging in with:', email, password);
    // Add your login logic here
  };

  const navigateRegister = () => {
    navigation.replace('LoginScreen');
  };

  return (
   
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 20}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
          >
            <Image
              source={require('../../assets/images/applogo.png')}
              style={styles.logo}
              resizeMode="contain"
            />

            <Text style={styles.title}>Create Your Account</Text>
            <Text style={styles.subtitle}>Sign up to get started</Text>


            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="johndoe@gmail.com"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#999"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot password?</Text>
              </TouchableOpacity>
              
            </View>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateRegister}>
              <Text style={styles.footerText}>Don't have an account?Sign in</Text>
            </TouchableOpacity>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const ORANGE_YELLOW = '#FFA500';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingBottom: 40,
    paddingTop: 20,
  },
  logo: {
    width: 200,
    height: 80,
    alignSelf: 'center',
    marginBottom: 30,
  },
  title: {
    fontWeight: 'bold',
    fontFamily: 'Prompt-Medium',
    fontSize: 30,
    color: '#000',
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontFamily: 'Prompt-Regular',
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
    marginTop: -10,
    marginBottom: 40,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 15,
    fontFamily: 'Prompt-Medium',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 15,
    fontFamily: 'Prompt-Regular',
    color: '#000',
    backgroundColor: '#f9f9f9',
  },
  forgotPassword: {
    fontSize: 14,
    color: '#555',
    marginTop: 6,
    alignSelf: 'flex-end',
    fontFamily: 'Prompt-Regular',
  },
  button: {
    height: 50,
    backgroundColor: ORANGE_YELLOW,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Prompt-Medium',
    color: '#000',
  },
  footerText: {
    marginTop: 24,
    textAlign: 'center',
    color: '#000',
    fontSize: 14,
    fontFamily: 'Prompt-Regular',
  },
}); 