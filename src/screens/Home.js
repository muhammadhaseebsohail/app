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
    CheckBox,
    TouchableOpacity
}
    from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        //title: 'Home',
    }
    constructor()
    {
        super()
        this.state={
            showMe:true
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>example of splash screen </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        backgroundColor: 'F5FCFF',
        flex: 1,
        justifyContent: 'center',
    },
    instructions:{
        color: '#333333',
        marginBottom:5,
        textAlign:'center',
    },
    welcome:{
        fontSize:20,
        margin:10,
        textAlign: 'center',
    },
});



