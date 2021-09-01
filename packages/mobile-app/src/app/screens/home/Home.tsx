import {useFocusEffect, CommonActions} from '@react-navigation/native';
import React, {Component} from 'react';
import {Alert, ImageBackground} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native';
import {sharedCss} from '../../assets/css/shared';
import {AuthContext} from '../Context';

export function Home({route, navigation}: any) {
  const {isDarkTheme} = React.useContext(AuthContext);
  const image = isDarkTheme
    ? require('../../assets/images/bg-light.jpg')
    : require('../../assets/images/bg-light.jpg');

  // navigation.reset({
  //   index: 0,
  // });
  const name = route.params;

  // navigation.dispatch(
  //   CommonActions.reset({
  //     index: 0,
  //     routes: [{name: 'Home'}],
  //   }),
  // );
  // useFocusEffect(
  //   React.useCallback(() => {
  //     // Do something when the screen is focused

  //     return () => {
  //       // Do something when the screen is unfocused
  //       // Useful for cleanup functions
  //     };
  //   }, []),
  // );

  return (
    <ImageBackground style={sharedCss.bgImage} source={image}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={sharedCss.heading}>Home!</Text>
        <Text style={sharedCss.heading}>{name}</Text>
        <Button title="7 Days" onPress={() => navigation.navigate('7Day')} />
        <Button
          title="12 Hours"
          onPress={() => navigation.navigate('12Hour')}
        />
      </View>
    </ImageBackground>
  );
}
export default Home;
