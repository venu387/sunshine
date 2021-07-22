import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import Nav from './shared/Nav';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {
          <ImageBackground
            source={require('../assets/images/bg.jpg')}
            style={styles.image}>
            <NavigationContainer>
              <Nav></Nav>
            </NavigationContainer>
          </ImageBackground>
        }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
