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

const Stack = createStackNavigator();

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
const HomeStackNavigator = ({navigation}: any) => {
  return (
    <Stack.Navigator screenOptions={screenOptions(navigation)}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="7Day"
        component={SevenDay}
        options={{
          headerTitle: 'Back',
          headerBackTitle: 'Back',
        }}
      />
      <Stack.Screen name="12Hour" component={TwelveHour} />
    </Stack.Navigator>
  );
};

const MyLocationsStackNavigator = ({navigation}: any) => {
  return (
    <Stack.Navigator screenOptions={screenOptions(navigation)}>
      <Stack.Screen name="MyLocations" component={MyLocations} />
      <Stack.Screen name="AddLocation" component={AddLocation} />
    </Stack.Navigator>
  );
};

const SettingsStackNavigator = ({navigation}: any) => {
  return (
    <Stack.Navigator screenOptions={screenOptions(navigation)}>
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

const AccountStackNavigator = ({navigation}: any) => {
  return (
    <Stack.Navigator screenOptions={screenOptions(navigation)}>
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  );
};

export {
  HomeStackNavigator,
  MyLocationsStackNavigator,
  SettingsStackNavigator,
  AccountStackNavigator,
};
