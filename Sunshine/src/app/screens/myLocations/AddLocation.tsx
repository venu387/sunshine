import React, {Component} from 'react';
import {ImageBackground, View} from 'react-native';
import {Text} from 'react-native';
import {sharedCss} from '../../assets/css/shared';
import {AuthContext} from '../Context';

export function AddLocation(props: any) {
  const {isDarkTheme} = React.useContext(AuthContext);
  const image = isDarkTheme
    ? require('../../assets/images/bg-light.jpg')
    : require('../../assets/images/bg-light.jpg');
  return (
    <ImageBackground style={sharedCss.bgImage} source={image}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={sharedCss.heading}>Add Location!</Text>
      </View>
    </ImageBackground>
  );
}

export default AddLocation;
