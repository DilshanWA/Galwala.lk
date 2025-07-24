import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const SellerDashboard = () => {
 const router = useRouter();
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Seller Center</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <AntDesign name="notification" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Profile */}
      <View style={styles.profile}>
        <View style={styles.avatar} />
        <View>
          <Text style={styles.username}>Sunil Hardware</Text>
          <Text style={styles.followers}>Followers 0</Text>
        </View>
      </View>

      {/* Orders */}
      <View style={styles.ordersCard}>
        <View style={styles.orderHeader}>
          <Text style={styles.orderTitle}>Order</Text>
          <Text style={styles.orderTime}>📅 24/07/2025 20:51:36</Text>
        </View>
        <View style={styles.orderStats}>
          {['To Process', 'Shipping', 'Review'].map((label, i) => (
            <TouchableOpacity key={i} style={styles.orderItem}>
              <Text style={styles.orderNumber}>0</Text>
              <Text>{label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Steps */}
      <View style={styles.stepsCard}>

        {/* Upload product card */}
        <View style={styles.uploadCard}>
          <Text style={styles.uploadTitle}>Upload products</Text>
          <Text style={styles.uploadDesc}>
            Upload the images and details of your first product.
          </Text>
          <TouchableOpacity style={styles.addBtn} onPress={() => {router.push('/seller/screens/addproduct')} }>
            <Text style={styles.addBtnText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SellerDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f8fa',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 10,
  },
  icon: {
    fontSize: 20,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    backgroundColor: '#ddd',
    borderRadius: 25,
  },
  username: {
    fontWeight: '600',
    fontSize: 16,
  },
  followers: {
    fontSize: 12,
    color: '#999',
  },
  ordersCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  orderTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  orderTime: {
    fontSize: 12,
    color: '#888',
  },
  orderStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  orderItem: {
    alignItems: 'center',
  },
  orderNumber: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFA500',
  },
  stepsCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 32,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffe8d6',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },

  stepText: {
    fontSize: 14,
  },

  uploadCard: {
    marginTop: 12,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    backgroundColor: '#fff',
  },
  uploadTitle: {
    fontWeight: '600',
    marginBottom: 6,
  },
  uploadDesc: {
    fontSize: 13,
    color: '#444',
    marginBottom: 12,
  },
  addBtn: {
    backgroundColor: '#000',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 24,
    alignSelf: 'flex-start',
  },
  addBtnText: {
    color: '#fff',
    fontWeight: '600',
  },
});
