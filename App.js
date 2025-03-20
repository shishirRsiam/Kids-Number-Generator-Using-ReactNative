import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Animated, Easing } from 'react-native';
import * as Speech from 'expo-speech';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NumberToText from './NumberToText';


const App = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [bounceValue] = useState(new Animated.Value(1));
  const [numberText, setNumberText] = useState('Zero');

  // Function to generate a random number between 1 and 500
  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 500) + 1;
    setRandomNumber(number);
    setNumberText(NumberToText(number));

    // Trigger bounce animation when a new number is generated
    Animated.sequence([
      Animated.timing(bounceValue, { toValue: 1.2, duration: 200, easing: Easing.linear, useNativeDriver: true }),
      Animated.spring(bounceValue, { toValue: 1, friction: 3, useNativeDriver: true }),
    ]).start();
  };

  // Function to speak the random number using Expo Speech API
  const speakNumber = () => {
    Speech.speak(randomNumber.toString(), {
      language: 'en', // You can change the language here
      rate: 0.8, // Adjust the speaking speed
    });
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>🎉 kids Number Generator! 🎉</Text>
      </View>

      {/* Display the generated number with animation */}
      <Animated.View style={{ transform: [{ scale: bounceValue }] }}>
        <Text style={styles.numberText}>{randomNumber}</Text>
      </Animated.View>
      <Text style={styles.numberEnText}>{numberText}</Text>

      {/* Speak Icon Button */}
      <TouchableOpacity style={styles.iconButton} onPress={speakNumber}>
        <Icon name="volume-high" size={80} color="#FFD700" />
      </TouchableOpacity>

      {/* Generate Random Number Button */}
      <TouchableOpacity style={styles.button} onPress={generateRandomNumber}>
        <Text style={styles.buttonText}>🎯 New Number! 🎯</Text>
      </TouchableOpacity>

      {/* Footer */}
      <Text style={styles.footer}>@shishirRsiam Made with 💖 for Taseen! 🌈</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFDAF7', // Light pinkish background
  },
  titleContainer: {
    backgroundColor: '#FFEB3B', // Bright yellow for the title box
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 40,
    borderWidth: 3,
    borderColor: '#FF6347', // Tomato red border
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FF6347', // Tomato red text color
    textAlign: 'center',
    fontFamily: 'Comic Sans MS', // Fun, playful font
    textShadowColor: '#FFF', // White text shadow
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  numberText: {
    fontSize: 120, // Larger number to catch attention
    fontWeight: 'bold',
    color: '#FF6347', // Tomato red for the number
    textShadowColor: '#FFF',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  numberEnText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FF6347', 
    marginBottom: 40,
    textShadowColor: '#FFF',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  button: {
    backgroundColor: '#FF69B4', // Hot pink for fun vibes
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 50, // Rounder button
    marginBottom: 40,
    elevation: 10, // Added shadow for button
    shadowColor: '#FF1493', // Deep pink shadow
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'Comic Sans MS', // Fun font for button text
  },
  iconButton: {
    backgroundColor: '#FFD700', // Bright yellow for the speak button
    borderRadius: 50, // Circular shape for the icon button
    padding: 20,
    marginBottom: 40,
    elevation: 5,
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  iconButton: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#FF4500',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    fontSize: 16,
    color: '#8A2BE2', // Violet footer text color
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default App;
