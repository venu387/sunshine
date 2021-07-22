import React, {Component} from 'react';
import {ImageBackground, View} from 'react-native';
import {Text} from 'react-native';
import {sharedCss} from '../assets/css/shared';

export default class AccountScreen extends Component {
  render() {
    return (
      <ImageBackground
        style={sharedCss.bgImage}
        source={require('../assets/images/bg.jpg')}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={sharedCss.heading}>Account!</Text>
        </View>
      </ImageBackground>
    );
  }
}
