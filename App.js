import { StyleSheet, View } from 'react-native';
import Header from './component/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { useState } from 'react';
import GameOverScreen from './screens/GameOverScreen';
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';

// @@ ==== fetching fonts
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameRound, setGameRound] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  // @@ ==== 
  if (!dataLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setDataLoaded(true)}
      onError={(err) => console.log(err)}
    />
  }
  fetchFonts();
  // @@ ==== TO show the game screen
  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
    setGameRound(0);
  }
  // @@ ==== to show the game over screen
  const gameOverHandler = numOfRounds => {
    setGameRound(numOfRounds)
  }

  // @@ ==== start new Game 
  const startNewGame = () => {
    setUserNumber(undefined);
    setGameRound(0);
  }


  // @@ ==== initially the app will start from start screen
  let content =
    <StartGameScreen
      onStartGame={startGameHandler}
    />;

  // @@ ==== TO detect if the game is not finished
  if (userNumber && gameRound <= 0) {
    content = <GameScreen
      userChoice={userNumber}
      onGameOver={gameOverHandler}
    />;
  }
  // @@ ==== to detect that the game is finished
  else if (gameRound > 0) {
    content = <GameOverScreen startNewGame={startNewGame} />
  }


  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
