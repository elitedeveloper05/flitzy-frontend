import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Modal, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { launchImageLibrary } from 'react-native-image-picker';

const ServicesCatalogScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [plantCount, setPlantCount] = useState('1');
  const [potSize, setPotSize] = useState('small');
  const [subscription, setSubscription] = useState('weekly');
  const [timeSlot, setTimeSlot] = useState('morning');
  const [searchQuery, setSearchQuery] = useState('');
  const [serviceDate, setServiceDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [gardenImage, setGardenImage] = useState(null);

  const services = [
    { id: '1', name: 'Lawn Mowing', description: 'Keep your lawn neat and tidy', price: '$1/sq feet', image: require('../../assets/images/lawnmoving.jpeg')},
    { id: '2', name: 'Repotting Service', description: 'Repot your plants with care', price: '$2/pot', image: require('../../assets/images/repotting.webp') },
    { id: '3', name: 'Plant Watering', description: 'Daily plant watering service', price: '$1/plant', image: require('../../assets/images/watering.jpeg') },
    { id: '4', name: 'General Maintenance', description: 'General garden maintenance', price: '$5/sq feet', image: require('../../assets/images/maintenance.png') },
  ];    

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };

  const openModal = (service) => {
    setSelectedService(service);
    setModalVisible(true);
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || serviceDate;
    setShowDatePicker(false);
    setServiceDate(currentDate);
  };

  const handleImageUpload = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setGardenImage(response.assets[0].uri); // Save the image URI
      }
    });
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
        <Picker.Item value="Morning" label="8:00AM-9:00AM" />
        <Picker.Item value="Morning" label="9:00AM-10:00AM" />
        <Picker.Item value="Morning" label="10:00AM-11:00AM" />
        <Picker.Item value="Morning" label="11:00AM-12:00PM" />
        <Picker.Item value="Afternoon" label="3:00PM-4:00PM" />
        <Picker.Item value="Afternoon" label="4:00PM-5:00PM" />
        <Picker.Item value="Evening" label="5:00PM-6:00PM" />
      </Picker>

      <Text style={styles.question}>Select Service Date:</Text>
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateButton}>
        <Text style={styles.dateButtonText}>{serviceDate.toLocaleDateString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={serviceDate}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}

      <Text style={styles.question}>Upload Garden Image:</Text>
      <TouchableOpacity onPress={handleImageUpload} style={styles.uploadButton}>
        <Text style={styles.uploadButtonText}>Upload Image</Text>
      </TouchableOpacity>
      {gardenImage && <Image source={{ uri: gardenImage }} style={styles.uploadedImage} />}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.address}>1234 Garden Street, Green City</Text>
        <View style={styles.profilePicPlaceholder}>
          <Text style={styles.profilePicText}>P</Text>
        </View>
      </View>

      <Text style={styles.NurseryName}>Blossoms Nursery</Text>

      <TextInput
        style={styles.searchBar}
        placeholder="Search services"
        placeholderTextColor="#999"
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSearch}
      />

      <FlatList
        data={services}
        renderItem={({ item }) => (
          <View style={styles.serviceCard}>
            {item.image && (
              <Image
                source={item.image}
                style={styles.serviceImage}
                resizeMode="cover"
              />
            )}
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

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedService?.name}</Text>
            {renderSubscriptionAndSlot()}
            <TouchableOpacity style={styles.bookNowButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.bookNowText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

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
  NurseryName: {
    fontSize: 24,                 
    fontWeight: 'bold',            
    textAlign: 'center',           
    color: '#2e7d32',              
    marginVertical: 10,            
    textTransform: 'uppercase',     
    shadowColor: '#000',           
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,            
    shadowRadius: 2,               
    elevation: 3,                  
  },
  
  address: {
    top: 20,
    fontSize: 18,
    color: '#2e7d32',
  },
  profilePicPlaceholder: {
    top: 20,
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
  serviceCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  serviceImage: {
    width: 100,
    height: '100%',
    borderRadius: 10,
    marginRight: 20,
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
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  question: {
    fontSize: 16,
    marginBottom: 10,
  },
  picker: {
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    marginBottom: 20,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
  },
  navButtonText: {
    fontSize: 16,
    color: '#333',
  },
  dateButton: {
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  dateButtonText: {
    fontSize: 16,
    color: '#333',
  },
  uploadButton: {
    backgroundColor: '#28a745',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  uploadedImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default ServicesCatalogScreen;
