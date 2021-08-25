import React, {Component} from 'react';
import {Button, ImageBackground, View} from 'react-native';
import {Text} from 'react-native';
import {sharedCss} from '../../assets/css/shared';
import {AuthContext} from '../Context';

export function MyLocations(props: any) {
  const {isDarkTheme} = React.useContext(AuthContext);
  const image = isDarkTheme
    ? require('../../assets/images/bg-light.jpg')
    : require('../../assets/images/bg-light.jpg');
  const locations = [
    {id: 1, value: 'loc1'},
    {id: 2, value: 'loc2'},
  ];
  return (
    <ImageBackground style={sharedCss.bgImage} source={image}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={sharedCss.heading}>My Locations!</Text>
        {locations.map(l => {
          return (
            <Button
              title={l.value}
              key={l.id}
              onPress={() => props.navigation.navigate('Home')}
            />
          );
        })}
        <Button
          title="Add Location"
          onPress={() => props.navigation.navigate('AddLocation')}
        />
      </View>
    </ImageBackground>
  );
}

export default MyLocations;
