import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function Dashboard() {
  const router = useRouter();

  const addProductHandler = () => {
    router.push('/seller/screens/addproduct');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="menu" size={24} color="black" />
        <Text style={styles.headerTitle}>Seller Dashboard</Text>
        <Ionicons name="notifications-outline" size={24} color="red" />
      </View>

      {/* Search bar */}
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Search Your Products"
          style={styles.searchInput}
        />
        <Feather name="search" size={20} color="#888" />
      </View>

      {/* My Product Title */}
      <Text style={styles.sectionTitle}>My Product</Text>

      {/* Product List (dummy sample for now) */}
      <FlatList
        data={[
          {
            id: '1',
            name: 'Cordless Drill',
            category: 'Tool',
            price: '10000.00',
            image: 'https://img.icons8.com/ios-filled/100/000000/drill.png',
          },
        ]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={{ flex: 1 }}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productCategory}>Category: {item.category}</Text>
              <Text style={styles.productPrice}>Rs : {item.price}</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="create-outline" size={20} color="#333" />
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Add Button */}
      <TouchableOpacity style={styles.addButton} onPress={addProductHandler}>
        <Text style={styles.addButtonText}>Add new item</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 2,
    alignItems: 'center',
    marginTop: 16,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    elevation: 2,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  productImage: {
    width: 60,
    height: 60,
    marginRight: 12,
    resizeMode: 'contain',
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  productCategory: {
    color: '#888',
    fontSize: 13,
  },
  productPrice: {
    fontWeight: 'bold',
    marginTop: 4,
  },
  addButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 30,
  },
  addButtonText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 15,
  },
});
