import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const nurseries = [
    { id: '1', name: 'Green Thumb Nursery', image: null },
    { id: '2', name: 'Blossom Gardens', image: null },
    { id: '3', name: 'Urban Plant Haven', image: null },
    { id: '4', name: 'Eco Roots Nursery', image: null },
    { id: '5', name: 'Sunshine Nursery', image: null },
    { id: '6', name: 'Leafy Greens', image: null },
    { id: '7', name: 'Botanic Bliss', image: null },
    { id: '8', name: 'Flora Forest', image: null },
  ];

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };

  const renderNursery = ({ item }) => (
    <View style={styles.nurseryCard}>
      <View style={styles.nurseryImagePlaceholder}>
        <Text style={styles.nurseryImageText}>Image Placeholder</Text>
      </View>
      <Text style={styles.nurseryName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        {/* Placeholder for the address */}
        <Text style={styles.address}>1234 Garden Street, Green City</Text>
        {/* Profile picture as a circle shape */}
        <View style={styles.profilePicPlaceholder}>
          <Text style={styles.profilePicText}>P</Text>
        </View>
      </View>

      <TextInput
        style={styles.searchBar}
        placeholder="Search for nurseries or services"
        placeholderTextColor="#999"
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSearch}
      />

      <View style={styles.bannerPlaceholder}>
        <Text style={styles.bannerText}>Offers Banner Placeholder</Text>
      </View>

      <FlatList
        data={nurseries}
        renderItem={renderNursery}
        keyExtractor={(item) => item.id}
        numColumns={2}  
        columnWrapperStyle={styles.columnWrapper}  
        contentContainerStyle={styles.nurseryList}
      />

      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4c3',
    padding: 20,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  address: {
    fontSize: 18,
    color: '#2e7d32',
  },
  profilePicPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicText: {
    fontSize: 20,
    color: '#fff',
  },
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  bannerPlaceholder: {
    backgroundColor: '#ccc',
    height: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  bannerText: {
    color: '#555',
    fontSize: 18,
  },
  nurseryList: {
    paddingBottom: 80,
  },
  nurseryCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  nurseryImagePlaceholder: {
    width: '100%',
    height: 100,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  nurseryImageText: {
    color: '#777',
    fontSize: 16,
  },
  nurseryName: {
    fontSize: 18,
    color: '#333',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  navButton: {
    alignItems: 'center',
  },
  navButtonText: {
    fontSize: 16,
    color: '#28a745',
  },
});

export default HomeScreen;
