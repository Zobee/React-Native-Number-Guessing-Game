import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './Components/Header'
import StartGame from './Screens/StartGame'
import Game from './Screens/Game'
import GameOver from './Screens/GameOver'

export default function App() {
  const [userNum, setUserNum] = useState()
  const [rounds, setRounds] = useState(0)

  const handleNewGame = () => {
    setRounds(0);
    setUserNum();
  }

  const handleStartGame = (number) => {
    setUserNum(number)
    setRounds(0)
  };

  const handleGameOver = (numRounds) => {
    setRounds(numRounds)
  }

  let screen = <StartGame onStart={handleStartGame}/>

  if (userNum && rounds <= 0){
    screen = <Game choice={userNum} gameOver = {handleGameOver} />
  } else if (rounds > 0){
    screen = <GameOver rounds={rounds} number={userNum} restart={handleNewGame}/>
  }

  return (
    <View style={styles.screen}>
      <Header title='Totally Cool and Unique Number Game'/>
      {screen}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
