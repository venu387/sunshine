import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {Provider as PaperProvider} from 'react-native-paper';

import {AuthContext} from './Context';
import AsyncStorage from '@react-native-community/async-storage';
import {CustomDarkTheme, CustomDefaultTheme} from './ThemeProvider';
import DrawerNavigator from '../navigation/DrawerNavigator';

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const loginReducer = (prevState: any, action: any) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async function (foundUser: any) {
        // setUserToken('fgkj');
        // setIsLoading(false);
        const userToken = String(foundUser[0].userToken);
        const userName = foundUser[0].username;

        try {
          await AsyncStorage.setItem('userToken', userToken);
        } catch (e) {
          console.log(e);
        }
        await new Promise(f => setTimeout(f, 2000));
        // console.log('user token: ', userToken);
        dispatch({type: 'LOGIN', id: userName, token: userToken});
      },
      signOut: async () => {
        // setUserToken(null);
        // setIsLoading(false);
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          console.log(e);
        }
        await new Promise(f => setTimeout(f, 2000));
        dispatch({type: 'LOGOUT'});
      },
      signUp: () => {
        // setUserToken('fgkj');
        // setIsLoading(false);
      },
      toggleTheme: () => {
        setIsDarkTheme(isDarkTheme => !isDarkTheme);
      },
      isUserLoggedIn: async () => {
        try {
          const token = await AsyncStorage.getItem('userToken');
          if (token) return true;
          else return false;
        } catch (e) {
          console.log(e);
        }
        return false;
      },
      isDarkTheme: isDarkTheme,
    }),
    [],
  );

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 1000);
  }, []);

  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          <DrawerNavigator />
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};
export default App;
