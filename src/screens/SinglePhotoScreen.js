import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
} from "react-native";
import {Icon,Button,Container,Header,Content,Left}from 'native-base'

class SinglePhotoScreen extends Component{
    static navigationOptions = {
        header:null
    }
    static navigationOptions={

        drawerIcon:(
            <Image source={require('../images/home.png')}
                   style={{height:24,width:24}}/>
        )
    }
    render() {
        return (
            <Container>
                <Header style={{height:50,backgroundColor:"#fece00"}}>
                    <Left>
                        <TouchableHighlight  onPress={()=>this.props.navigation.navigate('DrawerOpen')}  >
                            <Image source={require('../images/menuicon.png')}
                                   style={{height:24,width:24}}/>
                        </TouchableHighlight>
                    </Left>
                </Header>
                <Content contentContainerStyle={{
                    flex:1,
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                    <Text>Article Screen</Text>
                </Content>
            </Container>
        )
    }
}
export default SinglePhotoScreen;


