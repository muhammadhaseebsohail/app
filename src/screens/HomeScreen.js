import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import {Icon,Button,Container,Header,Content,Left}from 'native-base'

class HomeScreen extends Component{
    static navigationOptions={
        drawerIcon:(
            <Image source={require('./assets/DrawerIcons/home.png')}
                   style={{height:24,width:24}}/>
        )
    }
    render() {
        return (
            <Container>
                <Header style={{height:50,backgroundColor:"#fece00"}}>
                    <Left>
                        <Icon name="ios-menu" onPress={()=>this.props.navigation.navigate('DrawerOpen')}/>
                    </Left>
                </Header>
                <Content contentContainerStyle={{
                    flex:1,
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                    <Text>Home Screen</Text>
                </Content>
            </Container>
        )
    }
}
export default HomeScreen;


