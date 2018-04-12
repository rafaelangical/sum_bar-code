import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from "expo";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Sum Code-Bar</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 20
  },
});
