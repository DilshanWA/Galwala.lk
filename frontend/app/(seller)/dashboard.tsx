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
import { Ionicons, FontAwesome5, Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Dashboard() {
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
       

      {/* Product List */}
      

      {/* Add Button */}
      <TouchableOpacity style={styles.addButton}>
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
  addButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 15,
  },
});
