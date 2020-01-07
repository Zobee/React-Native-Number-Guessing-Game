import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'

import Card from '../Components/Card'

function GameOver(props) {
    return (
        <View style={styles.screen}>
            <Card style={styles.card}>
                <Text>Your number was</Text>
                <Text style={styles.num}>{props.number}!</Text>
            </Card>
            <Text>Game Over</Text>
            <Text>In {props.rounds} Rounds</Text>
            <Button title='Play Again?' onPress={() => props.restart()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    card : {
        color : 'darkgreen',
        marginVertical : 10
    },
    num : {
        fontSize: 40,
        marginVertical: 5,
    }
})

export default GameOver
