import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {sharedCss} from '../assets/css/shared';

const SettingsScreen = () => {
  return (
    <ImageBackground
      style={sharedCss.bgImage}
      source={require('../assets/images/bg.jpg')}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={sharedCss.heading}>Settings!</Text>
      </View>
    </ImageBackground>
  );
};

export default SettingsScreen;
