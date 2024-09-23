import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Updated import

const ServicesCatalogScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [plantCount, setPlantCount] = useState('1');
  const [potSize, setPotSize] = useState('small');

  const services = [
    { id: '1', name: 'Lawn Mowing', description: 'Keep your lawn neat and tidy', price: '$20', image: null },
    { id: '2', name: 'Repotting Service', description: 'Repot your plants with care', price: '$30', image: null },
    { id: '3', name: 'Plant Watering', description: 'Daily plant watering service', price: '$15', image: null },
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setModalVisible(true);
  };

  const renderService = ({ item }) => (
    <View style={styles.serviceCard}>
      <View style={styles.serviceImagePlaceholder}>
        <Text style={styles.serviceImageText}>Image Placeholder</Text>
      </View>
      <View style={styles.serviceDetails}>
        <Text style={styles.serviceName}>{item.name}</Text>
        <Text style={styles.serviceDescription}>{item.description}</Text>
        <Text style={styles.servicePrice}>{item.price}</Text>
        <TouchableOpacity style={styles.bookNowButton} onPress={() => openModal(item)}>
          <Text style={styles.bookNowText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderQuestions = () => {
    if (selectedService?.name === 'Repotting Service') {
      return (
        <View>
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

          <Text style={styles.question}>Preferred pot size:</Text>
          <Picker
            selectedValue={potSize}
            onValueChange={(value) => setPotSize(value)}
            style={styles.picker}
          >
            <Picker.Item label="Small" value="small" />
            <Picker.Item label="Medium" value="medium" />
            <Picker.Item label="Large" value="large" />
          </Picker>
        </View>
      );
    }
    return <Text>No specific questions for this service.</Text>;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={services}
        renderItem={renderService}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.serviceList}
      />

      {/* Modal for Service-specific questions */}
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedService?.name}</Text>
            {renderQuestions()}
            <TouchableOpacity style={styles.bookNowButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.bookNowText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

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
  // Keep the existing styles
  container: {
    flex: 1,
    backgroundColor: '#f0f4c3',
    padding: 20,
  },
  serviceCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  serviceImagePlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  serviceImageText: {
    color: '#777',
    fontSize: 16,
  },
  serviceDetails: {
    flex: 1,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  serviceDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  servicePrice: {
    fontSize: 16,
    color: '#28a745',
    marginBottom: 10,
  },
  bookNowButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  bookNowText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  serviceList: {
    paddingBottom: 80,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  question: {
    fontSize: 16,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 15,
  },
});

export default ServicesCatalogScreen;
