import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {
  HomeStackNavigator,
  AccountStackNavigator,
  SettingsStackNavigator,
  MyLocationsStackNavigator,
} from './StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();

class BottomTabNavigator extends React.Component {
  render() {
    return (
      <Tab.Navigator initialRouteName="Home" {...this.props}>
        <Tab.Screen
          name="Home"
          component={HomeStackNavigator}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}: any) => (
              <Icon name="ios-home" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="My Locations"
          component={MyLocationsStackNavigator}
          options={{
            tabBarLabel: 'My Locations',
            tabBarIcon: ({color}: any) => (
              <Icon name="ios-location" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsStackNavigator}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({color}: any) => (
              <Icon name="ios-settings" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountStackNavigator}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({color}: any) => (
              <Icon name="ios-person" color={color} size={25} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default BottomTabNavigator;
