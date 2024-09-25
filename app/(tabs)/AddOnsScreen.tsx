import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';

const AddOnsScreen = () => {
  const [addOnQuantities, setAddOnQuantities] = useState({});
  
  const addOns = [
    { id: '1', name: 'Aloe Vera', description: 'A succulent plant that requires minimal care', price: '$10', image: require('../../assets/images/aloevera.webp') },
    { id: '2', name: 'Fiddle Leaf Fig', description: 'A popular indoor plant known for its large leaves', price: '$25', image: require('../../assets/images/mariegold.jpg') },
    { id: '3', name: 'Spider Plant', description: 'An easy-to-care-for houseplant that purifies the air', price: '$15', image: require('../../assets/images/jasmine.webp') },
    { id: '4', name: 'Snake Plant', description: 'A hardy plant that thrives on neglect', price: '$12', image: require('../../assets/images/tulip.jpg') },
  ];

  const handleQuantityChange = (id, quantity) => {
    setAddOnQuantities((prev) => ({ ...prev, [id]: quantity }));
  };

  const increaseQuantity = (id) => {
    const currentQuantity = addOnQuantities[id] || 0;
    handleQuantityChange(id, currentQuantity + 1);
  };

  const decreaseQuantity = (id) => {
    const currentQuantity = addOnQuantities[id] || 0;
    if (currentQuantity > 0) {
      handleQuantityChange(id, currentQuantity - 1);
    }
  };

  const renderAddOnItem = ({ item }) => {
    const quantity = addOnQuantities[item.id] || 0;
    return (
      <View style={styles.addOnCard}>
        <Image source={item.image} style={styles.addOnImage} />
        <View style={styles.addOnDetails}>
          <Text style={styles.addOnName}>{item.name}</Text>
          <Text style={styles.addOnDescription}>{item.description}</Text>
          <Text style={styles.addOnPrice}>{item.price}</Text>
          
          {/* Quantity Input with + and - buttons */}
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => decreaseQuantity(item.id)} style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.quantityInput}
              value={String(quantity)}
              keyboardType="numeric"
              editable={false} // Prevent manual editing
            />
            <TouchableOpacity onPress={() => increaseQuantity(item.id)} style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.address}>1234 Garden Street, Green City</Text>
        <View style={styles.profilePicPlaceholder}>
          <Text style={styles.profilePicText}>P</Text>
        </View>
      </View>

      <Text style={styles.title}>Select Add-Ons</Text>

      <FlatList
        data={addOns}
        renderItem={renderAddOnItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.addOnList}
      />

      {/* Proceed to Cart Button */}
      <TouchableOpacity style={styles.proceedButton}>
        <Text style={styles.proceedButtonText}>Proceed to Cart</Text>
      </TouchableOpacity>

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
    fontSize: 16,
    color: '#333',
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
    color: '#fff',
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2e7d32',
  },
  addOnList: {
    paddingBottom: 20,
  },
  addOnCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    marginBottom: 10,
    overflow: 'hidden',
    alignItems: 'center',
    padding: 10,
    height: 160, 
},

  addOnImage: {
    width: 80, 
    height: 80,  
    marginRight: 10,
    borderRadius: 8,  
  },
  addOnDetails: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  addOnName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addOnDescription: {
    fontSize: 14,
    color: '#555',
  },
  addOnPrice: {
    fontSize: 16,
    color: '#2e7d32',
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButton: {
    backgroundColor: '#4caf50',
    padding: 8,  
    borderRadius: 5,
    marginHorizontal: 5,
    minWidth: 30,  
  },
  quantityButtonText: {
    color: '#fff',
    fontSize: 18,  
  },
  quantityInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: 30,  
    height: 30,  
    textAlign: 'center',
    fontSize: 16,  
    marginHorizontal: 5,
  },
  proceedButton: {
    backgroundColor: '#388e3c',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20, 
    
},


  proceedButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#4caf50',
    borderRadius:10,
  },
  navButton: {
    padding: 10,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default AddOnsScreen;
