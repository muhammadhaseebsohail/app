// import libraries for making a component
import React from 'react';
import {Text, View,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//Make a component
const inputFields = (props) => {
    const {input, inputviewstyle,textStyle} = styles;

    return (
        <View style={inputviewstyle} >
            <Icon
                name="search"
                style={styles.icon}
            />
            <TextInput
                style={input}
                placeholder={props.placeholder}
                underlineColorAndroid = "transparent"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                secureTextEntry={props.secure}
                onChangeText={(text) => this.setState({text})}
            />
            </View>

    );
};

const styles = {
    inputviewstyle: {
        flex: 1,
        height:null,
        position: 'relative',
        flexDirection: 'row',
        shadowOpacity: 0.2,
        elevation: 2,
        backgroundColor: 'white',
        marginLeft : 30,
        marginRight : 30,
        marginBottom: 10,
    },
    icon: {
        fontSize: 50,

    },
    input:{
        flex: 1,
        height: 50,

        alignSelf: 'center'
},
    textStyle: {
        fontSize: 20,
     backgroundColor: 'white',
      }
};
//Make the component available for other parts of the app
export default inputFields;