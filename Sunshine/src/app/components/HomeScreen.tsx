import React, {Component} from 'react';
import {ImageBackground} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {sharedCss} from '../assets/css/shared';

export default class HomeScreen extends Component {
  render() {
    return (
      <ImageBackground
        style={sharedCss.bgImage}
        source={require('../assets/images/bg.jpg')}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={sharedCss.heading}>Home!</Text>
        </View>
      </ImageBackground>
    );
  }
}
