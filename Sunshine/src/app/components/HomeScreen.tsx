import React from 'react';
import {ImageBackground} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
      }}>
      <Text
        style={{
          fontSize: 45,
        }}>
        This is a sample text that will be displayed on the Home screen!
      </Text>
    </View>
  );
};

export default HomeScreen;
