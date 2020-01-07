import React from 'react';
import {StyleSheet, View} from 'react-native';

//This is a purely aesthetic component that will provide you with a card shadow look. This is
//One of the best parts of React, reusability

const Card = (props) => {
   return(
       <View style={{...styles.card, ...props.style}}>{props.children}</View>
   )
}

//The View above is styled the way it is so that the card style can be merged or overwritten 
//by the custom styling of a child component
 
const styles = StyleSheet.create({
    card : {
        shadowColor : 'black',
        shadowOffset : {width : 0, height : 1},
        shadowRadius : 6,
        shadowOpacity : 0.26,
        backgroundColor : 'white',
        padding : 15,
        borderRadius : 10,
    }
})

export default Card