import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 

const CartScreen = () => {
  const [quantities, setQuantities] = useState({
    plants: 1,
    pots: 1,
    soil: 1,
  });

  const [serviceType, setServiceType] = useState('one-time');
  const [plantCount, setPlantCount] = useState('1');
  const [potSize, setPotSize] = useState('small');

  const handleIncrease = (item) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item]: prevQuantities[item] + 1,
    }));
  };

  const handleDecrease = (item) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item]: prevQuantities[item] > 1 ? prevQuantities[item] - 1 : 1,
    }));
  };

  const renderAddOn = (itemName, price) => (
    <View style={styles.addOnItem}>
      <Text style={styles.addOnName}>{itemName}</Text>
      <Text style={styles.addOnPrice}>{price}</Text>
      <View style={styles.quantityControl}>
        <TouchableOpacity onPress={() => handleDecrease(itemName.toLowerCase())} style={styles.quantityButton}>
          <Text style={styles.quantityText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantities[itemName.toLowerCase()]}</Text>
        <TouchableOpacity onPress={() => handleIncrease(itemName.toLowerCase())} style={styles.quantityButton}>
          <Text style={styles.quantityText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.nurseryName}>Green Leaf Nursery</Text>

        <View style={styles.serviceCard}>
          <Text style={styles.serviceName}>Repotting Service</Text>
          <Text style={styles.servicePrice}>$30</Text>
        </View>

        {/* Service-related questions */}
        {/* <Text style={styles.sectionTitle}>Service Details</Text>
        <Text style={styles.question}>How many plants to be installed?</Text>
        <Picker
          selectedValue={plantCount}
          onValueChange={(value) => setPlantCount(value)}
          style={styles.picker}
        >
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
        </Picker>

        <Text style={styles.question}>What pot size do you prefer?</Text>
        <Picker
          selectedValue={potSize}
          onValueChange={(value) => setPotSize(value)}
          style={styles.picker}
        >
          <Picker.Item label="Small" value="small" />
          <Picker.Item label="Medium" value="medium" />
          <Picker.Item label="Large" value="large" />
        </Picker> */}

        {/* Add-ons */}
        <Text style={styles.sectionTitle}>Enhance your Service</Text>
        {renderAddOn('Plants', '$5 each')}
        {renderAddOn('Pots', '$3 each')}
        {renderAddOn('Soil', '$2 per bag')}

        {/* Subscription selection */}
        <Text style={styles.sectionTitle}>Service Frequency</Text>
        <Picker
          selectedValue={serviceType}
          onValueChange={(value) => setServiceType(value)}
          style={styles.picker}
        >
          <Picker.Item label="One-time Service" value="one-time" />
          <Picker.Item label="Weekly" value="weekly" />
          <Picker.Item label="Bi-weekly" value="bi-weekly" />
          <Picker.Item label="Monthly" value="monthly" />
        </Picker>

        {/* Price calculator */}
        <View style={styles.priceCalculator}>
          <Text style={styles.priceCalculatorText}>Estimated Total</Text>
          <Text style={styles.priceCalculatorText}>Service Fee, GST, and more</Text>
        </View>

        {/* Proceed to Pay */}
        <TouchableOpacity style={styles.proceedButton}>
          <Text style={styles.proceedButtonText}>Proceed to Pay</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
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
    backgroundColor: '#e0f7fa',
    padding: 20,
    paddingTop: 85,
  },
  scrollViewContent: {
    paddingBottom: 120, 
  },
  nurseryName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#388e3c',
    textAlign: 'center',
    marginBottom: 20,
  },
  serviceCard: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginBottom: 20,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  servicePrice: {
    fontSize: 16,
    color: '#388e3c',
  },
  questionSection: {
    marginTop: 10,
  },
  question: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  quantityButton: {
    backgroundColor: '#388e3c',
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00796b',
    marginBottom: 10,
  },
  addOnItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  addOnName: {
    fontSize: 16,
    color: '#333',
  },
  addOnPrice: {
    fontSize: 16,
    color: '#388e3c',
  },
  priceCalculator: {
    backgroundColor: '#f1f8e9',
    padding: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginVertical: 30,
  },
  priceCalculatorText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#388e3c',
  },
  proceedButton: {
    backgroundColor: '#388e3c',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
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
    backgroundColor: '#ffffff',
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
    color: '#00796b',
  },
});

export default CartScreen;
