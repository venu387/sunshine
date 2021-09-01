import React, {Component} from 'react';
import {Alert, Button, ImageBackground, View} from 'react-native';
import {Text} from 'react-native';
import {sharedCss} from '../../assets/css/shared';
import {AuthContext} from '../Context';
import {Loader} from '../Loader';

export function Login(props: any) {
  var loading = false;
  const {isDarkTheme, signIn, isUserLoggedIn} = React.useContext(AuthContext);
  const image = isDarkTheme
    ? require('../../assets/images/bg-light.jpg')
    : require('../../assets/images/bg-light.jpg');
  return (
    <ImageBackground style={sharedCss.bgImage} source={image}>
      <Loader loading={loading} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={sharedCss.heading}>Username:</Text>
        <Text style={sharedCss.heading}>Password:</Text>
        <Button
          title="Login"
          onPress={async () => {
            loading = true;
            await signIn([{userToken: 'abc', userName: 'user1'}]);
            if (await isUserLoggedIn()) {
              props.navigation.navigate('Home');
              loading = false;
            } else {
              Alert.alert('Login failed! Please try again.');
            }
          }}
        />
      </View>
    </ImageBackground>
  );
}

export default Login;
