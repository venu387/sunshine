import React, {Component} from 'react';
import {StyleSheet, View, Modal, ActivityIndicator, Text} from 'react-native';
const Loader = (props: any) => {
  const {loading, ...attributes} = props;
  return (
    <View>
      {loading ? (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="black" />
        </View>
      ) : (
        <Text></Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: 'gray',
    opacity: 0.5,
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});
export {Loader};
