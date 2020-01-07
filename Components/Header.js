import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Header = props => {
    return (
        <View style={styles.header}>
            <Text>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        width : '100%',
        height : 80,
        paddingTop : 36,
        backgroundColor : 'green',
        alignItems : 'center',
        justifyContent : 'center'

    },

    headerTitle : {
        color : 'black',
        fontSize : 18
    }
})

export default Header