import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>;
}

const OTPRequestScreen: React.FC<Props> = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpVisible, setOtpVisible] = useState(false);
  const [otp, setOtp] = useState('');

  const handleGetOTP = () => {
    console.log('Requesting OTP for mobile number:', mobileNumber);
    // Display the OTP input field
    setOtpVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your mobile number</Text>
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        placeholderTextColor="#999"
        keyboardType="phone-pad"
        maxLength={10}
        value={mobileNumber}
        onChangeText={setMobileNumber}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.getOtpButton} onPress={handleGetOTP}>
          <Text style={styles.getOtpButtonText}>Get OTP</Text>
        </TouchableOpacity>
      </View>
      
      {otpVisible && (
        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          placeholderTextColor="#999"
          keyboardType="numeric"
          maxLength={6}
          value={otp}
          onChangeText={setOtp}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8f5e9',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  getOtpButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  getOtpButtonText: {
    color: '#28a745',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OTPRequestScreen;
