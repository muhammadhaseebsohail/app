import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet,ImageBackground ,AsyncStorage,TimePickerAndroid,Image,BackHandler} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from 'react-native-vector-icons/FontAwesome';
import InputFields from '../components/common/InputFields';
class loginScreen extends Component {

// save value in local storage

    constructor(props) {
        super(props);
        AsyncStorage.getItem('emailkey').then((keyValue) => {
            this.setState({ savevalue: keyValue })
            alert(keyValue) //Display key value
        }, (error) => {
            alert(error) //Display error
        });
}

    // end local storage value
    // start backbutton logic
    onButtonPress = () => {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
        // then navigate
        navigate('Home');
    }

    handleBackButton = () => {
        alert(
            'Exit Application',
            'Exiting the application?', [
                {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
    }, {
            text: 'OK',
                onPress: () => BackHandler.exitApp()
        }, ], {
            cancelable: false
        }
    )
        return true;
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }
    //backButton



    static navigationOptions = {
        header:null
    }
    state = {
        email: '',
        password: '',
        savevalue:'',
    }
    handleEmail = (text) => {
    this.setState({ email: text })
}
handlePassword = (text) =>{
    this.setState({ password: text })
}
login = (email, pass) => {

    if (email == "") {
        alert(' Password Field can not be empty')
    }
    else if( pass== "") {
        alert(' Email Field can not be empty')
    }
    else {
        AsyncStorage.setItem("emailkey", email);
        this.setState({"emailkey": email});

        alert('email: ' + email + ' password: ' + pass+ ' -- '+this.state.savevalue)
    }
}
Signup = (email)=>{
   this.props.navigation.navigate('signup');
}

render(){
    return (
        <View style = {styles.container}>
            <ImageBackground style={{
                flex: 1,
                height: null,
                width: null,
            }}

            source={require('../images/background_login.jpg') } >

                <KeyboardAwareScrollView>
                <View style = {styles.secondcontainer}>
                    <Image style={{
                        height: 300,
                        width: 280,
                        alignSelf:'center',
                    }}  source={require('../images/picture.png') } />

                    <View style={styles.inputviewstyle}>
                        <Icon
                            name="search"
                            style={styles.icon}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder={'User Name'}
                            underlineColorAndroid = "transparent"
                            placeholderTextColor = "#9a73ef"
                            autoCapitalize = "none"
                            secureTextEntry={false}
                            onChangeText= {this.handleEmail}
                        />
                    </View>
                    <View style={styles.inputviewstyle}>
                        <Icon
                            name="search"
                            style={styles.icon}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder={'Password'}
                            underlineColorAndroid = "transparent"
                            placeholderTextColor = "#9a73ef"
                            autoCapitalize = "none"
                            secureTextEntry={true}
                            onChangeText = {this.handlePassword}
                        />
                    </View>

                 <TouchableOpacity
                        style = {styles.facebookbutton}
                        onPress = {
                            () => this.login(this.state.email, this.state.password)
                        }>
                        <Text style = {styles.facebooklogintext}>Login with Facebook </Text>
                    </TouchableOpacity>
            <TouchableOpacity
                style = {styles.submitButton}
                onPress = {
                    () => this.login(this.state.email, this.state.password)
                }>
                <Text style = {styles.submitButtonText}> Sign in </Text>
            </TouchableOpacity>
                </View>




                </KeyboardAwareScrollView>
                <View style={{
                    alignSelf: 'center',

                    justifyContent:'center',

                }}>

                    <Text style={{
                        alignSelf: 'center',
                        fontSize : 20,
                        fontWeight : '500',
                        color: 'black',

                    }} onPress= {
                        () => this.Signup(this.state.email)
                    }>CREATE ACCOUNT  </Text>
                </View>
            </ImageBackground>

        </View>
    )
}
}
export default loginScreen

const styles = StyleSheet.create({
    container: {
        paddingTop: 23,
        flex: 1,
    },
    secondcontainer: {

    },
    inputviewstyle: {
        flex: 1,

height: 55,
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
        height: 40,
        alignSelf: 'center'
    },
    textStyle: {
        fontSize: 20,
        backgroundColor: 'white',
    },
    submitButton: {
        backgroundColor: 'black',
        padding: 10,
        marginTop : 10,
        height: 50,
        marginLeft : 30,
        marginRight : 30,
    },
    submitButtonText:{
        color: 'white',
        alignSelf : 'center',

        fontSize : 22,
        fontWeight : '600',
    },
    facebookbutton: {
        backgroundColor: '#4267b2',
        padding: 10,
        height: 50,
        marginLeft : 30,
        marginRight : 30,
    },
    facebooklogintext:{
        color: 'white',
        alignSelf : 'center',
        fontSize : 22,
        fontWeight : '600',
    }
})
