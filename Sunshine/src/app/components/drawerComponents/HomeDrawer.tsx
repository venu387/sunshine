import React from 'react';

import HomeScreen from '../HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator();

const HomeStackScreen = ({navigation}: any) => (
  <HomeStack.Navigator
    screenOptions={{
      headerTintColor: '#000',
      headerTransparent: true,
      headerTitleStyle: {
        display: 'none',
      },
      headerLeft: () => (
        <Icon.Button
          name="ios-menu"
          size={32}
          style={{
            opacity: 0.75,
            marginLeft: 15,
            marginTop: 5,
          }}
          color="#000"
          backgroundColor="transparent"
          onPress={() => navigation.openDrawer()}></Icon.Button>
      ),
    }}>
    <HomeStack.Screen name="Home" component={HomeScreen} />
  </HomeStack.Navigator>
);

export default HomeStackScreen;
