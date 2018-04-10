import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet,ImageBackground ,Image} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from 'react-native-vector-icons/FontAwesome';
import InputFields from '../components/common/InputFields';
import Header from '../components/common/Header';
import DatePicker from 'react-native-datepicker'
import MydatePicker from '../components/common/MydatePicker';



class signupScreen extends Component {
    static navigationOptions = {
        header:null
    }
    state = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        phonenumber:''
    }
    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handlePassword = (text) =>{
        this.setState({ password: text })
    }
    handlefirstname = (text) =>{
        this.setState({ firstname: text })
    }
    handlelastname = (text) =>{
        this.setState({ lastname: text })
    }
    handlenumber = (text) =>{
        this.setState({ phonenumber: text })
    }
    signup = (email, pass) => {
        alert('email: ' + email + ' password: ' + pass)
    }

    render(){
        return (
            <View style = {styles.container}>
                <ImageBackground style={{
                    flex: 1,
                    height: null,
                    width: null,
                }}

                                 source={require('../images/signup_background_image.jpg') } >

                    <KeyboardAwareScrollView>
                        <Header headertext={'REGISTRATION'}/>
                        <View style = {styles.secondcontainer}>



                            <View style={styles.inputviewstyle}>
                                <Icon
                                    name="search"
                                    style={styles.icon}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder={'First Name'}
                                    underlineColorAndroid = "transparent"
                                    placeholderTextColor = "#9a73ef"
                                    autoCapitalize = "none"
                                    secureTextEntry={false}
                                    onChangeText={this.handlefirstname}
                                />
                            </View>
                            <View style={styles.inputviewstyle}>
                                <Icon
                                    name="search"
                                    style={styles.icon}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder={'Last Name'}
                                    underlineColorAndroid = "transparent"
                                    placeholderTextColor = "#9a73ef"
                                    autoCapitalize = "none"
                                    secureTextEntry={false}
                                    onChangeText={this.handlelastname}
                                />
                            </View>
                            <View style={styles.inputviewstyle}>
                                <Icon
                                    name="search"
                                    style={styles.icon}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder={'Email Address'}
                                    underlineColorAndroid = "transparent"
                                    placeholderTextColor = "#9a73ef"
                                    autoCapitalize = "none"
                                    secureTextEntry={false}
                                    onChangeText={this.handleEmail}
                                />
                            </View>
                            <View style={styles.inputviewstyle}>

                                <MydatePicker/>
                            </View>
                            <View style={styles.inputviewstyle}>
                                <Icon
                                    name="search"
                                    style={styles.icon}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder={'Phone Number'}
                                    underlineColorAndroid = "transparent"
                                    placeholderTextColor = "#9a73ef"
                                    autoCapitalize = "none"
                                    secureTextEntry={false}
                                    onChangeText={this.handlenumber}
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
                                    onChangeText={this.handlePassword}
                                />
                            </View>



                            <TouchableOpacity
                                style = {styles.submitButton}
                                onPress = {
                                    () => this.signup(this.state.email, this.state.password)
                                }>
                                <Text style = {styles.submitButtonText}> Sign Up </Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAwareScrollView>
                </ImageBackground>
            </View>
        )
    }
}
export default signupScreen

const styles = StyleSheet.create({
    container: {
        paddingTop: 23,
        flex: 1,
    },
    secondcontainer: {


    },
    inputviewstyle: {
        flex: 1,
height: 60,
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
        height: 40,

        alignSelf: 'center'
    },
    textStyle: {
        fontSize: 20,
        backgroundColor: 'white',
    },
    submitButton: {
        backgroundColor: '#fece00',
        padding: 10,
        marginTop : 10,
        height: 50,
        marginLeft : 30,
        marginRight : 30,
    },
    submitButtonText:{
        color: 'black',
        alignSelf : 'center',

        fontSize : 22,
        fontWeight : '600',
    },
})