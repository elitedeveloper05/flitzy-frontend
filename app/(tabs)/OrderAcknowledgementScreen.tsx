import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const OrderAcknowledgementScreen = () => {
  return (
    <View style={styles.container}>
      {/* Success Message */}
      <Text style={styles.successMessage}>Your order has been placed successfully!</Text>

      {/* Map Tracking Placeholder */}
      <View style={styles.mapPlaceholder}>
        <Text style={styles.mapPlaceholderText}>Track your serviceman here</Text>
      </View>

      {/* Question to Call Serviceman */}
      <Text style={styles.callQuestion}>Want to call your serviceman? He will be at your doorstep shortly!</Text>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.callButton}>
          <Text style={styles.buttonText}>Call Serviceman</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.homeButton}>
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
    paddingHorizontal: 20,
  },
  successMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#388e3c',
    textAlign: 'center',
    marginBottom: 20,
  },
  mapPlaceholder: {
    width: '100%',
    height: 400,
    backgroundColor: '#f1f8e9',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  mapPlaceholderText: {
    fontSize: 18,
    color: '#777',
  },
  callQuestion: {
    top : 30,
    fontSize: 18,
    color: '#00796b',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  callButton: {
    top : 40,
    backgroundColor: '#388e3c',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  homeButton: {
    top: 40,
    backgroundColor: '#00796b',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OrderAcknowledgementScreen;
