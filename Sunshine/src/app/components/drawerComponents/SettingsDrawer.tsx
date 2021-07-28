import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsScreen from '../SettingsScreen';

const SettingsStack = createStackNavigator();

const SettingsStackScreen = ({navigation}: any) => (
  <SettingsStack.Navigator
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
    <SettingsStack.Screen name="Home" component={SettingsScreen} />
  </SettingsStack.Navigator>
);

export default SettingsStackScreen;
