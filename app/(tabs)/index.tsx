import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>;
}

const GetStarted: React.FC<Props> = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('/home/user/Desktop/flitzy-siddu-dev/flitzy-siddu-dev/flitzy-siddu/assets/images/bgimage.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Flitzy</Text>
        <Text style={styles.subtitle}>Find the best gardening services near you</Text>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('SignUp')} // Navigating to the SignUp screen
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GetStarted;
