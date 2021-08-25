import React, {Component} from 'react';
import {Alert, ImageBackground} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {sharedCss} from '../../assets/css/shared';
import {AuthContext} from '../Context';

export function TwelveHour(props: any) {
  const {isDarkTheme} = React.useContext(AuthContext);
  const image = isDarkTheme
    ? require('../../assets/images/bg-light.jpg')
    : require('../../assets/images/bg-light.jpg');
  return (
    <ImageBackground style={sharedCss.bgImage} source={image}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={sharedCss.heading}>12 Hours!</Text>
      </View>
    </ImageBackground>
  );
}
export default TwelveHour;
