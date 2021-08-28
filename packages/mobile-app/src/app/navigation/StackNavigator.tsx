import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import Home from '../screens/home/Home';
import SevenDay from '../screens/home/7Day';
import TwelveHour from '../screens/home/12Hour';
import MyLocations from '../screens/myLocations/MyLocations';
import AddLocation from '../screens/myLocations/AddLocation';
import Settings from '../screens/settings/Settings';
import Account from '../screens/account/Account';
import Icon from 'react-native-vector-icons/Ionicons';
import {Alert, Button} from 'react-native';

const HomeStack = createStackNavigator();
const LocationsStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const AccountStack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const screenOptions = function (navigation: any): StackNavigationOptions {
  return {
    headerTransparent: true,
    headerTitleStyle: {
      display: 'none',
    },
    headerBackTitle: 'Back',
    headerLeft: () => (
      <Icon.Button
        name="ios-menu"
        size={32}
        style={{
          marginLeft: 15,
          marginTop: 5,
        }}
        color="#000"
        backgroundColor="transparent"
        onPress={() => navigation.openDrawer()}></Icon.Button>
    ),
  };
};
const HomeStackNavigator = (props: any) => {
  return (
    <HomeStack.Navigator screenOptions={screenOptions(props.navigation)}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen
        name="7Day"
        component={SevenDay}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-arrow-back"
              size={32}
              style={{
                marginLeft: 15,
                marginTop: 5,
              }}
              color="#000"
              backgroundColor="transparent"
              onPress={() => props.navigation.goBack()}></Icon.Button>
          ),
        }}
      />
      <HomeStack.Screen
        name="12Hour"
        component={TwelveHour}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-arrow-back"
              size={32}
              style={{
                marginLeft: 15,
                marginTop: 5,
              }}
              color="#000"
              backgroundColor="transparent"
              onPress={() => props.navigation.goBack()}></Icon.Button>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

const MyLocationsStackNavigator = (props: any) => {
  return (
    <LocationsStack.Navigator screenOptions={screenOptions(props.navigation)}>
      <LocationsStack.Screen name="MyLocations" component={MyLocations} />
      <LocationsStack.Screen
        name="AddLocation"
        component={AddLocation}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-arrow-back"
              size={32}
              style={{
                marginLeft: 15,
                marginTop: 5,
              }}
              color="#000"
              backgroundColor="transparent"
              onPress={() => props.navigation.goBack()}></Icon.Button>
          ),
        }}
      />
    </LocationsStack.Navigator>
  );
};

const SettingsStackNavigator = (props: any) => {
  return (
    <SettingsStack.Navigator screenOptions={screenOptions(props.navigation)}>
      <SettingsStack.Screen name="Settings" component={Settings} />
    </SettingsStack.Navigator>
  );
};

const AccountStackNavigator = (props: any) => {
  return (
    <AccountStack.Navigator screenOptions={screenOptions(props.navigation)}>
      <AccountStack.Screen name="Account" component={Account} />
    </AccountStack.Navigator>
  );
};

export {
  HomeStackNavigator,
  MyLocationsStackNavigator,
  SettingsStackNavigator,
  AccountStackNavigator,
};
