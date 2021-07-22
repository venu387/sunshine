import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../HomeScreen';
import MyLocationsScreen from '../MyLocationsScreen';
import SettingsScreen from '../SettingsScreen';
import AccountScreen from '../AccountScreen';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default class Nav extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: 'rgba(255,255,255, 1)',
          inactiveTintColor: 'rgba(0,0,0, 1)',
          activeBackgroundColor: 'rgba(0,0,0, 0.9)',
          keyboardHidesTabBar: false,
          style: {
            height: 80,
            elevation: 0,
            backgroundColor: 'rgba(52,52,52,0.1)',
          },
          labelStyle: {
            fontSize: 16,
            marginTop: -10,
          },
          tabStyle: {
            borderRadius: 14,
            marginLeft: 2,
            marginRight: 2,
            paddingBottom: 15,
            height: 80,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => (
              <Icon
                name="ios-home"
                color={focused ? 'white' : 'black'}
                size={25}
              />
            ),
          }}></Tab.Screen>
        <Tab.Screen
          name="Locations"
          component={MyLocationsScreen}
          options={{
            tabBarLabel: 'Locations',
            tabBarIcon: ({focused}) => (
              <Icon
                name="ios-location"
                color={focused ? 'white' : 'black'}
                size={25}
              />
            ),
          }}></Tab.Screen>
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({focused}) => (
              <Icon
                name="ios-settings"
                color={focused ? 'white' : 'black'}
                size={25}
              />
            ),
          }}></Tab.Screen>
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({focused}) => (
              <Icon
                name="ios-person"
                color={focused ? 'white' : 'black'}
                size={25}
              />
            ),
          }}></Tab.Screen>
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({});
