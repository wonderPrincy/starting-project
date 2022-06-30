import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Color from './constants/color';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState('');
  const [gameIsOver, setGameIsOver] = useState(true);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };
function gameOverHandler()
{
  setGameIsOver(true);
}
  let screen = <StartGameScreen onEnteredNumber={pickedNumberHandler}></StartGameScreen>;
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}></GameScreen>;
  };
  if(gameIsOver && userNumber)
  {
    screen=<GameOverScreen></GameOverScreen>
  }
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
