import React, {Component} from 'react';
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

export function DrawerContent(props: any) {
  const paperTheme = useTheme();

  const {signOut, signIn, toggleTheme, isUserLoggedIn} =
    React.useContext(AuthContext);

  const locations = [
    {id: 1, name: 'Location 1'},
    {id: 2, name: 'Location 2'},
    {id: 3, name: 'Location 3'},
    {id: 4, name: 'Location 4'},
  ];
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
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

          <Drawer.Section style={styles.drawerSection}>
            {locations.map(l => {
              return (
                <DrawerItem
                  label={l.name}
                  key={l.id}
                  onPress={() => {
                    props.navigation.navigate('Home', {name: l.name});
                  }}
                />
              );
            })}
          </Drawer.Section>
          <Drawer.Section title="Preferences">
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
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        {isUserLoggedIn() ? (
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="ios-exit" color={color} size={size} />
            )}
            label="Sign Out"
            onPress={() => {
              signOut();
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
  userInfoSection: {
    paddingLeft: 20,
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
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
