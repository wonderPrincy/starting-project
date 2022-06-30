import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Color from './constants/color';

export default function App() {
  const [userNumber, setUserNumber] = useState('');

  function pickedNumberHandler(pickedNumber) {
    console.log('test');
    setUserNumber(pickedNumber);
  };

  let screen = <StartGameScreen onEnteredNumber={pickedNumberHandler}></StartGameScreen>;
  if (userNumber) {
    console.log('test1');
    screen = <GameScreen></GameScreen>;
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/images/background.png')} resizeMode='cover'
        style={styles.container} imageStyle={styles.backgroundImage}>
        {/* <StartGameScreen></StartGameScreen> */}
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.secondaryColor,
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});
