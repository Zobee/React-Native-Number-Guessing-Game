import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

//The props spread at the beginning is used to forward the properties to the textinput, so you can
//use textinput stylings for the custom input component we just made

const Input = (props) =>{
    return (
        <TextInput {...props} style={{...styles.input, ...props.style}}/>
    )
}

const styles = StyleSheet.create({
    input : {
        height : 30,
        borderBottomColor : 'gray',
        borderBottomWidth : 1,
        marginVertical : 10,

    }
})

export default Input