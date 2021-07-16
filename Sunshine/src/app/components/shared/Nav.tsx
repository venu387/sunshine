import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../HomeScreen';
import MyLocationsScreen from '../MyLocationsScreen';
import SettingsScreen from '../SettingsScreen';
import AccountScreen from '../AccountScreen';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Nav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'black',
        activeBackgroundColor: '#515151',
        style: {
          height: 80,
          elevation: 0,
          backgroundColor: 'transparent',
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
};

const styles = StyleSheet.create({});

export default Nav;
