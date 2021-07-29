import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import AccountStackScreen from './drawerComponents/AccountDrawer';
import HomeStackScreen from './drawerComponents/HomeDrawer';
import LocationsStackScreen from './drawerComponents/LocationsDrawer';
import SettingsStackScreen from './drawerComponents/SettingsDrawer';

const Tab = createMaterialBottomTabNavigator();

class MainTabScreen extends React.Component {
  render() {
    return (
      <Tab.Navigator initialRouteName="Home" {...this.props}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
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
