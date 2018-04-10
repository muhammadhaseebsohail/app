import React, { Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    ActivityIndicator,
    Dimensions,
    Modal,
    ImageBackground,
    CheckBox,
    TouchableOpacity
}
from 'react-native';

export default class Splash extends Component {
    static navigationOptions = {
        header:null
    }
componentWillMount()
    {
        setTimeout(()=>{
            this.props.navigation.navigate('main');
        },4000)
    }
    render(){
        return(
            <View style={styles.container}>
                <ImageBackground style={{
                    flex: 1,
                    height: '100%',
                    width: '100%',
                }} source={require('../images/splashscreen.png') } >
            </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    text:{
        color: '#fff',
        fontSize:30,

    }
});