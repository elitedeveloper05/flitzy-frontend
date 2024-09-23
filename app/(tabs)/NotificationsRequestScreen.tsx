import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';

const NotificationsRequestScreen = () => {
  const handleTurnOnNotifications = () => {
    // Logic for turning on notifications
    console.log('Turning on notifications');
  };

  const handleNotNow = () => {
    // Logic for not allowing notifications
    console.log('Not allowing notifications');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get Updates on Your Order Status</Text>
      <Text style={styles.subtitle}>
        Allow push notifications to get real-time updates on your order status.
      </Text>
      <View style={styles.vectorPlaceholder}>
        <Image
          source={require('/home/user/Desktop/flitzy-siddu-dev/flitzy-siddu-dev/flitzy-siddu/assets/images/notifiationvector.png')}
          style={styles.vectorImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleTurnOnNotifications}>
          <Text style={styles.buttonText}>Turn On Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleNotNow}>
          <Text style={styles.buttonText}>Not Now</Text>
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
  vectorPlaceholder: {
    width: '100%',
    height: Dimensions.get('window').height * 0.3, 
    backgroundColor: '#fff', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
  },
  vectorImage: {
    width: '100%',
    height: '100%',
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

export default NotificationsRequestScreen;
