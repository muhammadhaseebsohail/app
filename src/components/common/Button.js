import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ( { funcPress, children } ) => {
    const { textStyle, buttonStyle } = styles;
    return (
        <TouchableOpacity style={ buttonStyle } onPress={ funcPress }>
            <Text style={ textStyle }>{ children }</Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle : {
        alignSelf : 'center',
        color : 'black',
        fontSize : 25,
        fontWeight : '600',
        paddingTop : 10,
        paddingBottom : 10,
    },
    buttonStyle : {
        flex : 1,
        alignSelf : 'stretch',
        backgroundColor : '#fece00',
        borderWidth : 1,
        borderColor : '#fece00',
        marginLeft : 30,
        marginTop: 10,
        marginRight : 30,
    }
};
export default Button;