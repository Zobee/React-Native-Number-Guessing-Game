import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';

import Card from '../Components/Card'
import Input from '../Components/Input'
import Numbers from '../Components/Numbers'

const StartGame = (props) =>{
    const [value, setValue] = useState('');
    const [submit, setSubmit] = useState(false);
    const [selectedNum, setSelectedNum] = useState();

    const handleInput = (input)=>{
        setValue(input.replace(/[^0-9]/g, ''))
    }

    const handleSubmit = ()=>{
        const chosenNum = parseInt(value)
        if (isNaN(chosenNum ) || chosenNum <=0 || chosenNum > 99){
            Alert.alert(
                'Invalid Number!',
                'Number must be between 1-99',
                [{text : 'Okay', style : 'default', onPress : handleReset}]
            )
        }
        setSubmit(true);
        setSelectedNum(parseInt(value));
        setValue('');
    }

    const handleReset = ()=>{
        setValue('');
        setSubmit(false);
    }

    let confirmedOutput;

    if (submit){
        confirmedOutput = (
            <Card style={styles.confirm}>
                <Text>You Selected</Text>
                <Numbers>{selectedNum}</Numbers>
                <Button title='Start Game' onPress={()=> props.onStart(selectedNum)} />
            </Card> 
        )
    }

    return(
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss(   )}}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start Game</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input 
                    style={styles.input} 
                    blurOnSubmit 
                    autoCapitalize='none' 
                    keyboardType='number-pad' 
                    maxLength={2}
                    onChangeText={handleInput}
                    value={value}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title='Confirm' color='green' onPress={handleSubmit}/></View>
                    <View style={styles.button}><Button title='Reset' color='darkgreen' onPress={handleReset}/></View>
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    )   
}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        padding : 10,
        alignItems : 'center'
    },
    title : {
        fontSize : 20,
        marginVertical : 10,
    },

    inputContainer : {
        width : 300,
        maxWidth : '80%',
        alignItems : 'center',
    },

    buttonContainer : {
        flexDirection : 'row',
        width: '100%',
        justifyContent : 'space-between',
        paddingHorizontal : 15
    },

    button : {
        width : 100
    },

    input : {
        width : 50,
        textAlign : 'center'
    },

    confirm : {
        marginTop : 10,
        alignItems : 'center'
    }
})

export default StartGame