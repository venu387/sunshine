import React from 'react';

export const AuthContext = React.createContext({
  signIn: async function (foundUser: any) {},
  signOut: async () => {},
  signUp: () => {},
  toggleTheme: () => {},
  isUserLoggedIn: () => {
    return false;
  },
  // AppContext props
  isDarkTheme: false,
});
