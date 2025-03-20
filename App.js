import styles from './styles';
import * as Speech from 'expo-speech';
import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import NumberToText from './NumberToText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';



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
      language: 'en',
      rate: 0.65,
    });
  };

  return (
    <View style={styles.container}>
      {/* Hide Status Bar */}
      <StatusBar hidden={true} />

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
      <Text style={styles.footer}>@shishirRsiam Made with 💖 for Taseen! 👨‍👧</Text>
    </View>
  );
};


export default App;