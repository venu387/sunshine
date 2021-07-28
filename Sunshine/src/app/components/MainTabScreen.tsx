import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeStackScreen from './drawerComponents/HomeDrawer';
import LocationsStackScreen from './drawerComponents/LocationsDrawer';
import SettingsStackScreen from './drawerComponents/SettingsDrawer';
import AccountStackScreen from './drawerComponents/AccountDrawer';

const Tab = createMaterialBottomTabNavigator();

class MainTabScreen extends React.Component {
  render() {
    return (
      <Tab.Navigator initialRouteName="Home" activeColor="#fff">
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarColor: '#515151',
            tabBarIcon: ({color}: any) => (
              <Icon name="ios-home" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="MyLocations"
          component={LocationsStackScreen}
          options={{
            tabBarLabel: 'My Locations',
            tabBarColor: '#515151',
            tabBarIcon: ({color}: any) => (
              <Icon name="ios-location" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsStackScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarColor: '#515151',
            tabBarIcon: ({color}: any) => (
              <Icon name="ios-settings" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountStackScreen}
          options={{
            tabBarLabel: 'Account',
            tabBarColor: '#515151',
            tabBarIcon: ({color}: any) => (
              <Icon name="ios-person" color={color} size={25} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default MainTabScreen;
