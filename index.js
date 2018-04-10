/*
import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('albums', () => App);
*/


import React from 'react';
import InputFields from './src/components/common/InputFields';
import {AppRegistry,Text,View,TextInput,Image,ImageBackground} from 'react-native';
import Header from './src/components/common/Header';
import Button from './src/components/common/Button';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import App from './App';

// creating a component

//  render application
AppRegistry.registerComponent('albums',()=>App);
