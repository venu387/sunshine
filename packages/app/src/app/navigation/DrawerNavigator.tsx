import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  HomeStackNavigator,
  MyLocationsStackNavigator,
  SettingsStackNavigator,
  AccountStackNavigator,
} from './StackNavigator';
import BottomTabNavigator from './TabNavigator';
import {DrawerContent} from '../screens/DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="TabNavigator" component={BottomTabNavigator} />
      {/* <Drawer.Screen name="MyLocations" component={MyLocationsStackNavigator} />
      <Drawer.Screen name="Settings" component={SettingsStackNavigator} />
      <Drawer.Screen name="Account" component={AccountStackNavigator} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
