import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const LocationRequestScreen = () => {
  const handleAllowLocation = () => {
    console.log('Allowing location access');
  };

  const handleEnterLocationManually = () => {
    // Logic for entering location manually
    console.log('Entering location manually');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What’s your location?</Text>
      <Text style={styles.subtitle}>
        We need your location to show available nurseries and products.
      </Text>
      <View style={styles.mapPlaceholder}>
        <Text style={styles.mapText}>Map Placeholder</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleAllowLocation}>
          <Text style={styles.buttonText}>Allow Location Access</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleEnterLocationManually}>
          <Text style={styles.buttonText}>Enter Location Manually</Text>
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
    padding: 20,
    backgroundColor: '#f0f4c3', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  mapPlaceholder: {
    width: '100%',
    height: Dimensions.get('window').height * 0.4, 
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  mapText: {
    color: '#777',
    fontSize: 18,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 30,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LocationRequestScreen;
