import React, {Component, useEffect} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from './Context';

var currentUser: boolean = false;
const loadUser = async () => {
  const {isUserLoggedIn} = React.useContext(AuthContext);
  currentUser = await isUserLoggedIn();
};

export function DrawerContent(props: any) {
  const paperTheme = useTheme();

  const {signOut, signIn, toggleTheme, isUserLoggedIn} =
    React.useContext(AuthContext);

  const locations = [
    {id: 1, name: 'Toronto'},
    {id: 2, name: 'Scarborough'},
    {id: 3, name: 'London'},
    {id: 4, name: 'Bengaluru'},
    {id: 5, name: 'Toronto'},
    {id: 6, name: 'Scarborough'},
    {id: 7, name: 'London'},
    {id: 8, name: 'Bengaluru'},
  ];

  loadUser();

  return (
    <View style={{flex: 1}}>
      <View {...props} style={[styles.appTitle, styles.bottomBorder]}>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Avatar.Image
            source={require('../assets/images/logo.png')}
            size={45}
          />
          <View style={{marginLeft: 15, flexDirection: 'column'}}>
            <Title style={styles.title}>Sunshine</Title>
          </View>
        </View>
      </View>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <Drawer.Section style={styles.drawerSection}>
            {locations.map(l => {
              return (
                <TouchableRipple
                  key={l.id}
                  onPress={() => {
                    props.navigation.navigate('Home', {name: l.name});
                  }}>
                  <View style={[styles.preference, styles.city]}>
                    <Text>{l.name}</Text>
                  </View>
                </TouchableRipple>
              );
            })}
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section title="Preferences" style={styles.topBorder}>
        <TouchableRipple
          onPress={() => {
            toggleTheme();
          }}>
          <View style={styles.preference}>
            <Text>Dark Theme</Text>
            <View pointerEvents="none">
              <Switch value={paperTheme.dark} />
            </View>
          </View>
        </TouchableRipple>
      </Drawer.Section>
      <Drawer.Section style={styles.bottomDrawerSection}>
        {currentUser ? (
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="ios-exit" color={color} size={size} />
            )}
            label="Sign Out"
            onPress={async () => {
              signOut();
              props.navigation.navigate('Home');
              // const user = await isUserLoggedIn();
              // if (!user) props.navigation.navigate('Home');
              // else {
              //   Alert.alert('Error!');
              // }
            }}
          />
        ) : (
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="ios-enter" color={color} size={size} />
            )}
            label="Sign In"
            onPress={() => {
              props.navigation.navigate('Login');
            }}
          />
        )}
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  appTitle: {
    paddingLeft: 20,
    paddingBottom: 20,
  },
  bottomBorder: {
    borderBottomColor: '#f4f4f4',
    borderBottomWidth: 1,
  },
  topBorder: {
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  title: {
    fontSize: 26,
    marginTop: 8,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  city: {
    paddingVertical: 14,
  },
});
