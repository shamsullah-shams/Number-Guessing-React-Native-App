import { StyleSheet, View } from 'react-native';
import Header from './component/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { useState } from 'react';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameRound, setGameRound] = useState(0);

  // @@ ==== TO show the game screen
  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
    setGameRound(0);
  }
  // @@ ==== to show the game over screen
  const gameOverHandler = numOfRounds => {
    setGameRound(numOfRounds)
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
    content = <GameOverScreen />
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
