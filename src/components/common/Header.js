// import libraries for making a component
import React from 'react';
import {Image,View,Text} from 'react-native';

//Make a component
const Header = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}> {props.headertext}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {

        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
        flex: 1,
        marginTop:10,
        marginBottom:20,
        shadowColor: 'black',
        elevation: 2,
        position: 'relative'
    },
    imagestyle: {
        fontSize: 20,
        flex:1,
        resizeMode: 'cover'
    },
    textStyle: {
        fontSize: 35,
        fontWeight : '600',
    color:'black'
    }
};
//Make the component available for other parts of the app
export default Header;