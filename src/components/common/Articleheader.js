// import libraries for making a component
import React from 'react';
import {Image,View,Text,Dimensions} from 'react-native';
//Make a component

const Articleheader = (props) => {
    const {textStyle,imagestylerow,articletextstyle,articlebodytext,clubheadtext,articleheadtext,imagestylelogo,mainViewStyle,Rowview1,Rowview2,articleheadview} = styles;
    return (
        <View style={mainViewStyle}>

            <View style={{flexDirection:'row', flex: 1, flexWrap: 'wrap', justifyContent:'flex-end',}}>

                <Text style={clubheadtext}> Some Main Heading </Text>
            </View>

                <View style={{flexDirection:'row', flex: 1, flexWrap: 'wrap', justifyContent:'flex-end',}}>
                    <Text style={clubheadtext}> Article </Text>

                </View>
                <View style={Rowview1}>
                    <Image source={require('../../images/articletemppicture.jpg')}
                           style={imagestylerow} />
                </View>
                <View style={{flexDirection:'row', flex: 1, flexWrap: 'wrap',    justifyContent:'flex-end',}}>

                    <Text  style={articlebodytext}> some detail about article</Text>
                </View>



        </View>
    );
};

const styles = {
    mainViewStyle: {
        justifyContent:'flex-end',
        width: Dimensions.get('window').width-20,
        height:( Dimensions.get('window').height/2),
        flexDirection: 'column',
        marginTop:20,
        borderWidth:0.6,
        borderRadius:3,
        backgroundColor:'white',
    },
    Rowview1:{
        borderWidth:0.6,
        borderRadius:3,

        width:(Dimensions.get('window').width)-20,
        height:(Dimensions.get('window').height/3),

    },
    Rowview2:{

        flex:1,
        flexDirection: 'column',
    },
    articleheadview:{
        flex:1,
        justifyContent:'flex-end',
        flexDirection: 'column',
    },
    imagestylerow: {
        flex:1,
        width: Dimensions.get('window').width-20,
        height:( Dimensions.get('window').height/3),
        resizeMode: 'cover',
    },
    imagestylelogo: {
        flexDirection: 'row',
        width:(Dimensions.get('window').width/10),
        height:(Dimensions.get('window').width/10),
        resizeMode: 'cover',
        marginLeft: 10,
    },
    clubheadtext: {
        flexDirection: 'row',
        fontSize: 17,
        marginTop: 6,
        marginRight: 5,
        fontWeight : '200',
    color:'black'
    },
    articletextstyle: {
        flexDirection: 'row',
        fontSize: 22,
        fontWeight : 'bold',
        color:'black'
    },
    articlebodytext: {
        flexDirection: 'row',
        fontSize: 19,
        color:'black'
    }
    ,
    textStyle: {
        fontSize: 12,
        fontWeight : 'bold',
        color:'black'
    }
};
//Make the component available for other parts of the app
export default Articleheader;