import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

function Numbers(props) {
    return (
        <View style={styles.container}>
            <Text>{props.children}</Text>
        </View> 
    )
}

const styles = StyleSheet.create({
    container : {
        borderWidth : 2,
        borderColor : 'darkgreen',
        padding : 10,
        borderRadius : 10,
        marginVertical : 10,
        alignItems : 'center',
        justifyContent : 'center'
    }
})

export default Numbers
