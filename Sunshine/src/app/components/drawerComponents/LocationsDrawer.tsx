import React from 'react';

import LocationsScreen from '../LocationsScreen';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

const LocationsStack = createStackNavigator();

const LocationsStackScreen = ({navigation}: any) => (
  <LocationsStack.Navigator
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
    <LocationsStack.Screen name="Home" component={LocationsScreen} />
  </LocationsStack.Navigator>
);

export default LocationsStackScreen;
