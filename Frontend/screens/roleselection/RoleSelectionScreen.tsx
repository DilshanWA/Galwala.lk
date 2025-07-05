import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const UserTypeSelectionScreen = ({ navigation }: any) => {
  const [selectedType, setSelectedType] = useState<'buyer' | 'seller' | null>(null);

const handleContinue = () => {
  if (selectedType === 'buyer') {
    navigation.navigate('RegisterScreen', { userType: 'buyer' });
  } else if (selectedType === 'seller') {
    navigation.navigate('SellerRegistration', { userType: 'seller' });
  }
};


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Who Are You?</Text>

      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={[
            styles.card,
            selectedType === 'buyer' && styles.selectedCard,
          ]}
          onPress={() => setSelectedType('buyer')}
        >
          <MaterialCommunityIcons name="cart-outline" size={40} color="#333" />
          <Text style={styles.cardTitle}>Buyer</Text>
          <Text style={styles.cardDesc}>Browse and order hardware items.</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.card,
            selectedType === 'seller' && styles.selectedCard,
          ]}
          onPress={() => setSelectedType('seller')}
        >
          <MaterialCommunityIcons name="toolbox-outline" size={40} color="#333" />
          <Text style={styles.cardTitle}>Seller</Text>
          <Text style={styles.cardDesc}>Sell your hardware items easily.</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[
          styles.continueButton,
          !selectedType && styles.disabledButton,
        ]}
        onPress={handleContinue}
        disabled={!selectedType}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default UserTypeSelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 30,
    textAlign: 'center',
    color: '#222',
  },
  cardContainer: {
    flexDirection: 'column',
    gap: 20,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  selectedCard: {
    borderColor: '#000',
    borderWidth: 2,
    backgroundColor: '#E0F2FE',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10,
    color: '#111',
  },
  cardDesc: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginTop: 4,
  },
  continueButton: {
    marginTop: 40,
    backgroundColor: '#FFA500',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#A5B4FC',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
});
