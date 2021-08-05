import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import AccountScreen from '../AccountScreen';

const AccountStack = createStackNavigator();

const AccountStackScreen = ({navigation}: any) => (
  <AccountStack.Navigator
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
    <AccountStack.Screen name="Account" component={AccountScreen} />
  </AccountStack.Navigator>
);

export default AccountStackScreen;
