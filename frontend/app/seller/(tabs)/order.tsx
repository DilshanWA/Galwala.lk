import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const initialLayout = { width: Dimensions.get('window').width };

// Dummy orders
const dummyOrders = [
  { id: '1', title: 'Order #1001', status: 'New' },
  { id: '2', title: 'Order #1002', status: 'Processing' },
  { id: '3', title: 'Order #1003', status: 'Ready' },
  { id: '4', title: 'Order #1004', status: 'Out for Delivery' },
  { id: '5', title: 'Order #1005', status: 'Delivered' },
  { id: '6', title: 'Order #1006', status: 'Cancelled' },
  { id: '7', title: 'Order #1007', status: 'New' },
];

// Scene templates
const OrderList = ({ status }: { status: string }) => {
  const filtered = dummyOrders.filter((order) => order.status === status);
  return (
    <FlatList
      contentContainerStyle={{ padding: 20 }}
      data={filtered}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.orderText}>{item.title}</Text>
        </View>
      )}
      ListEmptyComponent={
        <Text style={{ textAlign: 'center', marginTop: 40, color: '#999' }}>
          No {status} orders.
        </Text>
      }
    />
  );
};

// Main screen component
export default function OrderScreen() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'new', title: 'New' },
    { key: 'processing', title: 'Processing' },
    { key: 'ready', title: 'Ready' },
    { key: 'out', title: 'Out for Delivery' },
    { key: 'delivered', title: 'Delivered' },
  ]);

  const renderScene = SceneMap({
    new: () => <OrderList status="New" />,
    processing: () => <OrderList status="Processing" />,
    ready: () => <OrderList status="Ready" />,
    out: () => <OrderList status="Out for Delivery" />,
    delivered: () => <OrderList status="Delivered" />,
  });

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Feather name="arrow-left" size={24} color="black" />
        <Text style={styles.title}>My Orders</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput placeholder="Search Orders" style={styles.searchInput} />
        <Feather name="search" size={20} color="#999" />
      </View>

      {/* Tab View */}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            scrollEnabled
            style={styles.tabBar}
            indicatorStyle={styles.indicator}
            activeColor="black"
            inactiveColor="#777"
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 50,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    margin: 16,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 3,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
  },
  tabBar: {
    backgroundColor: '#fff',
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  indicator: {
    backgroundColor: 'orange',
    height: 2,
  },
  label: {
    fontWeight: 'bold',
    textTransform: 'none',
  },
  card: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fafafa',
    marginBottom: 12,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  orderText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
