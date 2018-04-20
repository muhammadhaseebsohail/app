import React, {Component} from 'react';
import{
    View,
    Text,
    StyleSheet,
    Image
}from 'react-native';
import {DrawerNavigator,DrawerItems} from 'react-navigation'
import SettingsScreen from './SettingsScreen';
import HomeScreen from './HomeScreen'
import AdvanceStatsScreen from './AdvanceStatsScreen'
import ArticleScreen from './ArticleScreen'
import FixturesResultScreen from './FixturesResultScreen'
import InteractiveGameScreen from './InteractiveGameScreen'
import PhotoGalleryScreen  from './PhotoGalleryScreen'
import SinglePhotoScreen from './SinglePhotoScreen'
import SinglePlayerScreen from './SinglePlayerScreen'
import SquadScreen from './SquadScreen'
import StatsandLeagueTableScreen from './StatsandLeagueTableScreen'
import VideoScreen from './VideoScreen'
import{Container,Content,Header,Body,Icon} from 'native-base'

class Runscreen extends Component{

    static navigationOptions = {
        header:null
    }
    render(){
        return(
            <MyApp/>
        );
    }
}

const CustomDrawerContentComponent=(props)=>(
    <Container>
        <Header  style={{height:100,backgroundColor:"#fece00"}}>
            <Body>
            <Image
                style={styles.drawerImage}
                source={require('../images/Footballogo.png')}/>
            </Body>
        </Header>
        <Content>
            <DrawerItems {...props}/>
        </Content>
    </Container>
)

/*

Home:{
        screen:Splash,
    },
    loginscreen:{
        screen: LoginScreen,
    },
    signup:{
        screen: SignupScreen,
    },


*/

const MyApp = DrawerNavigator({
    Homepage: {
        screen: HomeScreen
    },
    Article: {
        screen: ArticleScreen
    },
    FixturesResult: {
        screen: FixturesResultScreen
    },
    Video:{
        screen: VideoScreen
    },
    PhotoGallery: {
        screen: PhotoGalleryScreen
    },
    SinglePhoto: {
        screen: SinglePhotoScreen
    },
    Squad: {
        screen: SquadScreen
    },
    SinglePlayer: {
        screen: SinglePlayerScreen
    },
    StatsandLeagueTable: {
        screen: StatsandLeagueTableScreen
    },
    AdvanceStats: {
        screen: AdvanceStatsScreen
    },
    InteractiveGame: {
        screen: InteractiveGameScreen
    }
},{
    initialRouteName:'Article',
    contentComponent:CustomDrawerContentComponent,
    drawerOpenRoute:'DrawerOpen',
    drawerCloseRoute:'DrawerClose',
    drawerToggleRoute:'DrawerToggle'
})

export default Runscreen;
styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    drawerImage:{
        height:150,
        width:150,
        borderRadius:75
    }
})
