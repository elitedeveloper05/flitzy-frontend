import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const ServicesCatalogScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [plantCount, setPlantCount] = useState('1');
  const [potSize, setPotSize] = useState('small');
  const [subscription, setSubscription] = useState('weekly');
  const [timeSlot, setTimeSlot] = useState('morning');
  const [gardenImage, setGardenImage] = useState(null);

  const services = [
    { id: '1', name: 'Lawn Mowing', description: 'Keep your lawn neat and tidy', price: '$20', image: null },
    { id: '2', name: 'Repotting Service', description: 'Repot your plants with care', price: '$30', image: null },
    { id: '3', name: 'Plant Watering', description: 'Daily plant watering service', price: '$15', image: null },
    { id: '4', name: 'General Maintenance', description: 'General garden maintenance', price: '$50', image: null },
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setModalVisible(true);
  };

  const pickImage = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access gallery is required!");
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setGardenImage(result.uri);
    }
  };

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
    } else if (selectedService?.name === 'General Maintenance') {
      return (
        <View>
          <Text style={styles.question}>Upload a picture of your garden:</Text>
          <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
            <Text style={styles.uploadButtonText}>Upload Image</Text>
          </TouchableOpacity>
          {gardenImage && <Image source={{ uri: gardenImage }} style={styles.uploadedImage} />}
        </View>
      );
    } else if (selectedService?.name === 'Lawn Mowing') {
      return (
        <View>
          <Text style={styles.question}>Lawn size (sq ft):</Text>
          <Picker
            selectedValue={plantCount}
            onValueChange={(value) => setPlantCount(value)}
            style={styles.picker}
          >
            <Picker.Item label="500" value="500" />
            <Picker.Item label="1000" value="1000" />
            <Picker.Item label="1500" value="1500" />
            <Picker.Item label="2000" value="2000" />
          </Picker>

          <Text style={styles.question}>Mowing frequency:</Text>
          <Picker
            selectedValue={subscription}
            onValueChange={(value) => setSubscription(value)}
            style={styles.picker}
          >
            <Picker.Item label="Weekly" value="weekly" />
            <Picker.Item label="Bi-Weekly" value="biweekly" />
            <Picker.Item label="Monthly" value="monthly" />
          </Picker>
        </View>
      );
    }
    return <Text>No specific questions for this service.</Text>;
  };

  const renderSubscriptionAndSlot = () => (
    <View>
      <Text style={styles.question}>Select Subscription Type:</Text>
      <Picker
        selectedValue={subscription}
        onValueChange={(value) => setSubscription(value)}
        style={styles.picker}
      >
        <Picker.Item label="One-time" value="onetime" />
        <Picker.Item label="Weekly" value="weekly" />
        <Picker.Item label="Bi-Weekly" value="biweekly" />
        <Picker.Item label="Monthly" value="monthly" />
      </Picker>

      <Text style={styles.question}>Select a Time Slot:</Text>
      <Picker
        selectedValue={timeSlot}
        onValueChange={(value) => setTimeSlot(value)}
        style={styles.picker}
      >
        <Picker.Item label="Morning" value="morning" />
        <Picker.Item label="Afternoon" value="afternoon" />
        <Picker.Item label="Evening" value="evening" />
      </Picker>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={services}
        renderItem={({ item }) => (
          <View style={styles.serviceCard}>
            <View style={styles.serviceDetails}>
              <Text style={styles.serviceName}>{item.name}</Text>
              <Text style={styles.serviceDescription}>{item.description}</Text>
              <Text style={styles.servicePrice}>{item.price}</Text>
              <TouchableOpacity style={styles.bookNowButton} onPress={() => openModal(item)}>
                <Text style={styles.bookNowText}>Book Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.serviceList}
      />

      {/* Modal for Service-specific questions */}
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedService?.name}</Text>
            {renderQuestions()}
            {renderSubscriptionAndSlot()}
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
    width: '90%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  question: {
    fontSize: 16,
    marginBottom: 10,
  },
  picker: {
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
  },
  uploadButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  uploadedImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navButton: {
    alignItems: 'center',
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ServicesCatalogScreen;
