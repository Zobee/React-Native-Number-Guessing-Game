import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, View, Text, Button, Alert} from 'react-native';

//Look up hooks. I'm using them here, but I honestly have no fucking clue how these are actually
//supposed to be used

import Numbers from '../Components/Numbers'
import Card from '../Components/Card'

const seedNum = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rando = Math.floor(Math.random() * (max - min)) + min;
    if (rando === exclude){
        seedNum(min,max,exclude)
    } else {
        return rando
    }
}


const Game = props => {
    const [currentGuess, setCurrentGuess] = useState(seedNum(1, 100, props.choice))
    const [numRounds, setNumrounds] = useState(0)

    const currHigh = useRef(100);
    const currLow = useRef(1);

    const {choice, gameOver} = props;

    useEffect(() => {
        if (currentGuess === choice){
            gameOver(numRounds) 
        }
    }, [currentGuess, choice, gameOver])

    const handleNextGuess = (dir) => {

        if ((dir === 'higher' && currentGuess > props.choice) || (dir === 'lower' && currentGuess < props.choice)){
            Alert.alert('You LIED', 'Nice Try', [{text: 'My Bad'}])
            return;
        }
        if (dir === 'higher'){
            currLow.current = currentGuess
        } else if (dir === 'lower'){
            currHigh.current = currentGuess
        } else {
            Alert.alert('Something went wrong here.')
        }

        const nextGuess = seedNum(currLow.current, currHigh.current, currentGuess)
        setCurrentGuess(nextGuess)
        setNumrounds(numRounds => numRounds + 1)    
        }

    return (
        <View style={styles.screen}>
            <Text>PC's Guess</Text>
            <Numbers>{currentGuess}</Numbers>
            
            <Card style={styles.buttonContainer}>
                <Button title='Larger' onPress={()=>{handleNextGuess('higher')}}/>
                <Button title='Smaller' onPress={()=>{handleNextGuess('lower')}}/>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        padding : 10,
        alignItems : 'center'
    },
    buttonContainer : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        marginTop : 20,
        width : 300,
        maxWidth : '80%'
    }
})

export default Game