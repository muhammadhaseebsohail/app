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

export default class Main extends Component {
    static navigationOptions = {
        header:null
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Main Screen </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        backgroundColor: 'blue',
        flex: 1,
        justifyContent: 'center'
    },
    text:{
        color: '#fff',
        fontSize:30
    }
});
