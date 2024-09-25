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
    { id: '1', name: 'Lawn Mowing', description: 'Keep your lawn neat and tidy', price: '$1/sq feet', image: require('../../assets/images/lawnmoving.jpeg') },
    { id: '2', name: 'Repotting Service', description: 'Repot your plants with care', price: '$2/pot', image: require('../../assets/images/repotting.webp') },
    { id: '3', name: 'Plant Watering', description: 'Daily plant watering service', price: '$1/plant', image: require('../../assets/images/watering.jpeg') },
    { id: '4', name: 'General Maintenance', description: 'General garden maintenance', price: '$5/sq feet', image: require('../../assets/images/maintenance.png') },
    { id: '5', name: 'Lawn Mowing', description: 'Keep your lawn neat and tidy', price: '$1/sq feet', image: require('../../assets/images/lawnmoving.jpeg') },
    { id: '6', name: 'Repotting Service', description: 'Repot your plants with care', price: '$2/pot', image: require('../../assets/images/repotting.webp') },
    { id: '7', name: 'Plant Watering', description: 'Daily plant watering service', price: '$1/plant', image: require('../../assets/images/watering.jpeg') },
    { id: '8', name: 'General Maintenance', description: 'General garden maintenance', price: '$5/sq feet', image: require('../../assets/images/maintenance.png') },
  
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

  const handleImageUpload = async () => {
    try {
      const response = await launchImageLibrary({ mediaType: 'photo' });

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
      } else if (response.assets && response.assets.length > 0) {
        // setGardenImage(response.assets[0].uri); // Save the image URI
      }
    } catch (error) {
      console.log('Unhandled promise rejection error: ', error);
    }
  };

  const renderSubscriptionAndSlot = () => (
    <View>
      {/* Subscription Type */}
      <Text style={styles.question}>Select Subscription Type:</Text>
      <View style={styles.radioGroup}>
        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => setSubscription('onetime')}
        >
          <View style={subscription === 'onetime' ? styles.radioSelected : styles.radioUnselected} />
          <Text style={styles.radioText}>One-time</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => setSubscription('weekly')}
        >
          <View style={subscription === 'weekly' ? styles.radioSelected : styles.radioUnselected} />
          <Text style={styles.radioText}>Weekly</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => setSubscription('biweekly')}
        >
          <View style={subscription === 'biweekly' ? styles.radioSelected : styles.radioUnselected} />
          <Text style={styles.radioText}>Bi-Weekly</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => setSubscription('monthly')}
        >
          <View style={subscription === 'monthly' ? styles.radioSelected : styles.radioUnselected} />
          <Text style={styles.radioText}>Monthly</Text>
        </TouchableOpacity>
      </View>

      {/* Time Slot Selection */}
      <Text style={styles.question}>Select a Time Slot:</Text>
      <Picker
        selectedValue={timeSlot}
        onValueChange={(value) => setTimeSlot(value)}
      >
        <Picker.Item label="8:00AM-9:00AM" value="Morning" />
        <Picker.Item label="9:00AM-10:00AM" value="Morning" />
        <Picker.Item label="10:00AM-11:00AM" value="Morning" />
        <Picker.Item label="11:00AM-12:00PM" value="Morning" />
        <Picker.Item label="3:00PM-4:00PM" value="Afternoon" />
        <Picker.Item label="4:00PM-5:00PM" value="Afternoon" />
        <Picker.Item label="5:00PM-6:00PM" value="Evening" />
      </Picker>

      {/* Date Selection */}
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

      {/* Image Upload */}
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
              <Text style={styles.bookNowText}>Proceed to Add-Ons</Text>
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
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
  searchBar: {
    height: 45,  // Increased height for better usability
    borderColor: '#4caf50',  // Green border for a fresh look
    borderWidth: 2,  // Thicker border
    borderRadius: 25,  // Rounded corners
    paddingHorizontal: 20,  // Padding for content
    backgroundColor: '#fff',  // White background for contrast
    shadowColor: '#000',  // Shadow for depth
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,  // Elevation for Android
    marginBottom: 20,
},

  serviceList: {
    paddingBottom: 20,
  },
  serviceCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    marginBottom: 10,
    overflow: 'hidden',
    alignItems: 'center', // Center items vertically
  },
  serviceImage: {
    left:7,
    width: 100,
    height: 100,
    marginRight: 7, // Add margin to the right for spacing
    borderRadius : 10,
  },
  serviceDetails: {
    flex: 1,
    padding: 10,
    justifyContent: 'center', // Center content vertically
  },
  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  serviceDescription: {
    fontSize: 14,
    color: '#555',
  },
  servicePrice: {
    fontSize: 16,
    color: '#2e7d32',
    fontWeight: 'bold',
  },
  bookNowButton: {
    backgroundColor: '#2e7d32',
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  bookNowText: {
    color: '#fff',
    fontSize: 16,
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
    elevation: 10,
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
  radioGroup: {
    flexDirection: 'column',
    marginBottom: 20,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioUnselected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    marginRight: 10,
  },
  radioSelected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#28a745',
    marginRight: 10,
  },
  radioText: {
    fontSize: 16,
  },
  dateButton: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginBottom: 20,
  },
  dateButtonText: {
    fontSize: 16,
  },
  uploadButton: {
    backgroundColor: '#4caf50',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  uploadedImage: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#4caf50',
  },
  navButton: {
    padding: 10,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ServicesCatalogScreen;
